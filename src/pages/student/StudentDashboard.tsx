import { Upload, User, BookOpen, Target, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light/20 via-background to-accent/10">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center">
                <User className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Student Portal</h1>
                <p className="text-sm text-muted-foreground">Welcome back, Alex!</p>
              </div>
            </div>
            <Button variant="outline">Profile Settings</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Progress Overview */}
        <div className="mb-8 animate-fade-in">
          <Card className="card-student">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-primary" />
                <span>Application Progress</span>
              </CardTitle>
              <CardDescription>Complete your profile to get better matches</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Profile Completion</span>
                  <span className="font-medium">75%</span>
                </div>
                <Progress value={75} className="h-2" />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="text-center">
                    <div className="w-2 h-2 bg-primary rounded-full mx-auto mb-2"></div>
                    <span className="text-xs text-muted-foreground">Resume Uploaded</span>
                  </div>
                  <div className="text-center">
                    <div className="w-2 h-2 bg-primary rounded-full mx-auto mb-2"></div>
                    <span className="text-xs text-muted-foreground">Skills Extracted</span>
                  </div>
                  <div className="text-center">
                    <div className="w-2 h-2 bg-primary rounded-full mx-auto mb-2"></div>
                    <span className="text-xs text-muted-foreground">Preferences Set</span>
                  </div>
                  <div className="text-center">
                    <div className="w-2 h-2 bg-muted rounded-full mx-auto mb-2"></div>
                    <span className="text-xs text-muted-foreground">Allocation Pending</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Resume Upload Section */}
            <Card className="card-student animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Upload className="w-5 h-5 text-primary" />
                  <span>Resume Upload</span>
                </CardTitle>
                <CardDescription>Upload your resume to extract skills automatically</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="upload-zone group cursor-pointer">
                  <Upload className="w-12 h-12 text-primary/60 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-lg font-medium mb-2">Drop your resume here</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Supports PDF, DOC, DOCX files up to 10MB
                  </p>
                  <Button className="btn-student">
                    Choose File
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Skills Preview */}
            <Card className="card-student animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span>Extracted Skills</span>
                </CardTitle>
                <CardDescription>Skills automatically detected from your resume</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    React.js
                  </Badge>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    Python
                  </Badge>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    Machine Learning
                  </Badge>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    Data Analysis
                  </Badge>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    SQL
                  </Badge>
                  <Badge variant="outline">+ Add More</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="card-gradient animate-scale-in">
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Applications</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Matches Found</span>
                  <span className="font-semibold">8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Profile Score</span>
                  <span className="font-semibold text-primary">85/100</span>
                </div>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card className="card-gradient animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Award className="w-5 h-5 text-primary" />
                  <span>Next Steps</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">Set Preferences</p>
                    <p className="text-sm text-muted-foreground">Define your ideal internship criteria</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-muted rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">Review Matches</p>
                    <p className="text-sm text-muted-foreground">Explore recommended opportunities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-muted rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">Get Allocation</p>
                    <p className="text-sm text-muted-foreground">Receive your final assignment</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;