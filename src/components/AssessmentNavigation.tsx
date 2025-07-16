import { cn } from '@/lib/utils';
import { CheckCircle } from 'lucide-react';

interface NavigationStep {
  id: string;
  title: string;
  icon: string;
  completed: boolean;
  active: boolean;
}

interface AssessmentNavigationProps {
  steps: NavigationStep[];
  onStepClick?: (stepId: string) => void;
  className?: string;
}

export const AssessmentNavigation = ({ steps, onStepClick, className }: AssessmentNavigationProps) => {
  return (
    <div className={cn("flex flex-wrap gap-2 md:gap-4", className)}>
      {steps.map((step, index) => (
        <div
          key={step.id}
          className={cn(
            "flex items-center gap-2 px-3 py-2 rounded-lg border transition-all duration-200",
            "text-sm font-medium cursor-pointer",
            step.active 
              ? "bg-primary text-primary-foreground border-primary shadow-medium" 
              : step.completed
              ? "bg-card text-card-foreground border-border hover:bg-muted"
              : "bg-muted text-muted-foreground border-border hover:bg-muted/80"
          )}
          onClick={() => onStepClick?.(step.id)}
        >
          {step.completed ? (
            <CheckCircle className="w-4 h-4 text-gcp-green" />
          ) : (
            <span className="text-lg">{step.icon}</span>
          )}
          <span className="hidden sm:inline">{step.title}</span>
        </div>
      ))}
    </div>
  );
};