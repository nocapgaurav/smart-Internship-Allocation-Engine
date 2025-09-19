import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: LucideIcon;
  trend?: string;
  className?: string;
}

export const StatsCard = ({ 
  title, 
  value, 
  description, 
  icon: Icon, 
  trend,
  className = ""
}: StatsCardProps) => {
  return (
    <Card className={`card-gradient animate-fade-in ${className}`}>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2">
          <Icon className="w-5 h-5 text-primary" />
          <span className="text-2xl font-bold">{value}</span>
        </div>
        {(description || trend) && (
          <p className="text-sm text-muted-foreground mt-1">
            {trend && <span className="text-primary font-medium">{trend}</span>}
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
};