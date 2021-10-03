import React, { useEffect, useState } from "react";
import Courses from "../Courses/Courses";

const Home = () => {
  const [courses, setCourses] = useState([]);
  // fetching data
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="container mb-5">
      <h2 className="m-3 text-success">
        Achieve your A Levels 100% online from home with the Bangladesh's most
        recommended online A Level tuition provider.**
      </h2>
      <p className="m-3 lead text-dark">
        Our flexible online courses let you shape your A Levels around your
        life, whether you're fast-tracking your course for university entry or
        taking it slow to fit around your job and family. You can set your own
        timetable, study from anywhere, and get help whenever you need it from
        your expert tutor.
      </p>
      <div class="container">
        <div class="row g-2">
          <div class="col-4">
            <div class="p-3  text-center">
              <img
                src="https://www.icslearn.co.uk/media/902002/ics-learn-icons-81-chat.png"
                alt=""
              />
              <p className="fw-bold fs-4">Unlimited tutor support</p>
            </div>
          </div>
          <div class="col-4">
            <div class="p-3 text-center">
              <img
                src="https://www.icslearn.co.uk/media/902003/ics-learn-icons-123-time.png"
                alt=""
              />
              <p className="fw-bold fs-4">Learn at your own pace</p>
            </div>
          </div>
          <div class="col-4">
            <div class="p-3 text-center">
              <img
                src="https://www.icslearn.co.uk/media/902001/price-tag-large.png"
                alt=""
              />
              <p className="fw-bold fs-4">Interest-free plans</p>
            </div>
          </div>
        </div>
      </div>
      <h4 className="text-muted text-center mb-4">
        Have a look at some of our courses :{" "}
      </h4>
      {/* generating single course by mapping over courses */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {courses.slice(0, 4).map((course, index) => {
          return <Courses key={index} course={course}></Courses>;
        })}
      </div>
    </div>
  );
};

export default Home;
