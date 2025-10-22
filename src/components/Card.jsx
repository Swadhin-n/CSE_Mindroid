import React from "react";

const encodePath = (path) => {
  return path.split("/").map(segment => encodeURIComponent(segment)).join('/');
}

const magazines = [
   {
    title: "Mindroid 2025 September       ",
    description: "",
    month: "September",
    year: "2025",
    cover: "/images/MINDROID_September_2025/Sept_IIM_NGP.jpeg",
    goto: "/mindroid_september_2025.html",
    },
  {
    title: "Mindroid 2025 July-August",
    month: "July-August",
    year: "2025",
    cover: "/images/MINDROID_July-August_2024-25/MINDROID_July-August_2024-25_1.webp",
    goto: "/mindroid_july-august_2025.html",
  },
  {
    title: "Mindroid 2023-24         ",
    description: "",
    month: "Year",
    year: "2023-24",
    cover: "/images/MINDROID_2023-24/MINDROID%202023-24_1.webp",
    goto: "/mindroid_23-24.html"
    },
];
const Card = () => {
  return (
    <div className="w-full flex flex-col gap-8 items-center my-10 px-2 md:px-16">
      <div className="flex flex-wrap justify-center md:justify-between gap-8 items-center w-full">
        {magazines.map((mag, idx) => {
          const CardContent = (
            <div
              className="card w-80 bg-[#10194a] shadow-xl border border-primary/20 hover:scale-105 hover:shadow-2xl transition-transform duration-300 rounded-3xl cursor-pointer"
            >
              <figure className="h-48 overflow-hidden rounded-t-3xl">
                <img
                  src={mag.cover}
                  alt={mag.title}
                  className="w-full h-full object-cover object-center"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-blue-200">{mag.title}</h2>
                <p className="text-blue-100">{mag.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="badge bg-blue-900 text-blue-100 border-blue-700 dark:border-gray-600 px-3 py-2">
                    {mag.month} {mag.year}
                  </span>
                </div>
              </div>
            </div>
          );

          // If goto is defined, wrap in <a>
          return mag.goto ? (
            <a key={idx} href={mag.goto}>
              {CardContent}
            </a>
          ) : (
            <div key={idx}>{CardContent}</div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
