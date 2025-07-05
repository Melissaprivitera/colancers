import Image from "next/image";
import { ConnectWallet } from "@/components/ConnectWallet";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-rose/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/logo.svg"
                alt="Colancers Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="font-logo text-2xl text-coral">colancers</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-plum hover:text-coral transition-colors">Features</a>
              <a href="#how-it-works" className="text-plum hover:text-coral transition-colors">How it Works</a>
              <a href="/verify" className="text-plum hover:text-coral transition-colors">Verify</a>
              <a href="#about" className="text-plum hover:text-coral transition-colors">About</a>
            </nav>
            <div className="flex space-x-4">
              <ConnectWallet />
              <button className="btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/pattern.svg"
            alt="Background Pattern"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-plum mb-6">
              Collaborative
              <span className="block text-coral font-logo">Freelancing</span>
            </h1>
            <p className="text-xl text-plum/80 max-w-3xl mx-auto mb-8 leading-relaxed">
              Join collaborative service teams, get paid fairly, and build verified reputation 
              using ENS names, World ID verification, and Flare's FDC for skill verification.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Start Collaborating
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-plum mb-4">Why Choose Colancers?</h2>
            <p className="text-xl text-plum/70 max-w-2xl mx-auto">
              Built for the future of work with decentralized identity and fair compensation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* ENS Identity */}
            <div className="card text-center">
              <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🆔</span>
              </div>
              <h3 className="text-xl font-bold text-plum mb-3">ENS Identity Management</h3>
              <p className="text-plum/70">
                Use ENS names for decentralized identity. Set up secondary names with avatars 
                and tie all skills, projects, and reputation to your ENS domain.
              </p>
            </div>

            {/* World ID */}
            <div className="card text-center">
              <div className="w-16 h-16 bg-soft-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-plum mb-3">World ID Integration</h3>
              <p className="text-plum/70">
                Unique human verification prevents duplicate registrations. 
                One person, one account policy with privacy-preserving identity verification.
              </p>
            </div>

            {/* Flare FDC */}
            <div className="card text-center">
              <div className="w-16 h-16 bg-rose/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold text-plum mb-3">Skill Verification</h3>
              <p className="text-plum/70">
                Verify skills through Flare's Flare Data Connector (FDC). 
                On-chain credential verification with cross-referencing from multiple sources.
              </p>
            </div>

            {/* Fair Payment */}
            <div className="card text-center">
              <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-plum mb-3">Fair Payment System</h3>
              <p className="text-plum/70">
                Smart contract-based payment distribution with transparent compensation 
                based on contribution and automated payment processing.
              </p>
            </div>

            {/* Reputation */}
            <div className="card text-center">
              <div className="w-16 h-16 bg-soft-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-plum mb-3">Reputation System</h3>
              <p className="text-plum/70">
                Verifiable reputation through client reviews, skill endorsements, 
                certifications, and on-chain reputation tracking.
              </p>
            </div>

            {/* Teams */}
            <div className="card text-center">
              <div className="w-16 h-16 bg-rose/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-plum mb-3">Collaborative Teams</h3>
              <p className="text-plum/70">
                Join and manage team projects, track team performance and contributions, 
                and develop skills collaboratively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-coral to-rose">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-plum mb-6">
            Ready to Start Your Collaborative Journey?
          </h2>
          <p className="text-xl text-plum mb-8">
            Join thousands of freelancers building the future of work together
          </p>
          <button className="bg-white text-coral font-bold px-8 py-4 rounded-12 hover:bg-cream transition-colors">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-plum text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/images/logo.svg"
                  alt="Colancers Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="font-logo text-xl text-coral">colancers</span>
              </div>
              <p className="text-white/70">
                Building the future of collaborative freelancing with Web3 technology.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-coral transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-coral transition-colors">About</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-coral transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
            <p>&copy; 2024 Colancers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
