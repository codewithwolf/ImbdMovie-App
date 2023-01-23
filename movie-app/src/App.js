 import React from 'react';

 import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './componantes/Header/Header';
import Home from './Pages/Home';
import Movielist from './componantes/MovieList/Movielist';
import Movie from './Pages/MovieDetail/Movie';



function App() {
  return (
    
    
    <Router>
    <Header />
    <Routes> 
    <Route index element={<Home/>}></Route>
    <Route path='movie/:id' element={<Movie />}></Route>
    <Route path='movies/:type' element={<Movielist />}></Route>
    <Route path='/*' element={<h1>error</h1>}></Route>
    
    </Routes>
    </Router>
    
   
    
  );
}

export default App;
