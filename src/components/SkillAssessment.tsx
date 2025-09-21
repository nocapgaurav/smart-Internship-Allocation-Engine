import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle, Trophy, Star, Zap } from "lucide-react";

interface Skill {
  id: string;
  name: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

const skills: Skill[] = [
  // JavaScript - All Levels
  { id: '1', name: 'JavaScript Basics', category: 'Programming', difficulty: 'beginner' },
  { id: '2', name: 'JavaScript ES6+', category: 'Programming', difficulty: 'intermediate' },
  { id: '3', name: 'JavaScript Performance & Optimization', category: 'Programming', difficulty: 'advanced' },

  // Python - All Levels
  { id: '4', name: 'Python Basics', category: 'Programming', difficulty: 'beginner' },
  { id: '5', name: 'Python Libraries & Frameworks', category: 'Programming', difficulty: 'intermediate' },
  { id: '6', name: 'Python Advanced Concepts', category: 'Programming', difficulty: 'advanced' },

  // Java - All Levels
  { id: '7', name: 'Java Fundamentals', category: 'Programming', difficulty: 'beginner' },
  { id: '8', name: 'Java OOP & Collections', category: 'Programming', difficulty: 'intermediate' },
  { id: '9', name: 'Java Concurrency & JVM', category: 'Programming', difficulty: 'advanced' },

  // C++ - All Levels
  { id: '10', name: 'C++ Basics', category: 'Programming', difficulty: 'beginner' },
  { id: '11', name: 'C++ OOP & STL', category: 'Programming', difficulty: 'intermediate' },
  { id: '12', name: 'C++ Memory Management & Templates', category: 'Programming', difficulty: 'advanced' },

  // TypeScript - All Levels
  { id: '13', name: 'TypeScript Basics', category: 'Programming', difficulty: 'beginner' },
  { id: '14', name: 'TypeScript Advanced Types', category: 'Programming', difficulty: 'intermediate' },
  { id: '15', name: 'TypeScript Design Patterns', category: 'Programming', difficulty: 'advanced' },

  // React - All Levels
  { id: '16', name: 'React Basics', category: 'Frontend', difficulty: 'beginner' },
  { id: '17', name: 'React Hooks & State Management', category: 'Frontend', difficulty: 'intermediate' },
  { id: '18', name: 'React Performance & Architecture', category: 'Frontend', difficulty: 'advanced' },

  // Vue.js - All Levels
  { id: '19', name: 'Vue.js Basics', category: 'Frontend', difficulty: 'beginner' },
  { id: '20', name: 'Vue.js Composition API', category: 'Frontend', difficulty: 'intermediate' },
  { id: '21', name: 'Vue.js Advanced Patterns', category: 'Frontend', difficulty: 'advanced' },

  // Angular - All Levels
  { id: '22', name: 'Angular Basics', category: 'Frontend', difficulty: 'beginner' },
  { id: '23', name: 'Angular Services & Routing', category: 'Frontend', difficulty: 'intermediate' },
  { id: '24', name: 'Angular Architecture & RxJS', category: 'Frontend', difficulty: 'advanced' },

  // Node.js - All Levels
  { id: '25', name: 'Node.js Basics', category: 'Backend', difficulty: 'beginner' },
  { id: '26', name: 'Node.js APIs & Middleware', category: 'Backend', difficulty: 'intermediate' },
  { id: '27', name: 'Node.js Scalability & Performance', category: 'Backend', difficulty: 'advanced' },

  // Express.js - All Levels
  { id: '28', name: 'Express.js Basics', category: 'Backend', difficulty: 'beginner' },
  { id: '29', name: 'Express.js Advanced Routing', category: 'Backend', difficulty: 'intermediate' },
  { id: '30', name: 'Express.js Security & Testing', category: 'Backend', difficulty: 'advanced' },

  // Django - All Levels
  { id: '31', name: 'Django Basics', category: 'Backend', difficulty: 'beginner' },
  { id: '32', name: 'Django Models & Views', category: 'Backend', difficulty: 'intermediate' },
  { id: '33', name: 'Django REST & Deployment', category: 'Backend', difficulty: 'advanced' },

  // SQL - All Levels
  { id: '34', name: 'SQL Basics', category: 'Database', difficulty: 'beginner' },
  { id: '35', name: 'SQL Joins & Functions', category: 'Database', difficulty: 'intermediate' },
  { id: '36', name: 'SQL Performance & Optimization', category: 'Database', difficulty: 'advanced' },

  // MongoDB - All Levels
  { id: '37', name: 'MongoDB Basics', category: 'Database', difficulty: 'beginner' },
  { id: '38', name: 'MongoDB Aggregation', category: 'Database', difficulty: 'intermediate' },
  { id: '39', name: 'MongoDB Sharding & Replication', category: 'Database', difficulty: 'advanced' },

  // PostgreSQL - All Levels
  { id: '40', name: 'PostgreSQL Basics', category: 'Database', difficulty: 'beginner' },
  { id: '41', name: 'PostgreSQL Advanced Queries', category: 'Database', difficulty: 'intermediate' },
  { id: '42', name: 'PostgreSQL Administration', category: 'Database', difficulty: 'advanced' },

  // Machine Learning - All Levels
  { id: '43', name: 'ML Fundamentals', category: 'AI/ML', difficulty: 'beginner' },
  { id: '44', name: 'ML Algorithms & Models', category: 'AI/ML', difficulty: 'intermediate' },
  { id: '45', name: 'ML Production & MLOps', category: 'AI/ML', difficulty: 'advanced' },

  // Data Science - All Levels
  { id: '46', name: 'Data Analysis Basics', category: 'AI/ML', difficulty: 'beginner' },
  { id: '47', name: 'Statistical Analysis', category: 'AI/ML', difficulty: 'intermediate' },
  { id: '48', name: 'Advanced Analytics', category: 'AI/ML', difficulty: 'advanced' },

  // TensorFlow - All Levels
  { id: '49', name: 'TensorFlow Basics', category: 'AI/ML', difficulty: 'beginner' },
  { id: '50', name: 'TensorFlow Models', category: 'AI/ML', difficulty: 'intermediate' },
  { id: '51', name: 'TensorFlow Production', category: 'AI/ML', difficulty: 'advanced' },

  // UI/UX Design - All Levels
  { id: '52', name: 'Design Principles', category: 'Design', difficulty: 'beginner' },
  { id: '53', name: 'User Experience Design', category: 'Design', difficulty: 'intermediate' },
  { id: '54', name: 'Design Systems & Strategy', category: 'Design', difficulty: 'advanced' },

  // Figma - All Levels
  { id: '55', name: 'Figma Basics', category: 'Design', difficulty: 'beginner' },
  { id: '56', name: 'Figma Prototyping', category: 'Design', difficulty: 'intermediate' },
  { id: '57', name: 'Figma Advanced Workflows', category: 'Design', difficulty: 'advanced' },

  // Adobe Creative Suite - All Levels
  { id: '58', name: 'Adobe Basics', category: 'Design', difficulty: 'beginner' },
  { id: '59', name: 'Adobe Professional Design', category: 'Design', difficulty: 'intermediate' },
  { id: '60', name: 'Adobe Advanced Techniques', category: 'Design', difficulty: 'advanced' },

  // Git - All Levels
  { id: '61', name: 'Git Basics', category: 'DevOps', difficulty: 'beginner' },
  { id: '62', name: 'Git Branching & Merging', category: 'DevOps', difficulty: 'intermediate' },
  { id: '63', name: 'Git Advanced Workflows', category: 'DevOps', difficulty: 'advanced' },

  // Docker - All Levels
  { id: '64', name: 'Docker Basics', category: 'DevOps', difficulty: 'beginner' },
  { id: '65', name: 'Docker Compose & Networks', category: 'DevOps', difficulty: 'intermediate' },
  { id: '66', name: 'Docker Production & Security', category: 'DevOps', difficulty: 'advanced' },

  // Kubernetes - All Levels
  { id: '67', name: 'Kubernetes Basics', category: 'DevOps', difficulty: 'beginner' },
  { id: '68', name: 'Kubernetes Deployments', category: 'DevOps', difficulty: 'intermediate' },
  { id: '69', name: 'Kubernetes Administration', category: 'DevOps', difficulty: 'advanced' },

  // AWS - All Levels
  { id: '70', name: 'AWS Basics', category: 'Cloud', difficulty: 'beginner' },
  { id: '71', name: 'AWS Core Services', category: 'Cloud', difficulty: 'intermediate' },
  { id: '72', name: 'AWS Architecture & Security', category: 'Cloud', difficulty: 'advanced' },

  // Google Cloud - All Levels
  { id: '73', name: 'GCP Basics', category: 'Cloud', difficulty: 'beginner' },
  { id: '74', name: 'GCP Services & APIs', category: 'Cloud', difficulty: 'intermediate' },
  { id: '75', name: 'GCP Enterprise Solutions', category: 'Cloud', difficulty: 'advanced' },

  // Azure - All Levels
  { id: '76', name: 'Azure Basics', category: 'Cloud', difficulty: 'beginner' },
  { id: '77', name: 'Azure Development', category: 'Cloud', difficulty: 'intermediate' },
  { id: '78', name: 'Azure Enterprise Architecture', category: 'Cloud', difficulty: 'advanced' },

  // React Native - All Levels
  { id: '79', name: 'React Native Basics', category: 'Mobile', difficulty: 'beginner' },
  { id: '80', name: 'React Native Navigation', category: 'Mobile', difficulty: 'intermediate' },
  { id: '81', name: 'React Native Performance', category: 'Mobile', difficulty: 'advanced' },

  // Flutter - All Levels
  { id: '82', name: 'Flutter Basics', category: 'Mobile', difficulty: 'beginner' },
  { id: '83', name: 'Flutter State Management', category: 'Mobile', difficulty: 'intermediate' },
  { id: '84', name: 'Flutter Advanced Architecture', category: 'Mobile', difficulty: 'advanced' },
];

const SkillAssessment = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const categories = Array.from(new Set(skills.map(skill => skill.category)));
  const currentCategory = categories[currentStep];
  const categorySkills = skills.filter(skill => skill.category === currentCategory);

