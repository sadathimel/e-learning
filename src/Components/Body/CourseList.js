import React from 'react';
import './CourseList.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const CourseList = (props) => {
    const {name, price, instructor, img} = props.course;
    return (
      <div className="Course-container">
        <div className="image">
          <img src={img} alt="" />
        </div>
        <div className="course-list">
          <h5>{name}</h5>
          <h6> Instructor: {instructor} </h6>
          <h4> ${price} </h4>

          <button
            className="btn btn-success"
            onClick={() => props.handleAddCourse(props.course)}
          >
            Enroll Now
          </button>
        </div>
      </div>
    );
};

export default CourseList;