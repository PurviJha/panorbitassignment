import React from 'react'
import Avatar from '@material-ui/core/Avatar';

export default function Navbar(props) {
    return (
        <div>
            <div style={{
                display: 'flex',
                flexDirection: "row",
                marginTop: "45px",
                //minHeight: "10%",  
            }}>
                 <h3>{ props.brand}
        </h3>
        <div style={{ display: 'flex',
                flexDirection: "row",marginLeft:'75%'}}>
        <Avatar alt={props.data.name} src={props.data.profilepicture } style={{height:"30px",width:"30px"}}  />
            <p>{props.data.name}</p>
        </div>
            
            </div>
            <hr />
        </div>
    )
}
