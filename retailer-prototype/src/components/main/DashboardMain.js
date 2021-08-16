import "./Main.css";


const Main=()=>
{
    return
    (
        <main>
            <div className = "main__container">
                <div className = "main__title">

                    <div className = "main__greeting">
                        <h1>BMW Bookins</h1>
                        <p>Welcome to the clientside Dashboard</p>
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

                        <p className="text-primary-p">Update Requests</p>
                    </div>
                </div>

        /* charts display 
        <div className = "charts__left">
            <div className = "charts__left__title">
                <div>
                    <h1>New Bookings made today</h1>
                </div>

                <div>
                    <i className = "fa_fa-metric"></i>
                </div>
                <Chart />
            </div>

            <div className = "charts__right">

            </div>

        </div>
        */
        </main>
    )
}

export default Main;