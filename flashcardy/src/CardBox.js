import React, { Component } from 'react';
import CardList from './CardList';
import CardForm from './CardForm';
import DATA from '../data';
import style from './style';
class CardBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  render() {
    return (
      <div style={ style.commentBox }>
        <h2>Cards:</h2>
        <CardList data={ DATA }/>
        <CardForm />
      </div>
    )
  }
}
export default CardBox;
