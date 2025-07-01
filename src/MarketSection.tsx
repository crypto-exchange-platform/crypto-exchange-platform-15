
const marketData = [
  {
    symbol: 'BTC/USDT',
    price: '58,120',
    change: '+2.3%',
    high: '59,000',
    low: '56,500',
    volume: '1.2B',
    description: 'Bitcoin leads the crypto market with strong performance amid investor confidence.',
    trend: 'up',
  },
  {
    symbol: 'ETH/USDT',
    price: '3,480',
    change: '-1.1%',
    high: '3,560',
    low: '3,400',
    volume: '850M',
    description: 'Ethereum slightly pulled back after recent rally but still maintains upward momentum.',
    trend: 'down',
  },
  {
    symbol: 'SOL/USDT',
    price: '142',
    change: '+5.7%',
    high: '145',
    low: '134',
    volume: '400M',
    description: 'Solana gains traction due to growing DeFi adoption and faster transaction speeds.',
    trend: 'up',
  },
  {
    symbol: 'ADA/USDT',
    price: '0.45',
    change: '+1.8%',
    high: '0.48',
    low: '0.42',
    volume: '270M',
    description: 'Cardano climbs as developers push forward ecosystem improvements.',
    trend: 'up',
  },
  {
    symbol: 'XRP/USDT',
    price: '0.65',
    change: '-0.7%',
    high: '0.69',
    low: '0.63',
    volume: '350M',
    description: 'XRP trades sideways while legal news around Ripple continues to affect market sentiment.',
    trend: 'down',
  },
  
];

const MarketSection: React.FC = () => {
  return (
    <section className="bg-[#0a0d1a] py-24 px-4 md:px-8 border-t border-blue-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-orbitron text-blue-400 text-center mb-16 uppercase tracking-wide">
          Market Overview
        </h2>
        <div className="grid gap-8">
          {marketData.map((coin, index) => (
            <div
              key={index}
              className="bg-[#11131e] border border-blue-800/2 rounded-2xl p-8 shadow-md hover:shadow-blue-600/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="text-2xl font-orbitron text-blue-300">{coin.symbol}</h3>
                  <p className="text-sm text-gray-400 mt-1">{coin.description}</p>
                </div>
                <div className="mt-6 md:mt-0 text-right">
                  <p className="text-3xl font-semibold text-white">${coin.price}</p>
                  <p className="text-sm text-blue-400">{coin.change}</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-300">
                <div>
                  <p className="text-gray-500">24h High</p>
                  <p>${coin.high}</p>
                </div>
                <div>
                  <p className="text-gray-500">24h Low</p>
                  <p>${coin.low}</p>
                </div>
                <div>
                  <p className="text-gray-500">Volume</p>
                  <p>${coin.volume}</p>
                </div>
                <div>
                  <p className="text-gray-500">Trend</p>
                  <p className="text-blue-400">{coin.trend.toUpperCase()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
 