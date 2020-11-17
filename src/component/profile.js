import React from 'react'
import GoogleMapReact from 'google-map-react'
export default function Profile(props) {
    const data = window.userInfo
    console.log("data1234567890", data)
    const defaultProps = {
        center: {
            lat: -37.3159,
            lng: 81.1496
        },
        zoom: 11
    }
    return (
        <div>
            <hr />
            <div style={{ display: "flex" }}>

                <div style={{ width: " 40%", float: "left", }}>
                    <div style={{ textAlign: "center" }}>
                        <img src={data.profilepicture} alt={data.id}
                            style={{ width: "150px", height: "150px", borderRadius: "50%" }} />
                        <h3>{data.name}</h3>
                    </div>
                    <div style={{ marginLeft: "70px" }}>
                        <p ><span style={{ color: "#A0A0A0" }}>Username :</span>{data.username}</p>
                        <p ><span style={{ color: "#A0A0A0" }}>e-mail :</span>{data.email}</p>
                        <p ><span style={{ color: "#A0A0A0" }}>Phone :</span>{data.phone}</p>
                        <p ><span style={{ color: "#A0A0A0" }}>Website :</span>{data.website}</p>
                        <hr style={{ width: "70%", marginLeft: "-2px" }} />
                        <p style={{ marginLeft: "70px", color: "#A0A0A0" }}>Company</p>
                        <p ><span style={{ color: "#A0A0A0" }}>Name :</span>{data.company.name}</p>
                        <p ><span style={{ color: "#A0A0A0" }}>CatchPhrase :</span>{data.company.catchPhrase}</p>
                        <p ><span style={{ color: "#A0A0A0" }}>bs :</span>{data.company.bs}</p>

                    </div>
                </div>
                <div style={{
                    borderLeft: " 1px solid",
                    width: "1px",
                    height: "550px",
                    top: "12px"
                }}></div>
                <div style={{ width: " 40%", float: "right", marginLeft: "20px" }}>
                    <p style={{ color: "#A0A0A0" }}>Address:</p>
                    <div style={{ marginLeft: "70px" }}>
                        <p ><span style={{ color: "#A0A0A0" }}>Street :</span>{data.address.street}</p>
                        <p ><span style={{ color: "#A0A0A0" }}>Suite :</span>{data.address.suite}</p>
                        <p ><span style={{ color: "#A0A0A0" }}>City :</span>{data.address.city}</p>
                        <p ><span style={{ color: "#A0A0A0" }}>Zipcode :</span>{data.address.zipcode}</p>
                    </div>
                    <div style={{ height: '300px', width: '500px', borderRadius: "20px" }}>
                        <GoogleMapReact
                            //bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                        >
                        </GoogleMapReact>
                        <div style={{ marginLeft: "63%" }}>
                            <p ><span style={{ color: "#A0A0A0" }}>lat :</span>{data.address.geo.lat}{"  "}
                                <span style={{ color: "#A0A0A0" }}>lng:</span>{data.address.geo.lng} </p>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

