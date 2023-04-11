import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Header from "../header/Header";

import { AiOutlineDollarCircle, AiOutlineMail } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { toast } from "react-toastify";

const Details = () => {
  let { id } = useParams();
  const data = useLoaderData();
  const [apply, setApply] = useState(
    JSON.parse(localStorage.getItem("apply")) || []
  );
  const result = data.find((job) => job.id === Number(id));
  const check = apply.some((item) => item.id === result.id);
  const handleApply = (result) => {
    if (check) {
      return toast.error("This job already applied");
    } else {
      setApply([...apply, result]);
      localStorage.setItem("apply", JSON.stringify([...apply, result]));
      return toast.success("This job apply successful!");
    }
  };
  console.log(apply);

  return (
    <div>
      <Header />
      {result && (
        <>
          <div className="py-20 text-center text-3xl font-bold bg-[#FAF8FF] uppercase">
            Job Details
          </div>
          <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 my-20">
            <div>
              <p className="my-5">
                <span className="font-bold text-xl">Job Description:</span>{" "}
                <span className="text-gray-500">{result.description}</span>
              </p>
              <p className="my-5">
                <span className="font-bold text-xl">Job Description:</span>{" "}
                <span className="text-gray-500">
                  {result.job_responsibility}
                </span>
              </p>
              <b>Educational Requirements:</b>
              <p className="text-gray-500">{result.education_requirement}</p>
              <b>Experiences:</b>
              <p className="text-gray-500">{result.experience}</p>
            </div>
            <div>
              <div className="card w-96 bg-[#F3F2FF] shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Job Details</h2>
                  <hr />
                  <div className="flex justify-start items-center gap-2 font-bold">
                    <AiOutlineDollarCircle />{" "}
                    <span>Salary: {result.salary_range}</span>
                  </div>
                  <div className="flex justify-start items-center gap-2 font-bold">
                    <SlCalender /> <span>Job title: {result.title}</span>
                  </div>
                  <b className="text-xl mt-10 mb-2">Contact Information</b>
                  <hr />
                  <div className="flex justify-start items-center gap-2 font-bold">
                    <FiPhoneCall /> <span>Phone: {result.phone_number}</span>
                  </div>{" "}
                  <div className="flex justify-start items-center gap-2 font-bold">
                    <AiOutlineMail /> <span>Phone: {result.email}</span>
                  </div>
                  <div className="flex justify-start items-center gap-2 font-bold">
                    <CiLocationOn /> <span>Address: {result.location}</span>
                  </div>
                </div>
              </div>
              <div className="mt-10 block">
                <button
                  className="btn btn-primary btn-wide"
                  disabled={check}
                  onClick={() => handleApply(result)}
                >
                  {check ? "Already Apply" : " Apply Now"}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
