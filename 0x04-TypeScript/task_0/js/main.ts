interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const firstStudent: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 22,
    location: 'New York'
}
const secondStudent: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 25,
    location: 'California'
}
const studentsList: Array<Student> = [firstStudent, secondStudent];
const renderTable: Function = (studentsList: Student[]): void => {
    const table = document.createElement('table');
    table.innerHTML = `
        <tr>
            <th>First Name</th>
            <th>Location</th>
        </tr>
    `;

    studentsList.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.firstName}</td>
            <td>${student.location}</td>
        `;

        table.appendChild(row);
    });

    document.body.appendChild(table);
}
renderTable(studentsList);
