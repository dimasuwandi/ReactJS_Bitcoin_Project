import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import Home from './komponen/home.js';
import Rb from './komponen/rb.js';
import Br from './komponen/br.js';


class App extends Component {
  render() {
    return (
      <div>
        <div>
          <center>
           <h2>Soal No.3 Ujian FrontEnd JC6 </h2>
           <h3>Muhammad Dimas Suwandi</h3>
           <Link to='/Home' ><button class="btn btn-success">Satu</button></Link>
           <Link to='/Rb'><button class="btn btn-success">Dua</button></Link>
           <Link to='/Br'><button class="btn btn-success">Tiga</button></Link>

           <div>
           <Route path='/Home' component={Home}></Route>
           <Route path='/Rb' component={Rb}></Route>
           <Route path='/Br' component={Br}></Route>
           </div>

           </center>
        </div>
        


      </div>
    );
  }
}

export default App;
