import { useEffect, useState } from "react";
import { GameBoard } from "./components/GameBoard";

// Sample questions and answers
const sampleQuestions = [
  {
    answers: [
      { text: "umaawit", points: 38, revealed: false },
      { text: "nagkokomento", points: 24, revealed: false },
      { text: "nagpupulong", points: 18, revealed: false },
      { text: "kwentuhan", points: 12, revealed: false },
      { text: "gumaganap ng bahagi", points: 5, revealed: false },
      { text: "nananalangin", points: 2, revealed: false },
    ],
  },
  {
    answers: [
      { text: "Pepperoni", points: 45, revealed: false },
      { text: "Cheese", points: 28, revealed: false },
      { text: "Sausage", points: 15, revealed: false },
      { text: "Mushrooms", points: 8, revealed: false },
      { text: "Olives", points: 3, revealed: false },
      { text: "Peppers", points: 1, revealed: false },
    ],
  },
  {
    answers: [
      { text: "Treasure", points: 41, revealed: false },
      { text: "Eye patch", points: 22, revealed: false },
      { text: "Parrot", points: 18, revealed: false },
      { text: "Ship", points: 11, revealed: false },
      { text: "Hook", points: 5, revealed: false },
      { text: "Sword", points: 2, revealed: false },
    ],
  },
];

export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(sampleQuestions[0].answers);

  // Sound effects
  const playCorrectSound = () => {
    const audio = new Audio(
      "https://assets.mixkit.co/active_storage/sfx/2018/2018-preview.mp3",
    );
    audio.volume = 0.5;
    audio.play();
  };

  const playErrorSound = () => {
    const audio = new Audio(
      "/src/app/assets/freesound_community-fail-jingle-stereo-mix-88784.mp3",
    );
    audio.volume = 0.5;
    audio.play();
  };

  const handleRevealAnswer = (index: number) => {
    if (answers[index].revealed) return;

    playCorrectSound();
    const newAnswers = [...answers];
    newAnswers[index].revealed = true;
    setAnswers(newAnswers);
  };

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.key === "Enter") {
        playErrorSound();
      } else {
        handleRevealAnswer(e.key - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentQuestionIndex]);

  const handleHeaderClick = () => {
    playErrorSound();
  };

  const handleNextQuestion = () => {
    const nextIndex = (currentQuestionIndex + 1) % sampleQuestions.length;
    setCurrentQuestionIndex(nextIndex);
    setAnswers(sampleQuestions[nextIndex].answers);
  };

  const handlePreviousQuestion = () => {
    const prevIndex =
      currentQuestionIndex === 0
        ? sampleQuestions.length - 1
        : currentQuestionIndex - 1;
    setCurrentQuestionIndex(prevIndex);
    setAnswers(sampleQuestions[prevIndex].answers);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-stone-50 to-neutral-100 p-12 relative overflow-hidden flex items-center justify-center">
      {/* Elegant background texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial gradient overlays */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-radial from-amber-100/30 to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-rose-100/20 to-transparent blur-3xl" />

      <div className="relative max-w-7xl mx-auto w-full">
        {/* Sophisticated Header */}
        <div className="text-center mb-12">
          <div className="inline-block">
            <h1
              onClick={handleHeaderClick}
              className="text-6xl font-light tracking-[0.5em] text-neutral-800 mb-4 uppercase relative cursor-pointer hover:text-neutral-700 transition-colors"
            >
              MOLAVE Feud
              {/* Underline decoration */}
              <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-600/60 to-transparent" />
            </h1>
          </div>
          <p className="text-sm tracking-[0.3em] text-neutral-400 uppercase mt-6">
            Survey Says
          </p>
        </div>

        {/* Game Board */}
        <GameBoard answers={answers} onRevealAnswer={handleRevealAnswer} />

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={handlePreviousQuestion}
            className="px-8 py-3 bg-white border border-neutral-200 rounded-xl text-neutral-700 uppercase tracking-[0.2em] text-sm font-light hover:bg-neutral-50 hover:border-amber-600/30 transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
          >
            Previous
          </button>
          <div className="text-neutral-400 text-sm tracking-wider">
            {currentQuestionIndex + 1} / {sampleQuestions.length}
          </div>
          <button
            onClick={handleNextQuestion}
            className="px-8 py-3 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl text-white uppercase tracking-[0.2em] text-sm font-light hover:from-amber-500 hover:to-amber-600 transition-all duration-300 shadow-[0_4px_12px_rgba(217,119,6,0.3)]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
