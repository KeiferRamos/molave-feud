import { motion } from 'motion/react';

interface ScoreBoardProps {
  team1Score: number;
  team2Score: number;
  team1Name?: string;
  team2Name?: string;
}

export function ScoreBoard({ 
  team1Score, 
  team2Score, 
  team1Name = "Team 1", 
  team2Name = "Team 2" 
}: ScoreBoardProps) {
  return (
    <div className="flex gap-12 justify-center mb-12">
      <TeamScore name={team1Name} score={team1Score} color="red" />
      <TeamScore name={team2Name} score={team2Score} color="blue" />
    </div>
  );
}

interface TeamScoreProps {
  name: string;
  score: number;
  color: 'red' | 'blue';
}

function TeamScore({ name, score, color }: TeamScoreProps) {
  const colors = color === 'red' 
    ? {
        gradient: 'from-rose-500 via-rose-600 to-rose-700',
        border: 'border-rose-400/50',
        glow: 'shadow-[0_0_40px_rgba(244,63,94,0.4)]'
      }
    : {
        gradient: 'from-blue-500 via-blue-600 to-blue-700',
        border: 'border-blue-400/50',
        glow: 'shadow-[0_0_40px_rgba(59,130,246,0.4)]'
      };
  
  return (
    <div className={`relative bg-gradient-to-br ${colors.gradient} rounded-2xl ${colors.glow} p-8 min-w-[240px] border-2 ${colors.border} backdrop-blur-sm`}>
      {/* Inner highlight */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative">
        <h3 className="text-white text-2xl font-bold text-center mb-3 uppercase tracking-wider drop-shadow-lg">
          {name}
        </h3>
        <motion.div
          key={score}
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="text-7xl font-black text-white text-center drop-shadow-2xl"
        >
          {score}
        </motion.div>
      </div>
      
      {/* Bottom shine */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent rounded-b-2xl pointer-events-none" />
    </div>
  );
}