import React, { Component } from 'react';
import style from './style';
import marked from 'marked';


class Card extends Component {
  rawMarkup() {
    let rawMarkup = marked(this.props.children.toString());
    return { __html: rawMarkup };
  }
  render() {
    return (
      <div style={ style.card }>
        <h3>{this.props.topic}</h3>
        <span dangerouslySetInnerHTML={ this.rawMarkup() } />
      </div>
    )
  }
}
export default Card;
