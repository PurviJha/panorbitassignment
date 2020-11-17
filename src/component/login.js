import React, { useEffect, useState } from 'react'
import { Card } from '@material-ui/core';
import axios from 'axios'
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from "react-router-dom";

export default function Login() {
    let history = useHistory();
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://panorbit.in/api/users.json')
            .then(response => {
                // handle success
                console.log(response.data.users);
                setData(response.data.users)
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
    }, [])
    const onClickCards = (data) => {
        console.log("called")
        history.push({pathname:'./lay/profile'});
        window.userInfo = data
    }
    return (
        <div styl={{
            overflow: 'auto',
        }}>
            <div className="container svg body" style={{ marginTop: "15px" }}>
                <svg viewBox="0 0 500 500"
                    preserveAspectRatio="xMinYMin meet">
                    <path d="M0, 100 C150, 200 350, 
              0 500, 100 L500, 00 L0, 0 Z"
                        style={{ stroke: "none", fill: "e1d3f4" }}>
                    </path>
                </svg>
            </div>

            <div className="container svg body" >
                <svg viewBox="0 0 500 500"
                    preserveAspectRatio="xMinYMin meet">
                    <path d="M0, 100 C150, 200 350, 
              0 500, 100 L500, 00 L0, 0 Z"
                        style={{ stroke: "none", fill: "5a3ec8" }}>
                    </path>
                </svg>
            </div>

            <Card
                style={{
                    overflow: 'auto',
                    borderRadius: "30px",
                    maxWidth: "35%",
                    maxHeight: "450px",
                    margin: "auto",
                    marginTop: "10%",


                }}>
                <div style={{
                    textAlign: "center",
                    height: "50px"
                }}>
                    <p >Select an account</p>
                </div>
                <div>
                    {data.map((n, i) => {
                        return (
                            <div onClick={()=>onClickCards(n)}>
                                <ul key={i}>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: "row", padding: "5px"
                                    }}>
                                        <Avatar alt={n.name} src={n.profilepicture} />
                                        {n.name}
                                    </div>
                                </ul>
                                <hr style={{ width: "80%",borderTop:" 0px" }}></hr>
                            </div>
                        )
                    })}
                </div>
            </Card>
        </div>
    )
}
