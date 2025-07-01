import { useState } from 'react';
import { motion } from 'framer-motion';

const TradeSection: React.FC = () => {
  const [side, setSide] = useState<'buy' | 'sell'>('buy');
  const [pair, setPair] = useState('BTC/USDT');
  const [amount, setAmount] = useState('');

  const handleTrade = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`${side.toUpperCase()} ${amount} of ${pair}`);
  };

  return (
    <section className="bg-[#0a0d1a] py-24 px-4 md:px-8 border-t border-blue-950 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.form
          onSubmit={handleTrade}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#11131e] border border-blue-950 rounded-2xl p-8 shadow-lg space-y-6"
        >
          <h2 className="text-3xl font-orbitron text-blue-400 mb-6 text-center">
            Execute Trade
          </h2>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setSide('buy')}
              className={`w-full py-3 rounded-md border ${
                side === 'buy' ? 'bg-blue-500 border-blue-950 text-white' : 'border-blue-950 text-blue-300'
              } transition-all`}
            >
              Buy
            </button>
            <button
              type="button"
              onClick={() => setSide('sell')}
              className={`w-full py-3 rounded-md border ${
                side === 'sell' ? 'bg-blue-900 border-blue-950 text-white' : 'border-blue-950 text-blue-300'
              } transition-all`}
            >
              Sell
            </button>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Trading Pair</label>
            <select
              value={pair}
              onChange={e => setPair(e.target.value)}
              className="w-full bg-[#1a1d2e] border border-blue-950 rounded-md px-4 py-3 text-white focus:outline-none"
            >
              <option>BTC/USDT</option>
              <option>ETH/USDT</option>
              <option>SOL/USDT</option>
              <option>ADA/USDT</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              className="w-full bg-[#1a1d2e] border border-blue-950 rounded-md px-4 py-3 text-white focus:outline-none"
              placeholder="Enter amount"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-3 bg-blue-950 hover:bg-blue-600 text-white rounded-md font-semibold transition-all"
          >
            Execute {side.toUpperCase()} Order
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <h3 className="text-3xl font-orbitron text-blue-300">Your Gateway to Crypto</h3>
          <p className="text-gray-400 leading-relaxed">
            Trade securely and instantly with real-time data, lightning execution, and full transparency. 
            Whether you're a beginner or a seasoned trader, our platform is designed to help you grow your portfolio with confidence.
          </p>
          <ul className="text-sm text-blue-300 list-disc pl-5 space-y-1">
            <li>Low latency order matching</li>
            <li>Top-tier asset liquidity</li>
            <li>Transparent fee structure</li>
            <li>Real-time portfolio tracking</li>
          </ul>
         
        </motion.div>
      </div>
    </section>
  );
};

export default TradeSection;
 