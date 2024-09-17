import "./CourseAuthor.css";
import { NavLink, Outlet } from "react-router-dom";
const CourseAuthor = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            {" "}
            <NavLink to="/courses/course-author">Child Author</NavLink>{" "}
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default CourseAuthor;
