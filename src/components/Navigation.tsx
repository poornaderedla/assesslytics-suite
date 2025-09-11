import { useState } from "react";
import { Search, Menu, X, BookOpen, TrendingUp, User, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

const navCategories = [
    { name: "Education", count: 85, color: "bg-primary-soft text-primary" },
    { name: "Health", count: 72, color: "bg-secondary-soft text-secondary" },
    { name: "Business", count: 68, color: "bg-highlight-soft text-highlight" },
    { name: "Personal", count: 45, color: "bg-muted text-muted-foreground" },
    { name: "Technology", count: 38, color: "bg-blue-50 text-blue-600" },
    { name: "Finance", count: 42, color: "bg-green-50 text-green-600" },
    { name: "Marketing", count: 35, color: "bg-orange-50 text-orange-600" },
    { name: "Leadership", count: 41, color: "bg-purple-50 text-purple-600" },
    { name: "Communication", count: 47, color: "bg-teal-50 text-teal-600" },
    { name: "Creativity", count: 29, color: "bg-pink-50 text-pink-600" },
    { name: "Psychology", count: 33, color: "bg-indigo-50 text-indigo-600" },
    { name: "Relationships", count: 26, color: "bg-rose-50 text-rose-600" },
    { name: "Career", count: 44, color: "bg-amber-50 text-amber-600" },
    { name: "Fitness", count: 31, color: "bg-red-50 text-red-600" },
    { name: "Nutrition", count: 28, color: "bg-lime-50 text-lime-600" },
    { name: "Mental Health", count: 37, color: "bg-emerald-50 text-emerald-600" },
    { name: "Productivity", count: 39, color: "bg-yellow-50 text-yellow-600" },
    { name: "Innovation", count: 24, color: "bg-cyan-50 text-cyan-600" },
    { name: "Entrepreneurship", count: 32, color: "bg-violet-50 text-violet-600" },
    { name: "Sales", count: 36, color: "bg-fuchsia-50 text-fuchsia-600" },
    { name: "Customer Service", count: 27, color: "bg-sky-50 text-sky-600" },
    { name: "Project Management", count: 34, color: "bg-slate-50 text-slate-600" },
    { name: "Data Analysis", count: 30, color: "bg-zinc-50 text-zinc-600" },
    { name: "Design", count: 25, color: "bg-stone-50 text-stone-600" },
    { name: "Writing", count: 23, color: "bg-neutral-50 text-neutral-600" },
    { name: "Language", count: 29, color: "bg-gray-50 text-gray-600" },
    { name: "Music", count: 21, color: "bg-pink-100 text-pink-700" },
    { name: "Art", count: 19, color: "bg-purple-100 text-purple-700" },
    { name: "Sports", count: 33, color: "bg-orange-100 text-orange-700" },
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
          <div className="hidden lg:flex items-center space-x-4 max-w-3xl overflow-x-auto">
            {navCategories.slice(0, 8).map((category) => (
              <Link
                key={category.name}
                to={`/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors whitespace-nowrap"
              >
                <span className="text-sm font-medium text-foreground">{category.name}</span>
                <Badge className={`text-xs ${category.color}`}>{category.count}</Badge>
              </Link>
            ))}
            <div className="flex items-center">
              <span className="text-sm text-foreground-soft">+{navCategories.length - 8} more</span>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex" asChild>
              <Link to="/faq">
                Help
              </Link>
            </Button>
            <Button variant="ghost" size="sm" className="hidden md:flex" asChild>
              <Link to="/trending">
                <TrendingUp className="w-4 h-4 mr-2" />
                Trending
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/login">
                <User className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/settings">
                <Settings className="w-4 h-4" />
              </Link>
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
          <div className="md:hidden py-4 border-t border-border max-h-96 overflow-y-auto">
            <div className="grid grid-cols-2 gap-3">
              {navCategories.map((category) => (
                <Link
                  key={category.name}
                  to={`/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex flex-col items-center p-3 rounded-lg hover:bg-muted transition-colors"
                >
                  <span className="text-sm font-medium text-foreground text-center">{category.name}</span>
                  <Badge className={`text-xs mt-1 ${category.color}`}>{category.count}</Badge>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;