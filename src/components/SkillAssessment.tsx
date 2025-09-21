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
  { id: '1', name: 'JavaScript', category: 'Programming', difficulty: 'beginner' },
  { id: '2', name: 'React', category: 'Frontend', difficulty: 'intermediate' },
  { id: '3', name: 'Python', category: 'Programming', difficulty: 'beginner' },
  { id: '4', name: 'Machine Learning', category: 'AI/ML', difficulty: 'advanced' },
  { id: '5', name: 'UI/UX Design', category: 'Design', difficulty: 'intermediate' },
  { id: '6', name: 'Data Analysis', category: 'Analytics', difficulty: 'intermediate' },
  { id: '7', name: 'Node.js', category: 'Backend', difficulty: 'intermediate' },
  { id: '8', name: 'SQL', category: 'Database', difficulty: 'beginner' },
  { id: '9', name: 'Figma', category: 'Design', difficulty: 'beginner' },
  { id: '10', name: 'AWS', category: 'Cloud', difficulty: 'advanced' },
  { id: '11', name: 'Git', category: 'Tools', difficulty: 'beginner' },
  { id: '12', name: 'Docker', category: 'DevOps', difficulty: 'advanced' },
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