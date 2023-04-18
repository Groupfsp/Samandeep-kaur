import { useNavigate } from "react-router-dom";
export function EmployeeTable({ Employees }) {
    let nav = useNavigate()
    function deleteEmp(emp) {
        if (emp.currentStatus == 1)
            alert("CAN'T DELETE EMPLOYEE - STATUS ACTIVE");
        else
            nav("/Delete/" + emp._id);
    }
    return (
        <div>
            <h2>Employee List</h2>
            <table className="table table-bordered">

                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Date Of Joining</th>
                        <th>Title</th>
                        <th>Department</th>
                        <th>Employee Type</th>
                        <th>Current Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        Employees && Employees.map((employee, i) => <tr key={i}>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.age}</td>
                            <td>{employee.dateOfJoining}</td>
                            <td >{employee.title}</td>
                            <td>{employee.department}</td>
                            <td>{employee.employeeType}</td>
                            <td>{employee.currentStatus ? "Working" : "Retired"}</td>
                            <td><a href={`/Edit/${employee._id}`}>Edit</a> {"   "}
                                <a onClick={() => deleteEmp(employee)} href="#">Delete</a></td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    )
};