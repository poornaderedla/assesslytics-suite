import { Clock, Users, Star, BookOpen, Heart, Briefcase, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface AssessmentCardProps {
  id: string;
  title: string;
  description: string;
  category: "Education" | "Health" | "Business" | "Personal";
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  completions: number;
  rating: number;
  tags: string[];
  featured?: boolean;
}

const AssessmentCard = ({
  title,
  description,
  category,
  duration,
  difficulty,
  completions,
  rating,
  tags,
  featured = false
}: AssessmentCardProps) => {
  const getCategoryIcon = () => {
    switch (category) {
      case "Education": return <BookOpen className="w-4 h-4" />;
      case "Health": return <Heart className="w-4 h-4" />;
      case "Business": return <Briefcase className="w-4 h-4" />;
      case "Personal": return <User className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const getCategoryColor = () => {
    switch (category) {
      case "Education": return "bg-primary-soft text-primary border-primary/20";
      case "Health": return "bg-secondary-soft text-secondary border-secondary/20";
      case "Business": return "bg-highlight-soft text-highlight border-highlight/20";
      case "Personal": return "bg-muted text-muted-foreground border-border";
      default: return "bg-muted text-muted-foreground border-border";
    }
  };

  const getDifficultyColor = () => {
    switch (difficulty) {
      case "Beginner": return "bg-success/10 text-success border-success/20";
      case "Intermediate": return "bg-warning/10 text-warning border-warning/20";
      case "Advanced": return "bg-destructive/10 text-destructive border-destructive/20";
      default: return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <div className={`assessment-card group ${featured ? 'ring-2 ring-primary/20' : ''}`}>
      {featured && (
        <div className="absolute -top-2 -right-2 bg-gradient-primary text-white px-2 py-1 rounded-md text-xs font-medium">
          Featured
        </div>
      )}
      
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          <Badge className={`${getCategoryColor()} px-2 py-1`}>
            {getCategoryIcon()}
            <span className="ml-1 text-xs font-medium">{category}</span>
          </Badge>
          <Badge variant="outline" className={`${getDifficultyColor()} text-xs`}>
            {difficulty}
          </Badge>
        </div>
        <div className="flex items-center space-x-1 text-xs text-foreground-soft">
          <Star className="w-3 h-3 fill-current text-yellow-500" />
          <span>{rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-heading mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-foreground-soft line-clamp-2 mb-3">
          {description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{tags.length - 3}
            </Badge>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-border">
        <div className="flex items-center space-x-4 text-xs text-foreground-soft">
          <div className="flex items-center space-x-1">
            <Clock className="w-3 h-3" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-3 h-3" />
            <span>{completions.toLocaleString()}</span>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="text-xs">
            Preview
          </Button>
          <Button size="sm" className="btn-primary text-xs">
            Start Assessment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AssessmentCard;