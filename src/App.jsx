import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/footer/Footer";
import icon1 from "./assets/Icons/accounts 1.png";
import icon2 from "./assets/Icons/business 1.png";
import icon3 from "./assets/Icons/social-media 1.png";
import icon4 from "./assets/Icons/chip 1.png";
import Category from "./components/category/Category";
import Job from "./components/job/Job";
import axios from "axios";
function App() {
  const category = [
    {
      icon: icon1,
      title: "Account & Finance",
      des: "300 Jobs Available",
    },
    {
      icon: icon2,
      title: "Creative Design",
      des: "100+ Jobs Available",
    },
    {
      icon: icon3,
      title: "Marketing & Sales",
      des: "150 Jobs Available",
    },
    {
      icon: icon4,
      title: "Engineering Job",
      des: "224 Jobs Available",
    },
  ];
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("data.json")
      .then((response) => setJobs(response.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(jobs);
  return (
    <>
      <Header />
      <Hero />
      <div className="my-20 w-10/12 mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Job Category List</h2>
          <p className="text-gray-500">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10">
          {category.map((cat, i) => (
            <Category key={i} cat={cat} />
          ))}
        </div>
      </div>
      <div className="my-20 w-10/12 mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Featured Jobs</h2>
          <p className="text-gray-500">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {jobs && jobs.map((job) => <Job key={job.id} job={job} />)}
        </div> */}
      </div>

      <Footer />
    </>
  );
}

export default App;
