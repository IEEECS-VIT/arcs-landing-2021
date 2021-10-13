import React from "react";
import Modal from  './modal.js'


import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import "../../Events.scss";

export default class Carousel extends React.Component {
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
    var level;
    console.log(this.state.active);
    for (var i = this.state.active - 1; i < this.state.active + 2; i++) {
      var index = i;
      if (i < 0) {
        index = this.state.items.length + i;
      } else if (i >= this.state.items.length) {
        index = i % this.state.items.length;
      }
      level = this.state.active - i;

      items.push(
        <Item
          key={index}
          title={this.state.items[index].title}
          img={this.state.items[index].img}
          level={level}
        />
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
      <div id="carousel">
        <div
          className="arrow arrow-left"
          onClick={this.leftClick}
          onKeyPress={this.leftClick}
          aria-label="Save"
          tabIndex={0}
          role="button"
        >
          <IoIosArrowDropleftCircle
            style={{ fill: "grey" }}
            className="arrow-left"
          ></IoIosArrowDropleftCircle>
        </div>
        <CSSTransitionGroup
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          transitionName={this.state.direction}
        >
          {this.generateItems()}
        </CSSTransitionGroup>

        <div
          className="arrow arrow-right"
          onClick={this.rightClick}
          onKeyPress={this.rightClick}
          aria-label="Save"
          tabIndex={0}
          role="button"
        >
          <IoIosArrowDroprightCircle
            style={{ fill: "grey" }}
            className="arrow-right"
          ></IoIosArrowDroprightCircle>
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
      title: this.props.title,
      img: this.props.img,
      show:false,
     
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  showModal = () => {
    this.setState({ show: true });
  };
   hideModal = () => {
      this.setState({ show: false });
    };

  render() {
   
   
    const outer = "item level" + this.props.level;
    const innerclass = "innerdiv innerlevel" + this.props.level;
    const c = this.props.level;
  
  
      
      if (c === 0) {
        return (
          <div className={outer}>
          <div className={innerclass}>
            <h1 className="md:text-lg text-base pt-10 eventhead iphone5:text-sm ">
              {this.state.title}
            </h1>
            <img
              className="eventimg"
              src={require(`../../images/${this.state.img}.png`).default}
              alt="noo"
            ></img>
          </div>
       
          <button  onClick={this.showModal} className="knowmore md:text-base  md:py-1 md:px-4 px-6 md:mt-2 py-0 mt-4 text-sm ">
            know more
          </button>
          <Modal show={this.state.show} handleClose={this.hideModal}/>
          </div>
         
        );
      }
       else  return(
        <div className={outer}>
        <div className={innerclass}>
          <h1 className="md:text-lg text-base pt-10 eventhead iphone5:text-sm ">
            {this.state.title}
          </h1>
          <img
            className="eventimg"
            src={require(`../../images/${this.state.img}.png`).default}
            alt="noo"
          ></img>
        </div>
       
    
       
      </div>
      )
    

    

    // return (
    //   <div className={outer}>
    //     <div className={innerclass}>
    //       <h1 className="md:text-lg text-base pt-10 eventhead iphone5:text-sm ">
    //         {this.state.title}
    //       </h1>
    //       <img
    //         className="eventimg"
    //         src={require(`../../images/${this.state.img}.png`).default}
    //         alt="noo"
    //       ></img>
    //     </div>
    //     <Modal show={this.state.show} handleClose={this.hideModal}/>
    
    
       
    //   </div>
    // );
  }
}
