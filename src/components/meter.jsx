import React, { Component } from 'react'

class meter extends Component {
   /* state = { 
        value : this.props.meter.value,
     }*/
     style={
         marginLeft:'20px',
         marginRight:'20px',
         background:'tomato',
         padding:'5px'
     }
    render() { 
        return ( 
            <div>
                <button onClick={() => {this.props.decrease(this.props.meter)}}>DECREASE</button>
                <span style={this.style}>{this.props.meter.value}</span>
                <button onClick={() => {this.props.increase(this.props.meter)}}>INCREASE</button>
                <button onClick={() => this.props.Delete(this.props.meter.id)}>Delete</button>
            </div>
         );
         // Delete func should be used inside another arrow func

    }

    // we will move these funcs to parent to be synced with props and delete state here
   /* increase= () => {
        this.setState({value : this.state.value + 1})
    }


    decrease= () => {
       this.setState({value : this.state.value - 1})
   }*/
}
 
export default meter;