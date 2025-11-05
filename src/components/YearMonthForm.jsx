import React, { useState } from "react";
import WatermarkBg from "../assets/WatermarkBg.jpg";

const YearMonthForm = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  const allMonths = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Special month list depending on year selection
  const monthOptions =
    selectedYear === "2023-2024" ? ["Jan - Dec"] :
    selectedYear === "2025" ? ["October","September","July - August"] :
    allMonths;

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    // Check condition
    if (selectedYear === "2023-2024" && selectedMonth === "Jan - Dec") {
      // Open the HTML file in the same tab
      window.location.href = "/mindroid_23-24.html";
    } else if (selectedYear === "2025" && selectedMonth === "July - August") {
      window.location.href = "/mindroid_july-august_2025.html";
    }else if (selectedYear === "2025" && selectedMonth === "September") {
      window.location.href = "/mindroid_september_2025.html";
    } else if (selectedYear === "2025" && selectedMonth === "October") {
      window.location.href = "/mindroid_october_2025.html";
    } else {
      alert(`No Magazine available!`);
    }
  }

   return (
    <form
      onSubmit={handleSubmit}
      className="bg-center bg-no-repeat h-auto flex flex-col md:flex-row gap-6 items-center justify-center my-10 bg-base-100/70 backdrop-blur-md p-6 rounded-2xl shadow-xl ring-1 ring-primary/10 form"
      style={{ backgroundImage: `url(${WatermarkBg})` }}
    >
      {/* Year Dropdown */}
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text text-primary font-semibold text-[#050a30]">Year</span>
        </label>
        <select
          className="select select-bordered select-primary bg-[#050a30] focus:outline-none text-zinc-100"
          value={selectedYear}
          onChange={(e) => {
            setSelectedYear(e.target.value);
            setSelectedMonth(""); // reset month when year changes
          }}
        >
          <option value="" disabled>Pick a year</option>
          <option>2023-2024</option>
          <option>2025</option>
        </select>
      </div>

      {/* Month Dropdown */}
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text text-primary font-semibold text-[#050a30]">Month</span>
        </label>
        <select
          className="select select-bordered select-primary bg-[#050a30] focus:outline-none text-zinc-100"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          <option value="" disabled>Pick a month</option>
          {monthOptions.map((month, idx) => (
            <option key={idx}>{month}</option>
          ))}
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="btn bg-[#f77416] text-white mt-6 md:mt-8 w-full md:w-auto"
      >
        Get Magazine
      </button>
    </form>
  );
};

export default YearMonthForm;
