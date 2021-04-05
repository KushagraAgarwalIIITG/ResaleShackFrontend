import React,{Fragment,useState} from 'react'
import {Link,withRouter} from 'react-router-dom'
import { isAutheticated, signout } from '../auth/helper';
import { getAdsByCategory, getCategories } from './helper/coreapicalls';

//history is given by the Link from the react-router-dom
const currentTab =(history,path)=>{
    if(history.location.pathname===path){
        return { color : "#2ecc72" };
    }
    else{
        return { color :"#FFFFFF"}
    }

} 




const CategoryBar=({history})=> {
    const [categories, setCategories] = useState('')

    const loadAllCategories = () => {
        getCategories().then(data => {
          
            setCategories(data);
          
        });
      };

    return (
        <div>
            <ul className="nav nav-tabs-bg-dark">
               <li className="nav-link text-success">Categories : </li>
               {loadAllCategories()}
               {categories &&
            categories.map((cate, index) => (
                <li className="nav-item">
                    {/* <Link key={index} value={cate._id} style={currentTab(history,{`/${cate._id}`}) className="nav-link" to={`/category/${cate._id}`}>
                       {cate.name}
                    </Link> */}
                    <a className = "nav-link text-white "href =  {`/category/${cate._id}`}>{cate.name}</a>
                </li>
              
            ))}
            </ul>
        </div>
    )
}

export default withRouter(CategoryBar);
