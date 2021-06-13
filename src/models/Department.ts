import Employee from "./Employee";

class Department extends Employee {
    
    constructor()
    constructor(email: String)
    constructor(name: String, email: String)
    constructor(name: String, email: String, pwd: String)
    constructor(name?: String, email?: String, pwd?: String) {
        super(name!, email!, pwd!, 'department')
    }

    getDepartment(): Object{
        return `Hello, my name is ${this.name} and I work in ${this.work}.`;
    }
}

export default Department;