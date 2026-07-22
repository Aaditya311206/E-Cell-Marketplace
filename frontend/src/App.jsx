import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import PixelBlast from "./components/effects/PixelBlast";
import ClickSpark from "./components/effects/ClickSpark";

function App() {
  return (
    <>
      <div className="fixed inset-0 z-0 bg-slate-950">
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#10b981"
          patternScale={4}
          patternDensity={1.2}
          speed={1.35}
        />
        <div className="absolute inset-0 bg-slate-950/60 z-0" />
      </div>

      <div className="relative min-h-screen z-10 flex flex-col">
        <Navbar />
        <main className="flex-1 pt-28 sm:pt-32 px-4 sm:px-6 lg:px-8 max-w-6xl w-full mx-auto pb-16">
          <ClickSpark sparkColor="#10b981" sparkSize={12} sparkRadius={22} sparkCount={10} duration={500}>
            <AppRoutes />
          </ClickSpark>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
