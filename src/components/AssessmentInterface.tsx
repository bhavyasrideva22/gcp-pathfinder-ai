import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AssessmentNavigation } from './AssessmentNavigation';
import { QuestionCard } from './QuestionCard';
import { ProgressBar } from './ProgressBar';
import { useAssessment } from '@/hooks/useAssessment';
import { assessmentSections } from '@/data/assessmentData';
import { AssessmentResults } from './AssessmentResults';

interface AssessmentInterfaceProps {
  onComplete?: () => void;
}

export const AssessmentInterface = ({ onComplete }: AssessmentInterfaceProps) => {
  const {
    currentSection,
    currentQuestion,
    responses,
    isComplete,
    result,
    addResponse,
    nextQuestion,
    nextSection,
    calculateResults,
    setCurrentSection,
    setCurrentQuestion
  } = useAssessment();

  const currentSectionData = assessmentSections[currentSection];
  const currentQuestionData = currentSectionData?.questions[currentQuestion];
  
  // Calculate total questions and current position
  const totalQuestions = assessmentSections.reduce((total, section) => total + section.questions.length, 0);
  const currentQuestionNumber = assessmentSections
    .slice(0, currentSection)
    .reduce((total, section) => total + section.questions.length, 0) + currentQuestion + 1;

  const progress = (currentQuestionNumber / totalQuestions) * 100;

  // Navigation steps
  const navigationSteps = assessmentSections.map((section, index) => ({
    id: section.id,
    title: section.title,
    icon: section.icon,
    completed: index < currentSection || (index === currentSection && isComplete),
    active: index === currentSection && !isComplete
  }));

  const handleAnswer = (response: any) => {
    addResponse(response);
  };

  const handleNext = () => {
    if (!currentSectionData) return;

    if (currentQuestion < currentSectionData.questions.length - 1) {
      nextQuestion();
    } else if (currentSection < assessmentSections.length - 1) {
      nextSection();
    } else {
      // Assessment complete
      calculateResults();
      onComplete?.();
    }
  };

  const handleStepClick = (stepId: string) => {
    const sectionIndex = assessmentSections.findIndex(s => s.id === stepId);
    if (sectionIndex >= 0 && sectionIndex <= currentSection) {
      setCurrentSection(sectionIndex);
      setCurrentQuestion(0);
    }
  };

  // Get current response value for pre-selection
  const getCurrentResponseValue = () => {
    if (!currentQuestionData) return undefined;
    const response = responses.find(r => r.questionId === currentQuestionData.id);
    return response?.value;
  };

  if (isComplete && result) {
    return <AssessmentResults result={result} />;
  }

  if (!currentSectionData || !currentQuestionData) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <p className="text-muted-foreground">Assessment data not available</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">GCP Skills Assessment</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover your fit for Google Cloud Platform roles through comprehensive evaluation
        </p>
        
        {/* Progress */}
        <div className="flex items-center gap-4 max-w-2xl mx-auto">
          <ProgressBar progress={progress} className="flex-1" />
          <span className="text-sm font-medium text-primary">
            {Math.round(progress)}% Complete
          </span>
        </div>
      </div>

      {/* Navigation */}
      <AssessmentNavigation 
        steps={navigationSteps}
        onStepClick={handleStepClick}
        className="justify-center"
      />

      {/* Current Section Info */}
      <Card className="bg-muted/50">
        <CardContent className="p-4">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">
              {currentSectionData.icon} {currentSectionData.title}
            </h2>
            <p className="text-muted-foreground text-sm">
              {currentSectionData.description}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Question */}
      <QuestionCard
        question={currentQuestionData}
        onAnswer={handleAnswer}
        onNext={handleNext}
        questionNumber={currentQuestionNumber}
        totalQuestions={totalQuestions}
        initialValue={getCurrentResponseValue()}
      />
    </div>
  );
};