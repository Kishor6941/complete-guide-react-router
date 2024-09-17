import "./CourseList.css";
const courses = [
  {
    id: 1,
    title: "React for Beginners",
    description: "Learn the basics of React.",
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    description: "Deep dive into JavaScript concepts.",
  },
  { id: 3, title: "CSS Mastery", description: "Become a CSS expert." },
];
const CourseList = () => {
  return (
    <div className="course-list-container">
      <h1 className="course-list-title">Available Courses</h1>
      <ul className="course-list">
        {courses.map((course) => (
          <li key={course.id} className="course-item">
            <h2 className="course-title">{course.title}</h2>
            <p className="course-description">{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
