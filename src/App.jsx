import React, { Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from "./utlis/ProtectedRoutes";
const Home = React.lazy(() => import("./components/Home/Home"));
const About = React.lazy(() => import("./components/About/About"));
const Contact = React.lazy(() => import("./components/Contacts/Contact"));
const Courses = React.lazy(() => import("./components/Courses/Courses"));
const CourseList = React.lazy(() =>
  import("./components/CourseList/CourseList")
);
const CourseAuthor = React.lazy(() =>
  import("./components//CourseAuthor/CourseAuthor")
);

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoutes />}>
          <Route path="/courses" element={<Courses />}>
            <Route path="list" element={<CourseList />} />
            <Route path="course-author" element={<CourseAuthor />} />
          </Route>
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
