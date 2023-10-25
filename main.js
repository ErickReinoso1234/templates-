var Student = /** @class */ (function () {
    function Student(name, lastName, email, career, address, date, telephone) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.career = career;
        this.address = address;
        this.date = date;
        this.telephone = telephone;
    }
    Student.prototype.imprimir = function () {
        console.log("Name: ".concat(this.name, ", LastName: ").concat(this.lastName, ", Email: ").concat(this.email, ", Career: ").concat(this.career, ", Address: ").concat(this.address, ", Date: ").concat(this.date, ", Telephone: ").concat(this.telephone));
    };
    return Student;
}());
var student1 = new Student('Erick', 'Reinoso', 'eds.reinoso@yavirac.edu.ec', 'software development', 'Santa Rosa', 10 / 19 / 23, 984442814);
student1.imprimir();
