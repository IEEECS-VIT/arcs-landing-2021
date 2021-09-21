import React from "react";
import "./Carousel.style.scss";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { data } from '../Caroussel/data';

export class Caroussel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      active: this.props.active,
      direction: "",
    };
    this.rightClick = this.moveRight.bind(this);
    this.leftClick = this.moveLeft.bind(this);
  }

  generateItems() {
    var items = [];
    var dt = data;
    var level;
    // console.log(this.state.active);
    for (var i = this.state.active - 2; i < this.state.active + 3; i++) {
      var index = i;
      if (i < 0) {
        index = this.state.items.length + i;
      } else if (i >= this.state.items.length) {
        index = i % this.state.items.length;
      }
      level = this.state.active - i;
      items.push(
        <Item intro={dt[index].speaker_intro} name={dt[index].speaker_name} key={index} id={this.state.items[index]} level={level} />
      );
    }
    return items;
  }

  moveLeft() {
    var newActive = this.state.active;
    newActive--;
    this.setState({
      active: newActive < 0 ? this.state.items.length - 1 : newActive,
      direction: "left",
    });
  }

  moveRight() {
    var newActive = this.state.active;
    this.setState({
      active: (newActive + 1) % this.state.items.length,
      direction: "right",
    });
  }

  render() {
    return (
      <div id="carousel" className="noselect">
        <div
          className="arrow arrow-left"
          onClick={this.leftClick}
          aria-hidden="true"
        >
          {/* <i className="fi-arrow-left"></i> */}
          <ArrowBackIosIcon style={{ fontSize: 40, color: "black" }} />
        </div>
        {/* <div className="cards_move"> */}
        <div className="bubble-container-wrapper">
          <CSSTransitionGroup
            className="bubble-container"
            transitionName={this.state.direction}
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            {this.generateItems()}
          </CSSTransitionGroup>
          {/* </div> */}
        </div>
        <div
          className="arrow arrow-right"
          onClick={this.rightClick}
          aria-hidden="true"
        >
          {/* <i className="fi-arrow-right"></i> */}
          {/* <ArrowForwardIosIcon style={{ fontSize: 40, color: 'black'}} /> */}
          <ArrowBackIosIcon
            style={{
              fontSize: 40,
              color: "black",
              transform: "rotate(180deg)",
            }}
          />
        </div>
      </div>
    );
  }
}

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: this.props.level,
    };
  }

  render() {
    const className = "item level" + this.props.level;
    // console.log(this.props.info[this.props.id]);
    return (
      <div className={`${className} carousel_card`}>
        <div className="speaker-name">{this.props.name}</div>
        <div className='speaker-intro'>{this.props.intro}</div>
      </div>
    );
  }
}
