import logo from './logo.svg';
import './App.css';
import Join from './compo/Join';
import Login from './compo/Login';
import {Routes, Route} from 'react-router-dom';  // 주소값 부여

function App() {
  return (
    <Routes>
      <Route path='/' element={<Join></Join>}></Route>
      <Route path='/Login' element={<Login></Login>}></Route>
    </Routes>
  );
}

export default App;
