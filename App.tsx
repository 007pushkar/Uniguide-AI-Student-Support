
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatInterface from './components/ChatInterface';

const App: React.FC = () => {
  const [initialQuestion, setInitialQuestion] = useState<string | undefined>(undefined);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSelectQuestion = (question: string) => {
    setInitialQuestion(question);
    // Reset so it can be triggered again if same question clicked
    setTimeout(() => setInitialQuestion(undefined), 100);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full overflow-hidden text-slate-800">
      <Sidebar 
        onSelectQuestion={handleSelectQuestion} 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 z-20">
          <div className="flex items-center gap-4">
             <div className="md:hidden">
               <i className="fas fa-bars text-slate-500"></i>
             </div>
             <div>
                <h2 className="text-sm font-bold text-slate-800">Support Chat</h2>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider">Online Now</span>
                </div>
             </div>
          </div>
          <div className="flex items-center gap-3">
             <button className="text-slate-400 hover:text-slate-600 p-2 transition-colors">
               <i className="far fa-bell"></i>
             </button>
             <button className="text-slate-400 hover:text-slate-600 p-2 transition-colors">
               <i className="fas fa-cog"></i>
             </button>
             <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
               <i className="fas fa-user text-slate-400 text-xs"></i>
             </div>
          </div>
        </header>
        <ChatInterface initialMessage={initialQuestion} />
      </main>
    </div>
  );
};

export default App;
