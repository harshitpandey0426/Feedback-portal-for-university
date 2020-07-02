import React from 'react';
import { Link } from 'react-router-dom';
// whenever user click on the add button send him to /surveys/new --- for this we use link inplace of anchor tag

// fixed action btn and other class name we got from materialised css it inserts button with icon search for it on that site
const Dashboard = () => {

    return (
        <div>
            Dashboard
            <div className = "fixed-action-btn">
                <Link to="/surveys/new" className = "btn-floating btn-large red">
                   <i className = "material-icons">
                       add
                    </i> 
                </Link>
            </div>

        </div>
    );
};

export default Dashboard;