import React from "react";
import { Switch } from "react-router-dom";
import RouteWithProps from "../../../Shared/routes/RouteWithProps";
import routes from '../../../routes'
import DashboardMain from '../../pages/ClientDashboard/DashboardMain'
import ScheduleBooking from '../../pages/ScheduleBooking/ScheduleNew'
import Updateprofile from "../Updateprofile";

const ClientDashboard=()=>{

    

    return(
        <Switch>
            <RouteWithProps exact path={routes.dashboard} component={DashboardMain}/>
            <RouteWithProps exact path={routes.Schedule}  component={ScheduleBooking}/>
            
            <RouteWithProps exact path={routes.Update}   component={Updateprofile}/>
        </Switch>

    )
}

export default ClientDashboard;