var Student = /** @class */ (function () {
    // Define the constructor here
    function Student(name, age, grade) {
        this.studentName = name;
        this.studentAge = age;
        this.studentGrade = grade;
    }
    // Define the displayInfo method here
    Student.prototype.displayInfo = function () {
        console.log("Their name is ".concat(this.studentName, ", they are ").concat(this.studentAge, " years old, and they have a grade of ").concat(this.studentGrade, "."));
    };
    // Define the isPassing method here
    Student.prototype.isPassing = function () {
        if (this.studentGrade > 75) {
            console.log("They are passing!");
            return true;
        }
        else {
            console.log("Still need to do some more work.");
            return false;
        }
    };
    return Student;
}());
// Instantiate a new student object and call the methods to test your class
var billy = new Student("Billy", 19, 55);
billy.displayInfo();
billy.isPassing();
