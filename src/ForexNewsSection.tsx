import { motion } from 'framer-motion';

const news = [
  {
    title: 'USD Surges as Fed Hints Rate Hike',
    summary: 'Dollar strengthens following Jerome Powell’s speech on tightening monetary policy.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGNyeXB0b3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'Eurozone Inflation Declines',
    summary: 'ECB reacts cautiously as inflation rates dip below expected threshold.',
    image: 'https://images.unsplash.com/photo-1621264448270-9ef00e88a935?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGNyeXB0b3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'Yen Weakens Against Dollar',
    summary: 'Bank of Japan holds steady as yen falls amid global uncertainty.',
    image: 'https://images.unsplash.com/photo-1642403711604-3908e90960ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGNyeXB0b3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'GBP Rallies After GDP Surprise',
    summary: 'UK economy rebounds stronger than projected, giving pound a boost.',
    image: 'https://images.unsplash.com/photo-1639475377520-b256a5d204b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGNyeXB0b3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'Swiss Franc Stable Amid Global Shakeups',
    summary: 'CHF remains solid as investors flock to safe-haven assets.',
    image: 'https://images.unsplash.com/photo-1639322537231-2f206e06af84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxjcnlwdG98ZW58MHx8MHx8fDA%3D',
  },
  {
    title: 'Canadian Dollar Drops on Oil Concerns',
    summary: 'CAD weakens as oil prices slide amid OPEC policy concerns.',
    image: 'https://images.unsplash.com/photo-1639825988283-39e5408b75e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGNyeXB0b3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'AUD Strengthens Following Trade Surplus',
    summary: 'Australia’s trade data boosts AUD confidence despite global risks.',
    image: 'https://images.unsplash.com/photo-1615992174118-9b8e9be025e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNyeXB0b3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'Emerging Markets Face FX Volatility',
    summary: 'Developing economies experience pressure as dollar dominance grows.',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNyeXB0b3xlbnwwfHwwfHx8MA%3D%3D',
  },
];


const ForexNewsSection: React.FC = () => {
  return (
    <section className="bg-[#0a0d1a] py-24 px-4 md:px-8 border-t border-blue-950 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-orbitron text-blue-400 text-center mb-16 uppercase tracking-wide">
          Forex News
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {news.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative group overflow-hidden bg-[#11131e] border border-blue-950 rounded-2xl shadow-lg hover:shadow-blue-600/30 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-5 space-y-2 transition-all duration-300 group-hover:bg-[#1a1f2e]">
                <h3 className="text-lg font-semibold text-blue-300 group-hover:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300">{item.summary}</p>
              </div>
              <div className="absolute inset-0 bg-blue-400/10 opacity-0 group-hover:opacity-10 transition duration-300 rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForexNewsSection;
 