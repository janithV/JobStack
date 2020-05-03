export interface JwtResponse {
    user:{
        
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
        
        access_token: string;
        expires_in: number;
    }
}

