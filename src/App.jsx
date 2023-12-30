import "./App.css";

import { Footer, Blog, About, Header, Features, Demogpt } from "./containers";
import { CTA, Brand, Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />

      <Brand />
      <About />
      <Features />
      <Demogpt />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
