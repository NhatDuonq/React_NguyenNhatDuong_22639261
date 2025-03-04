//import "./BaiTap1.css";
import React from 'react'
import { useState } from 'react'


    function BaiTap1() {

     var [a, setA]= useState(0);
     var [b, setB]= useState(0);
     var [result, setResult] = useState(0)
     var [operator, setOperator] = useState("")
   
     function handleChangeA(e){
       setA(e.target.value)
     }
     function handleChangeB(e){
       setB(e.target.value)
     }
     function handleClick(){
      
      if(operator == '+')
       setResult(parseInt(a) + parseInt(b))
     else if(operator == '-')
       setResult(parseInt(a) - parseInt(b))
     else if(operator == '*')
        setResult(parseInt(a) * parseInt(b))
     else if(operator == '/')
        setResult(parseInt(a) / parseInt(b))
   
     }
     function handleRadioChange(e){
       setOperator(e.target.value)
     }
   
     return (
       <>

       <input placeholder='Input a' type="text" onChange={handleChangeA}/>
       <br />
       <input placeholder='Input b' type="text" onChange={handleChangeB}/>
       <br />
       <input value='+' onChange={handleRadioChange} type="radio" name="group" id="" /><span>+</span>
       <input value='-' onChange={handleRadioChange} type="radio" name="group" id="" /><span>-</span>
       <input value='*' onChange={handleRadioChange} type="radio" name="group" id="" /><span>*</span>
       <input value='/' onChange={handleRadioChange} type="radio" name="group" id="" /><span>/</span>
       <br />
       <button onClick={handleClick}>Click</button>
       <br />
       <span>The result is: {result}</span>
       </>
     )
}

export default BaiTap1