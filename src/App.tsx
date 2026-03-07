import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FlaskConical, Lock } from 'lucide-react';
import Home from './pages/Home';
import StablecoinPrivacy from './pages/StablecoinPrivacy';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-500 selection:text-white flex flex-col">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <FlaskConical className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">
                Matera<span className="text-blue-600">Labs</span>
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link to="/#mission" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Mission</Link>
              <Link to="/#experiments" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Experiments</Link>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-mono rounded-full border border-slate-200">
                Internal Use Only
              </span>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow flex flex-col pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <FlaskConical className="w-5 h-5 text-blue-500" />
              <span className="font-bold text-lg text-white">MateraLabs</span>
            </div>
            <p className="text-sm max-w-xs">
              Internal innovation hub. Unauthorized access is prohibited. 
              All experiments are confidential.
            </p>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>&copy; 2026 Matera. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <Lock className="w-3 h-3" />
              <span>Secure Internal Environment</span>
            </div>
          </div>
          <p className="text-center text-[10px] text-slate-600 mt-4">Version 2026-03-07-03-14</p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stablecoin-privacy" element={<StablecoinPrivacy />} />
        </Routes>
      </Layout>
    </Router>
  );
}

