import React from "react";
import { Switch, Route } from "react-router-dom";
import "../stylesheets/app.css";
import logo from "../images/Rick_and_Morty.png";
import getDataFromServer from "../data/getDataFromServer";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characterList: [],
      filter: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount = () => {
    getDataFromServer().then(characterList => this.setState({ characterList }));
  };
  handleChange = event => {
    const value = event.target.value;
    this.setState({ filter: value });
  };



  render() {
    const renderCharacterList = () => {
      return (
        <CharacterList characterList={this.state.characterList}
           filter={this.state.filter}>
          <Filters value={this.state.filter} onchange={this.handleChange} />
        </CharacterList>
        
      );
    };

    const renderCharacterDetails = props => {
      let clickedChar = {};
      const routName = props.match.params.name;
      for (const char of this.state.characterList){
        let names = char.name.split(' ');
        names = `${names[0]}_${names[1]}`
        if (names === routName){
          clickedChar = char
        }
      }
      return(
        <CharacterDetail char={clickedChar}/>
      )
    };

    return (
      <div className="app">
        <header className="header">
          <div className="header__image">
            <img src={logo} alt="Rick and Morty lista de personajes" />
          </div>
        </header>
       
        <Switch>
          <Route exact path="/" render={renderCharacterList} />
          <Route path="/details/:name" render={renderCharacterDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
