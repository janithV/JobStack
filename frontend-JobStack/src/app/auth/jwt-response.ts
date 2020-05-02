export interface JwtResponse {
    user:{
        id:number;
        username: string;
        password:string;
        firstname: string;
        lastname: string;
        birthDate: string;
        gender: string;
        nameOfSchool: string;
        nameOfUni: string;
        degreeQual: string;
        skills: string;
        specialization: string;

        access_token: string;
        expires_in: number;
    }
}

