import React from 'react';
import './Person.css';
const person = (prop)=> {
    // const style={
    //     '@media(min-width:500px)' : {
    //         width:'400px'
    //     } };
    
return (
<div className="Person" ><p onClick={prop.click}>My name is {prop.name} and i am {prop.age} years old. </p>
<p>{prop.children}</p>
<input type="text"  onChange={prop.change} value={prop.name}/></div>
)
}

export default person;