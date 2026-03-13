import { RotateCcw, Trophy, Play } from 'lucide-react';

interface GameControlsProps {
  onNewRound: () => void;
  onAddStrike: () => void;
  onResetStrikes: () => void;
  roundPoints: number;
}

export function GameControls({ onNewRound, onAddStrike, onResetStrikes, roundPoints }: GameControlsProps) {
  return (
    <div className="flex gap-4 justify-center items-center flex-wrap">
      <button
        onClick={onNewRound}
        className="group relative bg-gradient-to-br from-emerald-500 to-emerald-700 hover:from-emerald-400 hover:to-emerald-600 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 border-2 border-emerald-400/30 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
        <Play className="w-5 h-5 relative z-10" />
        <span className="relative z-10 text-lg">New Round</span>
      </button>
      
      <button
        onClick={onAddStrike}
        className="group relative bg-gradient-to-br from-rose-500 to-rose-700 hover:from-rose-400 hover:to-rose-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-rose-500/50 transition-all duration-300 border-2 border-rose-400/30 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
        <span className="relative z-10 text-lg">Add Strike</span>
      </button>
      
      <button
        onClick={onResetStrikes}
        className="group relative bg-gradient-to-br from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 shadow-lg hover:shadow-blue-500/50 transition-all duration-300 border-2 border-blue-400/30 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
        <RotateCcw className="w-5 h-5 relative z-10" />
        <span className="relative z-10 text-lg">Reset Strikes</span>
      </button>

      <div className="relative bg-gradient-to-br from-amber-500 to-amber-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg flex items-center gap-3 border-2 border-amber-400/50">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
        <Trophy className="w-6 h-6 relative z-10" />
        <span className="relative z-10 text-lg">Round: {roundPoints}</span>
      </div>
    </div>
  );
}