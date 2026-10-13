import Hero from './components/Hero';
import Features from './components/Features';
import ProblemSolution from './components/ProblemSolution';
import SharingCardFeature from './components/SharingCardFeature';
import UIShowcase from './components/UIShowcase';

function App() {
  return (
    <div className="min-h-screen bg-cream selection:bg-pastel-yellow selection:text-bear-dark">
      <nav className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-50">
        <div className="text-2xl font-bold text-bear-dark flex items-center gap-2">
          <span className="text-3xl">🐻</span> BearSplit
        </div>
        <a
          href="https://haikaitech.my/bearsplit/"
          className="px-4 py-2 bg-white border-2 border-bear-dark rounded-hand text-bear-dark font-bold hover:bg-pastel-yellow transition-colors shadow-soft"
        >
          About the prototype
        </a>
      </nav>

      <main>
        <Hero />
        <ProblemSolution />
        <SharingCardFeature />
        <UIShowcase />
        <Features />
        <section className="max-w-3xl mx-auto px-6 py-16 text-bear-dark"><h2 className="text-3xl font-bold mb-4">Where we are building next</h2><p>BearSplit is a local prototype, not a released app. Our next milestone is testing shared-expense and settlement flows with intended users. Spend Pizza visual breakdowns, Bear Awards and AI recaps are planned ideas.</p><p className="mt-4">We plan to explore Claude for summaries grounded in structured expense data. Claude is not integrated yet. Balances and settlements will remain calculated by application code.</p></section>
        <section id="privacy" className="max-w-3xl mx-auto px-6 py-16 text-bear-dark"><h2 className="text-3xl font-bold mb-4">Your waitlist email</h2><p>BearSplit is a product by HaikaiTech Solutions, Malaysia. When you join, we collect your email address to manage the waitlist and send BearSplit early-access updates. The waitlist is hosted on Vercel, stores signup information in Supabase, and uses Resend for email delivery and signup notifications.</p><p className="mt-4">To ask about your data or request removal from the waitlist, email <a className="underline" href="mailto:hq@haikaitech.my?subject=BearSplit%20waitlist">hq@haikaitech.my</a>. We keep your signup while operating the waitlist unless you request removal. Last updated: October 13, 2026.</p></section>
      </main>

      <footer className="py-10 text-center text-bear-dark/60 border-t-2 border-bear-dark/10 mt-10">
        <p className="mb-3">A product by <a className="underline underline-offset-4" href="https://haikaitech.my/bearsplit/">HaikaiTech Solutions, Malaysia</a>.</p><p className="mb-3"><a className="underline underline-offset-4" href="mailto:hq@haikaitech.my">hq@haikaitech.my</a> · <a className="underline underline-offset-4" href="#privacy">Privacy policy</a></p><p>© {new Date().getFullYear()} BearSplit. Made with 🍯 and ❤️.</p>
      </footer>
    </div>
  );
}

export default App;
