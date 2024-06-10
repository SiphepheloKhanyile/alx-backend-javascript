interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

let firstStudent: Student = {
    firstName: "Siphephelo",
    lastName: "Khanyile",
    age: 24,
    location: "Newcastle"
}

let secondStudent: Student = {
    firstName: "Siphephelo",
    lastName: "Khanyile",
    age: 24,
    location: "Newcastle"
}

let studentsList: Array<Student> = [firstStudent, secondStudent]

let table = document.createElement('table');

studentsList.forEach(student => {
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});

document.body.appendChild(table);
