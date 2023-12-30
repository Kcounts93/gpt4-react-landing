import "./App.css";

import { Footer, Blog, About, Header, Features, Demogpt } from "./containers";
import { CTA, Navbar, Social } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Social />
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
