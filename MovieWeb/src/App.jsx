import './App.css'
import { BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';
import PageNotFound from './components/PageNotFound';

function App() {
  return(
    <div className='App'>
      <BrowserRouter>
        <Header />
        <div className='my-5'>
          <Routes>
            <Route path='/' element={ <Home /> }/>
            <Route path='/movie/:imdbID' element={ <MovieDetail /> }/>
            <Route path='*' element={ <PageNotFound /> } />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
