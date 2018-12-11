import React, { Component } from 'react';

class LevelTWO extends Component {
    constructor(props){
      super(props)
      this.state ={
        data: '',
      };
      this.setData = this.setData.bind(this);
      this.submitData = this.submitData.bind(this);
    };
    setData = (event) => {
      this.setState({
        data: event.target.value
      })
    }
    submitData(){
      // here we need to use a function that is passed down
      // as a prop from App.js and then use it to push
      // the current state.data to the Database.
      this.props.pushToDB("data", this.state.data)
    }
    
    render() { 
        return (  
           
              <div className='content'>
              <h1>Student Portal</h1>
                <label> Submit your Questions!
                <br></br>
                <input type="text" onChange={this.setData}></input>
                <br></br>
                </label>
                <button onClick={this.submitData}>Submit!</button>
                
              </div>  
        );
    }
}
 
export default LevelTWO;