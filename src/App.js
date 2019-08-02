import React, {Component} from 'react';
import Navbar from './Components/NavBars/Navbar';
import Header from './Components/Header/Header';
import Places from './Components/Places/Places';
import BucketList from './Components/BucketList/BucketList';
import Siargao from './Components/Travels/Siargao/Siargao';
import Boracay from './Components/Travels/Boracay/Boracay';
import Paris from './Components/Travels/Paris/Paris';
import Aurora from './Components/Travels/Aurora/Aurora';
import Netherlands from './Components/Travels/Netherlands/Netherlands';
import SlideShow from './Components/Slideshow/SlideShow';
import FeaturedTrips from './Components/Featured-trips/Featured-trips';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render(){
    return ( 
    <Router>
      <Navbar />
      <Header />
      <Switch>
          <Route exact path='/' component={Places} />
          <Route exact path='/Siargao' component={Siargao} />
          <Route exact path='/Boracay' component={Boracay} />
          <Route exact path='/Paris' component={Paris} />
          <Route exact path='/Aurora' component={Aurora} />
          <Route exact path='/Netherlands' component={Netherlands} />
            )}
          />
        </Switch>
      <BucketList />
      {/* <SlideShow />
      <FeaturedTrips /> */}
      {/* <Footer /> */}
    </Router> 
      )
  }
}

export default App;
