import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/Header';
import { FiltersProvider } from './services/filter/Filter';
import NewRoot from './pages/new-root/NewRoot';
import NewRootSeries from './pages/new-root-series/NewRootSeries';
import NewSingleMovie from './pages/new-single-movie/NewSingleMovie';
import NewSingleSerie from './pages/new-single-serie/NewSingleSerie';
import Login from './pages/login/Login';
import Please from './pages/please/Please';
import { store, persistor } from './redux/general/store';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { PersistGate } from 'redux-persist/integration/react'
import Loading from './components/loading/Loading';
import './App.css';

function App() {
  
  const [isChecked, setisChecked] = useState(store.getState().user.isChecked);
  store.subscribe(() => {
    setisChecked(store.getState().user.isChecked)
  })

  return (
    <PersistGate loading={<Loading/>} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div className="app">
            <FiltersProvider>
              <Header/> 
            </FiltersProvider>
              <Switch>
                <Route exact path="/">
                  <Login isChecked={isChecked}/>
                </Route>
                <Route exact path="/movies">
                  <NewRoot isChecked={isChecked}/>
                </Route>
                <Route exact path="/movies/detail/:id">
                  <NewSingleMovie isChecked={isChecked}/>
                </Route> 
                <Route path="/series/detail/:id" component={NewSingleSerie}>
                  <NewSingleSerie  isChecked={isChecked}/>
                </Route> 
                <Route path="/series">
                  <NewRootSeries isChecked={isChecked}/>
                </Route>
                <Route path="/please">
                  <Please isChecked={isChecked}/>
                </Route>
                <Route path="*">
                  <Redirect to="/"/>
                </Route>
              </Switch>  
          </div>
        </BrowserRouter>
      </ThemeProvider> 
    </PersistGate>
  );
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#616161",
      light: "#f5f5f5",
      dark: "#212121"
    },
    secondary: {
      main: "#bbdefb",
      light: "#e3f2fd",
      dark: "#0d47a1"
    },
  },
  overrides: {
    MuiCardMedia: {
      root: {
        height: '30em'
      }
    },
    MuiCard: {
      root: {
        boxShadow: '20px 20px 40px #8b8b8bb3, -20px -20px 40px #ffffff',
        borderRadius: '30px'
      }
    },
    MuiTypography: {
      h6: {
        fontWeight: 'bold'
      },
      h4: {
        fontWeight: 'bold'
      }
    },
    MuiInputBase: {
      root: {
        color: "#616161",
      },
    }
  }
});

export default App;
