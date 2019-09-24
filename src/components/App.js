import React from "react";
import { Switch, Route } from "react-router-dom";
import "../stylesheets/app.scss";
import logo from "../images/Rick_and_Morty.png";
import getDataFromServer from "../data/getDataFromServer";
import Home from "./Home";
import CharacterDetail from "./CharacterDetail";
import PageNotFound from "./PageNotFound";

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

  renderHome = () => {
    const filteredList = this.state.characterList.filter(char =>
      char.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
      <Home characterList={filteredList} value={this.state.filter}onchange={this.handleChange}/>
    );
  };

  renderCharacterDetails = props => {
    let clickedChar = {};
    const routName = props.match.params.name;
    for (const char of this.state.characterList) {
      let names = char.name.split(" ");
      names = `${names[0]}_${names[1]}`;
      if (names === routName) {
        clickedChar = char;
      }
    }
    console.log(clickedChar)
    return Object.keys(clickedChar).length > 0
    ? <CharacterDetail char={clickedChar} />
    : <PageNotFound />
  };
  
  render() {
    return (
      <div className="app">
        <header className="header">
          <div className="header__image">
            <img src={logo} alt="Rick and Morty lista de personajes" />
          </div>
        </header>

        <Switch>
          <Route exact path="/" render={this.renderHome} />
          <Route exact path="/details/:name" render={this.renderCharacterDetails} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
