import React, { Component } from 'react'
import Meters from './meters';

class Counter extends Component {
   /*constructor(props){
        super(props);

        this.alert = this.alert.bind(this);  // we used this for use the alertState in props because it's outside the render func so you've to bind the func will use it
    }*/
    state={
        count:0,
        tags:['tag1' , 'tag2', 'tag3']
    };

    style={    //  styles as object and add it to h1
        width:100,
        fontSize:30,
        background:'#bada',
        fontFamily:'cursive'
    };

    render() { 
        let classes = "class1 btn badge-";   // we add classes to button depends on count value in state
        classes += this.state.count === 1 ? "warning" : "primary"; 


        return (  // insted of making extra div inside root we add React.Fragment and put more than one element 
        <React.Fragment>                 
            <h1 style={this.style}>{this.check()}</h1> 
            <button onClick={this.increaseCount} className={classes}>{this.props.btn}</button>
            <ul>
                {this.state.tags.map(tag => <li key={tag} >{tag}</li>)}    
            </ul>
            <button onClick={this.alert}>Alert</button>

            {this.PassArgs(this.props.children)}


             <Meters/>
        </React.Fragment> // we make ul by mapping array tags in state and key to make DOM identify between the li's   
         );
    }


// functions


    check() {
        const {count} = this.state;
        return count === 0 ? "hi" : "hello";
    }



    increaseCount = () => {   // if i don't use arrow func , i should add constructor to the main class and super() then bind this func to (this) 
     this.setState({count: this.state.count + 1});
    }



    alert=()=>{   // even with arrow func you've to bind it to (this)
                  // if u want to use arrow func without binding you've to use babel plugin "transform-class-properties"
                  // so no needs for the constructor
        window.alert(this.props.alertState);
    }


    PassArgs = (arg1) => { // passing arguments in funcs as h4 in props.children
        console.log(arg1); 
        return arg1;
    }
}
 
export default Counter;