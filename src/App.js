import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Vlad", age: 23},
      { name: "Dasha", age: 22 },
      { name: "Dina", age: 6 },
    ],
    otherState : "Some other value",
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log();
    //this.state.persons[0].nane = "Vladislav";
    //let test = this.state.persons[0].age + 1;
    
    this.setState(
      {
        persons: [
          { name: newName, age: 23 }
        ]
      }
    )
  }

  nameChangedHandler = (event) => {
    this.setState(
      {
        persons: [
          { name: event.target.value, age: 23 },
        ]
      }
    ) 
  }
  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((item) => {
            return <Person 
            name={item.name} 
            age={item.age}
            />
          })}
          {/* <Person
            name={this.state.persons[0].name} age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, 'Владислав')}
            chenged={this.nameChangedHandler}
          >
            Vlad S
          </Person> */}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hello Vlad</h1>
        <button style={style} onClick={this.tooglePersonsHandler}>Toogle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
