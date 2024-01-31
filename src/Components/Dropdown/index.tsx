import { list } from 'postcss'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
interface ddprops{
    heading:string;
    options:string[];
    

}

const Dropdown = ({options,heading}:ddprops) => {
  const [visibility,setvisibility]= useState(false)
  
  return ( 
    <div onMouseEnter={()=>{setvisibility(true)}} onMouseLeave={()=>{setvisibility(false)}} className='m-5 text-base bg-gray-500 w-20 text-center group cursor-pointer'>
      {/* <div className=''>{heading}</div>
      <div className='hidden group-hover:block'>
      <ul className=''>
    {options?.map((value, index)=><li  value={index} ><a className='cursor-pointer'>{value}</a></li>)}
    </ul>

    </div> */}
    <div className=''>{heading}</div>
      {visibility && (<div className=''>
      <ul className=''>
    {options?.map((value, index)=><li className='hover:bg-gray-700' value={index} ><a className='cursor-pointer'>{value}</a></li>)}
    </ul>

    </div>)}

    </div>
    
    
     
  )
}
  

export default Dropdown
