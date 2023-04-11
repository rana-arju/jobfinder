import React from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const AppliedJob = ({ job }) => {
  const history = useNavigate();

  const handleJob = (id) => {
    console.log(id);
    history(`/details/${id}`);
  };
  return (
    <div className="grid grid-cols-3 gap-5 my-20   border border-y-sky-100 rounded-lg">
      <div className="flex justify-center items-center">
        <figure>
          <img src={job.company_logo} alt={job.title} />
        </figure>
      </div>

      <div className="card card-compact  ">
        <div className="card-body">
          <h2 className="card-title">{job.title}</h2>
          <p>{job.company_name}</p>
          <div className="flex gap-4">
            {job.job_type &&
              job.job_type.map((type, i) => (
                <button
                  key={i}
                  className="btn btn-sm btn-outline border  border-[#818DFE] hover:bg-[#818DFE] outline-none hover:border-[#818DFE]"
                >
                  {type}
                </button>
              ))}
          </div>
          <div className="flex justify-start items-center gap-4">
            <div className="flex justify-start items-center gap-2 font-bold">
              <GoLocation /> <span>{job.location}</span>
            </div>
            <div className="flex justify-start items-center gap-2 font-bold">
              <AiOutlineDollarCircle /> <span>Salary: {job.salary_range}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          className="btn bg-[#818DFE] border-none  hover:bg-[#818DFE]"
          onClick={() => handleJob(job.id)}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default AppliedJob;
