import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import AppliedJob from "./components/appliedJob/AppliedJob";
import Footer from "./components/footer/Footer";
const jobTypes = ["On-site", "Remote"];

const Applied = () => {
  const [selectedJobType, setSelectedJobType] = useState("");

  const [applied, setApplied] = useState(
    JSON.parse(localStorage.getItem("apply")) || []
  );
  useEffect(() => {
    setApplied(JSON.parse(localStorage.getItem("apply")) || []);
  }, [selectedJobType]);
  const handleJobTypeChange = (event) => {
    setSelectedJobType(event.target.value);
  };

  let filteredJobs = selectedJobType
    ? applied.filter((job) => job.job_type[0] == selectedJobType)
    : applied;

  console.log("applied", filteredJobs);
  return (
    <div>
      <Header />
      {applied ? (
        <>
          <div className="py-20 text-center text-3xl font-bold bg-[#FAF8FF] uppercase">
            Applied Jobs
          </div>
          <div className="w-10/12 mx-auto">
            <div className="flex justify-end my-10 pb-0">
              <select
                className="select select-bordered"
                value={selectedJobType}
                onChange={handleJobTypeChange}
              >
                <option selected value="">
                  Filter By
                </option>
                {jobTypes.map((jobType) => (
                  <option key={jobType} value={jobType}>
                    {jobType}
                  </option>
                ))}
              </select>
            </div>
            {filteredJobs &&
              filteredJobs.map((job) => <AppliedJob job={job} key={job.id} />)}
          </div>
        </>
      ) : (
        <h2 className="text-center text-2xl mt-20 font-bold">No Applied Job</h2>
      )}
      <Footer />
    </div>
  );
};

export default Applied;
