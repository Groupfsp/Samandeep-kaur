import { useEffect } from "react";
import {  useParams,useNavigate } from "react-router-dom";

export function EmployeeDelete() {
    let nav = useNavigate()
    const { id } = useParams()
    useEffect(() => {
        deleteEmp(id);

    }, [id])
    async function deleteEmp(id){
        const query = `
                query  {
                    deleteEmployee(Id:"${id}") {
                        firstName
                    }
              }
            `;
            fetch('http://localhost:3003/graphql', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query})
            }).then(async (response) => {
                nav("/")
            })
    }
    return (
        <div >
            <h3>Deleted</h3>
        </div>
    )

}