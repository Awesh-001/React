import React, { Component } from 'react';

class Ninjas extends Component{
    render(){
       // console.log(this.props);
        const{ninjas} = this.props;
        const ninjaList = ninjas.map(ninja => {
            return (
                 <div className="ninja">
                <div>Name: {ninja.name}</div>
                <div>Version: {ninja.Version}</div>
                <div>Prop: {ninja.prop}</div>
            </div>

            )
        })
        return(
           <div className="ninja-list">
           {ninjaList}
           </div>
        )
    }
}

export default Ninjas