import React,{useEffect,useState} from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar'
import { Route, Switch } from "react-router-dom";
import routes from './routes'

export default function Layout(props) {
    const [data,setData]=useState([])
    useEffect(() => {
        setData( window.userInfo  ) 
    }, [])
    const getRoutes = routes => {
        return routes.map((prop, key) => {
          if (prop.layout === "/lay") {
            return (
              <Route
                path={prop.layout + prop.path}
                component={prop.component} 
                key={key}
              />
            );
          } else {
            return null;
          }
        });
      };
    return (
        <div style={{
            overflow: 'auto',
            maxHeight: "100vh",
        }}>

            <div style={{
                display: 'flex',

            }}> 
                <Sidebar />
                <div style={{
                    marginLeft: "45px",
                    minWidth: "75%",
                }}>
                    <Navbar data={data} brand={"profile"} />
                    <div style={{
                        overflow: 'auto',
                        maxHeight: "100vh",
                    }}>
                        <Switch>
                            {getRoutes(routes)}
                        </Switch>
                    </div>

                </div>
            </div>
        </div>
    )
}
