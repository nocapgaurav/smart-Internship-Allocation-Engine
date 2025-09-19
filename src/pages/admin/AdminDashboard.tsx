import { Settings, Plus, Users, BarChart3, Brain, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-admin-primary/5 via-background to-admin-secondary/5">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-admin-primary to-admin-secondary rounded-lg flex items-center justify-center">
                <Settings className="w-6 h-6 text-admin-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Admin Dashboard</h1>
                <p className="text-sm text-muted-foreground">Manage internships & allocations</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button className="btn-admin">
                <Plus className="w-4 h-4 mr-2" />
                Add Internship
              </Button>
              <Button variant="outline">Settings</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="card-admin animate-fade-in">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-2xl font-bold">1,247</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">+12% from last batch</p>
            </CardContent>
          </Card>

          <Card className="card-admin animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Internships</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-admin-accent" />
                <span className="text-2xl font-bold">89</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Across 45 companies</p>
            </CardContent>
          </Card>

          <Card className="card-admin animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Allocation Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                <span className="text-2xl font-bold">94.2%</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Above target of 90%</p>
            </CardContent>
          </Card>

          <Card className="card-admin animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Fairness Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Brain className="w-5 h-5 text-admin-accent" />
                <span className="text-2xl font-bold">9.1/10</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Excellent fairness</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Allocation Engine Control */}
            <Card className="card-admin animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="w-5 h-5 text-primary" />
                  <span>AI Allocation Engine</span>
                </CardTitle>
                <CardDescription>Run the allocation algorithm and monitor progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-primary-light/20 rounded-lg border border-primary/20">
                    <div>
                      <p className="font-medium">Ready to allocate</p>
                      <p className="text-sm text-muted-foreground">1,175 students • 89 internships</p>
                    </div>
                    <Button className="btn-admin">
                      <Brain className="w-4 h-4 mr-2" />
                      Run Allocation
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Last run progress</span>
                      <span className="font-medium">Completed</span>
                    </div>
                    <Progress value={100} className="h-2" />
                    <div className="grid grid-cols-3 gap-4 text-center text-sm">
                      <div>
                        <p className="font-medium">1,108</p>
                        <p className="text-muted-foreground">Allocated</p>
                      </div>
                      <div>
                        <p className="font-medium">67</p>
                        <p className="text-muted-foreground">Pending</p>
                      </div>
                      <div>
                        <p className="font-medium">8.2s</p>
                        <p className="text-muted-foreground">Duration</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Internships */}
            <Card className="card-admin animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-admin-accent" />
                  <span>Recent Internships</span>
                </CardTitle>
                <CardDescription>Latest internship postings and their status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { company: "TechCorp", role: "Software Developer", domain: "Technology", applicants: 156, status: "Active" },
                    { company: "DataSys", role: "Data Scientist", domain: "Analytics", applicants: 89, status: "Active" },
                    { company: "DesignPro", role: "UI/UX Designer", domain: "Design", applicants: 67, status: "Filled" },
                  ].map((internship, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 border border-border/50 rounded-lg hover:bg-accent/20 transition-colors">
                      <div>
                        <p className="font-medium">{internship.role}</p>
                        <p className="text-sm text-muted-foreground">{internship.company} • {internship.domain}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="text-right">
                          <p className="font-medium">{internship.applicants}</p>
                          <p className="text-xs text-muted-foreground">applicants</p>
                        </div>
                        <Badge variant={internship.status === "Active" ? "default" : "secondary"}>
                          {internship.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="card-gradient animate-scale-in">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Internship
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  Algorithm Settings
                </Button>
              </CardContent>
            </Card>

            {/* System Health */}
            <Card className="card-gradient animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle className="text-lg">System Health</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">API Status</span>
                  <Badge className="bg-admin-accent/20 text-admin-accent border-admin-accent/30">Online</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Database</span>
                  <Badge className="bg-admin-accent/20 text-admin-accent border-admin-accent/30">Healthy</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">ML Models</span>
                  <Badge className="bg-admin-accent/20 text-admin-accent border-admin-accent/30">Ready</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Last Backup</span>
                  <span className="text-sm font-medium">2 hours ago</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;