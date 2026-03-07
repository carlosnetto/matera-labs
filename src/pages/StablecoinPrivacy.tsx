import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  Wallet, 
  ShieldCheck, 
  ArrowRightLeft,
  Server,
  Lock,
  EyeOff
} from 'lucide-react';

export default function StablecoinPrivacy() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-50 via-white to-white"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-emerald-200">
              <Lock className="w-8 h-8 text-emerald-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Stablecoin Privacy & <br /> The Digital Twin
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Operate your bank like a Tier-1 Crypto Exchange. Ensure absolute privacy for your clients while managing 
              liquidity securely off-chain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Myth vs Reality */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">The Blockchain Myth</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Demystifying how modern financial institutions actually handle crypto assets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* The Myth */}
            <div className="bg-white p-8 rounded-2xl border border-red-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -z-10"></div>
              <div className="text-red-600 font-bold mb-4 uppercase tracking-wider text-sm">The Myth</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                "Every account holder needs a personal wallet on the blockchain."
              </h3>
              <p className="text-slate-600">
                It's a common misconception that for a bank to support stablecoins, every single user must have their own directly-owned wallet address on the blockchain. 
              </p>
            </div>

            {/* The Reality */}
            <div className="bg-emerald-900 p-8 rounded-2xl border border-emerald-800 shadow-xl relative overflow-hidden text-emerald-50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-800 rounded-bl-full -z-10"></div>
              <div className="text-emerald-400 font-bold mb-4 uppercase tracking-wider text-sm">The Reality</div>
              <h3 className="text-xl font-bold text-white mb-4">
                One consolidated balance, managed off-chain.
              </h3>
              <p className="text-emerald-100/80 mb-4">
                Just like major exchanges (Coinbase, Kraken), users see one single balance per asset (e.g., total USDC). The exchange controls the actual blockchain wallets behind the scenes.
              </p>
              <p className="text-emerald-100/80">
                If the biggest crypto companies work this way to ensure efficiency and privacy, banks shouldn't work differently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Privacy Matters */}
      <section className="py-20 lg:py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-6">
                <EyeOff className="w-4 h-4" />
                Public vs Private
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Why on-chain <br/>balances are a risk
              </h2>
              <div className="space-y-6 text-slate-600 text-lg">
                <p>
                  Blockchains are inherently public. If your client's balance is on the blockchain, <b className="text-slate-900">anyone with their address can see their balance and their entire transaction history.</b>
                </p>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-indigo-600" />
                    The Corporate Risk
                  </h4>
                  <p className="text-sm">
                    If a store uses a fixed blockchain address to collect payments, their competitors can easily track that address to know exactly how much they sell and exactly when every payment happened.
                  </p>
                </div>
                <p>
                  To receive a payment, users must share their public address. If tied directly to personal wallets, every transfer automatically exposes their private financial data to the sender.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white border border-slate-200 rounded-3xl p-8 shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 border border-red-100 bg-red-50/50 rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    <div className="flex-grow">
                      <div className="text-xs text-slate-500 font-mono">TxHash: 0x71a...89f</div>
                      <div className="text-sm font-medium text-slate-900">Payment Received</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-slate-900">+500.00 USDC</div>
                      <div className="text-xs text-slate-500">Publicly Visible</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 border border-red-100 bg-red-50/50 rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    <div className="flex-grow">
                      <div className="text-xs text-slate-500 font-mono">Wallet Balance</div>
                      <div className="text-sm font-medium text-slate-900">Total Assets Exposed</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-slate-900">142,500.00 USDC</div>
                      <div className="text-xs text-slate-500">Publicly Visible</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex items-center justify-center p-4 bg-slate-900 rounded-xl text-white gap-3">
                  <Lock className="w-5 h-5 text-emerald-400" />
                  <span className="font-medium">Digital Twin keeps this data off-chain</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works (Architecture) */}
      <section className="py-20 lg:py-24 bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">How Digital Twin Works</h2>
            <p className="max-w-2xl mx-auto text-slate-400">
              Operating your bank with extreme security and privacy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl items-center justify-center flex mb-6 border border-blue-500/20">
                <Server className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Off-Chain Ledger</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                Digital Twin controls the balance of every account holder for every supported crypto asset off-chain. When a user sends money, the amount is simply deducted internally, and the actual funds are sent from the bank's Hot Wallet.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl items-center justify-center flex mb-6 border border-emerald-500/20">
                <Wallet className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Receiving Funds</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                Users generate public addresses to receive funds. When money hits these addresses, Digital Twin registers the value internally in favor of the user. Periodically, these dispersed funds are swept into the bank's central Hot Wallet.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
              <div className="w-12 h-12 bg-indigo-500/10 rounded-xl items-center justify-center flex mb-6 border border-indigo-500/20">
                <ShieldCheck className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Watermark Sweeping</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                If the Hot Wallet balance exceeds the high water mark, excess is swept to a high-security Cold Wallet. If it drops below the low water mark, Digital Twin requests a refill (but cannot pull from cold storage itself, ensuring security).
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium">
              <ArrowRightLeft className="w-5 h-5" />
              Your bank directly enables Buy, Sell, Send, and Receive on supported blockchains.
            </div>
          </div>
          
          <div className="mt-24 pt-16 border-t border-slate-700/50">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Architecture Orchestration</h2>
              <p className="max-w-2xl mx-auto text-slate-400">
                Visualizing how Digital Twin integrates internal ledgers with external blockchains and liquidity providers like Circle.
              </p>
            </div>
            
            <div className="bg-slate-800/30 p-4 rounded-3xl border border-slate-700/50">
              <img 
                src="/digital-twin-architecture.png" 
                alt="Digital Twin Architecture Diagram" 
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
