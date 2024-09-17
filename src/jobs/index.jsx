import Header from '../header';
import DisplayAllJobs from '../displayAllJobs';
import FilterSection from '../filterSection';
import './index.css'


const Jobs = ()=> {


    return (
        <div>
                <Header/>

                <div className='all-jobs-filter-cont'>

                        <div className='filter-cont'>
                            <FilterSection/>
                        </div>

                        <div className='all-jobs-cont'>
                            <DisplayAllJobs/>
                        </div>

                </div>



        </div>

    )
}




export default Jobs;