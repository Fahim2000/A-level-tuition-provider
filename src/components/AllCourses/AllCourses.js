import React, { useEffect, useState } from "react";
import Courses from "../Courses/Courses";

const AllCourses = () => {
  const [allCourses, setAllCourses] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAllCourses(data));
  }, []);
  return (
    <div className="mb-5">
      <h1 className="text-success text-center my-3 ">
        Here are the All courses we provide for A-level
      </h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {allCourses.map((course, index) => {
          return <Courses key={index} course={course}></Courses>;
        })}
      </div>
    </div>
  );
};

export default AllCourses;
