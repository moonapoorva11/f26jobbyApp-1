import Header from '../header';
import DisplayAllJobs from '../displayAllJobs';
import FilterSection from '../filterSection';
import './index.css'
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';


const Jobs = ()=> {

    const [allValues, setValues] = useState({

        jobsArr : [],
        emptypeList : [],
        minPakage : "",
        userinput : ""

    });

    const token = Cookies.get("jwtToken");

    useEffect(()=>{

        const onFetchUserData = async()=>{

            const {emptypeList,minPakage,userinput} = allValues;


            const api = `https://apis.ccbp.in/jobs?employment_type=${emptypeList}&minimum_package=${minPakage}&search=${userinput}`;

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


    },[allValues.userinput,allValues.emptypeList])


    const onChangeSearchIn = (e)=>{

        if (e.key === "Enter"){

            setValues({...allValues,userinput : e.target.value});

        }

    }


    const onChangeEmpType = (value)=>{

        setValues({...allValues, emptypeList : value});
    }


    return (
        <div>
                <Header/>

                <div className='all-jobs-filter-cont'>

                        <div className='filter-cont'>
                            <FilterSection changeEmpType = {onChangeEmpType}/>
                        </div>
                        <div className='all-jobs-cont'>
                            <input onKeyUp={onChangeSearchIn} type="search" className='form-control w-75 mb-3'/>
                                <ul>
                                    {
                                        allValues.jobsArr.map(each => <DisplayAllJobs key = {each.id} jobsItem = {each}/>)
                                    }
                                </ul>
                        </div>

                </div>



        </div>

    )
}




export default Jobs;