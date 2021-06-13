"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDept = exports.deleteUser = exports.updateDept = exports.updateUser = exports.createDept = exports.createUser = exports.getDeptbyId = exports.getUserbyId = exports.getDept = exports.getUsers = void 0;
const database_1 = require("../database");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query('SELECT * FROM employees');
        return res.status(200).json(response.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('Server error');
    }
});
exports.getUsers = getUsers;
const getDept = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query('SELECT * FROM department');
        return res.status(200).json(response.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('Server error');
    }
});
exports.getDept = getDept;
const getUserbyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const response = yield database_1.pool.query('SELECT * FROM employees WHERE id = $1', [id]);
    return res.json(response.rows);
});
exports.getUserbyId = getUserbyId;
const getDeptbyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const response = yield database_1.pool.query('SELECT * FROM department WHERE id = $1', [id]);
    return res.json(response.rows);
});
exports.getDeptbyId = getDeptbyId;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    const response = yield database_1.pool.query('INSERT INTO employees (name, email) VALUES ($1, $2)', [name, email]);
    return res.json({
        message: 'Employee created Successfully',
        body: {
            employee: {
                name,
                email
            }
        }
    });
});
exports.createUser = createUser;
const createDept = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { work } = req.body;
    const response = yield database_1.pool.query('INSERT INTO department (role) VALUES ($1)', [work]);
    return res.json({
        message: 'Department created Successfully',
        body: {
            department: {
                work
            }
        }
    });
});
exports.createDept = createDept;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;
    const response = yield database_1.pool.query('UPDATE employees SET name $1, email = $2 WHERE id = $3', [name, email, id]);
    return res.json(`Employee ${id} updates Successfully`);
});
exports.updateUser = updateUser;
const updateDept = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { work } = req.body;
    const response = yield database_1.pool.query('UPDATE department SET work $1 WHERE id = $2', [work, id]);
    return res.json(`Department ${id} updated Successfully`);
});
exports.updateDept = updateDept;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const response = yield database_1.pool.query('DELETE FROM employees WHERE id = $1', [id]);
    return res.json(`Employee ${id} deleted Successfully`);
});
exports.deleteUser = deleteUser;
const deleteDept = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const response = yield database_1.pool.query('DELETE FROM department WHERE id = $1', [id]);
    return res.json(`Department ${id} deleted Successfully`);
});
exports.deleteDept = deleteDept;
//# sourceMappingURL=index.controllers.js.map