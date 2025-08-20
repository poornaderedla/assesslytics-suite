import { useState } from "react";
import { Search, Menu, X, BookOpen, TrendingUp, User, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navCategories = [
    { name: "Education", count: 85, color: "bg-primary-soft text-primary" },
    { name: "Health", count: 72, color: "bg-secondary-soft text-secondary" },
    { name: "Business", count: 68, color: "bg-highlight-soft text-highlight" },
    { name: "Personal", count: 45, color: "bg-muted text-muted-foreground" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-heading">AssessmentHub</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navCategories.map((category) => (
              <button
                key={category.name}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors"
              >
                <span className="text-sm font-medium text-foreground">{category.name}</span>
                <Badge className={`text-xs ${category.color}`}>{category.count}</Badge>
              </button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <TrendingUp className="w-4 h-4 mr-2" />
              Trending
            </Button>
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="grid grid-cols-2 gap-3">
              {navCategories.map((category) => (
                <button
                  key={category.name}
                  className="flex flex-col items-center p-3 rounded-lg hover:bg-muted transition-colors"
                >
                  <span className="text-sm font-medium text-foreground">{category.name}</span>
                  <Badge className={`text-xs mt-1 ${category.color}`}>{category.count}</Badge>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;