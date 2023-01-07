import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Categories from './components/Categories';
import BooksPage from './components/BooksPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<BooksPage />} />
          <Route path="/Categories" element={<Categories />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
