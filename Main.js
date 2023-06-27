

import React from 'react'

export default function Main(){
    const[Array , setArray] = React.useState([])
    
    const[string, setString] = React.useState("")
    
    const Render = Array.map((pre, index) => <p key={index}>{pre}
     <button onClick={() => Remove(index)}>remove</button></p>)
     
     
     function Remove(index){
         
       const Get = [...Array]  
       
      // Get.splice(index)
      
      Get.splice(index)
       
       setArray(Get)
         
     }
     
    
    function change(e){
        
       // console.log(e.target.value)
       
       setString(e.target.value)
        
    }
    
    function Add(){
        
      // console.log(string) 
      
      setArray(pre1 => {
      return    [...pre1, string]
          
          
      })
      
      setString("")
        
    }
    
    
    
    return(
        
      <div>
      
      <h1>TO-DO APP</h1>
      
      <input
      type="text"
      placeholder="write something"
      onChange={change}
       />
       
       <button onClick={Add}>Add</button>
       
      {Render}
      
      </div>  
        
        
        
        
    )
    
    
    
}








