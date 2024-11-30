"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type CenteringMethod = "flexbox" | "grid" | "absolute";

export default function CenteringPlayground() {
  const [method, setMethod] = useState<CenteringMethod>("flexbox");
  const [contentSize, setContentSize] = useState(100);
  const [parentSize, setParentSize] = useState(300);

  const renderCenteredDiv = () => {
    const parentStyle: React.CSSProperties = {
      width: `${parentSize}px`,
      height: `${parentSize}px`,
      border: "2px solid #4a5568",
      position: "relative",
    };

    const childStyle: React.CSSProperties = {
      width: `${contentSize}px`,
      height: `${contentSize}px`,
      backgroundColor: "#6366f1",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };

    switch (method) {
      case "flexbox":
        parentStyle.display = "flex";
        parentStyle.justifyContent = "center";
        parentStyle.alignItems = "center";
        break;
      case "grid":
        parentStyle.display = "grid";
        parentStyle.placeItems = "center";
        break;
      case "absolute":
        childStyle.position = "absolute";
        childStyle.top = "50%";
        childStyle.left = "50%";
        childStyle.transform = "translate(-50%, -50%)";
        break;
    }

    return (
      <div
        className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center"
        style={parentStyle}
      >
        <div style={childStyle} className="text-center">
          Centered Div
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-indigo-800">
        Div Centering Playground 🎮
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Centering Controls</h3>

          <div className="mb-4">
            <label className="block mb-2">Centering Method</label>
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value as CenteringMethod)}
              className="w-full p-2 border rounded"
            >
              <option value="flexbox">Flexbox</option>
              <option value="grid">CSS Grid</option>
              <option value="absolute">Absolute Positioning</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-2">Parent Container Size</label>
            <input
              type="range"
              min="200"
              max="500"
              value={parentSize}
              onChange={(e) => setParentSize(Number(e.target.value))}
              className="w-full"
            />
            <span>{parentSize}px</span>
          </div>

          <div className="mb-4">
            <label className="block mb-2">Content Div Size</label>
            <input
              type="range"
              min="50"
              max="250"
              value={contentSize}
              onChange={(e) => setContentSize(Number(e.target.value))}
              className="w-full"
            />
            <span>{contentSize}px</span>
          </div>
        </div>

        {/* Visualization */}
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {renderCenteredDiv()}
          </motion.div>
        </div>
      </div>

      {/* Code Display */}
      <div className="mt-8 bg-gray-900 text-green-400 p-4 rounded-lg">
        <pre>{`
// ${method.toUpperCase()} Centering Method
.parent {
  ${
    method === "flexbox"
      ? `
  display: flex;
  justify-content: center;
  align-items: center;`
      : method === "grid"
      ? `
  display: grid;
  place-items: center;`
      : `
  position: relative;
  
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}`
  }
}
        `}</pre>
      </div>
    </div>
  );
}
