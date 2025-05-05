import { data } from 'autoprefixer';
import React from 'react'
import "./api.css"
import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
const api = ({alldata,removedata}) => {
    // const [album,setablum] = useState([])
  const remove=(id)=>{
    const rmv=alldata.filter((remove)=>remove.id!==id)
    removedata(rmv)
    console.log(id,"Removed the data................");
  }
  console.log(alldata,"alldata");
  return (
    <>
            <div className='main-card'>
            {alldata?.length>0?alldata.map((album,index)=>
            <div className='data-card' key={index}>
                <div className='title-div' style={{textAlign:"center"}}>
                   <p>{album.title}</p> 
                </div>
                <div className='btn-div' style={{display:"flex",justifyContent:"space-around" ,alignItems:"center"}}>
                <Link to={`/updatealbum/${album?.id}/${album?.userId}/${album?.title.split(" ").join("")}`} style={{backgroundColor:"gray" ,padding:"3px",color:"white",textDecoration:"none",width:"110px",textAlign:"center",borderRadius:"2px"}}>Update</Link>
                    <button className='rmvbtn' onClick={()=>remove(album.id)}>Delete</button>
                </div>
            </div>):"No Data Found"}
            </div>
    </>
  )
}
export default api