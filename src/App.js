import './App.css';
import Navbar from './components/Navbar/Navbar';
import './components/Navbar/Navbar.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <header className="App-header">
            <Navbar/>
          </header>
          <Routes>
              <Route path='/' element={<ItemListContainer/>}></Route>
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          </Routes>
      </BrowserRouter> 
    </div>
  )
}

export default App;
