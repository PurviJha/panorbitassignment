import React from 'react'
import routes from './routes'
import { useHistory } from "react-router-dom";

export default function Sidebar() {
    let history = useHistory();

    return (
        <div style={{
            backgroundColor: "#5a3ec8",
            height: "600px",
            width: "220px",
            marginLeft: "40px",
            marginTop: "50px",
            borderRadius: "15px",
            textAlign: "center",
            color:"white"
        }}>
            <div style={{
                justifyContent: "center", marginTop: "80%"
            }}>
               
               { routes.map((prop, key)=>{
                   return(
                       <div>
                    <h5 onClick={()=>history.push(prop.layout+prop.path)}>{prop.name}</h5>
                    <hr style={{ width: "70%" ,  borderTop:" 0px"}} />
                    </div>
                   )
               })}
            </div>

        </div>
    )
}
