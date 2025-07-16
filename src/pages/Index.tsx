import { useState } from 'react';
import { LandingPage } from '@/components/LandingPage';
import { AssessmentInterface } from '@/components/AssessmentInterface';

const Index = () => {
  const [showAssessment, setShowAssessment] = useState(false);

  const handleStartAssessment = () => {
    setShowAssessment(true);
  };

  const handleCompleteAssessment = () => {
    // Assessment completed - could add analytics or navigation here
  };

  if (showAssessment) {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="max-w-6xl mx-auto px-4">
          <AssessmentInterface onComplete={handleCompleteAssessment} />
        </div>
      </div>
    );
  }

  return (
    <LandingPage onStartAssessment={handleStartAssessment} />
  );
};

export default Index;
