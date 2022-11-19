export interface userprofileData{
    img?:string,
    username?:string,
    userId:string,
    id?:number
}

export interface profileSettings{
    text1:string,
    text2:string,
    text3:string,
    text4:string,
    text5:string,
    text6:string,
}

export interface userProfile{
    name:string,
    email: string,
    password: string,
    confirmPassword: string,
    phone: number,
    faculty: string,
    id?:number
}