// import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Product1 } from './components/Product1';
import { Product2 } from './components/Product2';
import { Product3 } from './components/Product3';
import { Footer } from './components/Footer';
import { Carousel } from './components/Carousel';
import ComparisonTable from './components/ComparisonTable';
import PaymentGateway from './components/PaymentGateway';
import { CustomColor } from './components/CustomColor';
import { Product } from './components/Product';
// import { ComparisonTable } from './components/ComparisonTable';

// import { LiquidButton } from './components/LiquidButton';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contect' element={<Contact />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/product1' element={<Product1 />}></Route>
        <Route path='/product2' element={<Product2 />}></Route>
        <Route path='/product3' element={<Product3 />}></Route>
        <Route path='/comparisonTable' element={<ComparisonTable />}></Route>
        <Route path='/paymentGateway' element={<PaymentGateway />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
