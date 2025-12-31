
import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Filter, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  ChevronRight,
  BookMarked,
  Library as LibraryIcon,
  Plus
} from 'lucide-react';
import { UserRole } from '../types';

interface LibraryProps {
  role: UserRole;
}

const Library: React.FC<LibraryProps> = ({ role }) => {
  const isAdmin = role === UserRole.SUPER_ADMIN;
  const isStudent = role === UserRole.STUDENT;

  const books = [
    { id: '1', title: 'Deep Learning', author: 'Ian Goodfellow', category: 'Technology', status: 'Available', cover: 'https://picsum.photos/seed/book1/200/300' },
    { id: '2', title: 'Principles of Physics', author: 'Halliday Resnick', category: 'Science', status: 'Borrowed', cover: 'https://picsum.photos/seed/book2/200/300' },
    { id: '3', title: 'Algorithms Unlocked', author: 'Thomas Cormen', category: 'Computing', status: 'Available', cover: 'https://picsum.photos/seed/book3/200/300' },
    { id: '4', title: 'Human Intelligence', author: 'Robert Sternberg', category: 'Psychology', status: 'Reserved', cover: 'https://picsum.photos/seed/book4/200/300' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Smart Library</h1>
          <p className="text-slate-500">Access millions of titles, digital journals, and AI-curated reading lists.</p>
        </div>
        <div className="flex gap-3">
          {isAdmin ? (
             <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-indigo-100 flex items-center">
               <Plus className="w-4 h-4 mr-2" />
               Add New Title
             </button>
          ) : (
             <button className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-xl text-sm font-bold shadow-sm flex items-center">
               <BookMarked className="w-4 h-4 mr-2 text-indigo-600" />
               My Borrowed Books
             </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Search & Filters Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search catalog..." 
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border-transparent rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 outline-none"
              />
            </div>
            <div className="space-y-2">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Categories</p>
              {['All', 'Science', 'Technology', 'Mathematics', 'Philosophy'].map(cat => (
                <button key={cat} className="flex items-center w-full px-3 py-2 text-xs font-semibold rounded-lg hover:bg-slate-50 text-slate-600 transition-colors">
                  <span className={`w-1.5 h-1.5 rounded-full mr-3 ${cat === 'All' ? 'bg-indigo-500' : 'bg-slate-200'}`}></span>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-violet-700 p-6 rounded-3xl text-white shadow-xl shadow-indigo-100">
            <h3 className="font-bold flex items-center mb-3">
              <Sparkles className="w-4 h-4 mr-2" />
              AI Librarian
            </h3>
            <p className="text-xs text-indigo-100 leading-relaxed mb-6">
              "Based on your recent interest in Quantum Theory, I recommend checking out 'The Feynman Lectures on Physics' available in Wing B."
            </p>
            <button className="w-full py-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-bold transition-all border border-white/20">
              Get Recommendations
            </button>
          </div>
        </div>

        {/* Catalog Grid */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center justify-between px-2">
            <h2 className="font-bold text-slate-900 flex items-center">
              <LibraryIcon className="w-5 h-5 mr-2 text-indigo-500" />
              Library Catalog
            </h2>
            <div className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest space-x-4">
               <span>Showing 4 of 24,000</span>
               <div className="flex space-x-1">
                 <button className="p-1 hover:text-indigo-600"><ChevronRight className="w-4 h-4 rotate-180" /></button>
                 <button className="p-1 hover:text-indigo-600"><ChevronRight className="w-4 h-4" /></button>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6">
            {books.map(book => (
              <div key={book.id} className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={book.cover} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={book.title} />
                  <div className="absolute top-3 left-3">
                     <span className={`px-2 py-1 rounded-lg text-[9px] font-black uppercase tracking-tighter shadow-sm border ${
                       book.status === 'Available' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 
                       book.status === 'Borrowed' ? 'bg-amber-50 text-amber-700 border-amber-100' : 
                       'bg-slate-50 text-slate-700 border-slate-100'
                     }`}>
                       {book.status}
                     </span>
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h4 className="font-bold text-slate-900 text-sm leading-tight mb-1 group-hover:text-indigo-600 transition-colors">{book.title}</h4>
                  <p className="text-[10px] text-slate-500 mb-4">{book.author}</p>
                  <div className="mt-auto pt-3 border-t border-slate-50 flex items-center justify-between">
                     <span className="text-[9px] font-bold text-slate-400 uppercase">{book.category}</span>
                     <button className="text-indigo-600 font-bold text-[10px] hover:underline flex items-center">
                       {isAdmin ? 'Manage' : 'Borrow'} <ChevronRight className="w-3 h-3 ml-0.5" />
                     </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {isStudent && (
            <div className="bg-slate-900 rounded-[2rem] p-8 text-white flex flex-col md:flex-row items-center gap-8 shadow-xl shadow-slate-200">
               <div className="flex-1 text-center md:text-left">
                 <h3 className="text-xl font-bold mb-2">Upcoming Return Deadlines</h3>
                 <p className="text-slate-400 text-sm mb-4">You have 2 books due for return this Friday to avoid late penalties.</p>
                 <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <div className="flex items-center bg-white/10 px-4 py-2 rounded-xl">
                      <Clock className="w-4 h-4 text-amber-400 mr-2" />
                      <span className="text-xs font-bold">Deep Learning • 2 Days left</span>
                    </div>
                 </div>
               </div>
               <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-xl font-bold text-sm shadow-lg transition-all whitespace-nowrap">
                 Renew My Books
               </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Library;
