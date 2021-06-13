import {Request, Response} from 'express';
import { QueryResult } from "pg";

import { pool } from "../database";

export const getUsers = async (req: Request ,res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query('SELECT * FROM employees')
        return res.status(200).json(response.rows);
    } catch (error) {
        console.log(error)
        return res.status(500).json('Server error');
    }
}

export const getDept = async (req: Request ,res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query('SELECT * FROM department')
        return res.status(200).json(response.rows);
    } catch (error) {
        console.log(error)
        return res.status(500).json('Server error');
    }
}

export const getUserbyId = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id)
    const response: QueryResult = await pool.query('SELECT * FROM employees WHERE id = $1', [id])
    return res.json(response.rows)
}

export const getDeptbyId = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id)
    const response: QueryResult = await pool.query('SELECT * FROM department WHERE id = $1', [id])
    return res.json(response.rows)
}

export const createUser = async (req: Request, res: Response): Promise<Response> => {
    const {name, email} = req.body
    const response: QueryResult = await pool.query('INSERT INTO employees (name, email) VALUES ($1, $2)', [name, email])
    return res.json({
        message: 'Employee created Successfully',
        body: {
            employee: {
                name,
                email
            } 
        }
    })
}

export const createDept = async (req: Request, res: Response): Promise<Response> => {
    const {work} = req.body
    const response: QueryResult = await pool.query('INSERT INTO department (role) VALUES ($1)', [work])
    return res.json({
        message: 'Department created Successfully',
        body: {
            department: {
                work
            } 
        }
    })
}

export const updateUser = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id)
    const {name, email} = req.body

    const response: QueryResult = await pool.query('UPDATE employees SET name $1, email = $2 WHERE id = $3', [name, email, id])
    return res.json(`Employee ${id} updates Successfully`)
}

export const updateDept = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id)
    const {work} = req.body

    const response: QueryResult = await pool.query('UPDATE department SET work $1 WHERE id = $2', [work, id])
    return res.json(`Department ${id} updated Successfully`)
}

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id)
    const response: QueryResult = await pool.query('DELETE FROM employees WHERE id = $1', [id])
    return res.json(`Employee ${id} deleted Successfully`)
}

export const deleteDept = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id)
    const response: QueryResult = await pool.query('DELETE FROM department WHERE id = $1', [id])
    return res.json(`Department ${id} deleted Successfully`)
}