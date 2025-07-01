import { motion } from 'framer-motion';

const portfolioData = [
  {
    symbol: 'BTC',
    amount: 0.65,
    valueUSD: 37778,
    change: '+5.2%',
    allocation: 48,
  },
  {
    symbol: 'ETH',
    amount: 5.4,
    valueUSD: 18700,
    change: '+2.9%',
    allocation: 24,
  },
  {
    symbol: 'SOL',
    amount: 120,
    valueUSD: 17040,
    change: '-1.1%',
    allocation: 22,
  },
  {
    symbol: 'ADA',
    amount: 950,
    valueUSD: 1683,
    change: '+0.7%',
    allocation: 6,
  },
];

const PortfolioSection: React.FC = () => {
  return (
    <section className="bg-[#0a0d1a] py-24 px-4 md:px-8 border-t border-blue-950 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-orbitron text-blue-400 text-center mb-16 uppercase tracking-wide">
          Your Portfolio
        </h2>

        <div className="space-y-6">
          {portfolioData.map((asset, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-[#11131e] border border-blue-950 rounded-xl p-6 shadow-md"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-orbitron text-blue-300">{asset.symbol}</h3>
                  <p className="text-sm text-gray-400">
                    {asset.amount} {asset.symbol}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-semibold">${asset.valueUSD.toLocaleString()}</p>
                  <p
                    className={`text-sm ${
                      asset.change.startsWith('+') ? 'text-blue-400' : 'text-red-400'
                    }`}
                  >
                    {asset.change}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-1">Allocation</p>
                <div className="w-full h-2 bg-[#1a1f2e] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full transition-all"
                    style={{ width: `${asset.allocation}%` }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
 