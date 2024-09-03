import React from 'react';

function Courses() {
  return (
    <section className="courses" id="courses">
      <h2>Our Popular Courses</h2>
      <div className="course-item">
        <img src="course1.jpg" alt="Web Development" />
        <h3>Web Development</h3>
        <p>Learn HTML, CSS, JavaScript, and more.</p>
      </div>
      <div className="course-item">
        <img src="course2.jpg" alt="Data Science" />
        <h3>Data Science</h3>
        <p>Master Python, R, and data visualization.</p>
      </div>
      <div className="course-item">
        <img src="course3.jpg" alt="Graphic Design" />
        <h3>Graphic Design</h3>
        <p>Create stunning visuals with Adobe tools.</p>
      </div>
    </section>
  );
}

export default Courses;
