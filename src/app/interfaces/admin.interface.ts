export interface addCarsoul{
    title?:string,
    photourl?:string,
    id?:any
}

export interface addHomePost{
    describtion?:string,
    photourl?:any,
    id?:any
}

export interface addResearchAdmin{
    id?: string,
      researchGroupNames?: [
        {
          id?: string,
          researches?: {
            title?: string,
            pages?: string,
            summary?: string,
            basicWords?: string,
            researchers?: string[],
            researchfile?: string
          }
        }
      ]
}

export interface authoAapprovalFile{
  file:string,
  userId:string,
  id:string
}
