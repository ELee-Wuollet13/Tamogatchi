import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Video from './components/Video.jsx'
import YouTube from 'react-youtube';
import { Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import GifPlayer from 'react-gif-player';
import scream from './components/Predator/scream.gif';
import NavBar from './components/NavBar.jsx';
import Error404 from './components/Error404.jsx';
import NewPet from './components/NewPet.jsx';
import PetList from './components/PetList.jsx';
import AlienPortal from './components/Alien/AlienPortal.jpg';
class App extends React.Component {


    constructor(props) {

      super(props);
      this.state = {
        masterPetList: []
      };
        this.handleAddingNewPetToList = this.handleAddingNewPetToList.bind(this);
    }
    handleAddingNewPetToList(newPet){
      console.log('newPet: ', newPet);
      const newMasterPetList = this.state.masterPetList.slice();
      console.log('masterPetList: ', this.state.masterPetList);
      console.log('newMasterPetList: ', newMasterPetList);
      newMasterPetList.push(newPet);
      console.log('newMasterPetList: ', newMasterPetList);
      this.setState({
        masterPetList: newMasterPetList
      });
 }



  render(){
    return (
    <div className="thisApp">
      <header className="App-header">
        <NavBar/>
        <h2> TaMAGoTCHI!?!?!?!</h2>
        <Switch>
        <Route exact path='/' render={()=><PetList petList={this.state.masterPetList} />} />
              <Route path='/newpet' render={()=><NewPet onNewPetCreation={this.handleAddingNewPetToList} />} />
          <Route component={Error404} />
        </Switch>
        </header>
        <body>
      
      </body>
      </div>
    );
  }
}

export default App;
