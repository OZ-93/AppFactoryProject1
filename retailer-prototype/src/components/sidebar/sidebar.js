import "./Sidebar.css";
import logo from "../../Assets/download.jpg";


const Sidebar=({sidebarOpen, closeSidebar})=>{
    return(
        <div className = {sidebarOpen ? "sidebar-responsive": ""} id="sidebar">
            <div className = "sidebar__title">
                <div className = "sidebar__img">
                    <img src = {logo} alt = "download"/>
                    <h1>Administrator</h1>
                </div>

                <i 
                className = "fa fa-times" 
                id = "sidebarIcon" 
                onClick = {()=> closeSidebar()}
                ></i>
        </div>


                <div className = "sidebar__menu">
                    <div className = "sidebar__link active_menu_link">
                        <i className = "fa fa-home"></i>
                        <a href = "#">Dashboard</a>
                    </div>

                    <div className = "sidebar__link">
                        <a href = "#">Schedule New Booking</a>
                    </div>

                    <div className = "sidebar__link">
                        <i className = "fa fa-files-o"></i>
                        <a href = "#">Update Booking</a>
                    </div>

                    <div className = "sidebar__link">
                        <i className = "fa fa-archive"></i>
                        <a href = "#">View Logged Bookings</a>
                    </div>

                    <h2>LEAVE</h2>

                    <div className = "sidebar__logout">
                        <i className = "fa fa-power-off"></i>
                        <a href = "#">Logout</a>
                    </div>
                </div>
        </div>
    )
}

export default Sidebar; 