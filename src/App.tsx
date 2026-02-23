/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  FlaskConical, 
  Cpu, 
  Globe, 
  Zap, 
  Lock, 
  Code2, 
  Rocket,
  QrCode,
  Database
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <FlaskConical className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">
                Matera<span className="text-blue-600">Labs</span>
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#mission" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Mission</a>
              <a href="#experiments" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Experiments</a>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-mono rounded-full border border-slate-200">
                Internal Use Only
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">
              <Rocket className="w-4 h-4" />
              Exploration & Innovation
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
              Building the future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                financial technology
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
              Matera Labs is our internal playground for cutting-edge experiments. 
              We explore new technologies to keep Matera on the edge of innovation.
            </p>
            
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Always Positive About <br />
                New Technologies
              </h2>
              <div className="space-y-6 text-slate-600">
                <p>
                  At Matera, we believe that staying ahead means constantly pushing boundaries. 
                  Matera Labs is where we test hypotheses, build prototypes, and validate 
                  the next generation of fintech solutions.
                </p>
                <p>
                  From blockchain integration to AI-driven financial insights, our goal is 
                  to ensure Matera remains the leader in instant payments and digital banking infrastructure.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-3xl font-bold text-blue-600 mb-1">10+</div>
                  <div className="text-sm text-slate-500 font-medium">Active Prototypes</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-3xl font-bold text-indigo-600 mb-1">24/7</div>
                  <div className="text-sm text-slate-500 font-medium">Innovation Cycle</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-indigo-600/10 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-slate-900 rounded-2xl p-8 shadow-2xl border border-slate-800">
                <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-auto text-xs text-slate-500 font-mono">lab_terminal.sh</div>
                </div>
                <div className="font-mono text-sm space-y-2">
                  <div className="flex gap-2">
                    <span className="text-green-400">➜</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-slate-300">init_experiment --name="X9.150 QR"</span>
                  </div>
                  <div className="text-slate-400 pl-4">Initializing environment...</div>
                  <div className="text-slate-400 pl-4">Loading core banking modules...</div>
                  <div className="text-green-400 pl-4">✓ Modules loaded</div>
                  <div className="flex gap-2 mt-4">
                    <span className="text-green-400">➜</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-slate-300">deploy --target=sandbox</span>
                  </div>
                  <div className="text-slate-400 pl-4">Deploying to materalab.us...</div>
                  <div className="text-blue-400 pl-4">Waiting for confirmation...</div>
                  <div className="animate-pulse text-blue-400 pl-4">_</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiments Grid */}
      <section id="experiments" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What We're Working On</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Matera products and the lab experiments expanding their ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <QrCode className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">X9.150 QR Code</h3>
              <p className="text-slate-600 mb-4 text-sm">
                Implementing the X9.150 standard for payment QR codes to ensure global interoperability.
              </p>
              <div className="flex items-center gap-2 text-xs font-medium text-blue-600">
                <span className="px-2 py-1 bg-blue-50 rounded-md">In Progress</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md">Standard</span>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Digital Twin</h3>
              <p className="text-slate-600 mb-4 text-sm">
                Make your legacy DDA realtime without replacing it. The world is realtime (RTP, FedNow, Stablecoins) — your bank should offer a realtime experience without replacing the core banking. Lab experiments: core banking connectors and real-time sync adapters.
              </p>
              <div className="flex items-center gap-2 text-xs font-medium text-indigo-600">
                <span className="px-2 py-1 bg-indigo-50 rounded-md">Matera Product</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md">Real-Time</span>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Stablecoin Privacy</h3>
              <p className="text-slate-600 mb-4 text-sm">
                Digital Twin for stablecoin balance control, ensuring client privacy and secure off-chain management. Lab experiments: crypto provider connectors and on/off-ramp integrations.
              </p>
              <div className="flex items-center gap-2 text-xs font-medium text-emerald-600">
                <span className="px-2 py-1 bg-emerald-50 rounded-md">Matera Product</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md">Crypto</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
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
          <p className="text-center text-[10px] text-slate-600 mt-4">Version 2026-02-23-17-54</p>
        </div>
      </footer>
    </div>
  );
}

