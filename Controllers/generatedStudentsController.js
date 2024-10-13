import { generatedStudents } from './../Data/generatedStudents';

class allStudents {
    constructor() {
        this.students = generatedStudents
    }
    async getAllStudents(req,res) {
        try {
            const students = this.students
            res.status(200).json({students})
        } catch (e) {
            res.status(500).json({error: 'Fail get students for users by server'})
        }
    }
    async getAllStudents(req,res) {
        try {
            const {limit} = req.body
            const students = this.students.slice(0,limit)
            res.status(200).json({students})
        } catch (e) {
            res.status(500).json({error: 'Fail get students for users by server'})
        }
    }
    async getCurrentStudent(req,res) {
        try {
            const {id} = req.body
            const student = this.students.find(stud => stud._id === id)
            res.status(200).json({student})
        } catch (e) {
            res.status(500).json({error: 'Fail get student for users/:id by server'})
        }
    }
}

module.exports = new allStudents()