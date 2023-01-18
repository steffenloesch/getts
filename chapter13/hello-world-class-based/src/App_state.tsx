import  React, {  Component } from 'react';
import {State} from './state';

export default class App extends Component {

  state: State = {userName: 'Steffen',
  imageUrl: 'https://picsum.photos/600/150'}; 

  styles = {margin: 40};

  handleClick = () => {
    this.setState({userName: "Mary", imageUrl: 'https://picsum.photos/500/150'});
  }
  render() {
    return (
      <div style ={this.styles}>
        <h1>{this.state.userName}</h1>
        <button onClick={this.handleClick}>CHANGE TO MARY</button><br/>
        <img src={this.state.imageUrl}/>
      </div>
    );
  }
}
