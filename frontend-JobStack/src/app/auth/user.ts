export interface User {
    
    username: string;
    password:string;
    firstname: string;
    lastname: string;
    birthDate: string;
    gender: string;
    nameOfSchool: string;
    nameOfUni: string;
    degreeQual: string;
    codingSkill: boolean;
    socialSkill: boolean;
    langSkill: boolean;
    webDev: boolean;
    programDev: boolean;
    backend: boolean;
    frontend: boolean;
    fullstack: boolean;
    web: boolean;
    mobile: boolean;
    uiux: boolean;
    
}

export const DegreeQual = ['Software Engineering', 'Computer Science','Business Information Systems','Information Systems']
export const Gender = ['Male', 'Female','Other'];
export const Specialization =['Back-End Development', 'Front-End Development','Fullstack Development','Mobile Development', 'Web Development','UI/UX']
