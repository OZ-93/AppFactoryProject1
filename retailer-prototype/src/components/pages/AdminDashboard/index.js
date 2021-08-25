import React from 'react'
import { Switch } from 'react-router'
import Main from './Main'
import RouteWithProps from '../../../Shared/routes/RouteWithProps'
import routes from '../../../routes'
import Reports from '../Reports'
import Updateprofile from '../Updateprofile'


const AdminDashboard = ()=>{

    return(

        <Switch>
            <RouteWithProps exact path={routes.Main} component={Main}/>
            <RouteWithProps exact path={routes.Report} component={Reports}/>
            <RouteWithProps exact path={routes.AdminUpdate} component={Updateprofile}/>
        </Switch>

    )

}

export default AdminDashboard;