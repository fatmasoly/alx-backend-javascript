const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        const header = lines.shift();

        if (!header) {
          reject(new Error('Cannot load the database'));
          return;
        }

        const studentsByField = {};

        lines.forEach((line) => {
          const [firstname, lastname, age, field] = line.split(',');

          if (field && firstname) {
            if (!studentsByField[field]) {
              studentsByField[field] = [];
            }
            studentsByField[field].push(firstname);
          }
        });

        const totalStudents = Object.values(studentsByField).reduce(
          (acc, students) => acc + students.length,
          0
        );
        console.log(`Number of students: ${totalStudents}`);

        for (const [field, students] of Object.entries(studentsByField)) {
          console.log(
            `Number of students in ${field}: ${
              students.length
            }. List: ${students.join(', ')}`
          );
        }

        resolve();
      }
    });
  });
}

module.exports = countStudents;
