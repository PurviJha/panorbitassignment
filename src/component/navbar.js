import React,{useState} from 'react'
import Avatar from '@material-ui/core/Avatar';
import {useLocation} from 'react-router-dom'
export default function Navbar(props) {
    const location=useLocation()
    console.log("locattion",location.pathname.split("/").pop())
    
    return (
        <div>
            <div style={{
                display: 'flex',
                flexDirection: "row",
                marginTop: "45px",
                //minHeight: "10%",  
            }}>
                 <h3>{ location.pathname.split("/").pop().toUpperCase()}
        </h3>
        <div style={{ display: 'flex',
                flexDirection: "row",marginLeft:'75%'}}>
                    <Avatar  alt={props.data.name} src={props.data.profilepicture } style={{height:"30px",width:"30px"}}  />
            <p>{props.data.name}</p>
        </div>
            </div>
        </div>
    )
}
