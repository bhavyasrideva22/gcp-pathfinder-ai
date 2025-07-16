import { AssessmentSection, CareerRole } from '@/types/assessment';

export const assessmentSections: AssessmentSection[] = [
  {
    id: 'psychological',
    title: 'Psychological Fit',
    description: 'Evaluate your personality traits and cognitive style for GCP roles',
    icon: '🧠',
    questions: [
      {
        id: 'interest_1',
        type: 'likert',
        question: 'I find cloud computing and scalable systems fascinating',
        scale: { min: 1, max: 5, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }
      },
      {
        id: 'interest_2',
        type: 'likert',
        question: 'I enjoy automating repetitive tasks and processes',
        scale: { min: 1, max: 5, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }
      },
      {
        id: 'will_1',
        type: 'likert',
        question: 'I persist through complex technical challenges',
        scale: { min: 1, max: 5, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }
      },
      {
        id: 'cognitive_1',
        type: 'likert',
        question: 'I prefer systematic, structured approaches to problem-solving',
        scale: { min: 1, max: 5, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }
      },
      {
        id: 'ability_1',
        type: 'likert',
        question: 'I actively seek feedback and embrace continuous learning',
        scale: { min: 1, max: 5, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }
      }
    ]
  },
  {
    id: 'technical',
    title: 'Technical Aptitude',
    description: 'Test your technical knowledge and problem-solving abilities',
    icon: '🧪',
    questions: [
      {
        id: 'skill_1',
        type: 'multiple-choice',
        question: 'Which of these best describes virtualization?',
        options: [
          'Running multiple operating systems on one physical machine',
          'Creating backup copies of data',
          'Connecting computers in a network',
          'Installing software on multiple computers'
        ]
      },
      {
        id: 'skill_2',
        type: 'multiple-choice',
        question: 'What does API stand for?',
        options: [
          'Application Programming Interface',
          'Advanced Programming Implementation',
          'Automatic Process Integration',
          'Application Process Interface'
        ]
      },
      {
        id: 'cognitive_2',
        type: 'multiple-choice',
        question: 'In cloud computing, what is the main benefit of auto-scaling?',
        options: [
          'Automatically adjusts resources based on demand',
          'Automatically backs up data',
          'Automatically installs updates',
          'Automatically encrypts data'
        ]
      },
      {
        id: 'skill_3',
        type: 'multiple-choice',
        question: 'Which GCP service is primarily used for data warehousing?',
        options: [
          'BigQuery',
          'Cloud Storage',
          'Compute Engine',
          'Cloud Functions'
        ]
      },
      {
        id: 'skill_4',
        type: 'likert',
        question: 'How comfortable are you with command-line interfaces?',
        scale: { min: 1, max: 5, labels: ['Very Uncomfortable', 'Uncomfortable', 'Neutral', 'Comfortable', 'Very Comfortable'] }
      }
    ]
  },
  {
    id: 'wiscar',
    title: 'WISCAR Analysis',
    description: 'Comprehensive evaluation across six key dimensions',
    icon: '📊',
    questions: [
      {
        id: 'realworld_1',
        type: 'likert',
        question: 'I enjoy building systems that handle real-world production workloads',
        scale: { min: 1, max: 5, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }
      },
      {
        id: 'will_2',
        type: 'likert',
        question: 'I can maintain focus on long-term technical projects',
        scale: { min: 1, max: 5, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }
      },
      {
        id: 'interest_3',
        type: 'multiple-choice',
        question: 'Which type of work environment appeals most to you?',
        options: [
          'Building and maintaining cloud infrastructure',
          'Developing mobile applications',
          'Managing databases and data pipelines',
          'Creating user interfaces and experiences'
        ]
      },
      {
        id: 'ability_2',
        type: 'likert',
        question: 'I adapt quickly to new tools and technologies',
        scale: { min: 1, max: 5, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }
      },
      {
        id: 'realworld_2',
        type: 'likert',
        question: 'I understand the importance of security and compliance in cloud systems',
        scale: { min: 1, max: 5, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }
      }
    ]
  }
];

export const careerRoles: CareerRole[] = [
  {
    title: 'Cloud Engineer',
    description: 'Build and manage cloud infrastructure on GCP',
    keySkills: ['GCE', 'VPC', 'IAM', 'Terraform', 'Cloud Console'],
    salaryRange: '$80k - $140k',
    demandLevel: 'High'
  },
  {
    title: 'Cloud Architect',
    description: 'Design and optimize enterprise cloud solutions',
    keySkills: ['Architecture Design', 'Security', 'Cost Optimization', 'Migration'],
    salaryRange: '$120k - $200k',
    demandLevel: 'High'
  },
  {
    title: 'Data Engineer',
    description: 'Build data pipelines and analytics solutions',
    keySkills: ['BigQuery', 'Dataflow', 'Pub/Sub', 'Python', 'SQL'],
    salaryRange: '$100k - $160k',
    demandLevel: 'High'
  },
  {
    title: 'DevOps/SRE Engineer',
    description: 'Automate deployment and ensure system reliability',
    keySkills: ['GKE', 'CI/CD', 'Monitoring', 'Terraform', 'Scripting'],
    salaryRange: '$90k - $150k',
    demandLevel: 'High'
  },
  {
    title: 'ML Engineer',
    description: 'Deploy and manage machine learning models on GCP',
    keySkills: ['Vertex AI', 'TensorFlow', 'Python', 'BigQuery ML', 'AutoML'],
    salaryRange: '$110k - $180k',
    demandLevel: 'Medium'
  },
  {
    title: 'Cloud Security Specialist',
    description: 'Secure cloud environments and ensure compliance',
    keySkills: ['IAM', 'VPC Security', 'Audit Logging', 'Compliance', 'Security Center'],
    salaryRange: '$95k - $165k',
    demandLevel: 'Medium'
  }
];