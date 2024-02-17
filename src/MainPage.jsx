import React, { useState } from 'react';
import Popup from 'reactjs-popup'
import logo from './Images/image1.png'
import plus from './Images/+.png'
import circle from './Images/Ellipse 24.png'
const MainPage = () => {
  const [data, setData] = useState("");
  const handleClick = ()=>{
    localStorage.setItem("data", data)
  }
  return (
    <>
      <div style={{ display: "flex", position: "absolute", width: "100%", height: "100vh", background: "#DAE5F5" }}>
        <img style={{
          position: "absolute",
          display: "flex",
          justifyContent: 'center',
          alignItems: "center",
          paddingTop: '150px',
          paddingLeft: "800px"
        }} src={logo} />
        <div>
          <h1 style={{
            display: 'flex', position: 'absolute', color: "#292929", left: '1050px', paddingTop: '470px'
          }}>Pocket Notes</h1>
          <h3 style={{ display: 'flex', position: 'absolute', color: "#292929", left: '900px', paddingTop: '520px' }}>Send and receive messages without keeping your phone online.
            <br />Use Pocket Notes on up to 4 linked devices and 1 mobile phone</h3>
        
        </div>
        <p style={{
          position: "absolute",
          width: "217px",
          height: "32px",
          top: "700px",
          left: "1100px",
          gap: "0.02em",
          textAlign: "left",
        }}>end to end encrypted</p>

      
      </div>
      <div className="left">
        <div style={{ display: "flex", justifyContent: "center", position: "absolute", height: "100vh", width: "30%", background: "#fff" }}>
          <h1>Pocket Notes</h1>
          <h3 style={{position:"absolute", top:"180px", left:"200px"}}>{localStorage.getItem("data")}</h3>
        </div>

        <Popup trigger={
          <button>
              <img style={{ display: "flex", justifyContent: "center", position: "absolute", paddingLeft: "380px", paddingTop: "650px" , height:"75px", width: "75px"}} src={circle} />
            <div>
              <img style={{ display: "flex", justifyContent: "center", position: "absolute", paddingLeft: "403px", paddingTop: "674px", height:"30px", width:"30px" }} src={plus} />
            </div>
          </button>
        }
          position="bottom right">
          <div style={{
            position: 'absolute', padding: "2rem", border: "2px solid #CCCCCC", width: "540px",
            height: "207px",
            top: "250px",
            left: "586px",
            background: "#fff"
          }}>
            <h1> Create New Group</h1>
            <h3>Group Name {"\t"}
              <input onChange={(e)=>setData(e.target.value)}/>
            </h3>
            <h3>
              Choose Colour
            </h3>
            <button style={{
              position: "absolute", width: "62px",
              height: "32px",
              top: "220px",
              left: "500px",
              background: "blue",
              color: '#fff',
              borderRadius: "10px"
            }} onClick={handleClick}>
              Create
            </button>
          </div>
        </Popup>

       </div>
       
    </>
  );
}

export default MainPage