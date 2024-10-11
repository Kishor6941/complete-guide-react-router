import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import ProtectedRoutes from "./utlis/ProtectedRoutes";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Posts from "./components/Posts/Posts";
import ClickCounter from "./learncustomHookComp/ClickCounter";
import HoverCounter from "./learncustomHookComp/HoverCounter";
// import LearnCSS from "./components/Learn flexbox/LearnCSS";
const LearnCSS = React.lazy(() =>
  import("./components/Learn flexbox/LearnCSS")
);

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

const PageNotFound = React.lazy(() =>
  import("./components/PageNotFound/PageNotFound")
);

const CourseAuthorChild = React.lazy(() =>
  import("./components/CourseAuthorChild/CourseAuthorChild")
);

const App = () => {
  return (
    // <div style={{ maxWidth: "960px", margin: "0 auto" }}>
    <>
      <ToastContainer autoClose={1500} />
      <Navbar />
      <Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/courses" element={<Courses />}>
              <Route index element={<CourseList />} />
              <Route path="course-author" element={<CourseAuthor />}>
                <Route index element={<CourseAuthorChild />} />
              </Route>
            </Route>
            <Route path="/post" element={<Posts />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/learn" element={<LearnCSS />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
      {/* <Footer /> */}
      {/* </div> */}

      <ClickCounter />
      <HoverCounter />
    </>
  );
};

export default App;
