import NavBar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "./components/Partners";
import './index.css';

function App() {
  return (
    <main>
      <NavBar />
      <div className="bg-custom-background">
        <Hero />
        <Partners />
      </div>
    </main>
  );
}

export default App;
