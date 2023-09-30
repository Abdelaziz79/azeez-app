import logo from './logo.svg';
import './App.css';
import ProblemComp from './Components/ProblemCopm/ProblemComp';
import NavBar from './Components/NavBar/NavBar';
import Create from './Components/Create/Create';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Root from './Components/Home/Home';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import About from './Components/About/About';
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Root></Root>}> </Route>
          <Route exact path='/create' element={<Create></Create>}> </Route>
          <Route exact path='/problem' element={<ProblemComp></ProblemComp>}> </Route>
          <Route exact path='/about' element={<Container className='vh-100'><About></About></Container>}> </Route>
          <Route exact path='/problem/:id' element={<ProblemComp></ProblemComp>}> </Route>
          <Route exact path='*' element={<PageNotFound></PageNotFound>}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
