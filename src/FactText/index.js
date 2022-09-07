import {useSelector} from 'react-redux';


const FactText=()=>{
  const fact=useSelector((state)=>state.fact);

  return (
    <>
    <h1>'data'</h1>
  <div className="joke">
  {fact}
  </div>
  </>
  )
}
export default FactText;