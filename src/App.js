import { Component } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    console.log("Constructor");
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((responce) => responce.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          }
        )
      );
  }

  onSearchChange = (event) => {
    console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  }

  render() {
    const {monsters , searchField} = this.state
    const {onSearchChange} = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <h1 className="app-title">Rooms</h1>
        {/* <input
          className="search-box"
          type="search"
          placeholder="search monster"
          onChange={onSearchChange}
        /> */}
        {/* {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })} */}
        <SearchBox 
          className='monsters-search-box'
          onChangeHandler= {onSearchChange} 
          placeholder='search monsters' 
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
