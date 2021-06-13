import {Router} from 'express';
const router=Router();

import { getUsers, getUserbyId, createUser, updateUser, deleteUser, getDept, getDeptbyId, createDept, updateDept, deleteDept } from "../controllers/index.controllers";

router.get('/users', getUsers );
router.get('/users/:id', getUserbyId );
router.post('/users', createUser );
router.put('/users', updateUser );
router.delete('/users', deleteUser );

router.get('/department', getDept );
router.get('/department/:id', getDeptbyId );
router.post('/department', createDept );
router.put('/department', updateDept );
router.delete('/department', deleteDept );


export default router;
