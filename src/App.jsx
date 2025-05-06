import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./Main-page/navbar.jsx";
import Album from "./Add_album/add_album.jsx";
import Api from "./Api_call/api.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from './updatealbum/update.jsx';
function App() {
  const [album, setablum] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => setablum(data))
      .catch(error => console.error('Error:', error));
  }, [])
  console.log(album);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Api alldata={album} removedata={setablum} />} />
            <Route path="updatealbum/:id/:userId/:title" element={<Update update={album} editdata={setablum}/>}  />
            <Route path='addalbum' element={<Album albumdata={album} setalldata={setablum} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
