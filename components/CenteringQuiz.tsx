"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    question:
      "Which CSS property is used for one-line perfect centering in CSS Grid?",
    options: ["center-items", "place-items", "grid-center", "align-content"],
    correctAnswer: 1,
    explanation:
      "place-items is the magical one-line centering technique in CSS Grid! It centers items both horizontally and vertically.",
  },
  {
    question: "In Flexbox, which property centers items horizontally?",
    options: [
      "align-items",
      "justify-content",
      "flex-center",
      "center-horizontal",
    ],
    correctAnswer: 1,
    explanation:
      "justify-content centers flex items along the main axis (horizontally in row direction).",
  },
  {
    question:
      "What transform is typically used with absolute positioning to center a div?",
    options: [
      "scale(0.5)",
      "translate(50%, 50%)",
      "translate(-50%, -50%)",
      "rotate(45deg)",
    ],
    correctAnswer: 2,
    explanation:
      "translate(-50%, -50%) shifts the div back by half its own width and height, creating a perfect center.",
  },
];

export default function CenteringQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (optionIndex: number) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(optionIndex);

      if (optionIndex === quizQuestions[currentQuestion].correctAnswer) {
        setScore((prev) => prev + 1);
      }
    }
  };

  const moveToNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="container mx-auto p-8 text-center"
      >
        <h2 className="text-3xl font-bold mb-4 text-indigo-800">
          Quiz Completed! 🎉
        </h2>
        <p className="text-xl mb-4">
          Your Score: {score} / {quizQuestions.length}
        </p>
        <button
          onClick={resetQuiz}
          className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700"
        >
          Retake Quiz
        </button>
      </motion.div>
    );
  }

  const currentQuizQuestion = quizQuestions[currentQuestion];

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-indigo-800">
        Div Centering Quiz Challenge 🧩
      </h2>

      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white rounded-lg shadow-lg p-8"
      >
        <h3 className="text-xl font-semibold mb-4">
          Question {currentQuestion + 1} of {quizQuestions.length}
        </h3>

        <p className="text-lg mb-6">{currentQuizQuestion.question}</p>

        <div className="space-y-4">
          {currentQuizQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`
                  w-full p-3 text-left rounded-lg transition-all
                  ${
                    selectedAnswer !== null
                      ? index === currentQuizQuestion.correctAnswer
                        ? "bg-green-100 border-2 border-green-500"
                        : selectedAnswer === index
                        ? "bg-red-100 border-2 border-red-500"
                        : "bg-white hover:bg-gray-100"
                      : "bg-white hover:bg-gray-100"
                  }
                `}
              disabled={selectedAnswer !== null}
            >
              {option}
              {selectedAnswer !== null &&
                index === currentQuizQuestion.correctAnswer && (
                  <span className="float-right text-green-600">✓</span>
                )}
              {selectedAnswer !== null &&
                selectedAnswer === index &&
                selectedAnswer !== currentQuizQuestion.correctAnswer && (
                  <span className="float-right text-red-600">✗</span>
                )}
            </button>
          ))}
        </div>

        {selectedAnswer !== null && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-6 p-4 bg-blue-50 rounded-lg"
          >
            <h4 className="font-semibold mb-2">
              {selectedAnswer === currentQuizQuestion.correctAnswer
                ? "🎉 Correct!"
                : "❌ Incorrect"}
            </h4>
            <p>{currentQuizQuestion.explanation}</p>

            <button
              onClick={moveToNextQuestion}
              className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700"
            >
              {currentQuestion < quizQuestions.length - 1
                ? "Next Question"
                : "Finish Quiz"}
            </button>
          </motion.div>
        )}
      </motion.div>

      {/* Progress Indicator */}
      <div className="mt-4 flex justify-center">
        {quizQuestions.map((_, index) => (
          <div
            key={index}
            className={`
                      w-4 h-4 rounded-full mx-1
                      ${
                        index < currentQuestion
                          ? "bg-green-500"
                          : index === currentQuestion
                          ? "bg-indigo-600"
                          : "bg-gray-300"
                      }
                    `}
          />
        ))}
      </div>
    </div>
  );
}
