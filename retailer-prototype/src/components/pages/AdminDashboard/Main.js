import React from 'react'
import routes from '../../../routes';

import "../AdminDashboard/Main.css";


const Main=()=>{
    return(
        <main>
            <div className="main__cards">
                <div className="card">
                 <div className="sidebar__link">
                    <div className="card_inner">
                     <i className="fa  fa-list fa-5px"></i>
                        <a href={routes.Report}>View Reports</a>
                        <span className="font-bold text-title">  578</span>

                    </div>
                 </div>
                    
                </div>
                <div className="cardd">
                 <i className="fa  fa-list fa-5px"></i>
                 <a href={routes.UpdateRequest}>Update Requests</a>
                    
                </div>
            </div>
        </main>
    )

}

export default Main;