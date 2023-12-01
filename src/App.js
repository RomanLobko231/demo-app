import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import About from './pages/About';
import Posts from './pages/Posts';
import Navbar from './components/UI/Navbar/Navbar';
import Error from './pages/Error';
import PostIdPage from './pages/PostIdPage';
import { publicRoutes, privateRoutes} from './router';
import AppRouter from './pages/AppRouter';
import { AuthContext } from './context';
import { useEffect, useState } from 'react';


function App() {
const [isAuth, setIsAuth] = useState(false)
const [isLoading, setLoading] = useState(true)

useEffect(() => {
  if(localStorage.getItem('auth')) {
    setIsAuth(true)
  } 
  setLoading(false)
}, [])
  return(
    <AuthContext.Provider value={{isAuth, setIsAuth, isLoading}}>
    <BrowserRouter>
    <Navbar />
    <AppRouter/>
    </BrowserRouter>
    </AuthContext.Provider>
    
  );
};

export default App;
