import './App.css'
import {useState} from 'react'



export default function Calculator() {
   const [result, setResult] = useState("");
  
   const [calc, setCalc] = useState("");
  

   const mathOps = ['*', '+', '-', '/', '.'];

  
   const updateCalc = val => {
     if (mathOps.includes(val && calc === '') || mathOps.includes(val)&& mathOps.includes(calc.slice(-1))
      ){
       return;
      }
     setCalc(calc + val);

     if(mathOps.includes(val)){
       setResult(eval(calc + val).tostring())
     }


                                    
   };


 

   function getDigits() {
        const digits = []
        for (let i = 9; i >= 1; i--) {
            digits.push(
                <button onClick={() => updateCalc(i.toString())}
                    key={i}>
                    {i}
                </button>
            )
        }
        return digits
    }

  const Result = () => {
    setCalc(eval(calc).toString());
  }

  const clearLast = () => {
    if (calc == '') {
      return;
    }
    
      const val = calc.slice(0, -1);
    
      setCalc(val);
  }

  const clearAll = () => {
    if (calc == '') {
      return;
    }
    const val = calc.slice(0, "");
    
    setCalc(val);
  }

  
 
  return (
   <main>
    <div className='all'>
    <div className='calculator'>
          <div className='screen'>
            { calc || "0" }
          </div>
      
          <div className='operators'>
            <button onClick = {() => updateCalc('*')}>*</button>
            <button onClick = {clearLast} style ={{backgroundColor: '#913030'}}>C</button>
            <button onClick ={clearAll} style= {{backgroundColor: '#822b2b'}}>AC</button>
            <button onClick = { () => updateCalc('+') }>+</button>
            <button onClick = { () => updateCalc('-') }>-</button>
            <button onClick = { () => updateCalc('/') }>/</button>

            
          </div>
      
          <div className='digits'>
            {getDigits()}
            <button onClick = { () => updateCalc('0')}>0</button>
            <button onClick = { () => updateCalc('.')}>.</button>
            <button onClick = {Result} style= {{backgroundColor:'#944747'}}>=</button>
          </div>
        </div>
      </div>
      </main>
    )
  }