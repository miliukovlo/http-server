import { initialStudents } from './../Data/students';

class Students {
    constructor() {
        this.students = initialStudents;
    }

    async getStudents(req, res) {
        try {
            res.status(200).json(this.students);
        } catch (e) {
            res.status(500).json({ error: "Fail get students for dashboard by server" });
        }
    }

    async updateStudent(req, res) {
        try {
            const { id } = req.params;
            const { isHere } = req.body; 

            const student = this.students.find(student => student.id === id); 

            if (!student) {
                return res.status(404).json({ error: "Student not found" });
            }

            student.isHere = isHere;
            res.status(200).json(student); 
        } catch (e) {
            res.status(500).json({ error: "Fail update students for dashboard by server" });
        }
    }
}

module.exports = new Students();
