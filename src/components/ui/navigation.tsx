import { ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./button";

interface NavigationProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  showBackButton?: boolean;
  backTo?: string;
  children?: React.ReactNode;
}

export const Navigation = ({ 
  title, 
  subtitle, 
  icon, 
  showBackButton = false, 
  backTo = "/",
  children 
}: NavigationProps) => {
  return (
    <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {showBackButton && (
              <Link to={backTo}>
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4" />
                </Button>
              </Link>
            )}
            {icon && (
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center">
                {icon}
              </div>
            )}
            <div>
              <h1 className="text-xl font-bold">{title}</h1>
              {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            {children}
            <Link to="/">
              <Button variant="outline" size="sm">
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};