  const toggleSkill = (skillId: string) => {
    setSelectedSkills(prev => 
      prev.includes(skillId) 
        ? prev.filter(id => id !== skillId)
        : [...prev, skillId]
    );
  };

  const handleNext = () => {
    if (currentStep < categories.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const getSkillLevel = () => {
    const totalSelected = selectedSkills.length;
    const advancedSkills = selectedSkills.filter(id => {
      const skill = skills.find(s => s.id === id);
      return skill?.difficulty === 'advanced';
    }).length;

    if (totalSelected >= 8 && advancedSkills >= 2) return 'Expert';
    if (totalSelected >= 5 && advancedSkills >= 1) return 'Intermediate';
    if (totalSelected >= 3) return 'Beginner';
    return 'Newcomer';
  };

  const getScoreColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'text-green-600';
      case 'Intermediate': return 'text-blue-600';
      case 'Beginner': return 'text-yellow-600';
      default: return 'text-gray-600';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'advanced': return 'bg-red-500/20 text-red-700';
      case 'intermediate': return 'bg-yellow-500/20 text-yellow-700';
      default: return 'bg-green-500/20 text-green-700';
    }
  };

  const progressValue = ((currentStep + 1) / categories.length) * 100;

  if (showResults) {
    const level = getSkillLevel();
    const selectedSkillsData = skills.filter(skill => selectedSkills.includes(skill.id));

    return (
      <Card className="w-full max-w-2xl mx-auto animate-scale-in">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center">
              <Trophy className="w-8 h-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl">Assessment Complete!</CardTitle>
          <CardDescription>Here's your skill profile</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className={`text-4xl font-bold ${getScoreColor(level)} mb-2`}>
              {level}
            </div>
            <p className="text-muted-foreground">
              You selected {selectedSkills.length} skills across {categories.length} categories
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold flex items-center">
              <Star className="w-4 h-4 mr-2 text-primary" />
              Your Skills
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {selectedSkillsData.map((skill) => (
                <div key={skill.id} className="flex items-center justify-between p-2 bg-accent/20 rounded-lg">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <Badge className={getDifficultyColor(skill.difficulty)} variant="secondary">
                    {skill.difficulty}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t">
            <Button 
              className="w-full btn-gradient text-white" 
              size="lg"
              onClick={() => window.location.href = '/student'}
            >
              <Zap className="w-4 h-4 mr-2" />
              Continue to Dashboard
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto animate-fade-in">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <div>
            <CardTitle className="text-xl">Skill Assessment</CardTitle>
            <CardDescription>
              Step {currentStep + 1} of {categories.length}: Select your {currentCategory} skills
            </CardDescription>
          </div>
          <div className="text-right">
            <div className="text-sm text-muted-foreground">Progress</div>
            <div className="text-lg font-bold">{Math.round(progressValue)}%</div>
          </div>
        </div>
        <Progress value={progressValue} className="h-2" />
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 gap-3">
          {categorySkills.map((skill) => {
            const isSelected = selectedSkills.includes(skill.id);
            return (
              <div
                key={skill.id}
                className={`
                  flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-all
                  ${isSelected 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border hover:border-primary/50 hover:bg-accent/20'
                  }
                `}
                onClick={() => toggleSkill(skill.id)}
              >
                <div className="flex items-center space-x-3">
                  {isSelected ? (
                    <CheckCircle className="w-5 h-5 text-primary" />
                  ) : (
                    <Circle className="w-5 h-5 text-muted-foreground" />
                  )}
                  <span className="font-medium">{skill.name}</span>
                </div>
                <Badge className={getDifficultyColor(skill.difficulty)} variant="secondary">
                  {skill.difficulty}
                </Badge>
              </div>
            );
          })}
        </div>

        <div className="flex justify-between pt-4">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
          >
            Previous
          </Button>
          <Button
            onClick={handleNext}
            className="btn-gradient text-white"
          >
            {currentStep === categories.length - 1 ? 'Complete Assessment' : 'Next Category'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillAssessment;