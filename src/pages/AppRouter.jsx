import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../styles/App.css';
import { publicRoutes, privateRoutes} from '../router';
import { useContext } from 'react';
import { AuthContext } from '../context';
import Loader from '../components/UI/Loader/Loader';


const AppRouter = () => {
const {isAuth, isLoading} = useContext(AuthContext)

if(isLoading){
    return <Loader/>
}

    return(
        isAuth
        ?
        <Routes>
          {privateRoutes.map(route =>
            <Route path={route.path} element={route.component} exact={route.exact} key={route.path}/>
          )}
        </Routes>
        :
          <Routes>
            {publicRoutes.map(route =>
              <Route path={route.path} element={route.component} exact={route.exact} key={route.path} />
            )}
          </Routes>
      );
};

export default AppRouter;
