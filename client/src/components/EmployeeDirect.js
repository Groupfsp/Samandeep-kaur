import { React } from 'react';
import { useState, useEffect } from 'react';
import { EmployeeTable } from './EmployeeTable'
import { EmployeeFilter } from './EmployeeFilter'
import { useLocation,useParams } from 'react-router-dom';

export function EmployeeDirectory() {
    const location = useLocation()
    const [employees, setEmployees] = useState([]);
    const { type } = useParams()
    useEffect(() => {
        fetchEmployee("");

    }, [])
    useEffect(function () {
        console.log(type)
        if(type!=undefined)
        fetchEmployee(type)
    }, [type]);
    async function fetchEmployee(type){
        const query = `query{
        getEmployees(type:"${type}")  {
                _id,
              firstName
              lastName
              age
              dateOfJoining
              title
              department
              employeeType
              currentStatus
            }
          }`;
        fetch('http://localhost:3003/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query })
        })
            .then((res) => res.json())
            .then(res => setEmployees(res.data.getEmployees));
    }
    
    return (
        <div>
            <EmployeeFilter />
            <EmployeeTable Employees={employees} />
        </div>
    );
}