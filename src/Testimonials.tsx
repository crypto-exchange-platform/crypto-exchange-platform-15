import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Maya K.',
    title: 'Crypto Investor',
    quote: 'CryptX is hands-down the most intuitive and responsive platform I’ve ever used.',
    image: 'https://static1.squarespace.com/static/5a7a523b90bccea7812ba94e/t/5f99c2bb95a80d03b4034df7/1603912419031/_Sarah+is+soothing+like+warm+butter+%26+honey%21_+%281%29.png',
  },
  {
    name: 'Tornike B.',
    title: 'Forex Trader',
    quote: 'Their tools helped me make smarter decisions in real-time. Highly recommended.',
    image: 'https://t3.ftcdn.net/jpg/03/53/59/46/360_F_353594684_Ca3p9RIc3xgQ1Y6ff7Jk6nVe54v9NbpQ.jpg',
  },
  {
    name: 'Anna T.',
    title: 'Blockchain Analyst',
    quote: 'I’ve tested many exchanges—CryptX has the cleanest UI and most useful data.',
    image: 'https://media.istockphoto.com/id/1135381120/photo/portrait-of-a-young-woman-outdoors-smiling.jpg?s=612x612&w=0&k=20&c=T5dukPD1r-o0BFqeqlIap7xzw07icucetwKaEC2Ms5M=',
  },
  {
    name: 'George I.',
    title: 'Tech Lead, Fintech',
    quote: 'Reliable, fast, and surprisingly beautiful interface. We onboarded our whole team.',
    image: 'https://media.istockphoto.com/id/2192682946/photo/portrait-of-a-handsome-hispanic-man.jpg?s=612x612&w=0&k=20&c=ue1cvFs_begImWTsYNMq-3HXf3lHw2KNVkBr-T2UZtw=',
  },
  {
    name: 'Nino D.',
    title: 'Day Trader',
    quote: 'Real-time execution is legit. I switched from Binance, no regrets.',
    image: 'https://liketherazor.com/wp-content/uploads/2023/01/Tonja-King204946-Edit-WEB-VERSION-Chris-Gillett-Houston-Headshot-Photographer-2.jpg',
  },
  {
    name: 'David S.',
    title: 'DeFi Enthusiast',
    quote: 'Their platform blends modern aesthetics with performance. 10/10.',
    image: 'https://www.shutterstock.com/image-photo/portrait-young-investor-banker-workplace-260nw-2364566447.jpg',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-[#0a0d1a] py-24 px-4 md:px-8 border-t border-blue-950 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-orbitron text-blue-400 text-center mb-16 uppercase tracking-wide">
          What Users Say
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-[#11131e] border border-blue-950 rounded-xl p-6 shadow-md hover:shadow-blue-600/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full border border-blue-950 object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-400">{item.title}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">“{item.quote}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
 