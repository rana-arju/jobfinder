import React from "react";
import { useNavigate } from "react-router-dom";

import { GoLocation } from "react-icons/go";
import { AiOutlineDollarCircle } from "react-icons/ai";
const Job = ({ job}) => {
  const history = useNavigate();

  const handleJob = (id) => {
    console.log(id);
    history(`/details/${id}`);
  };
  return (
    <div className="card card-compact bg-[#FAF8FF]  py-8">
      <figure>
        <img src={job.company_logo} alt={job.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job.title}</h2>
        <p>{job.company_name}</p>
        <div>
          <button className="btn btn-sm btn-outline border  border-[#818DFE] hover:bg-[#818DFE] outline-none hover:border-[#818DFE]">
            {job.job_type}
          </button>
        </div>
        <div className="flex justify-start items-center gap-4">
          <div className="flex justify-start items-center gap-2 font-bold">
            <GoLocation /> <span>{job.location}</span>
          </div>
          <div className="flex justify-start items-center gap-2 font-bold">
            <AiOutlineDollarCircle /> <span>Salary: {job.salary_range}</span>
          </div>
        </div>
        <div>
          <button
            className="btn bg-[#818DFE] border-none btn-sm hover:bg-[#818DFE]"
            onClick={() => handleJob(job.id)}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Job;
