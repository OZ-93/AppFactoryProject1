import React, { useEffect } from 'react';
import routes from '../../../routes';
import "./DashboardMain.css";
import axios from "axios";

const DashboardMain=()=>{

    useEffect( () =>{
        (
            async () =>{
                await axios.get(
                    "https://localhost:44365/api/Authenticate/GetUserById",
                     {withCredentials:true}
                  );
                  // set the state of the user
                 
                  
            }
        )();
    });

    return(
        <main>
            <div className = "main__container">
                <div className = "main__title">

                    <div className = "main__greeting">
                        <h1>Welcome To The Assessment Tooling Application </h1>
                        <h1>Schedule a Booking</h1>
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