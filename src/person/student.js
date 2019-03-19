import Knowledge from './consciousness/knowledge';

class Student {
    constructor(name, knowledge) {
        this.name = name;
        this.knowledge = knowledge;
     }
  
     setKnowledge(knowledge) {
        this.knowledge = new Knowledge(knowledge);
     }
}

export default Student;