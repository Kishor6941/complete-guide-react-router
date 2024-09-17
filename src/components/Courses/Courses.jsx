import "./Courses.css"
import { Link,NavLink, Outlet, useLocation } from "react-router-dom"
const Courses = () => {
    let location = useLocation()
    
    return (
        <>
        <nav className="navbar-course">
            <ul>
                <li className={location.pathname === "/courses" ? 'active' : ''}> <Link to="/courses">Course List </Link></li>
                <li><NavLink to="course-author">Course Author</NavLink></li>
            </ul>
        </nav>
        <Outlet/>
        </>
    )
}

export default Courses