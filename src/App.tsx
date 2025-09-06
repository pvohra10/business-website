import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pricing from './pages/Pricing';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Pricing" element={<Pricing/>} />
    </Routes>
  );
}
 

