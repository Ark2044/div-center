'use client';

import { useState } from 'react';
import { 
  Code, 
  Gamepad2, 
  School,
  ArrowRight 
} from 'lucide-react';
import CenteringTechnique from '@/components/CenteringTechnique';
import CenteringPlayground from '@/components/CenteringPlayground';
import CenteringTutorials from '@/components/CenteringTutorials';
import CenteringQuiz from '@/components/CenteringQuiz';

export default function Home() {
  const [activeSection, setActiveSection] = useState<'techniques' | 'playground' | 'tutorials' | 'quiz'>('techniques');

  const sections = [
    {
      id: 'techniques',
      title: 'Centering Techniques',
      icon: <Code />,
      component: <TechniquesSection />
    },
    {
      id: 'playground',
      title: 'Interactive Playground',
      icon: <Gamepad2 />,
      component: <CenteringPlayground />
    },
    {
      id: 'tutorials',
      title: 'Detailed Tutorials',
      icon: <School />,
      component: <CenteringTutorials />
    },
    {
      id: 'quiz',
      title: 'Challenge Quiz',
      icon: <School />,
      component: <CenteringQuiz />
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 selection:bg-indigo-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 
            bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
            CSS Centering Mastery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore powerful techniques to center elements with precision and elegance
          </p>
        </header>

        {/* Section Navigation */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-12 px-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id as 'techniques' | 'playground' | 'tutorials' | 'quiz')}
              className={`
                group flex items-center justify-center p-4 sm:px-6
                rounded-xl sm:rounded-full
                transition-all duration-300 ease-in-out
                shadow-sm hover:shadow-md
                ${activeSection === section.id 
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white' 
                  : 'bg-white/80 text-gray-700 hover:bg-gray-50'
                }
              `}
            >
              <span className="mr-3">{section.icon}</span>
              <span className="font-medium">{section.title}</span>
              {activeSection !== section.id && (
                <ArrowRight 
                  className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                  size={18} 
                />
              )}
            </button>
          ))}
        </div>

        {/* Active Section Content with transition */}
        <div className="transition-all duration-300 ease-in-out">
          {sections.find(s => s.id === activeSection)?.component}
        </div>
      </div>
    </main>
  );
}

function TechniquesSection() {
  const centeringTechniques = [
    {
      id: 'flexbox',
      title: 'Flexbox: The Flexible Friend',
      icon: <Code />,
      description: 'Flexbox is like a yoga instructor for your divs - helping them find their center with grace and flexibility!',
      code: `
// Flexbox Centering Magic 🪄
.parent {
  display: flex;
  justify-content: center;  // Horizontal centering
  align-items: center;      // Vertical centering
}`
    },
    {
      id: 'grid',
      title: 'CSS Grid: The Architectural Mastermind',
      icon: <Code />,
      description: 'CSS Grid treats your layout like a meticulously planned city - everything has its perfect place!',
      code: `
// Grid Centering Wizardry 🧙‍♂️
.parent {
  display: grid;
  place-items: center;  // One-line centering magic!
}`
    },
    {
      id: 'absolute',
      title: 'Absolute Positioning: The Rebel Technique',
      icon: <Code />,
      description: 'Absolute positioning is like a GPS for your div - telling it exactly where to land!',
      code: `
// Absolute Positioning Sorcery 🔮
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}`
    }
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8 px-4">
      {centeringTechniques.map((technique, index) => (
        <div 
          key={technique.id}
          className="transform transition-all duration-500 ease-in-out hover:scale-[1.02] 
            bg-white rounded-2xl shadow-lg hover:shadow-xl 
            border border-gray-100 overflow-hidden"
          style={{
            transitionDelay: `${index * 100}ms`
          }}
        >
          <CenteringTechnique 
            {...technique} 
          />
        </div>
      ))}
    </div>
  );
}