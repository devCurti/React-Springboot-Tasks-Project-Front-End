import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import Finished from './pages/Finished';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/finished' element={<Finished/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
