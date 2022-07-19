export interface data{
    
    articleType:string,
    file1:string,
    file2:string,
    file3:string,
    file4:string,
    reviewerName:string,
    reviewerJop:string,
    contact:string,
    additionalReviewers:[{
      reviewerName:string,
      reviewerJop:string,
      contact:string
    }],
    comment:string,
    receiptnumber:string,
    receiptPhoto:string,
    title:string,
    Abstract:string,
    KeyWords:string,
    FundingInfo:string,
    GeneralInformationText1:string,
    GeneralInformationText2:string

}