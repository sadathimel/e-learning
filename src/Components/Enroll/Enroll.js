import React from 'react';
import './Enroll.css'

const Enroll = (props) => {
    const enroll = props.enroll;
    let total = 0;
    enroll.map((course) => (total = total + course.price));
    total = total.toFixed(2);
    return (
        <div className = "Enroll-container">
            <h3>Course Enrolled</h3>
            <h6>Number of course: {enroll.length} </h6>
            <p>Total price: ${total} </p>
        </div>
    );
};

export default Enroll;