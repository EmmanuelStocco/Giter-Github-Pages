import React from 'react';
import './App.css';
import IndexMenu from './componentes/Index/IndexMenu.jsx';
import SecondMenu from './componentes/SecondTierPages/SecondTierMenu.jsx'; 
import Index from './componentes/Index/Index.jsx' 

import Trabalho from './componentes/FirstTierPages/Trabalho.jsx';
import Vidapessoal from './componentes/FirstTierPages/Vidapessoal.jsx';
import Cozinha from './componentes/FirstTierPages/Cozinha.jsx';
import Record from './componentes/SecondTierPages/Record.jsx';

import Musicas from './componentes/SecondTierPages/Musicas.jsx';
import Diversas from './componentes/SecondTierPages/Diversas';
import Futebol from './componentes/SecondTierPages/Futebol';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
       <Router>
         <Switch>
           <Route exact path="/">
                <IndexMenu/>
                <Index/>
           </Route> 
           <Route exact path="/trabalho">
                <IndexMenu/>
                <Trabalho/>
           </Route>

           <Route exact path="/vida">
                <IndexMenu/>
                <Vidapessoal/>
           </Route> 

           <Route exact path="/cozinha">
                <IndexMenu/>
                <Cozinha/>
           </Route> 

           <Route exact path="/record">
                <SecondMenu/>
                <Record/>
           </Route>

           <Route exact path="/record/musicas">
                <SecondMenu/>
                <Musicas/>
           </Route>
           <Route exact path="/record/diversas">
                <SecondMenu/>
                <Diversas/>
           </Route>

           <Route exact path="/record/futebol">
                <SecondMenu/>
                <Futebol/>
           </Route>
         </Switch>
       </Router>
    </div>
  );
}

export default App;
