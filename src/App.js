
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home/Home';
import NotFound from './components/Shared/NotFound/NotFound';
import Services from './components/Pages/Services/Services/Services';
import About from './components/Pages/About/About';
import Header from './components/Shared/Header/Header';
import Login from './components/Pages/Home/LoginAll/Login/Login';
import Register from './components/Pages/Home/LoginAll/Register/Register';
import RequiredAuth from './components/Pages/Home/LoginAll/RequiredAuth/RequiredAuth';
import Checkout from './components/Pages/Checkout/Checkout';
import ServiceDetail from './components/Pages/Services/ServiceDetail/ServiceDetail';
import Reviews from './components/Pages/Reviews/Reviews/Reviews';
import Blogs from './components/Pages/BlogsAll/Blogs/Blogs';




function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}> </Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/checkout' element={
          <RequiredAuth>
            <Checkout></Checkout>
          </RequiredAuth>
        }>
        </Route>

        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>} />
      </Routes>
    </div>
  );
}

export default App;
