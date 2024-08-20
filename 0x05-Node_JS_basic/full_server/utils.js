import fs from 'fs';

const parseStudentsByField = (dataList) => {
  const labelsList = dataList[0].split(',');
  const fieldIdx = labelsList.indexOf('field');
  const firstNameIdx = labelsList.indexOf('firstname');

  const studentsByField = {};

  for (let i = 1; i < dataList.length; i += 1) {
    // eslint-disable-next-line no-continue
    if (dataList[i] === '') continue;

    const studentList = dataList[i].split(',');
    const fieldName = studentList[fieldIdx];
    if (!studentsByField[fieldName]) studentsByField[fieldName] = [];
    studentsByField[fieldName].push(studentList[firstNameIdx]);
  }

  return studentsByField;
};

const readDatabase = (path) =>
  new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const dataList = data.split('\n');
      const studentsByField = parseStudentsByField(dataList);

      resolve(studentsByField);
    });
  });

export default readDatabase;
