const initialStudents = require('../Data/students');

class Students {
    async getStudents(req, res) {
        try {
            const students = initialStudents;
            res.status(200).json({ students: students });
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: "Failed to get students for dashboard by server" });
        }
    }

    async updateStudent(req, res) {
        try {
            const { id } = req.params;
            const studentId = parseInt(id, 10);
            console.log(studentId);
    
            const studentIndex = initialStudents.findIndex(student => student.id === studentId);
    
            if (studentIndex === -1) {
                return res.status(404).json({ error: "Student not found" });
            }
            initialStudents[studentIndex].isHere = !initialStudents[studentIndex].isHere;
            res.status(200).json(initialStudents[studentIndex]);
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: "Failed to update student for dashboard by server" });
        }
    }
    
}

module.exports = new Students();
