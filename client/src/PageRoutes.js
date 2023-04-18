import { Routes , Route} from "react-router-dom";
import {EmployeeDirectory} from "./components/EmployeeDirect";
import {EmployeeCreate} from "./components/EmployeeCreate";
import { EmployeeEdit } from "./components/EmployeeEdit";
import { EmployeeDelete } from "./components/EmployeeDelete";
export function PageRoutes() {
    return (
        <Routes>
            <Route path="/" element={<EmployeeDirectory/>}/>
            <Route path="/List" element={<EmployeeDirectory/>}/>
            <Route path="/Add" element={<EmployeeCreate/>}/>
            <Route path="/Edit/:id" element={<EmployeeEdit/>}/>
            <Route path="/Delete/:id" element={<EmployeeDelete/>}/>
            <Route path="/List/Filter/:type?" element={<EmployeeDirectory/>}/>
        </Routes>
    )
}
