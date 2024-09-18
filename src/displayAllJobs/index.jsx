import "./index.css";
import { FaStar } from "react-icons/fa";


/*
{
      "id": "bb95e51b-b1b2-4d97-bee4-1d5ec2b96751",
      "title": "Devops Engineer",
      "rating": 4,
      "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
      "location": "Delhi",
      "job_description": "We are looking for a DevOps Engineer with a minimum of 5 years of industry experience, preferably working in the financial IT community. The position in the team is focused on delivering exceptional services to both BU and Dev partners to minimize/avoid any production outages. The role will focus on production support.",
      "employment_type": "Internship",
      "package_per_annum": "10 LPA"
}

*/

const DisplayAllJobs = (props)=> {

      const {jobsItem} = props;

      const {id,title,rating,company_logo_url,location,job_description,employment_type,package_per_annum} = jobsItem;

      return(

            <li className="diplay-jobs-card">

                  <div className="logo-rating-cont">
                        <img src={company_logo_url} style={{width:"70px"}}/>
                        
                        <div className="title-rating-cont">
                              <h3>{title}</h3>
                              <FaStar style={{color:"gold",marginRight:"5px"}}/>
                              <span>{rating}</span>
                        </div>

                  </div>
                  

            </li>

      )
}




export default DisplayAllJobs;