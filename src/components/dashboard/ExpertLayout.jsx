// components/ExpertsLayout.jsx
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, ArrowLeft } from "lucide-react";
import ExpertCard from "./ExpertCard";
import EmptyState from "./EmptyState";

const ExpertsLayout = ({ experts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredExperts, setFilteredExperts] = useState(experts);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (!value.trim()) {
      setFilteredExperts(experts);
      return;
    }

    const filtered = experts.filter(
      (expert) =>
        expert.name.toLowerCase().includes(value.toLowerCase()) ||
        expert.title.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredExperts(filtered);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="icon" className="mr-2">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-semibold">Experts</h1>
      </div>

      <div className="flex items-center space-x-2 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search Experts"
            className="pl-9"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <h2 className="text-lg font-semibold mb-4">Financial Experts</h2>

      {filteredExperts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredExperts.map((expert) => (
            <ExpertCard key={expert.id} expert={expert} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  );
};

export default ExpertsLayout;
