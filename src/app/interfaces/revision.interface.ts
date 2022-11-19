export interface data{
    
    articleType:string,
    attachFiles:{
      file1:string,
      file2:string,
      file3:string,
      file4:string,
    }
    reviewerName:string,
    reviewerJop:string,
    contact:string,
    additionalReviewPreferences:[{
      reviewerName:string,
      reviewerJop:string,
      contact:string
    }],
    comment:string,
    receiptnumber:number,
    receiptPhoto:string,
    manuScriptData:{
      title:string,
      Abstract:string,
      KeyWords:string,
      FundingInfo:string,
    }
    GeneralInformationText1:string,
    GeneralInformationText2:string,

    userId:string
    id?:number

}