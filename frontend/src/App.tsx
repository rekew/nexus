import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Slider from "./components/Slider";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero/>
        <Slider />
      </main>
    </>
  );
}

export default App;
