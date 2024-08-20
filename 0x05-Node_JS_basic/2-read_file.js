const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const header = lines.shift();

    if (!header) {
      throw new Error('Cannot load the database');
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
  } catch (error) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
