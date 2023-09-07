import React from 'react'
import {useNavigate} from 'react-router-dom';





function Button() {
    let history = useNavigate();

  return (

    
    <div className="text-center " style={{ backgroundColor: '#eee' }}>
        <button 
        type="button" 
        className="btn btn-primary btn-lg d-inline mt-2"
         onClick={()=>{history("/addproduct")}}>
            Add Item
         </button>
    </div>
    

  )
}

export default Button