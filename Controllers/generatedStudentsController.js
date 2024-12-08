const generatedStudents = require("../Data/generatedStudents");

class allStudents {
	async getAllStudents(req, res) {
		try {
			const students = generatedStudents;
			res.status(200).json(students);
		} catch (e) {
			res.status(500).json({ error: "Fail get students for users by server" });
		}
	}

	async getStudentsByPage(req, res) {
		const { page, limit } = req.params;

		const endIndex = page * limit;
		const startIndex = (page - 1) * limit;

		const students = generatedStudents.slice(startIndex, endIndex);
		res.status(200).json(students);
	}

	async getLimitStudents(req, res) {
		try {
			const { limit } = req.params;
			if (generatedStudents.length < limit) {
				const students = generatedStudents;
				res.status(200).json(students);
			}
			const students = generatedStudents.slice(0, limit);
			res.status(200).json(students);
		} catch (e) {
			res.status(500).json({ error: "Fail get students for users by server" });
		}
	}
	async getCurrentStudent(req, res) {
		try {
			const { id } = req.params;
			const student = generatedStudents.find(stud => stud._id === id);
			res.status(200).json({ student: student });
		} catch (e) {
			res
				.status(500)
				.json({ error: "Fail get student for users/:id by server" });
		}
	}
}

module.exports = new allStudents();
