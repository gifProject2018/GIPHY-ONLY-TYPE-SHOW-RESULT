import React, { Component } from 'react';
import './App.css';
import SearchBox from "./components/searchBox";
import {connect} from 'react-redux';

class App extends Component {

  render() {
      const gifsItems = this.props.gifs.map((el, index) => {

          return <div key={index} className="card grid-item">

                    <img src={el.image.url}  width={el.image.width} height={el.image.height}/>

                    <p className="id"> ID: {el.id}</p>


                 </div>
      });
    return (
      <div className="App">
        <SearchBox />
        <div className="grid-container">
            {gifsItems}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gifs: state.gifs.gifs
  }
}
export default connect(mapStateToProps)(App);
