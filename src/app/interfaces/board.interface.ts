export interface board{
    title?:string,
    text?:string,
}
export interface reviewersGroup{
    groupName?:string,
    groupNameArray?:reviewers[],
}
export interface reviewers{
    name?:string,
    job?:string,
    generalSpecialty?:string,
    Specialty?:string,
}