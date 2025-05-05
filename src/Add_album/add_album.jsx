import React from 'react'
import "./api_album.css";
import { useState} from "react";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
const add_album = ({albumdata,setalldata}) => {
const navigate=useNavigate()
    const addalbum=(e)=>
    {
      e.preventDefault()
      const userId=document.getElementById("todo_userId").value
      const userTitle=document.getElementById("todo_userName").value
      console.log(userId,"userID");
      console.log(userTitle,"userID1");
      //  fetch('https://jsonplaceholder.typicode.com/albums',{
      //         method:"POST",
      //         body: JSON.stringify({ userId:userId,id:40,title: userTitle}),
      //         headers: {
      //           'Content-type': 'application/json; charset=UTF-8',
      //       },
      //     })
      //     .then(response => response.json())
      //     .then(data => setaddbtn(...addbtn,data))
      //     .catch(error => console.log('Error:',error));   
      const obj = {
        userId:userId,
        id: Math.floor(Math.random() * 11),
        title: userTitle
    };
      setalldata([
        ...albumdata,
        obj
      ])
      navigate(-1)
      Swal.fire({
        title: 'Album List Added',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    }
  return (
    <div >
      <div className='Main-album'>
        <form className='Addalbum' onSubmit={addalbum}>
            <label htmlFor="">Enter User Id :</label>
            <input type="number" id="todo_userId" placeholder='Enter the Id Here' style={{display:"block"}}/>
            <label htmlFor="">Enter Album Title :</label>
            <input type="text" id='todo_userName' placeholder='Enter The Title Here' style={{display:"block"}}/>
            <button>Add To List</button>
        </form>
        </div>
    </div>
  )
}
export default add_album;