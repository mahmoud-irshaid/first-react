import React, { Component } from 'react';
import Meter from './meter';

class meters extends Component {
    state = { 
        meters :[
            {id: 0 , value : 5},
            {id: 1 , value : 0},
            {id: 2 , value : 3},
            {id: 3 , value : 0},
        ]
     }
    render() { 
        return (
            <div>
                <button onClick={this.reset}>Reset</button>
                {this.state.meters.map(meter =>(
                    <Meter 
                        key={meter.id}
                        Delete={this.onDelete}
                        meter={meter}
                        increase={this.increase}
                        decrease={this.decrease}
                    />
                
                ))}
            </div>
        );

    }

    onDelete = id => {        // will pass this func to children inside props then filter the deleted meter  and setState
       const meters = this.state.meters.filter(m => m.id !== id);
        this.setState({meters});
    }


    reset = ()=>{
        const meters = this.state.meters.map(m => {
            m.value =0 
            return m;
        });
        this.setState({meters});
    }



    increase= (meter) => {
        const meters = [...this.state.meters]
        const index = meters.indexOf(meter)
        meters[index].value++;
        this.setState({meters});    
    }


    decrease= (meter) => {
        const meters = [...this.state.meters]
        const index = meters.indexOf(meter)
        meters[index].value--;
        this.setState({meters});    
    }

 }
 
export default meters;