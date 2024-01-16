import { BrowserRouter , Route , Routes } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
// import NavBar from './NavBar/NavBar';
// import CartPage from './CartPage/CartPage';
// import ProDetel from './ProductFold/ProDetel';
// import Footer from './FooterFold/Footer';
// import BellingPage from './BellingPage/BellingPage';
// import Login from './Registration/Login';
// import Registration from './Registration/Registration';
// import Account from './Account/Account';
// import FavData from './FavData/FavData';
// import ProFromPage from './ProductFromUploder/ProFromPage';
// import AddProForm from './AddProFold/AddProForm';
import { Suspense, lazy } from 'react';
import LoadingComp from './LoadingFold/LoadingComp';
const HomePage = lazy(() =>  import('./HomeFold/HomePage'))
const Product = lazy(() =>  import('./ProductFold/Product'))
const NavBar = lazy(() =>  import('./NavBar/NavBar'))
const ProDetel = lazy(() =>  import('./ProductFold/ProDetel'))
const Footer = lazy(() =>  import('./FooterFold/Footer'))
const BellingPage = lazy(() =>  import('./BellingPage/BellingPage'))
const Login = lazy(() =>  import('./Registration/Login'))
const Registration = lazy(() =>  import('./Registration/Registration'))
const Account = lazy(() =>  import('./Account/Account'))
const FavData = lazy(() =>  import('./FavData/FavData'))
const ProFromPage = lazy(() =>  import('./ProductFromUploder/ProFromPage'))
const AddProForm = lazy(() =>  import('./AddProFold/AddProForm'))
const CartPage = lazy(() =>  import('./CartPage/CartPage'))
const App = () => {
  return (<>
  <Suspense fallback = {<LoadingComp/>}>
        <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element = {<HomePage/>} />
            <Route path='/product'>
              <Route index  element = {<Product/>}/>
              <Route path=':slug' element={<ProDetel/>} />
            </Route>
            <Route path='/account' element = {<Account/>} />
            <Route path='/login' element = {<Login/>}/>
            <Route path='/sign' element = {<Registration/>}/>
            <Route path='/cart' element = {<CartPage/>}/>
            <Route path='/save' element = {<FavData/>}/>
            <Route path='/belling' element = {<BellingPage/>}/>
            <Route path='/proform' element = {<ProFromPage/>} />
            <Route path='/addproform' element = {<AddProForm/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
  </Suspense>
    </>);
}

export default App