import "./Courses.css"
import { NavLink, Outlet } from "react-router-dom"
const Courses = () => {
    return (
        <>
        <nav className="navbar-course">
            <ul>
                <li> <NavLink to="list">Course List </NavLink></li>
                <li><NavLink to="course-author">Course Author</NavLink></li>
            </ul>
        </nav>
        <Outlet/>
        </>
    )
}

export default Courses