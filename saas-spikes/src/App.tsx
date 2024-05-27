import NavBar from "@/components/Navbar";
import Hero from "@/components/Hero";
import './index.css';

function App() {
  return (
    <main>
      <NavBar />
      <div className="bg-custom-background">
        <Hero />
      </div>
    </main>
  );
}

export default App;
