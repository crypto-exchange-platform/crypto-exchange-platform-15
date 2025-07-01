import { FaTwitter, FaLinkedin, FaGithub, FaTelegram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0d1a] border-t border-blue-950 text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div>
          <h3 className="text-2xl font-orbitron text-white mb-4">CryptK</h3>
          <p className="text-sm text-gray-400">
            Empowering the future of trading with technology, trust, and transparency.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white mb-3 uppercase">Navigation</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#markets" className="hover:text-white transition">Markets</a></li>
            <li><a href="#trade" className="hover:text-white transition">Trade</a></li>
            <li><a href="#portfolio" className="hover:text-white transition">Portfolio</a></li>
            <li><a href="#news" className="hover:text-white transition">News</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white mb-3 uppercase">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Email: <a href="mailto:support@cryptx.ai" className="hover:text-white">support@cryptx.ai</a></li>
            <li>Telegram: <a href="#" className="hover:text-white">@cryptx</a></li>
            <li>Location: Global HQ, Tbilisi 🌍</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white mb-3 uppercase">Follow Us</h4>
          <div className="flex gap-4 text-xl text-blue-400">
            <a href="#" className="hover:text-white transition"><FaTwitter /></a>
            <a href="#" className="hover:text-white transition"><FaLinkedin /></a>
            <a href="#" className="hover:text-white transition"><FaGithub /></a>
            <a href="#" className="hover:text-white transition"><FaTelegram /></a>
          </div>
        </div>
      </div>

      <div className="text-center mt-12 text-sm text-gray-600 border-t border-blue-950 pt-6">
        © {new Date().getFullYear()} CryptK. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
 