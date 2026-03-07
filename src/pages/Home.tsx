import React from 'react';
import { motion } from 'motion/react';
import { 
  FlaskConical, 
  Lock, 
  QrCode,
  Database
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
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
              <FlaskConical className="w-4 h-4" />
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

      {/* Experiments Grid */}
      <section id="experiments" className="py-20 bg-white">
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
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-all h-full flex flex-col"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <QrCode className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">X9.150 QR Code</h3>
              <p className="text-slate-600 mb-4 text-sm flex-grow">
                Implementing the X9.150 standard for payment QR codes to ensure global interoperability.
              </p>
              <div className="flex items-center gap-2 text-xs font-medium text-blue-600 mt-auto">
                <span className="px-2 py-1 bg-blue-50 rounded-md">In Progress</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md">Standard</span>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-all h-full flex flex-col"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Digital Twin</h3>
              <p className="text-slate-600 mb-4 text-sm flex-grow">
                Make your legacy DDA realtime without replacing it. The world is realtime (RTP, FedNow, Stablecoins) — your bank should offer a realtime experience without replacing the core banking.
              </p>
              <div className="flex items-center gap-2 text-xs font-medium text-indigo-600 mt-auto">
                <span className="px-2 py-1 bg-indigo-50 rounded-md">Matera Product</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md">Real-Time</span>
              </div>
            </motion.div>

            {/* Card 3 (Clickable Link to Stablecoin Privacy) */}
            <Link to="/stablecoin-privacy" className="block h-full">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-200 hover:shadow-emerald-200/50 hover:border-emerald-300 transition-all cursor-pointer h-full flex flex-col relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 relative z-10">
                  <Lock className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 relative z-10 group-hover:text-emerald-700 transition-colors">Stablecoin Privacy</h3>
                <p className="text-slate-600 mb-4 text-sm flex-grow relative z-10">
                  Digital Twin for stablecoin balance control, ensuring client privacy and secure off-chain management. Lab experiments: crypto provider connectors and on/off-ramp integrations.
                </p>
                <div className="flex items-center justify-between mt-auto relative z-10">
                  <div className="flex items-center gap-2 text-xs font-medium text-emerald-600">
                    <span className="px-2 py-1 bg-emerald-50 rounded-md">Matera Product</span>
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md">Crypto</span>
                  </div>
                  <span className="text-emerald-600 text-sm font-medium group-hover:translate-x-1 transition-transform">Read More &rarr;</span>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-slate-50">
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
    </>
  );
}
