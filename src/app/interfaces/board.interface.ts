export interface board{
    title?:string,
    text?:string,
    id?:number
}
export interface reviewersGroup{
    groupName?:string,
    groupNameArray?:reviewers[],
    id?:number
}
export interface reviewers{
    name?:string,
    job?:string,
    generalSpecialty?:string,
    Specialty?:string,
    id?:number
}