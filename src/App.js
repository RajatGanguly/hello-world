import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin';
import Banner from './components/Banner';
import CodeTable from './components/CodeTable';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<><Banner/><CodeTable/></>} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </div>
  );
}

export default App;
