import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ProgressBar } from './ProgressBar';
import { AssessmentNavigation } from './AssessmentNavigation';
import { 
  Cloud, 
  Settings, 
  Users, 
  Database, 
  Shield, 
  Zap,
  Clock,
  Award,
  TrendingUp,
  Brain,
  Target,
  BarChart3
} from 'lucide-react';

interface LandingPageProps {
  onStartAssessment: () => void;
}

export const LandingPage = ({ onStartAssessment }: LandingPageProps) => {
  // Mock progress for demonstration
  const [progress] = useState(20);

  const navigationSteps = [
    { id: 'intro', title: 'Introduction', icon: '🎯', completed: false, active: true },
    { id: 'psychological', title: 'Psychological Fit', icon: '🧠', completed: false, active: false },
    { id: 'technical', title: 'Technical Aptitude', icon: '🧪', completed: false, active: false },
    { id: 'wiscar', title: 'WISCAR Analysis', icon: '📊', completed: false, active: false },
    { id: 'results', title: 'Your Results', icon: '🎯', completed: false, active: false }
  ];

  const gcpFeatures = [
    {
      icon: <Cloud className="w-6 h-6 text-gcp-blue" />,
      title: 'Cloud Platform',
      description: 'Scalable, secure, and accessible from anywhere'
    },
    {
      icon: <Settings className="w-6 h-6 text-gcp-green" />,
      title: 'Workflow Automation',
      description: 'Streamline processes and reduce manual work'
    },
    {
      icon: <Users className="w-6 h-6 text-gcp-yellow" />,
      title: 'Enterprise Scale',
      description: 'Used by Fortune 500 companies worldwide'
    }
  ];

  const careerOpportunities = [
    { title: 'Cloud Engineer', description: 'Build and manage infrastructure' },
    { title: 'Cloud Architect', description: 'Design advanced system solutions' },
    { title: 'Data Engineer', description: 'Build data pipelines and analytics' },
    { title: 'DevOps/SRE Engineer', description: 'Automate deployment & reliability' },
    { title: 'ML Engineer', description: 'Deploy machine learning models' },
    { title: 'Cloud Security Specialist', description: 'Secure cloud environments' }
  ];

  const idealTraits = [
    'Strong analytical thinking',
    'Systems-oriented mindset', 
    'Logical problem-solving',
    'Interest in scalable infrastructure',
    'Comfort with automation',
    'Attention to security details'
  ];

  const assessmentModules = [
    {
      number: '1',
      title: 'Psychological Fit Evaluation',
      icon: <Brain className="w-6 h-6" />
    },
    {
      number: '2', 
      title: 'Technical Aptitude Testing',
      icon: <Target className="w-6 h-6" />
    },
    {
      number: '3',
      title: 'WISCAR Framework Analysis', 
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  const resultsInclude = [
    'Personalized fit score (0-100)',
    'Detailed trait analysis', 
    'Technical readiness assessment',
    'Career pathway recommendations',
    'Next steps and learning resources'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Should I Learn Google Cloud Platform?</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">{progress}% Complete</span>
              <ProgressBar progress={progress} className="w-32" />
            </div>
          </div>
          <p className="text-muted-foreground mt-1">
            An AI-driven assessment exploring your fit, readiness, and career alignment with GCP
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-b bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <AssessmentNavigation steps={navigationSteps} />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
        
        {/* Hero Section */}
        <Card className="bg-gradient-hero text-white border-0 shadow-strong">
          <CardContent className="p-8 text-center space-y-6">
            <h2 className="text-4xl font-bold">
              Discover Your GCP Career Potential
            </h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Take our comprehensive assessment to evaluate your psychological fit, 
              technical readiness, and career alignment for a future in Google Cloud Platform 
              development and administration.
            </p>
            
            <div className="flex justify-center items-center gap-8 text-white/90">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>25-30 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>Personalized Results</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                <span>Career Guidance</span>
              </div>
            </div>

            <Button 
              size="lg" 
              onClick={onStartAssessment}
              className="bg-white text-gcp-blue hover:bg-white/90 font-semibold px-8 py-3 text-lg"
            >
              Start Assessment →
            </Button>
          </CardContent>
        </Card>

        {/* What is GCP */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold flex items-center justify-center gap-3">
              <Zap className="w-8 h-8 text-gcp-blue" />
              What is Google Cloud Platform?
            </h2>
          </div>
          
          <Card>
            <CardContent className="p-6">
              <p className="text-lg text-center mb-8 max-w-4xl mx-auto">
                Google Cloud Platform is a powerful <strong>cloud computing suite</strong> that specializes in 
                <strong> compute, storage, networking, AI/ML, analytics, DevOps, and serverless technologies</strong>. 
                It empowers organizations from startups to enterprises to build scalable, secure applications 
                and drive digital transformation across various industries.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {gcpFeatures.map((feature, index) => (
                  <div key={index} className="text-center space-y-3">
                    <div className="flex justify-center">{feature.icon}</div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Career Opportunities */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold flex items-center justify-center gap-3">
              <Users className="w-8 h-8 text-gcp-green" />
              Career Opportunities
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {careerOpportunities.map((career, index) => (
              <Card key={index} className="hover:shadow-medium transition-shadow">
                <CardContent className="p-4 space-y-2">
                  <h3 className="font-semibold">{career.title}</h3>
                  <p className="text-sm text-muted-foreground">{career.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Ideal Traits */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Ideal Traits & Skills</h2>
          </div>
          
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {idealTraits.map((trait, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gcp-blue rounded-full"></div>
                    <span>{trait}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* What You'll Discover */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">What You'll Discover</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Assessment Modules:</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {assessmentModules.map((module, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      {module.number}
                    </div>
                    <div className="flex items-center gap-2">
                      {module.icon}
                      <span className="font-medium">{module.title}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Your Results Include:</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {resultsInclude.map((result, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-gcp-green">•</span>
                    <span>{result}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <Card className="border-2 border-primary bg-primary/5">
          <CardContent className="p-8 text-center space-y-4">
            <h2 className="text-2xl font-bold">Ready to Discover Your GCP Potential?</h2>
            <p className="text-muted-foreground">
              Take the comprehensive assessment and get personalized insights into your 
              Google Cloud Platform career readiness.
            </p>
            <Button 
              size="lg" 
              onClick={onStartAssessment}
              className="bg-gradient-primary font-semibold px-8 py-3"
            >
              Start Assessment Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};