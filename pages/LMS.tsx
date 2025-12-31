
import React from 'react';
// Added TrendingUp to the imports from lucide-react
import { PlayCircle, Clock, CheckCircle, BookOpen, Star, TrendingUp } from 'lucide-react';

const courses = [
  {
    id: '1',
    title: 'Advanced AI & Ethics',
    instructor: 'Dr. Sarah Thompson',
    progress: 75,
    modules: 12,
    rating: 4.8,
    image: 'https://picsum.photos/seed/edu1/400/250'
  },
  {
    id: '2',
    title: 'Modern Physics: Quantum Theory',
    instructor: 'Prof. Robert Miller',
    progress: 32,
    modules: 15,
    rating: 4.9,
    image: 'https://picsum.photos/seed/edu2/400/250'
  },
  {
    id: '3',
    title: 'Data Science for Administrators',
    instructor: 'Dr. Jane Doe',
    progress: 90,
    modules: 8,
    rating: 4.6,
    image: 'https://picsum.photos/seed/edu3/400/250'
  }
];

const LMS: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Learning Center</h1>
          <p className="text-slate-500">Your personalized academic dashboard and learning materials.</p>
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50">All Courses</button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">Browse Catalog</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden group hover:shadow-xl hover:shadow-slate-200/50 transition-all">
            <div className="relative h-48">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-xs font-bold text-indigo-600 flex items-center">
                <Star className="w-3 h-3 mr-1 fill-indigo-600" />
                {course.rating}
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-1 leading-tight">{course.title}</h3>
              <p className="text-sm text-slate-500 mb-4">{course.instructor}</p>
              
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span>Progress</span>
                <span className="font-semibold text-slate-900">{course.progress}%</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full mb-6 overflow-hidden">
                <div 
                  className="h-full bg-indigo-500 transition-all duration-1000" 
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex space-x-3 text-slate-500">
                  <span className="flex items-center text-xs">
                    <BookOpen className="w-4 h-4 mr-1 text-slate-400" />
                    {course.modules} Modules
                  </span>
                  <span className="flex items-center text-xs">
                    <Clock className="w-4 h-4 mr-1 text-slate-400" />
                    24h Left
                  </span>
                </div>
                <button className="p-2 bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition-colors">
                  <PlayCircle className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-indigo-900 rounded-2xl p-8 text-white relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Personalized Learning Paths</h2>
            <p className="text-indigo-200 max-w-xl mb-6 text-lg">
              Our AI engine has analyzed your recent performance and suggests focusing on 
              <strong> Quantum Electrodynamics</strong> next to bridge your current knowledge gap.
            </p>
            <button className="bg-white text-indigo-900 px-8 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors shadow-lg">
              Start Suggested Module
            </button>
          </div>
          <div className="w-full md:w-1/3 grid grid-cols-2 gap-4">
            <div className="bg-indigo-800/50 backdrop-blur p-4 rounded-xl border border-indigo-700">
              <CheckCircle className="w-8 h-8 text-indigo-300 mb-2" />
              <p className="text-2xl font-bold">12</p>
              <p className="text-xs text-indigo-300 uppercase tracking-wider">Completed Tasks</p>
            </div>
            <div className="bg-indigo-800/50 backdrop-blur p-4 rounded-xl border border-indigo-700">
              <TrendingUp className="w-8 h-8 text-emerald-400 mb-2" />
              <p className="text-2xl font-bold">85%</p>
              <p className="text-xs text-indigo-300 uppercase tracking-wider">Efficiency Score</p>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -ml-32 -mb-32"></div>
      </div>
    </div>
  );
};

export default LMS;
