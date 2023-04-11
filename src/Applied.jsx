import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import AppliedJob from "./components/appliedJob/AppliedJob";
import Footer from "./components/footer/Footer";

const Applied = () => {
  const [applied, setApplied] = useState(
    JSON.parse(localStorage.getItem("apply")) || []
  );
  useEffect(() => {
    setApplied(JSON.parse(localStorage.getItem("apply")) || []);
  }, []);
  return (
    <div>
      <Header />
      {applied ? (
        <>
          <div className="py-20 text-center text-3xl font-bold bg-[#FAF8FF] uppercase">
            Job Details
          </div>
          <div className="w-10/12 mx-auto">
            {applied &&
              applied.map((job) => <AppliedJob job={job} key={job.id} />)}
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
