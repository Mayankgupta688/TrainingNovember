class Employee {
    constructor(userName, userAge, userDesignation) {
        this.name = userName;
        this.age = userAge;
        this.designation = userDesignation;
    }

    getDetails() {
        console.log(this.name)
        console.log(this.age)
        console.log(this.designation)
    }
}

var employeeOne = new Employee("Mayank", 33, "VP");

employeeOne.getDetails()

// TypeScript
