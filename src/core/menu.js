import React,{Fragment} from 'react'
import {Link,withRouter} from 'react-router-dom'
import { isAutheticated, signout } from '../auth/helper';

//history is given by the Link from the react-router-dom
const currentTab =(history,path)=>{
    if(history.location.pathname===path){
        return { color : "#2ecc72" };
    }
    else{
        return { color :"#FFFFFF"}
    }

} 


function Menu({history}) {
    return (
        <div>
            <ul className="nav nav-tabs-bg-dark">
                <li className="nav-item">
                    <Link style={currentTab(history,"/")}className="nav-link" to="/">
                        Home
                    </Link>
                </li>
               {isAutheticated()&& ( <li className="nav-item">
                    <Link
                    style={currentTab(history, "/user/dashboard")}
                    className="nav-link"
                    to="/user/dashboard"
                    >
                    U. Dashboard
                    </Link>
                </li>)}
                {isAutheticated()&& isAutheticated().user?.role===1 &&(
                    <li className="nav-item">
                    <Link
                    style={currentTab(history, "/admin/dashboard")}
                    className="nav-link"
                    to="/admin/dashboard"
                    >
                    Admin Dashboard
                    </Link>
                </li>
                )}
               {!isAutheticated() && ( <Fragment>
                <li className="nav-item">
                    <Link style={currentTab(history,"/signup")}className="nav-link" to="/signup">
                       Signup
                    </Link>
                </li>
                <li className="nav-item">
                    <Link style={currentTab(history,"/signin")} className="nav-link" to="/signin">
                       Sell
                    </Link>
                </li>
                </Fragment>)}
               {isAutheticated() && (
                <li className="nav-item">
                    <span className="nav-link text-warning" onClick={()=>{
                        signout(()=>{
                            history.push("/");
                        })
                    }}>Signout</span>
                </li>
               )}
            </ul>
        </div>
    )
}

export default withRouter(Menu);
