export type TmenuItem = {
  id: number;
  name: string;
  link: string;
};
 export type SinfoT={
  sname:string,
  title:string,
  uni:string,
  detail?:string,
 }
 
type answerT = {
  id:number,
  title:string
}

 export type SquestionsT={
  title:string,
  img?:string,
  answer:answerT[]

 }