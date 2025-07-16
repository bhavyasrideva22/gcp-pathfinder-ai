import { WISCARScores } from '@/types/assessment';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface WISCARChartProps {
  scores: WISCARScores;
  className?: string;
}

export const WISCARChart = ({ scores, className }: WISCARChartProps) => {
  const dimensions = [
    { key: 'will', label: 'Will', description: 'Persistence & Grit', value: scores.will },
    { key: 'interest', label: 'Interest', description: 'Passion & Motivation', value: scores.interest },
    { key: 'skill', label: 'Skill', description: 'Technical Proficiency', value: scores.skill },
    { key: 'cognitive', label: 'Cognitive', description: 'Problem-Solving Ability', value: scores.cognitive },
    { key: 'ability', label: 'Ability to Learn', description: 'Growth Mindset', value: scores.ability },
    { key: 'realWorld', label: 'Real-World Fit', description: 'Practical Application', value: scores.realWorld }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'bg-gcp-green';
    if (score >= 60) return 'bg-gcp-yellow';
    return 'bg-gcp-red';
  };

  const getScoreColorLight = (score: number) => {
    if (score >= 80) return 'bg-gcp-green/20';
    if (score >= 60) return 'bg-gcp-yellow/20';
    return 'bg-gcp-red/20';
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-center">WISCAR Analysis</CardTitle>
        <p className="text-center text-muted-foreground text-sm">
          Comprehensive evaluation across six key dimensions
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {dimensions.map((dimension) => (
            <div key={dimension.key} className="space-y-2">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">{dimension.label}</h4>
                  <p className="text-sm text-muted-foreground">{dimension.description}</p>
                </div>
                <span className="text-2xl font-bold text-primary">
                  {Math.round(dimension.value)}
                </span>
              </div>
              
              <div className="relative">
                <div className={`w-full h-3 rounded-full ${getScoreColorLight(dimension.value)}`}>
                  <div 
                    className={`h-3 rounded-full transition-all duration-1000 ease-out ${getScoreColor(dimension.value)}`}
                    style={{ width: `${dimension.value}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Overall WISCAR Score</p>
            <p className="text-3xl font-bold text-primary">
              {Math.round(Object.values(scores).reduce((a, b) => a + b, 0) / 6)}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};