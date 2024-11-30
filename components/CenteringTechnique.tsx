import { motion } from "framer-motion";
import { CodeBlock } from "./CodeBlock";

interface CenteringTechniqueProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  code: string;
  isSelected?: boolean;
}

export default function CenteringTechnique({
  title,
  icon,
  description,
  code,
  isSelected,
}: CenteringTechniqueProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className={`
          w-full
          p-6 sm:p-8 lg:p-10
          rounded-2xl
          backdrop-blur-sm
          shadow-[0_8px_30px_rgb(0,0,0,0.12)]
          transition-all duration-300 ease-in-out
          ${
            isSelected
              ? "bg-gradient-to-br from-violet-500/90 to-indigo-600/90 text-white ring-2 ring-violet-400"
              : "bg-white/80 hover:bg-white/90 hover:shadow-xl"
          }
        `}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div
          className={`p-4 rounded-xl ${
            isSelected ? "bg-white/20" : "bg-indigo-100"
          }`}
        >
          {icon}
        </div>
        <h2
          className={`text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight ${
            isSelected ? "text-white" : "text-gray-800"
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
            isSelected ? "text-white/90" : "text-gray-600"
          }`}
        >
          {description}
        </p>
        <div className="w-full mt-6">
          <CodeBlock code={code} language="css" />
        </div>
      </div>
    </motion.div>
  );
}
