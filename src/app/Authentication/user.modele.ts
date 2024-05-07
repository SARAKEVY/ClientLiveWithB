export interface User{
UserId:string,
  firstName:string,
   lastName: string,
    CreatedDate:Date
  email:string,
  telephon:string,
  isActive:boolean,

   statusId:string,
  Status: {},
   cellPlanId:string,
  cellPlan:{},
  stores:[],
  isConfirmSms:boolean,
  isConfirmEmail:boolean,
}
