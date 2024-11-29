import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Contacts from './pages/Contacts';
import Leads from './pages/Leads';
import Keychains from './pages/Keychains';

function App() {
  return (
    <Router basename='massacre-mascarade'>
      <div className='bg-transparent relative min-h-screen w-screen overflow-hidden'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/keychains" element={<Keychains />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;