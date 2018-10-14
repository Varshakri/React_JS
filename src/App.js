import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';
class App extends Component {
state = {
  persons :[
    {id:'asdf', name:'Abc', age :23},
    {id:'asdf1', name:'sdf', age :24},
    {id:'asdf2', name:'sgh', age :26},
  ],
  otherName: 'testing 2',
  showPerson: false
}

switchnameHandeler = (newName) =>{
  // console.log('testing');
this.setState( {
  persons :[
    {name:newName, age :23},
    {name:'Prakash', age :24},
    {name:'sgh', age :29},
  ]
})
}
switchInputHandeler = (event, id) => {
  const pID=this.state.persons.findIndex(p => {
return p.id===id;
  });
  const person={...this.state.persons[pID]};
person.name=event.target.value;
const persons= [...this.state.persons];
persons[pID] = person;

  this.setState( {
    persons : persons
  })
}

togglePersonHandeler = () => {
const show = this.state.showPerson;
this.setState ({showPerson: !show});
}

deletePersonHandeler = (personIndex) => {
  // const persons= this.state.persons.slice();
const persons= [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons : persons});
}
  render() {
    const style ={
      padding: '8px',
      font:'inherit',
      backgroundColor:'green',
      color:'white',
      margin:'2px',
      border:'1px solid blue',
      cursor:'pointer',
      
  }

    let person=null;
    if(this.state.showPerson){
      person=(  
      <div>
        {this.state.persons.map((prs, index) => {
          return <Person 
          click={() => this.deletePersonHandeler(index)}
          name={prs.name} 
          age={prs.age} 
          key={prs.id}
          change={(event)=> this.switchInputHandeler(event, prs.id)}/>
          }
        
        )}
        {/* <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} 
        click={this.switchnameHandeler.bind(this, 'hello')}
        change={this.switchInputHandeler}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}/>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}>
        Hobby: abch </Person> */}
      </div> );
      style.backgroundColor='red';
      
    }

    let classes = [];
    if(this.state.persons.length <=2){
      classes.push('red');
    }
    if(this.state.persons.length <=1){
      classes.push('bold');
    }
    
    
    return (
     
      <div className="App">
        <p className={classes.join(' ')}>hello! I am react</p>
        <button style={style} onClick={this.togglePersonHandeler}>Toggle persons</button>
      
        {person}
        
      <h1>Test: {this.state.otherName}</h1>
      </div>
     
    );
    // return React.createElement('div', {className:'App'},React.createElement('h1',null,'hello! i am react.'));
   
  }
}

export default App;
