import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact';
import Login from './pages/auth/Login';
import Reset from './pages/auth/Reset';
import Register from './pages/auth/Register';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/reset' element={<Reset/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
