import React,{useEffect,useState} from 'react'
import GoogleMapReact from 'google-map-react'

export default function Profile(props) {
    const data=props.location.state.data 
    console.log("props",props) 
        const defaultProps = {
        center: {
            lat: -37.3159,
            lng: 81.1496
        },
        zoom: 11
    }
    return (
        <div style={{ display: "flex" }}>
            <div style={{ width: " 40%", float: "left", textAlign: "center" }}>
                {console.log("data",data)}
                <img src={data.profilepicture} alt={data.id}
                    style={{ width: "150px", height: "150px", borderRadius: "50%" }} />
                <h3>{data.name}</h3>
                <p style={{ Color: "#A0A0A0" }}>Username : {data.name}</p>
                <p style={{ Color: "#A0A0A0" }}>e-mail : {data.email}</p>
                <p style={{ Color: "#A0A0A0" }}>phone : {data.phone}</p>
                <p style={{ Color: "#A0A0A0" }}>website : {data.website}</p>
                <hr style={{ width: "70%" }} />
                <p style={{ Color: "#A0A0A0" }}>Company</p>
                <p style={{ Color: "#A0A0A0" }}>Name : {data.company.name}</p>
                <p style={{ Color: "#A0A0A0" }}>CatchPhrase : {data.company.catchPhrase}</p>
                <p style={{ Color: "#A0A0A0" }}>bs : {data.company.bs}</p>
                <br /><br />
            </div>
            <div style={{
                borderLeft: " 1px solid",
                width: "1px",
                height: "550px",
                top: "12px"
            }}></div>
            <div style={{ width: " 40%", float: "right", marginLeft: "20px" }}>
                <p style={{ Color: "#A0A0A0" }}>Address :</p>
                <p style={{ Color: "#A0A0A0" }}>Street   : {data.address.street}</p>
                <p style={{ Color: "#A0A0A0" }}>Suite   : {data.address.suite}</p>
                <p style={{ Color: "#A0A0A0" }}>City   : {data.address.city}</p>
                <p style={{ Color: "#A0A0A0" }}>Zipcode   : {data.address.zipcode}</p>
                <div style={{ height: '300px', width: '500px', borderRadius: "20px" }}>
                    <GoogleMapReact
                        //bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                    </GoogleMapReact>
                    <p>lat:{data.address.geo.lat} lng:{data.address.geo.lng} </p>
                </div>

            </div>
        </div>
    )
}
