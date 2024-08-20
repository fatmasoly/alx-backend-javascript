const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;
const dbName = process.argv[2];

const parseStudentsByField = (dataList) => {
  const labelsList = dataList[0].split(',');
  const fieldIdx = labelsList.indexOf('field');
  const firstNameIdx = labelsList.indexOf('firstname');

  const studentsByField = {};
  let studentsCount = 0;

  for (let i = 1; i < dataList.length; i += 1) {
    // eslint-disable-next-line no-continue
    if (dataList[i] === '') continue;
    studentsCount += 1;
    const studentList = dataList[i].split(',');
    const fieldName = studentList[fieldIdx];
    if (!studentsByField[fieldName]) studentsByField[fieldName] = [];
    studentsByField[fieldName].push(studentList[firstNameIdx]);
  }

  return { studentsByField, studentsCount };
};

const printStudentsWithField = (studentsByField) => {
  let studentsStr = '';
  const keys = Object.keys(studentsByField);
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    const firstNamesList = studentsByField[key];
    const studentsNumber = firstNamesList.length;
    const firstNamesStr = firstNamesList.join(', ');
    studentsStr += `Number of students in ${key}: ${studentsNumber}. List: ${firstNamesStr}`;
    if (i < keys.length - 1) studentsStr += '\n';
  }

  return studentsStr;
};

const countStudents = (path) =>
  new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const dataList = data.split('\n');
      const studentsData = parseStudentsByField(dataList);
      const { studentsByField } = studentsData;
      const { studentsCount } = studentsData;

      let studentStr = `Number of students: ${studentsCount}\n`;
      studentStr += printStudentsWithField(studentsByField);
      resolve(studentStr);
    });
  });

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(dbName)
    .then((data) => {
      const responseText = `This is the list of our students\n${data}`;
      res.send(responseText);
    })
    .catch((error) => {
      const responseText = `This is the list of our students\n${error.message}`;
      res.send(responseText);
    });
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

module.exports = app;
