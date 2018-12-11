import React, { Component } from 'react';
import './App.css';
import {LevelONE} from './Levels';
import firebase from 'firebase';
import {firebase_config} from './firebase_config.js';

firebase.initializeApp(firebase_config);
const database = firebase.database();



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  pushToDB(path, data){
    let reference = database.ref(path);

    var newPostRef = reference.push();

    newPostRef.set(data);

  }


  componentDidMount(){
    //console.log("mounted");
    let reference = database.ref("data");
    reference.on("child_added", (newData) => {
      console.log(newData.val())
      //alert("database has new content");
      this.setState({
        data: this.state.data.concat( [ newData.val() ] )
      })
    })
  }


  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your submission was received!');
    event.preventDefault();
  }

  render() {
    return (

      <div className="App-header">


        <LevelONE pushToDB={this.pushToDB}/>
        


        </div>

      // <div class="App-header">
      // <form onSubmit={this.handleSubmit}>
      //   <label>
      //     Submit your questions! <br></br>
      //     <input class="pleb" type="text "value={this.state.value} onChange={this.handleChange}  />
      //   </label>
      //   <br></br>
      //   <input class="plato" type="submit" value="Submit"/>
      // </form>
      // </div>
    );
  }
}

export default App;
