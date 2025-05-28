import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { FiMapPin, FiAward, FiBook } from "react-icons/fi";

export default function ExperiencePage() {
  const data = [
    {
      title: "2023-2026",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white">
            <FiBook className="w-5 h-5 text-blue-400" />
            <div>
              <h3 className="text-lg font-semibold">Bachelor of Science in Software Development </h3>
              <div className="flex items-center gap-2 text-neutral-400 text-sm mt-1">
                <FiMapPin className="w-4 h-4" />
                <span>KCA University, Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          <div className="pl-7">
            <p className="text-neutral-300 text-sm leading-relaxed">
              Currently in my final year pursuing a BE in Software Development, focusing on software
              development and computer science fundamentals. Developed strong
              problem-solving skills and technical expertise through
              comprehensive coursework and practical projects.
            </p>
          </div>
        </div>
      ),
    },
    /*
    {
      title: "Feb 2024 - Feb 2025",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white">
            <FiBriefcase className="w-5 h-5 text-blue-400" />
            <div>
              <h3 className="text-lg font-semibold">Fullstack Developer</h3>
              <div className="flex items-center gap-2 text-neutral-400 text-sm mt-1">
                <span className="font-medium">Lazarus Network</span>
                <span>•</span>
                <span>Remote</span>
              </div>
            </div>
          </div>

          <div className="pl-7">
            <div className="space-y-3 text-sm text-neutral-300">
              <p className="leading-relaxed">
                Full-stack development role focusing on building scalable web
                applications and maintaining cloud infrastructure.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>
                    Developed backend services using Golang and Node.js
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>Built responsive frontends with Next.js and React</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>Managed AWS EC2 and Google Cloud infrastructure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>Implemented CI/CD pipelines with GitHub Actions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    */
    {
      title: "Certifications",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white">
            <FiAward className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-semibold">Full-Stack Software Development (Nov 2024 - May 2025)</h3>
          </div>
          <div className="flex items-center gap-2 text-neutral-400 text-sm mt-1 pl-7">
            <FiMapPin className="w-4 h-4" />
            <span>Moringa School, Nairobi, Kenya</span>
          </div>

          <div className="pl-7 space-y-6">
            {/* Moringa School */}
            <div className="pl-5">
              <p>
                Completed an intensive and immersive bootcamp program focused on full-stack web development.
              </p>
              <p>
                Built real-world projects using JavaScript, Python, React, Flask, and databases.
              </p>
              <p>
                Gained strong foundations in software design, version control, and agile teamwork.
              </p>
              <div className="flex gap-2 mt-2">
                <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                  Javascript
                </span>
                <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                  React
                </span>
                <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                  Python
                </span>
                <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                  Flask
                </span>
                <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                  Databases
                </span>
              </div>
            </div>

            {/* Sui Overflow */}
            {/*
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-400" />
                <h4 className="text-white font-medium">Sui Overflow 2024</h4>
              </div>
              <div className="pl-5">
                <p className="text-neutral-300 text-sm leading-relaxed">
                  Awarded the{" "}
                  <span className="text-blue-400 font-medium">
                    Community Favorite Award
                  </span>{" "}
                  for Mystic Tarot - an innovative Web3 tarot reading platform
                  on the Sui Network, showcasing expertise in blockchain and
                  user-centric design.
                </p>
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                    Community Favorite
                  </span>
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                    Web3
                  </span>
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                    Sui Network
                  </span>
                </div>
              </div>
            </div>
            */}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full ">
      <Timeline data={data} />
    </div>
  );
}
