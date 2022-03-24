import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects'
import SliderCover from './components/layout/SliderCover';

function App() {
  return (
    <div>
      <Router>
        <SliderCover />
        <Header />
        <Container>
          <Routes>
            <Route exact path="/" element={<Home />}> </Route>
            <Route path="/about" element={<About />}> </Route>
            <Route path="/projects" element={<Projects />}> </Route>
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;