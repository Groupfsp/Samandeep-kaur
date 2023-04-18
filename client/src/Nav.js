import { BrowserRouter } from 'react-router-dom'
import { PageRoutes } from './PageRoutes';
import { Link } from 'react-router-dom'
export function Nav() {
    return (
        <BrowserRouter>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="navbar-collapse" id="navbarNav">
                    <a class="nav-link btn btn-primary" href="/">Home</a>{"       "}
                    <a class="nav-link btn btn-primary" href="/List">List</a>{"      "}
                    <a class="nav-link btn btn-primary" href="/Add">Add</a>
                       
                    </div>
                </nav>
                
                <PageRoutes />
            </div>
        </BrowserRouter>
    )
}