import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { AssessmentQuestion, AssessmentResponse } from '@/types/assessment';
import { cn } from '@/lib/utils';

interface QuestionCardProps {
  question: AssessmentQuestion;
  onAnswer: (response: AssessmentResponse) => void;
  onNext: () => void;
  questionNumber: number;
  totalQuestions: number;
  initialValue?: string | number;
}

export const QuestionCard = ({ 
  question, 
  onAnswer, 
  onNext, 
  questionNumber, 
  totalQuestions,
  initialValue 
}: QuestionCardProps) => {
  const [selectedValue, setSelectedValue] = useState<string>(
    initialValue?.toString() || ''
  );

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
    const numericValue = question.type === 'likert' ? parseInt(value) : value;
    onAnswer({
      questionId: question.id,
      value: numericValue
    });
  };

  const canProceed = selectedValue !== '';

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-medium">
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">
            Question {questionNumber} of {totalQuestions}
          </span>
          <span className="text-sm font-medium text-primary">
            {Math.round((questionNumber / totalQuestions) * 100)}% Complete
          </span>
        </div>
        <CardTitle className="text-xl leading-relaxed">
          {question.question}
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        {question.type === 'likert' && question.scale && (
          <RadioGroup 
            value={selectedValue} 
            onValueChange={handleValueChange}
            className="space-y-3"
          >
            {question.scale.labels.map((label, index) => (
              <div key={index} className="flex items-center space-x-3">
                <RadioGroupItem 
                  value={(index + 1).toString()} 
                  id={`option-${index}`}
                  className="text-primary"
                />
                <Label 
                  htmlFor={`option-${index}`}
                  className={cn(
                    "flex-1 cursor-pointer p-3 rounded-lg border transition-all",
                    selectedValue === (index + 1).toString()
                      ? "bg-primary/10 border-primary text-primary"
                      : "bg-card hover:bg-muted border-border"
                  )}
                >
                  {label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        )}

        {question.type === 'multiple-choice' && question.options && (
          <RadioGroup 
            value={selectedValue} 
            onValueChange={handleValueChange}
            className="space-y-3"
          >
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-3">
                <RadioGroupItem 
                  value={option} 
                  id={`option-${index}`}
                  className="text-primary"
                />
                <Label 
                  htmlFor={`option-${index}`}
                  className={cn(
                    "flex-1 cursor-pointer p-3 rounded-lg border transition-all",
                    selectedValue === option
                      ? "bg-primary/10 border-primary text-primary"
                      : "bg-card hover:bg-muted border-border"
                  )}
                >
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        )}
      </CardContent>

      <CardFooter>
        <Button 
          onClick={onNext}
          disabled={!canProceed}
          className="w-full"
          size="lg"
        >
          {questionNumber === totalQuestions ? 'Complete Assessment' : 'Next Question'}
        </Button>
      </CardFooter>
    </Card>
  );
};