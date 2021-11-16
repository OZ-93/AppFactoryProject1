import React, { useEffect, useState } from 'react';
import routes from '../../../routes';
import "./DashboardMain.css";
import axios from "axios";
axios.defaults.withCredentials=true

const DashboardMain=()=>{

    
const [name,setName] = useState()
   

useEffect( () => 
{
    axios.get("http://localhost:51153/api/Authenticate/User").then((response) => {
      setName(response.data);
    });
  }, []);

  if (!name) return null;

/*{
        (
            async () =>{
               await axios.get(
                    "http://localhost:51153/api/Authenticate/User",{
                    headers: {   
                        'content-type': 'application/json',
                        'Set-Cookie': 'JWT'
                      }}
                     
                  ).then((response) => {
                        setName(response.data);
                  });
                  // set the state of the user
                 }
        )();
    });*/

    return(
        <main>
            <div className = "main__container">
                <div className = "main__title">

                    <div className = "main__greeting">
                        <h1>Welcome {name.FirstName} To The Assessment Tooling Application </h1>
                        <h1>Schedule a Booking</h1>
                    </div>
                    <div>
                    
                        </div>

                </div>
            </div>

            <div className="main__cards">
                <div className="card">
                    <i className="fa fa-user-o fa-2x text-lightblue"></i>
                    <div className="card_inner">
                        <p className="text-primary-p">Total Bookings</p>
                        <span className="font-bold text-title">578</span>
                    </div>
                </div>

                <div className="card">
                    <i className="fa fa-updates fa-2x text-green"></i>
                    <div className = "card_inner"></div>

                        <p className="text-primary-p" onClick={routes.Update}>Update Requests</p>
                    </div>
                </div>
        </main>
    )
}

export default DashboardMain;