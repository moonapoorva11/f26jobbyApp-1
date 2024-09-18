import Header from '../header';
import DisplayAllJobs from '../displayAllJobs';
import FilterSection from '../filterSection';
import './index.css'
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';


const Jobs = ()=> {

    const [allValues, setValues] = useState({

        jobsArr : []

    });

    const token = Cookies.get("jwtToken");

    useEffect(()=>{

        const onFetchUserData = async()=>{

            const api = "https://apis.ccbp.in/jobs";

            const options = {
                method : "Get",
                headers : {
                    Authorization : `Bearer ${token}`
                }
            }

            try {

                const response = await fetch(api,options);
                const data = await response.json();

                if( response.ok === true){

                    setValues({...allValues, jobsArr : data.jobs});

                }

            } catch (error) {

                console.log(error);

            }


        }



        onFetchUserData();


    },[])


    return (
        <div>
                <Header/>

                <div className='all-jobs-filter-cont'>

                        <div className='filter-cont'>
                            <FilterSection/>
                        </div>

                        <ul className='all-jobs-cont'>
                            {
                                allValues.jobsArr.map(each => <DisplayAllJobs key = {each.id} jobsItem = {each}/>)
                            }
                        </ul>

                </div>



        </div>

    )
}




export default Jobs;