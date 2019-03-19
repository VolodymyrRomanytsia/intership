class University {
    constructor(name) {
        this.name = name;
        this.students = new Array() 
    }

    getStudents() {
        return this.students;
    }

    addStudent(student) {
        this.students.push(student);
    }
}

export default University;