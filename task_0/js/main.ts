// INTERFACE ///

interface Student {
	firstName: string;
	lastName: string
	age: number;
	location: string;
}

const student1: Student = {
	firstName: "Robert",
	lastName: "Tatin",
	age: 56,
	location: "Laval",
};

const student2: Student = {
	firstName: "John",
	lastName: "Wick",
	age: 23;
	location: "Rennes";
};

const studentsList: Student[] = [student1, student2];

// Création du tableau HTML
const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLTableSectionElement = document.createElement('tbody');

// Ajout des lignes
studentsList.forEach((student: Student): void => {
  const row: HTMLTableRowElement = document.createElement('tr');

  const firstNameCell: HTMLTableCellElement = document.createElement('td');
  firstNameCell.textContent = student.firstName;

  const locationCell: HTMLTableCellElement = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
