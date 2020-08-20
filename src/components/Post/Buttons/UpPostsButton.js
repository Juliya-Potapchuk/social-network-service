import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from "../../../images/iconsSmall";
import "./style.scss";

export class UpPostsButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollTop: 0,
      isScrolling: false,
      idTimeout: null,
    };
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = () => {
    const { scrollTop } = this.state;
    const currentScroll = Math.max(window.scrollY);
    const diffScrolls = currentScroll - scrollTop;
    const hasDiffScrolls =
      currentScroll > scrollTop ? diffScrolls > 10 : diffScrolls < -10;

    if (currentScroll < 60) {
      this.setState({ isScrolling: false });
    } else if (currentScroll > 60 && hasDiffScrolls) {
      this.setState({ isScrolling: true, scrollTop: currentScroll });
    }
  };

  upClick = () => {
    const scrollTop = Math.max(window.scrollY);
    if (scrollTop > 0) {
      window.scrollBy(0, -100);
      const id = setTimeout(this.upClick, 20);
      this.setState({ idTimeout: id });
    } else {
      const { idTimeout } = this.state;
      clearTimeout(idTimeout);
    }
  };

  render() {
    const { isScrolling } = this.state;
    const displayValue = isScrolling ? "block" : "none";
    const style = { display: displayValue };

    return (
      <button
        className="btn-up"
        type="button"
        style={style}
        onClick={this.upClick}
      >
        <FontAwesomeIcon icon={Icon.faSortUp} />
      </button>
    );
  }
}
