    class Student {
        name: string;
        lastName: string;
        email: string;
        career: string;
        address: string;
        date: string;
        telephone: number;
    
        constructor(name: string, lastName: string, email: string, career: string, address: string, date: string, telephone: number) {
            this.name = name;
            this.lastName = lastName;
            this.email = email;
            this.career = career;
            this.address = address;
            this.date = date;
            this.telephone = telephone;
        }
    
        imprimir() {
            console.log(`Name: ${this.name}, LastName: ${this.lastName}, Email: ${this.email}, Career: ${this.career}, Address: ${this.address}, Date: ${this.date}, Telephone: ${this.telephone}`);
        }
    }
    
    let student1 = new Student('Erick', 'Reinoso', 'eds.reinoso@yavirac.edu.ec', 'software development', 'Santa Rosa', '10/25/24', 984442814);
    
    student1.imprimir();
    