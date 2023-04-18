import React from 'react';
import {  useParams,useNavigate } from "react-router-dom";
import { useState,useEffect } from 'react';
export function EmployeeEdit() {
 const { id } = useParams()
 let nav = useNavigate()
 const [ employee,setEmp] = useState({});
 const getById = async (id) => {
    let query = `
        query  {
            getById(Id:"${id}") {
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
    }
    `;
    fetch('http://localhost:3003/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
    }).then(async (response) => {
        let employeeList = await response.json();
        setEmp(employeeList.data.getById)
    })
}
useEffect(function () {
    getById(id);
}, [id]);
 async function formSubmit(e){
    e.preventDefault();
    const form = document.forms.employeeForm;
    const err = {};
    let valid = true;
    const newEmployee = {
        title: form.title.value,
        department: form.department.value,
        employeeType: form.employeeType.value,
    }
    if(newEmployee.title=="VP"|| newEmployee.title=="Director"|| newEmployee.title=="Manager"){
        if(newEmployee.employeeType=="Contract"|| newEmployee.employeeType=="Seasonal") {
            err.employeeType = "Contractor/Seasonal Employee Can't be Manager/Director/VP";
            valid = false;
        }
    }
    
    if (valid) {
        const query = ` mutation Mutation {  updateEmployee (
            id:"${id}",
            title: "${document.forms.employeeForm.title.value}",
                department: "${document.forms.employeeForm.department.value}") {
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
                   nav("/");
                })
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
                <input type="text" disabled value={employee.firstName} className="form-control  border-secondary" name="firstName" placeholder="First name" />
            </div>
            <div className="col">
                <label className="p-1 pt-2">Last Name</label>
                <input type="text" disabled value={employee.lastName} className="form-control  border-secondary" name="lastName" placeholder="Last name" />
            </div>
        </div>
        <div className="row">
            <div className="col">
                <label className="p-1 pt-2">Age</label>
                <input type="number" disabled value={employee.age} className="form-control  border-secondary" name="age" placeholder="age" />
            </div>
            <div className="col">
                <label className="p-1 pt-2">Date of Joining</label>
                <input type="Date" disabled value={employee.dateOfJoining} className="form-control border-secondary" name="dateOfJoining" placeholder="Joining Date" />
            </div>
        </div>
        <div className="row">
            <div className="col">
                <label className="p-1 pt-2">Title</label>
                {
                    <select id="title" class="form-control" name="title">
                        {
                            ["Employee", "Manager", "Director", "VP"].map((item) => {
                                return item == employee?.title ?
                                    (<option selected>{item}</option>)
                                    : (<option>{item}</option>)
                            })
                        }
                    </select>
                }
            </div>
            <div className="col">
                <label className="p-1 pt-2">Department</label>

                {
                    <select id="department" class="form-control" name="department">
                        {
                            ["IT", "Marketing", "HR", "Engineering"].map((item) => {
                                return item == employee.department ?
                                    (<option selected>{item}</option>)
                                    : (<option>{item}</option>)
                            })
                        }
                    </select>
                }
            </div>
        </div>
        <div className="row">
            <div className="col">
                <label className="p-1 pt-2">Employee Type</label>

                <select id="inputState" disabled value={employee.employeeType} className="form-control border-secondary" name="employeeType">
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