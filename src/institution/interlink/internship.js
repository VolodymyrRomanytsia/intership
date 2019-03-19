class Internship {
    constructor(name) {
        this.name = name;
        this.intershipStudents = new Array() 
    }

    setStudents(students) {
        const universityAveredge = students.reduce((a, c) => a + c.knowledge, 0) / students.length;
        this.intershipStudents = students.filter(student => student.knowledge > universityAveredge);
    }

    getStudents() {
        return this.intershipStudents;
    }
}

export default Internship;