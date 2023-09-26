class Student {
	// Define the properties here
	public studentName: string;
	public studentAge: number;
	public studentGrade: number;

	// Define the constructor here
	constructor(name: string, age: number, grade: number) {
		this.studentName = name;
		this.studentAge = age;
		this.studentGrade = grade;
	}

	// Define the displayInfo method here
	displayInfo() {
		console.log(
			`Their name is ${this.studentName}, they are ${this.studentAge} years old, and they have a grade of ${this.studentGrade}.`
		);
	}

	// Define the isPassing method here
	isPassing(): boolean {
		if (this.studentGrade > 75) {
			console.log("They are passing!");
			return true;
		} else {
			console.log("Still need to do some more work.");
			return false;
		}
	}
}

// Instantiate a new student object and call the methods to test your class

const billy = new Student("Billy", 19, 55);

billy.displayInfo();
billy.isPassing();
