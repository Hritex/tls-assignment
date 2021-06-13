"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const index_controllers_1 = require("../controllers/index.controllers");
router.get('/users', index_controllers_1.getUsers);
router.get('/users/:id', index_controllers_1.getUserbyId);
router.post('/users', index_controllers_1.createUser);
router.put('/users', index_controllers_1.updateUser);
router.delete('/users', index_controllers_1.deleteUser);
router.get('/department', index_controllers_1.getDept);
router.get('/department/:id', index_controllers_1.getDeptbyId);
router.post('/department', index_controllers_1.createDept);
router.put('/department', index_controllers_1.updateDept);
router.delete('/department', index_controllers_1.deleteDept);
exports.default = router;
//# sourceMappingURL=index.js.map