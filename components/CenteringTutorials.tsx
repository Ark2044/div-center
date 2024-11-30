"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CodeBlock } from "./CodeBlock";

const tutorials = [
  {
    id: "flexbox",
    title: "Flexbox: The Flexible Centering Champion",
    sections: [
      {
        heading: "Understanding Flexbox Centering",
        content:
          "Flexbox is like a yoga instructor for your divs - helping them find their center with grace and flexibility!",
        code: `
// Horizontal Centering
.parent {
  display: flex;
  justify-content: center; // X-axis magic ✨
}

// Vertical Centering
.parent {
  display: flex;
  align-items: center; // Y-axis wizardry 🧙‍♂️
}

// Perfect Centering (Both Axes)
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}`,
      },
      {
        heading: "Common Flexbox Patterns",
        content:
          "Flexbox isn't just about centering - it's a layout superhero!",
        code: `
// Distributing Space
.parent {
  display: flex;
  justify-content: space-between; // Spaced-out siblings
  align-items: center;
}

// Wrapping Content
.parent {
  display: flex;
  flex-wrap: wrap; // Responsive magic
  justify-content: center;
}`,
      },
    ],
  },
  {
    id: "grid",
    title: "CSS Grid: The Architectural Layout Mastermind",
    sections: [
      {
        heading: "Grid Centering Techniques",
        content:
          "CSS Grid treats your layout like a meticulously planned city - everything has its perfect place!",
        code: `
// One-Line Centering Magic
.parent {
  display: grid;
  place-items: center; // Vertical and Horizontal in one shot! 🎯
}

// Precise Grid Positioning
.parent {
  display: grid;
  grid-template-columns: 1fr 200px 1fr;
  grid-template-rows: 1fr 200px 1fr;
}`,
      },
      {
        heading: "Advanced Grid Layouts",
        content: "Grid provides ultimate control over your layout landscape!",
        code: `
// Complex Grid Centering
.parent {
  display: grid;
  grid-template-areas: 
    ". header ."
    "sidebar content sidebar"
    ". footer .";
}`,
      },
    ],
  },
];

export default function CenteringTutorials() {
  const [selectedTutorial, setSelectedTutorial] = useState(tutorials[0].id);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const currentTutorial = tutorials.find((t) => t.id === selectedTutorial)!;

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-indigo-800">
        Div Centering Deep Dive 🕵️‍♂️
      </h2>

      {/* Tutorial Selector */}
      <div className="flex justify-center mb-8">
        {tutorials.map((tutorial) => (
          <button
            key={tutorial.id}
            onClick={() => setSelectedTutorial(tutorial.id)}
            className={`
              mx-2 px-4 py-2 rounded-full transition-all
              ${
                selectedTutorial === tutorial.id
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }
            `}
          >
            {tutorial.title}
          </button>
        ))}
      </div>

      {/* Tutorial Sections */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        key={selectedTutorial}
        className="bg-white rounded-lg shadow-lg p-8"
      >
        {currentTutorial.sections.map((section, index) => (
          <div key={index} className="mb-8">
            <div
              onClick={() =>
                setExpandedSection(
                  expandedSection === section.heading ? null : section.heading
                )
              }
              className="cursor-pointer flex justify-between items-center bg-gray-100 p-4 rounded-lg"
            >
              <h3 className="text-xl font-semibold">{section.heading}</h3>
              <span>{expandedSection === section.heading ? "▼" : "►"}</span>
            </div>

            {expandedSection === section.heading && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                <p className="mt-4 text-gray-600">{section.content}</p>
                <CodeBlock code={section.code} language="css" />
              </motion.div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
