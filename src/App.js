import './App.css';
import Contact from './components/Contact';
import Content from './components/Content';
import Header from './components/Header';
import Project from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Project />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
