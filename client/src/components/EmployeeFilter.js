import { Link } from 'react-router-dom'; 
export function EmployeeFilter() {
    
    return (
        <div >
            <h3>Filter employee by Employee Type</h3>
            <a href="/">All</a>
            <Link to="/List/Filter/FullTime">FullTime</Link>{ " | " }
            <Link to="/List/Filter/PartTime">PartTime</Link>{ " | " }
            <Link to="/List/Filter/Contract">Contract</Link>{ " | " }
            <Link to="/List/Filter/Seasonal">Seasonal</Link>{ " | " }
            <Link to="/List/Filter/UpcomingRetirement">Upcoming Retirement</Link>
        <a href='/' className='btn btn-danger'>Clear</a>
        </div>
    )

}