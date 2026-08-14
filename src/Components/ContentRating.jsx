
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      like: 0,
      dislike: 0,
      handleLike: () => {
        this.setState((prevState)  => ({
          like: prevState.like + 1,
        }));

      },

      handledislike: () => {
        this.setState((prevState)  => ({
          dislike: prevState.dislike + 1,
        }));
    },
    
  };
}
  render() {
    return (

     <>
    <div className="content-rating">
        <h1>Text Content Rating</h1> 
        <p>"Doubt kills more dreams than failure ever will."</p>
  

      <div className="rating-button"> 
          <button className="like-button" onClick={() => this.setState({ like: this.state.like + 1 })}>  
          Like ({this.state.like})
        </button>
         <button className="dislike-button" onClick={() => this.setState({ dislike: this.state.dislike + 1 })}>  
          dislike ({this.state.dislike})
        </button>
    </div>
    </div>
  </>
     
    );

  }
}

export default ContentRating;
