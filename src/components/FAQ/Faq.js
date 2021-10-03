import React from "react";

const Faq = () => {
  return (
    <div className="center d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center text-muted">FAQ </h1>
      <div className="accordion w-75" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              How do I enrol?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body">
              Enrolling is easy. Just call one of our Course Advisors free on
              0800 056 3983 (from within the UK) or +44 141 302 5487 (from
              outside the UK) to enrol over the phone and arrange your
              interest-free payment plan. You can also enrol on GCSE and A Level
              courses online. Just click 'Add to Basket' on the relevant course
              page.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              What qualification will I receive at the end of the course?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body">
              All our courses are accredited by globally recognised awarding
              bodies such as CIPD and AQA. Your qualification will be awarded by
              the relevant awarding body for your course - you'll see their logo
              on each course page. The qualification you receive will be exactly
              the same as if you'd studied in school, college or university, and
              will be recognised and respected by employers worldwide.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              How much will it cost?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div className="accordion-body">
              The price of your course will vary depending on the qualification
              you choose. You'll find full details of the course cost and
              interest-free payment plan on each course page. Any additional
              exam fees, registration fees, membership fees or course materials
              that must be paid for are clearly shown in each course page's
              'Additional Fees' section, so there are no unexpected surprises.
              For more information on our payment plans, please speak to one of
              our Course Advisors by calling free on 0800 056 3983.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
