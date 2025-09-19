import { ArrowRight, Brain, Users, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/hero-internship.jpg";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-light/30 to-accent/20">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">SmartIntern</h1>
                <p className="text-sm text-muted-foreground">AI Allocation Engine</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                Smart Internship Allocation Engine
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Powered by AI to match students with perfect internship opportunities. 
                Fair, transparent, and optimized for everyone's success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/student">
                  <Button className="btn-hero group">
                    Student Portal
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/admin">
                  <Button variant="outline" className="px-8 py-4 text-lg border-primary/30 hover:bg-primary/10">
                    Admin Dashboard
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src={heroImage} 
                alt="Students working with AI internship allocation system"
                className="rounded-2xl shadow-strong w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-r from-card to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose SmartIntern?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered platform ensures fair, efficient, and transparent internship allocations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-gradient animate-fade-in hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>AI-Powered Matching</CardTitle>
                <CardDescription>
                  Advanced algorithms analyze skills, preferences, and requirements for optimal matches
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="card-gradient animate-fade-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Fair & Transparent</CardTitle>
                <CardDescription>
                  Bias detection and fairness monitoring ensure equitable allocations for all students
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="card-gradient animate-fade-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Analytics & Insights</CardTitle>
                <CardDescription>
                  Comprehensive reporting and what-if simulations for data-driven decisions
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 bg-background/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 SmartIntern AI Allocation Engine. Built for fair and efficient internship matching.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;