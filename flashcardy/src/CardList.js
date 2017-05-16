import React, { Component } from 'react';
import Card from './Card';
import style from './style';
class CardList extends Component {
  render() {
    let cardNodes = this.props.data.map(card => {
      return (
        <Card author={ card.author } key={ card.id }>
          { card.text}
        </Card>
      )
    })
    return (
      <div style={ style.cardList }>
        { cardNodes }
      </div>
    )
  }
}
export default CardList;
