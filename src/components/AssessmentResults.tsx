import { AssessmentResult } from '@/types/assessment';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { WISCARChart } from './WISCARChart';
import { careerRoles } from '@/data/assessmentData';
import { CheckCircle, XCircle, AlertCircle, TrendingUp, BookOpen, Users } from 'lucide-react';

interface AssessmentResultsProps {
  result: AssessmentResult;
  onRestart?: () => void;
}

export const AssessmentResults = ({ result, onRestart }: AssessmentResultsProps) => {
  const getRecommendationIcon = () => {
    switch (result.recommendation) {
      case 'Yes': return <CheckCircle className="w-6 h-6 text-gcp-green" />;
      case 'Maybe': return <AlertCircle className="w-6 h-6 text-gcp-yellow" />;
      case 'No': return <XCircle className="w-6 h-6 text-gcp-red" />;
    }
  };

  const getRecommendationColor = () => {
    switch (result.recommendation) {
      case 'Yes': return 'bg-gcp-green/20 text-gcp-green border-gcp-green/30';
      case 'Maybe': return 'bg-gcp-yellow/20 text-gcp-yellow border-gcp-yellow/30';
      case 'No': return 'bg-gcp-red/20 text-gcp-red border-gcp-red/30';
    }
  };

  const topRoles = careerRoles.slice(0, 3);

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Your GCP Assessment Results</h1>
        <p className="text-xl text-muted-foreground">
          Personalized insights and career guidance for Google Cloud Platform
        </p>
      </div>

      {/* Main Recommendation */}
      <Card className={`border-2 shadow-strong ${getRecommendationColor()}`}>
        <CardHeader>
          <div className="flex items-center justify-center gap-3">
            {getRecommendationIcon()}
            <CardTitle className="text-2xl">
              {result.recommendation === 'Yes' && 'GCP is an Excellent Fit!'}
              {result.recommendation === 'Maybe' && 'GCP Shows Promise'}
              {result.recommendation === 'No' && 'Consider Alternative Paths'}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="flex justify-center items-center gap-6">
            <div className="text-center">
              <p className="text-4xl font-bold">{result.overallScore}</p>
              <p className="text-sm text-muted-foreground">Overall Score</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">{result.confidenceScore}%</p>
              <p className="text-sm text-muted-foreground">Confidence</p>
            </div>
          </div>
          <p className="text-lg">{result.reason}</p>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* WISCAR Analysis */}
        <WISCARChart scores={result.wiscarScores} />

        {/* Score Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Score Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Psychological Fit</span>
                <Badge variant="secondary" className="text-lg px-3 py-1">
                  {result.psychometricScore}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Technical Readiness</span>
                <Badge variant="secondary" className="text-lg px-3 py-1">
                  {result.technicalScore}
                </Badge>
              </div>
            </div>

            <div className="pt-4 border-t space-y-3">
              <h4 className="font-semibold text-lg">Key Strengths</h4>
              <div className="space-y-2">
                {Object.entries(result.wiscarScores)
                  .sort(([, a], [, b]) => b - a)
                  .slice(0, 3)
                  .map(([key, value]) => (
                    <div key={key} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gcp-green" />
                      <span className="capitalize">{key}: {Math.round(value)}</span>
                    </div>
                  ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Career Roles */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Recommended GCP Career Paths
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {topRoles.map((role, index) => (
              <Card key={role.title} className="bg-muted/50">
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{role.title}</h4>
                    <Badge 
                      variant={role.demandLevel === 'High' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {role.demandLevel} Demand
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{role.description}</p>
                  {role.salaryRange && (
                    <p className="text-sm font-medium text-gcp-green">{role.salaryRange}</p>
                  )}
                  <div className="flex flex-wrap gap-1">
                    {role.keySkills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gcp-green">
              <BookOpen className="w-5 h-5" />
              Recommended Next Steps
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {result.nextSteps.map((step, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-6 h-6 bg-gcp-green text-white rounded-full text-xs flex items-center justify-center mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-sm">{step}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {result.recommendation !== 'Yes' && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-muted-foreground">
                <AlertCircle className="w-5 h-5" />
                Alternative Paths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {result.alternativePaths.map((path, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="flex-shrink-0 w-6 h-6 bg-muted text-muted-foreground rounded-full text-xs flex items-center justify-center mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-sm">{path}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Actions */}
      <Card>
        <CardContent className="p-6 text-center space-y-4">
          <p className="text-muted-foreground">
            Ready to start your GCP journey or want to retake the assessment?
          </p>
          <div className="flex gap-4 justify-center">
            <Button onClick={onRestart} variant="outline">
              Retake Assessment
            </Button>
            <Button className="bg-gradient-primary">
              Explore GCP Learning Path
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};