import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: 'asd3', name: "Vlad", age: 23},
      { id: 'vhcfd1', name: "Dasha", age: 22 },
      { id: 'hjf4', name: "Dina", age: 6 },
    ],
    otherState : "Some other value",
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState(
      {
        persons: persons
      }
    );
  }
  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    const style = {
      backgroundColor: 'green',
      font: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((item, index) => {
            return <Person
            click={() => this.deletePersonHandler(index)}
            name={item.name} 
            age={item.age}
            key={item.id}
            changed={(event) => this.nameChangedHandler(event, item.id)}
            />
          })}
        </div>
      );
      style.backgroundColor = 'red';
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
