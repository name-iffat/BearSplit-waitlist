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
          href="#"
          className="px-4 py-2 bg-white border-2 border-bear-dark rounded-hand text-bear-dark font-bold hover:bg-pastel-yellow transition-colors shadow-soft"
        >
          BearSplit App
        </a>
      </nav>

      <main>
        <Hero />
        <ProblemSolution />
        <SharingCardFeature />
        <UIShowcase />
        <Features />
      </main>

      <footer className="py-10 text-center text-bear-dark/60 border-t-2 border-bear-dark/10 mt-10">
        <p>© {new Date().getFullYear()} BearSplit. Made with 🍯 and ❤️.</p>
      </footer>
    </div>
  );
}

export default App;
