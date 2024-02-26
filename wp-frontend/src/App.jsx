import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyNav from './Components/MyNav';
import MyFooter from './Components/MyFooter';
import Home from './Pages/Home';
import NotFoundPage from './Pages/NotFoundPage';
import Posts from './Pages/Posts';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import SinglePost from './Pages/SinglePost';

function App() {

  return (
    <>
    <div className="App">
      <BrowserRouter>
        <MyNav />
        <Container>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/posts" element={<Posts/>} />
            <Route path="*" element={<NotFoundPage/>} />
            <Route path="/singlepost/:id" element={<SinglePost/>} />
          </Routes>
        </Container>
        <MyFooter />
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
