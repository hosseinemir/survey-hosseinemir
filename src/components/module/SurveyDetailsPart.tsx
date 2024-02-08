

export default function SurveyDetailsPart({name , data}:{name:string , data:string}) {
  return (
    <div >
                <p>{name}:</p>
                <p>{data}</p>
              </div>
  )
}
