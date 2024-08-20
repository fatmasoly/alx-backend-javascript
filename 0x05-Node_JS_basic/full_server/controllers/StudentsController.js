import readDatabase from '../utils';
import { dbName } from '../server';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(dbName)
      .then((data) => {
        const responseText = ['This is the list of our students'];
        const sortedData = Object.fromEntries(
          Object.entries(data).sort((a, b) => a[0].localeCompare(b[0]))
        );

        for (const [key, value] of Object.entries(sortedData)) {
          responseText.push(
            `Number of students in ${key}: ${value.length}. List: ${value.join(
              ', '
            )}`
          );
        }

        response.statusCode = 200;
        response.send(responseText.join('\n'));
      })
      .catch((error) => {
        response.statusCode = 500;
        response.send(error.message);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const major = request.params.major;
    if (major !== 'CS' && major !== 'SWE') {
      response.statusCode = 500;
      response.send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(dbName)
      .then((data) => {
        const firstNames = data[major];
        response.statusCode = 200;
        response.send(`List: ${firstNames.join(', ')}`);
      })
      .catch((error) => {
        response.statusCode = 500;
        response.send(error.message);
      });
  }
}

export default StudentsController;
