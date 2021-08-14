
import Footer from './components/UI/Footer'
import Navigation from './pages/Navigation';
import Homepage from './pages/Homepage'
import Authentication from './pages/Authentication';
import EMS from './pages/EMS';
import NotFoundRoute from './pages/NotFoundRoute'
import { Route, Switch, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux';


const App = () => {

  const token = useSelector(state => state.token)

  return <>
    <Navigation />

    <Switch>
      <Route path="/" exact >
        <Redirect to="/home" />
      </Route>

      <Route path="/home" exact>
        <Homepage />
      </Route>


      <Route path="/auth" exact >
        <Authentication />
      </Route>
      {token &&
        <Route path="/ems" exact>
          <EMS />
        </Route>}

      <Route path="*" >
        <NotFoundRoute />
      </Route>
    </Switch>
        <Footer/>
       
  </>

}

export default App;
