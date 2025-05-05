import Button from 'react-bootstrap/Button';
import React from 'react'
import "./update.css";
import {useParams,useNavigate} from 'react-router-dom';
const Update = ({update,editdata}) => {
    const {id,userId,title}=useParams();
    const navigate=useNavigate();
const updatedItem=(e)=>{
  e.preventDefault();
  const existingData = update.find(item =>item.id==id);
  console.log(existingData,"existingData................");
  const Title=document.getElementById("changetitle").value
  console.log(Title,"Title");
  const Id=document.getElementById("changeid").value
  console.log(Id,"UserId");
  const updatedData = {
    ...existingData,
    id: Id,
    title: Title
  };
  console.log(updatedData,"updatedData.........");
  const updatedArray=update.map(item =>
    item.id==id?updatedData: item
  );
  console.log(updatedArray,"updatedArray...........");
  editdata(updatedArray);
  navigate(-1)
}
  return (
    <div>
      <div className='update-album' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <form action="" className='updateform' onSubmit={updatedItem}>
        <p>Title:{title}</p>
        <label htmlFor="">Enter New Title:</label>
        <input type="text" placeholder="Change Title" id='changetitle'/>
        <p>User ID:{id}</p>
        <label htmlFor="">Enter The UserId:</label>
        <input type="number" placeholder='Change id' id='changeid' />
        <button onClick={updatedItem}>Save</button>
        </form>
        </div>
    </div>
  )
}

export default Update;