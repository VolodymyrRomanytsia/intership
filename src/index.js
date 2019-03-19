import University from './institution/university';
import Internship from './institution/interlink/internship';
import Student from './person/student';

class Application {
    static  main() {
        const university = new University("CH.U.I.");
        university.addStudent(new Student("Andrew Kostenko", 34));
        university.addStudent(new Student("Julia Veselkina", 78));
        university.addStudent(new Student("Maria Perechrest", 56));
        university.addStudent(new Student("Volodymyr Romanytsia", 89));
        console.log("List of university's students:");
        console.table(university.getStudents());

        const internship = new Internship("Interlink");
        internship.setStudents(university.getStudents());
        console.log("List of internship's students:");
        console.table(internship.getStudents());
    }
}

Application.main()