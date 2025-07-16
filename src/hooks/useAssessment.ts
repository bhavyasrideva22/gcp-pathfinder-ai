import { useState, useCallback } from 'react';
import { AssessmentResponse, AssessmentResult, WISCARScores } from '@/types/assessment';

export const useAssessment = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<AssessmentResponse[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [result, setResult] = useState<AssessmentResult | null>(null);

  const addResponse = useCallback((response: AssessmentResponse) => {
    setResponses(prev => {
      const existing = prev.findIndex(r => r.questionId === response.questionId);
      if (existing >= 0) {
        const updated = [...prev];
        updated[existing] = response;
        return updated;
      }
      return [...prev, response];
    });
  }, []);

  const nextQuestion = useCallback(() => {
    setCurrentQuestion(prev => prev + 1);
  }, []);

  const nextSection = useCallback(() => {
    setCurrentSection(prev => prev + 1);
    setCurrentQuestion(0);
  }, []);

  const calculateWISCARScores = (responses: AssessmentResponse[]): WISCARScores => {
    // Simplified scoring algorithm - in real implementation, this would be more sophisticated
    const sections = {
      will: responses.filter(r => r.questionId.includes('will')),
      interest: responses.filter(r => r.questionId.includes('interest')),
      skill: responses.filter(r => r.questionId.includes('skill')),
      cognitive: responses.filter(r => r.questionId.includes('cognitive')),
      ability: responses.filter(r => r.questionId.includes('ability')),
      realWorld: responses.filter(r => r.questionId.includes('realworld'))
    };

    const calculateAverage = (sectionResponses: AssessmentResponse[]) => {
      if (sectionResponses.length === 0) return 65;
      const sum = sectionResponses.reduce((acc, r) => acc + (typeof r.value === 'number' ? r.value : 3), 0);
      return Math.min(100, Math.max(0, (sum / sectionResponses.length) * 20));
    };

    return {
      will: calculateAverage(sections.will),
      interest: calculateAverage(sections.interest),
      skill: calculateAverage(sections.skill),
      cognitive: calculateAverage(sections.cognitive),
      ability: calculateAverage(sections.ability),
      realWorld: calculateAverage(sections.realWorld)
    };
  };

  const calculateResults = useCallback(() => {
    if (responses.length === 0) return;

    const wiscarScores = calculateWISCARScores(responses);
    const psychometricScore = Math.round((wiscarScores.will + wiscarScores.interest + wiscarScores.ability) / 3);
    const technicalScore = Math.round((wiscarScores.skill + wiscarScores.cognitive) / 2);
    const overallScore = Math.round(Object.values(wiscarScores).reduce((a, b) => a + b, 0) / 6);

    let recommendation: 'Yes' | 'Maybe' | 'No' = 'Maybe';
    let reason = '';
    
    if (overallScore >= 75) {
      recommendation = 'Yes';
      reason = 'Strong alignment across all dimensions - GCP is an excellent fit for you.';
    } else if (overallScore >= 60) {
      recommendation = 'Maybe';
      reason = 'Good potential with some areas to develop - structured learning will help bridge gaps.';
    } else {
      recommendation = 'No';
      reason = 'Consider alternative paths or foundational skill building before pursuing GCP.';
    }

    const result: AssessmentResult = {
      psychometricScore,
      technicalScore,
      wiscarScores,
      overallScore,
      recommendation,
      confidenceScore: overallScore,
      reason,
      nextSteps: [
        'Explore GCP Essentials on Google Cloud Skills Boost',
        'Set up a GCE VM and deploy a simple application',
        'Complete BigQuery data analysis mini-project',
        'Practice with Google Cloud Console and CLI'
      ],
      alternativePaths: [
        'Consider AWS or Azure fundamentals courses first',
        'Explore DevOps or Linux engineering paths',
        'Focus on programming fundamentals before cloud'
      ]
    };

    setResult(result);
    setIsComplete(true);
  }, [responses]);

  const resetAssessment = useCallback(() => {
    setCurrentSection(0);
    setCurrentQuestion(0);
    setResponses([]);
    setIsComplete(false);
    setResult(null);
  }, []);

  return {
    currentSection,
    currentQuestion,
    responses,
    isComplete,
    result,
    addResponse,
    nextQuestion,
    nextSection,
    calculateResults,
    resetAssessment,
    setCurrentSection,
    setCurrentQuestion
  };
};