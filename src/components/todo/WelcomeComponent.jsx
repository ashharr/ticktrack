import {useParams, Link } from "react-router-dom";

function WelcomeComponent(){

    const {username} = useParams();

    return(
        <div className="Welcome">
            <div>
                <h1>Welcome {username}!</h1>
            </div>
            Manage your todos – <Link to="/todos">Click here</Link>
        </div>
    )
}
export default WelcomeComponent