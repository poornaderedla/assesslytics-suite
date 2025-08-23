import { Clock, Users, Star, BookOpen, Heart, Briefcase, User, Cpu, DollarSign, Megaphone, Crown, MessageCircle, Palette, Brain, Users2, Target, Dumbbell, Apple, Shield, Zap, Lightbulb, ShoppingCart, Phone, Clipboard, BarChart, Paintbrush, PenTool, Globe, Music, Image, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface AssessmentCardProps {
  id: string;
  title: string;
  description: string;
  category: "Education" | "Health" | "Business" | "Personal" | "Technology" | "Finance" | "Marketing" | "Leadership" | "Communication" | "Creativity" | "Psychology" | "Relationships" | "Career" | "Fitness" | "Nutrition" | "Mental Health" | "Productivity" | "Innovation" | "Entrepreneurship" | "Sales" | "Customer Service" | "Project Management" | "Data Analysis" | "Design" | "Writing" | "Language" | "Music" | "Art" | "Sports";
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
      case "Technology": return <Cpu className="w-4 h-4" />;
      case "Finance": return <DollarSign className="w-4 h-4" />;
      case "Marketing": return <Megaphone className="w-4 h-4" />;
      case "Leadership": return <Crown className="w-4 h-4" />;
      case "Communication": return <MessageCircle className="w-4 h-4" />;
      case "Creativity": return <Palette className="w-4 h-4" />;
      case "Psychology": return <Brain className="w-4 h-4" />;
      case "Relationships": return <Users2 className="w-4 h-4" />;
      case "Career": return <Target className="w-4 h-4" />;
      case "Fitness": return <Dumbbell className="w-4 h-4" />;
      case "Nutrition": return <Apple className="w-4 h-4" />;
      case "Mental Health": return <Shield className="w-4 h-4" />;
      case "Productivity": return <Zap className="w-4 h-4" />;
      case "Innovation": return <Lightbulb className="w-4 h-4" />;
      case "Entrepreneurship": return <ShoppingCart className="w-4 h-4" />;
      case "Sales": return <Phone className="w-4 h-4" />;
      case "Customer Service": return <Users className="w-4 h-4" />;
      case "Project Management": return <Clipboard className="w-4 h-4" />;
      case "Data Analysis": return <BarChart className="w-4 h-4" />;
      case "Design": return <Paintbrush className="w-4 h-4" />;
      case "Writing": return <PenTool className="w-4 h-4" />;
      case "Language": return <Globe className="w-4 h-4" />;
      case "Music": return <Music className="w-4 h-4" />;
      case "Art": return <Image className="w-4 h-4" />;
      case "Sports": return <Trophy className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const getCategoryColor = () => {
    switch (category) {
      case "Education": return "bg-primary-soft text-primary border-primary/20";
      case "Health": return "bg-secondary-soft text-secondary border-secondary/20";
      case "Business": return "bg-highlight-soft text-highlight border-highlight/20";
      case "Personal": return "bg-muted text-muted-foreground border-border";
      case "Technology": return "bg-blue-50 text-blue-600 border-blue-200";
      case "Finance": return "bg-green-50 text-green-600 border-green-200";
      case "Marketing": return "bg-orange-50 text-orange-600 border-orange-200";
      case "Leadership": return "bg-purple-50 text-purple-600 border-purple-200";
      case "Communication": return "bg-teal-50 text-teal-600 border-teal-200";
      case "Creativity": return "bg-pink-50 text-pink-600 border-pink-200";
      case "Psychology": return "bg-indigo-50 text-indigo-600 border-indigo-200";
      case "Relationships": return "bg-rose-50 text-rose-600 border-rose-200";
      case "Career": return "bg-amber-50 text-amber-600 border-amber-200";
      case "Fitness": return "bg-red-50 text-red-600 border-red-200";
      case "Nutrition": return "bg-lime-50 text-lime-600 border-lime-200";
      case "Mental Health": return "bg-emerald-50 text-emerald-600 border-emerald-200";
      case "Productivity": return "bg-yellow-50 text-yellow-600 border-yellow-200";
      case "Innovation": return "bg-cyan-50 text-cyan-600 border-cyan-200";
      case "Entrepreneurship": return "bg-violet-50 text-violet-600 border-violet-200";
      case "Sales": return "bg-fuchsia-50 text-fuchsia-600 border-fuchsia-200";
      case "Customer Service": return "bg-sky-50 text-sky-600 border-sky-200";
      case "Project Management": return "bg-slate-50 text-slate-600 border-slate-200";
      case "Data Analysis": return "bg-zinc-50 text-zinc-600 border-zinc-200";
      case "Design": return "bg-stone-50 text-stone-600 border-stone-200";
      case "Writing": return "bg-neutral-50 text-neutral-600 border-neutral-200";
      case "Language": return "bg-gray-50 text-gray-600 border-gray-200";
      case "Music": return "bg-pink-100 text-pink-700 border-pink-300";
      case "Art": return "bg-purple-100 text-purple-700 border-purple-300";
      case "Sports": return "bg-orange-100 text-orange-700 border-orange-300";
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