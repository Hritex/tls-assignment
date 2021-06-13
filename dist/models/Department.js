"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = __importDefault(require("./Employee"));
class Department extends Employee_1.default {
    constructor(name, email, pwd) {
        super(name, email, pwd, 'department');
    }
    getDepartment() {
        return `Hello, my name is ${this.name} and I work in ${this.work}.`;
    }
}
exports.default = Department;
//# sourceMappingURL=Department.js.map