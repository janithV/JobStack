export class Register{

    id:number;
    username: string;
    password:string;
    firstname: string;
    lastname: string;
    birthDate: string;
    gender: string;
    companyName: string;
    jobTitle: string;
    nameOfSchool: string;
    nameOfUni: string;
    degreeQual: string;
    skills: string;
    specialization: string;
    

}

export const DegreeQual = ['Software Engineering', 'Computer Science','Business Information Systems','Information Systems']
export const Gender = ['Male', 'Female','Other'];
export const Skills = ['Coding skills', 'Social skills','Web Development','Language skills', 'Program Development'];
export const Specialization =['Back-End Development', 'Front-End Development','Fullstack Development','Mobile Development', 'Web Development','UI/UX']