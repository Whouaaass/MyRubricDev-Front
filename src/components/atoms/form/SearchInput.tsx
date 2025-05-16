import { Search } from 'lucide-react';

export const SearchInput = () => (
  <div className="relative hidden md:block">
    <input
      type="text"
      placeholder="Search..."
      className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-48 md:w-64 text-sm"
    />
    <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
  </div>
);
