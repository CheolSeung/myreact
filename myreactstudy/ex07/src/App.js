import logo from './logo.svg';
import './App.css';
import Ex01 from './compo/Ex01';
import Header from './compo/Header';
import Home from './compo/Home';
import Login from './compo/Login';
import Result from './compo/Result';

import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    // <Ex01></Ex01>
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/result" element={<Result></Result>}></Route>
      </Routes>
    </>
  );
}

export default App;
