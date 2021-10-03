import React from "react";

const Courses = (props) => {
  const { courseName, price, img } = props.course;
  return (
    <div className="col">
      <div className="card h-100">
        <img src={img} className="card-img-top h-50" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{courseName}</h5>
          <h5 className="text-secondary">
            Price :<i class="fas fa-dollar-sign"></i>
            {price}
          </h5>
          <ul className="card-text m-0 p-0" style={{ listStyle: "none" }}>
            <li className="my-3">
              <i className="fas fa-check-circle text-success me-1"></i>The same
              AQA A Level qualification you’d get in school, all online
            </li>
            <li className="my-3">
              <i className="fas fa-check-circle text-success me-1"></i> 4.8/5
              Trustpilot rating from 4000+ independent reviews
            </li>
            <li className="my-3">
              <i className="fas fa-check-circle text-success me-1"></i>{" "}
              Unlimited 1:1 support from your personal Business tutor
            </li>
            <li className="my-3">
              <i className="fas fa-check-circle text-success me-1"></i>Learn at
              your own pace and set your own schedule
            </li>
            <li className="my-3">
              <i className="fas fa-check-circle text-success me-1"></i>Study
              anywhere, anytime on your phone, tablet or laptop
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Courses;
