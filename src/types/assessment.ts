export interface AssessmentQuestion {
  id: string;
  type: 'likert' | 'multiple-choice' | 'yes-no';
  question: string;
  options?: string[];
  scale?: { min: number; max: number; labels: string[] };
}

export interface AssessmentSection {
  id: string;
  title: string;
  description: string;
  questions: AssessmentQuestion[];
  icon: string;
}

export interface AssessmentResponse {
  questionId: string;
  value: number | string;
}

export interface WISCARScores {
  will: number;
  interest: number;
  skill: number;
  cognitive: number;
  ability: number;
  realWorld: number;
}

export interface AssessmentResult {
  psychometricScore: number;
  technicalScore: number;
  wiscarScores: WISCARScores;
  overallScore: number;
  recommendation: 'Yes' | 'Maybe' | 'No';
  confidenceScore: number;
  reason: string;
  nextSteps: string[];
  alternativePaths: string[];
}

export interface CareerRole {
  title: string;
  description: string;
  keySkills: string[];
  salaryRange?: string;
  demandLevel: 'High' | 'Medium' | 'Low';
}