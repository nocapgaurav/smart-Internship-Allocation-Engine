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
  // Programming Languages
  { id: '1', name: 'HTML/CSS', category: 'Programming', difficulty: 'beginner' },
  { id: '2', name: 'JavaScript', category: 'Programming', difficulty: 'beginner' },
  { id: '3', name: 'Python', category: 'Programming', difficulty: 'beginner' },
  { id: '4', name: 'Java', category: 'Programming', difficulty: 'intermediate' },
  { id: '5', name: 'C++', category: 'Programming', difficulty: 'intermediate' },
  { id: '6', name: 'TypeScript', category: 'Programming', difficulty: 'intermediate' },
  { id: '7', name: 'Go', category: 'Programming', difficulty: 'advanced' },
  { id: '8', name: 'Rust', category: 'Programming', difficulty: 'advanced' },
  { id: '9', name: 'Assembly', category: 'Programming', difficulty: 'advanced' },

  // Frontend Development
  { id: '10', name: 'Basic Web Design', category: 'Frontend', difficulty: 'beginner' },
  { id: '11', name: 'Bootstrap', category: 'Frontend', difficulty: 'beginner' },
  { id: '12', name: 'Tailwind CSS', category: 'Frontend', difficulty: 'beginner' },
  { id: '13', name: 'React', category: 'Frontend', difficulty: 'intermediate' },
  { id: '14', name: 'Vue.js', category: 'Frontend', difficulty: 'intermediate' },
  { id: '15', name: 'Angular', category: 'Frontend', difficulty: 'intermediate' },
  { id: '16', name: 'Svelte', category: 'Frontend', difficulty: 'advanced' },
  { id: '17', name: 'Micro-frontends', category: 'Frontend', difficulty: 'advanced' },
  { id: '18', name: 'WebAssembly', category: 'Frontend', difficulty: 'advanced' },

  // Backend Development
  { id: '19', name: 'Basic APIs', category: 'Backend', difficulty: 'beginner' },
  { id: '20', name: 'Express.js', category: 'Backend', difficulty: 'beginner' },
  { id: '21', name: 'Flask/FastAPI', category: 'Backend', difficulty: 'beginner' },
  { id: '22', name: 'Node.js', category: 'Backend', difficulty: 'intermediate' },
  { id: '23', name: 'Django', category: 'Backend', difficulty: 'intermediate' },
  { id: '24', name: 'Spring Boot', category: 'Backend', difficulty: 'intermediate' },
  { id: '25', name: 'GraphQL', category: 'Backend', difficulty: 'advanced' },
  { id: '26', name: 'Microservices', category: 'Backend', difficulty: 'advanced' },
  { id: '27', name: 'Distributed Systems', category: 'Backend', difficulty: 'advanced' },

  // Database & Data
  { id: '28', name: 'SQL Basics', category: 'Database', difficulty: 'beginner' },
  { id: '29', name: 'MySQL/PostgreSQL', category: 'Database', difficulty: 'beginner' },
  { id: '30', name: 'MongoDB', category: 'Database', difficulty: 'beginner' },
  { id: '31', name: 'Redis', category: 'Database', difficulty: 'intermediate' },
  { id: '32', name: 'Database Design', category: 'Database', difficulty: 'intermediate' },
  { id: '33', name: 'Data Warehousing', category: 'Database', difficulty: 'intermediate' },
  { id: '34', name: 'Database Optimization', category: 'Database', difficulty: 'advanced' },
  { id: '35', name: 'Distributed Databases', category: 'Database', difficulty: 'advanced' },
  { id: '36', name: 'Database Sharding', category: 'Database', difficulty: 'advanced' },

  // AI/ML & Analytics
  { id: '37', name: 'Data Analysis', category: 'AI/ML', difficulty: 'beginner' },
  { id: '38', name: 'Excel/Sheets', category: 'AI/ML', difficulty: 'beginner' },
  { id: '39', name: 'Pandas/NumPy', category: 'AI/ML', difficulty: 'beginner' },
  { id: '40', name: 'Machine Learning', category: 'AI/ML', difficulty: 'intermediate' },
  { id: '41', name: 'Scikit-learn', category: 'AI/ML', difficulty: 'intermediate' },
  { id: '42', name: 'TensorFlow/PyTorch', category: 'AI/ML', difficulty: 'intermediate' },
  { id: '43', name: 'Deep Learning', category: 'AI/ML', difficulty: 'advanced' },
  { id: '44', name: 'Natural Language Processing', category: 'AI/ML', difficulty: 'advanced' },
  { id: '45', name: 'Computer Vision', category: 'AI/ML', difficulty: 'advanced' },

  // Design & UX
  { id: '46', name: 'Basic Design Principles', category: 'Design', difficulty: 'beginner' },
  { id: '47', name: 'Canva', category: 'Design', difficulty: 'beginner' },
  { id: '48', name: 'Figma', category: 'Design', difficulty: 'beginner' },
  { id: '49', name: 'UI/UX Design', category: 'Design', difficulty: 'intermediate' },
  { id: '50', name: 'Adobe Creative Suite', category: 'Design', difficulty: 'intermediate' },
  { id: '51', name: 'Prototyping', category: 'Design', difficulty: 'intermediate' },
  { id: '52', name: 'Design Systems', category: 'Design', difficulty: 'advanced' },
  { id: '53', name: 'User Research', category: 'Design', difficulty: 'advanced' },
  { id: '54', name: 'Accessibility Design', category: 'Design', difficulty: 'advanced' },

  // DevOps & Tools
  { id: '55', name: 'Git Basics', category: 'DevOps', difficulty: 'beginner' },
  { id: '56', name: 'GitHub/GitLab', category: 'DevOps', difficulty: 'beginner' },
  { id: '57', name: 'Command Line', category: 'DevOps', difficulty: 'beginner' },
  { id: '58', name: 'Docker', category: 'DevOps', difficulty: 'intermediate' },
  { id: '59', name: 'CI/CD Pipelines', category: 'DevOps', difficulty: 'intermediate' },
  { id: '60', name: 'Linux Administration', category: 'DevOps', difficulty: 'intermediate' },
  { id: '61', name: 'Kubernetes', category: 'DevOps', difficulty: 'advanced' },
  { id: '62', name: 'Infrastructure as Code', category: 'DevOps', difficulty: 'advanced' },
  { id: '63', name: 'Site Reliability Engineering', category: 'DevOps', difficulty: 'advanced' },

  // Cloud & Infrastructure
  { id: '64', name: 'Basic Cloud Concepts', category: 'Cloud', difficulty: 'beginner' },
  { id: '65', name: 'Firebase', category: 'Cloud', difficulty: 'beginner' },
  { id: '66', name: 'Vercel/Netlify', category: 'Cloud', difficulty: 'beginner' },
  { id: '67', name: 'AWS Services', category: 'Cloud', difficulty: 'intermediate' },
  { id: '68', name: 'Google Cloud Platform', category: 'Cloud', difficulty: 'intermediate' },
  { id: '69', name: 'Azure', category: 'Cloud', difficulty: 'intermediate' },
  { id: '70', name: 'Cloud Architecture', category: 'Cloud', difficulty: 'advanced' },
  { id: '71', name: 'Serverless Computing', category: 'Cloud', difficulty: 'advanced' },
  { id: '72', name: 'Multi-Cloud Strategy', category: 'Cloud', difficulty: 'advanced' },

  // Mobile Development
  { id: '73', name: 'Mobile Design Basics', category: 'Mobile', difficulty: 'beginner' },
  { id: '74', name: 'React Native', category: 'Mobile', difficulty: 'beginner' },
  { id: '75', name: 'Flutter', category: 'Mobile', difficulty: 'beginner' },
  { id: '76', name: 'iOS Development', category: 'Mobile', difficulty: 'intermediate' },
  { id: '77', name: 'Android Development', category: 'Mobile', difficulty: 'intermediate' },
  { id: '78', name: 'Mobile UI/UX', category: 'Mobile', difficulty: 'intermediate' },
  { id: '79', name: 'Mobile Performance Optimization', category: 'Mobile', difficulty: 'advanced' },
  { id: '80', name: 'Cross-platform Architecture', category: 'Mobile', difficulty: 'advanced' },
  { id: '81', name: 'Mobile Security', category: 'Mobile', difficulty: 'advanced' },
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