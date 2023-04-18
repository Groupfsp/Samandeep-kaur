import { React } from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
export function EmployeeCreate () {
    let navigate = useNavigate();
    const [error, setError] = useState({});
    

    const formSubmit = async (e) => {
        e.preventDefault();
        const form = document.forms.employeeForm;
        const newEmployee = {
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            age: form.age.value,
            dateOfJoining: form.dateOfJoining.value,
            title: form.title.value,
            department: form.department.value,
            employeeType: form.employeeType.value,
            currentStatus: 1
        }
        const err = {};
        let valid = true;
        if (!newEmployee.firstName) {
            err.firstName = "Please Enter Firstname";

            valid = false;
        }
        if (!newEmployee.lastName) {
            err.lastName = "Please Enter lastName";
            valid = false;
        }
        if (!newEmployee.age) {
            err.age = "Please Enter age"
            valid = false;
        }
        else if (parseInt(newEmployee.age) < 20 || parseInt(newEmployee.age) > 70) {
            err.age = "age should be beetween 20 and 70";
            valid = false;
        }
        if (!newEmployee.dateOfJoining) {
            err.dateOfJoining = "Please Enter dateOfJoining";
            valid = false;
        }
        if (!newEmployee.title) {
            err.title = "Please Select title";
            valid = false;
        }
        if (!newEmployee.department) {
            err.department = "Please Select department";
            valid = false;
        }
        if (!newEmployee.employeeType) {
            err.employeeType = "Please Select employee type";
            valid = false;
        }
        if(newEmployee.title=="VP"|| newEmployee.title=="Director"|| newEmployee.title=="Manager"){
            if(newEmployee.employeeType=="Contract"|| newEmployee.employeeType=="Seasonal") {
                err.employeeType = "Contractor/Seasonal Employee Can't be Manager/Director/VP";
                valid = false;
            }
        }
        
        if (valid) {

            const query = ` mutation Mutation {  postEmployee (  firstName:"${newEmployee.firstName}", lastName:"${newEmployee.lastName}",
            age: ${newEmployee.age},
            dateOfJoining: "${newEmployee.dateOfJoining}",
            title: "${newEmployee.title}",
            department: "${newEmployee.department}",
            employeeType: "${newEmployee.employeeType}",
            currentStatus:1) {
                firstName,
                lastName,
                age,
                dateOfJoining,
                title,
                department,
                employeeType,
                currentStatus
          }}`;

            fetch('http://localhost:3003/graphql', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query })
            }).then(async function (response) {

                const body = await response.json();
                navigate("/")
            })
            form.reset();
            
        }else{
            let msg=""
            for (const property in err) {
                msg+=`${property}: ${err[property]}\n`;
              }
              alert(msg)
        }

    }
    return (

        <form className="border  border-secondary p-3" name="employeeForm" onSubmit={formSubmit} >
            <div className="row">
                <div className="col">
                    <label className="p-1 pt-2">First Name</label>
                    <input type="text" className="form-control  border-secondary" name="firstName" placeholder="First name" />
                </div>
                <div className="col">
                    <label className="p-1 pt-2">Last Name</label>
                    <input type="text" className="form-control  border-secondary" name="lastName" placeholder="Last name" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label className="p-1 pt-2">Age</label>
                    <input type="number" className="form-control  border-secondary" name="age" placeholder="age" />
                </div>
                <div className="col">
                    <label className="p-1 pt-2">Date of Joining</label>
                    <input type="Date" className="form-control border-secondary" name="dateOfJoining" placeholder="Joining Date" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label className="p-1 pt-2">Title</label>

                    <select id="inputState" className="form-control border-secondary" name="title" >
                        <option value="Employee" >Employee</option>
                        <option value="Manager">Manager</option>
                        <option value="Director">Director</option>
                        <option value="VP">VP</option>
                    </select>
                </div>
                <div className="col">
                    <label className="p-1 pt-2">Department</label>

                    <select id="inputState" className="form-control border-secondary" name="department">
                        <option value="IT">IT</option>
                        <option value="Marketing">Marketing</option>
                        <option value="HR">HR</option>
                        <option value="Engineering">Engineering</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label className="p-1 pt-2">Employee Type</label>

                    <select id="inputState" className="form-control border-secondary" name="employeeType">
                        <option value="FullTime">FullTime</option>
                        <option value="PartTime">PartTime</option>
                        <option value="Contract">Contract</option>
                        <option value="Seasonal">Seasonal</option>
                    </select>
                </div>

            </div>
            <button type="submit" className="btn btn-primary w-100 my-3 lead">Submit</button>
        </form>);
}