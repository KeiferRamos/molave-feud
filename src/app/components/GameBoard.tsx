import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Answer {
  text: string;
  points: number;
  revealed: boolean;
}

interface GameBoardProps {
  answers: Answer[];
  onRevealAnswer: (index: number) => void;
}

export function GameBoard({ answers, onRevealAnswer }: GameBoardProps) {
  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Premium Board Container */}
      <div className="relative bg-white rounded-[2rem] p-16 shadow-[0_25px_100px_rgba(0,0,0,0.08)] border border-neutral-100">
        {/* Top ornamental line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center gap-2">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-amber-600/50" />
            <div className="w-2 h-2 rounded-full bg-amber-600 shadow-[0_0_12px_rgba(217,119,6,0.4)]" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-amber-600/50" />
          </div>
        </div>
        
        {/* Elegant corner embellishments */}
        <div className="absolute top-6 left-6">
          <div className="relative w-6 h-6">
            <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-amber-600/60 to-transparent" />
            <div className="absolute top-0 left-0 w-[1.5px] h-full bg-gradient-to-b from-amber-600/60 to-transparent" />
            <div className="absolute top-0 left-0 w-1.5 h-1.5 rounded-full bg-amber-600" />
          </div>
        </div>
        <div className="absolute top-6 right-6">
          <div className="relative w-6 h-6">
            <div className="absolute top-0 right-0 w-full h-[1.5px] bg-gradient-to-l from-amber-600/60 to-transparent" />
            <div className="absolute top-0 right-0 w-[1.5px] h-full bg-gradient-to-b from-amber-600/60 to-transparent" />
            <div className="absolute top-0 right-0 w-1.5 h-1.5 rounded-full bg-amber-600" />
          </div>
        </div>
        <div className="absolute bottom-6 left-6">
          <div className="relative w-6 h-6">
            <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-amber-600/60 to-transparent" />
            <div className="absolute bottom-0 left-0 w-[1.5px] h-full bg-gradient-to-t from-amber-600/60 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1.5 h-1.5 rounded-full bg-amber-600" />
          </div>
        </div>
        <div className="absolute bottom-6 right-6">
          <div className="relative w-6 h-6">
            <div className="absolute bottom-0 right-0 w-full h-[1.5px] bg-gradient-to-l from-amber-600/60 to-transparent" />
            <div className="absolute bottom-0 right-0 w-[1.5px] h-full bg-gradient-to-t from-amber-600/60 to-transparent" />
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 rounded-full bg-amber-600" />
          </div>
        </div>
        
        {/* Answer Grid */}
        <div className="grid grid-cols-2 gap-6">
          {answers.map((answer, index) => (
            <AnswerSlot
              key={index}
              number={index + 1}
              answer={answer}
              onClick={() => onRevealAnswer(index)}
            />
          ))}
        </div>
        
        {/* Bottom ornamental line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <div className="flex items-center gap-2">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-amber-600/50" />
            <div className="w-2 h-2 rounded-full bg-amber-600 shadow-[0_0_12px_rgba(217,119,6,0.4)]" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-amber-600/50" />
          </div>
        </div>
      </div>
    </div>
  );
}

interface AnswerSlotProps {
  number: number;
  answer: Answer;
  onClick: () => void;
}

function AnswerSlot({ number, answer, onClick }: AnswerSlotProps) {
  return (
    <motion.div
      className="relative h-24 cursor-pointer group"
      onClick={onClick}
      whileHover={{ y: answer.revealed ? 0 : -4 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      <AnimatePresence mode="wait">
        {!answer.revealed ? (
          <motion.div
            key="hidden"
            initial={{ rotateX: 0 }}
            exit={{ rotateX: 90, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-50 rounded-2xl border border-neutral-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.04)] group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300"
          >
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-50/0 to-amber-50/0 group-hover:from-amber-50/40 group-hover:to-transparent transition-all duration-300" />
            
            {/* Subtle inner border */}
            <div className="absolute inset-[1px] rounded-2xl border border-white/50" />
          </motion.div>
        ) : (
          <motion.div
            key="revealed"
            initial={{ rotateX: -90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-950 rounded-2xl border border-amber-600/20 shadow-[0_12px_40px_rgba(0,0,0,0.25)] flex items-center justify-between px-8"
          >
            {/* Luxurious shine effect */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <motion.div
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: '200%', opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/8 to-transparent skew-x-12"
              />
            </div>
            
            {/* Inner glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-600/5 via-transparent to-transparent" />
            
            <div className="relative flex items-center gap-5 flex-1 z-10">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center shadow-[0_4px_12px_rgba(217,119,6,0.3)] flex-shrink-0">
                <span className="text-base font-semibold text-white">{number}</span>
              </div>
              <span className="text-2xl font-light text-white uppercase tracking-[0.15em]">
                {answer.text}
              </span>
            </div>
            
            <div className="relative bg-gradient-to-br from-amber-600 to-amber-700 px-6 py-3 rounded-lg shadow-[0_4px_16px_rgba(217,119,6,0.3)] flex-shrink-0 ml-6 z-10">
              <span className="text-3xl font-semibold text-white">{answer.points}</span>
              {/* Highlight overlay */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 via-transparent to-transparent" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}