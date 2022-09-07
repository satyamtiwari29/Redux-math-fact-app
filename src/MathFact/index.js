import {useDispatch} from 'react-redux';
import {useEffect} from 'react'
import Action from '../store/action.js';
import FactText from "../FactText";
import "./style.css";

function MathFact(){
const dispatch=useDispatch();

useEffect(()=>{
dispatch({type:"fetch_fact_math_call_from_api"})
},[])

const onGetAnotherFact=()=>{
  console.log('action============+');
dispatch({type:"fetch_fact_math_call_from_api"})
}

  return(


<div className="Mathcontainerparent">
    <div className="Mathcontainerdiv">
    <h1>Fact in Mathematices</h1>
    <FactText/>
   <button onClick={onGetAnotherFact}>Click me</button>
    </div>
    </div>
  )
}
export default MathFact;