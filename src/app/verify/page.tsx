import { WorldIDVerification } from '@/components/worldid/WorldIDVerification';

export default function VerifyPage() {
  return (
    <div className="min-h-screen bg-cream">
      <header className="bg-white shadow-sm border-b border-rose/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-rose to-plum rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <h1 className="text-2xl font-bold text-plum">CoLancers</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-plum hover:text-rose transition-colors">
                Home
              </a>
              <a href="/verify" className="text-rose font-semibold">
                Verify
              </a>
            </nav>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-plum mb-4">
              World ID Verification
            </h1>
            <p className="text-plum/70 text-lg">
              Complete your verification to access all CoLancers features
            </p>
          </div>
          
          <WorldIDVerification />
        </div>
      </main>
    </div>
  );
} 