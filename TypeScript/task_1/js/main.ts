
/// INTERFACE ///

interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;

	// Permet d'ajouter n'importe quelle propriété supplémentaire
	// dont la clé est une string, et la valeur peut être n'importe quoi
	[propName: string]: any;
	}

	const teacher3: Teacher = {
	firstName: 'John',
	fullTimeEmployee: false,
	lastName: 'Doe',
	location: 'London',
	contract: false,
};

console.log(teacher3);

/// INTERFACE ///

interface Directors extends Teacher {
	numberOfReports: number;
}

const director1: Directors = {
	firstName: 'Pierrot',
	lastName: 'Doe',
	location: 'Paris',
	fullTimeEmployee: true,
	numberOfReports: 17,
};

console.log(director1);

/// INTERFACE ///

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (
	firstName: string,
	lastName: string
): string => {
	return `${firstName.charAt(0)}. ${lastName}`;
};


console.log(printTeacher('John', 'Doe'));
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  public firstName: string;
  public lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

const student: StudentClass = new StudentClass({
  firstName: 'John',
  lastName: 'Doe',
});

console.log(student.displayName());
console.log(student.workOnHomework());
