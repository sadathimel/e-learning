import React from 'react';
import fakeData from "../../Fake Data/course";
import { useState } from "react";
import CourseList from '../Body/CourseList';
import './Course.css'
import Enroll from '../Enroll/Enroll';

const Course = (props) => {
    const [courses] = useState(fakeData);
     const [enroll, setEnroll] = useState([]);

     const handleAddCourse = (course) => {
       console.log("course added", course);
       const newCourse = [...enroll, course];
       setEnroll(newCourse);
     };
    return (
      <div className="course-container">
        <div className="Course">
          {courses.map((course) => (
            <CourseList
              handleAddCourse={handleAddCourse}
              course={course}
            ></CourseList>
          ))}
        </div>
        <div className="Enrolled">
          <Enroll enroll = {enroll}></Enroll>
        </div>
      </div>
    );
};

export default Course;