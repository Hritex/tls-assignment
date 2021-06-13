"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(name, email, pwd, work) {
        this.pwd = pwd;
        this.name = name;
        this.email = email;
        this.work = work;
    }
    register() {
        this.ID = Math.round(Math.random() * 10000);
    }
    getJsonObject() {
        return {
            email: this.email,
            name: this.name,
            pwd: this.pwd,
            work: this.work,
            ID: this.ID
        };
    }
}
exports.default = Employee;
//# sourceMappingURL=Employee.js.map