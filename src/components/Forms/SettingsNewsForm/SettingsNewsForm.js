import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.scss";
import Button from "../../Button/Button";
import { updateSettings } from "../../../redux/actions/actionsSettings";

class SettingsNewsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderNewsFirstNew: props.orderNewsFirstNew,
      limitNews: props.limitNews,
    };
  }

  updateStateFromProps = (newProps) => {
    this.setState({ [newProps]: newProps });
  };

  componentDidUpdate = (prevProps) => {
    const { orderNewsFirstNew, limitNews } = this.props;
    if (orderNewsFirstNew !== prevProps.orderNewsFirstNew) {
      this.updateStateFromProps(orderNewsFirstNew);
    }
    if (limitNews !== prevProps.limitNews) {
      this.updateStateFromProps(limitNews);
    }
  };

  onChange = (event) => {
    const { target } = event;
    const { name } = target;
    const value = name === "orderNewsFirstNew" ? target.checked : target.value;
    this.setState({ [name]: value });
  };

  saveUserSettings = (event) => {
    event.preventDefault();
    const { updateSettings } = this.props;
    const { orderNewsFirstNew, limitNews } = this.state;
    const settingsData = { orderNewsFirstNew, limitNews };
    updateSettings(settingsData);
  };

  render() {
    const { loading } = this.props;
    const { orderNewsFirstNew, limitNews } = this.state;
    const nameButton = loading ? "Loading..." : "Save";
    const sizeButton = "small";

    return (
      <div className="wrapper-settings-block">
        <h2 className="h2">CUSTOMIZE NEWS</h2>

        <form
          className="wrapper-limit-order-settings"
          onSubmit={(event) => this.saveUserSettings(event)}
        >
          <label className="order-news-block" htmlFor="order-news">
            Show new posts first?
            <input
              id="order-news"
              className="checkbox-order"
              onChange={this.onChange}
              type="checkbox"
              name="orderNewsFirstNew"
              checked={orderNewsFirstNew}
            />
          </label>
          <label className="limit-news-block" htmlFor="limit-news">
            <span className="text1">
              I want to see{" "}
              <span className="text2">&ensp;{limitNews}&ensp;</span> posts.
            </span>
            <input
              id="limit-news"
              type="range"
              min="20"
              max="60"
              step="20"
              value={limitNews}
              name="limitNews"
              onChange={this.onChange}
            />
          </label>
          <Button
            nameButton={nameButton}
            disabled={loading}
            size={sizeButton}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.settingsState.loading,
  limitNews: state.settingsState.limitNews,
  orderNewsFirstNew: state.settingsState.orderNewsFirstNew,
});

const mapDispatchToProps = {
  updateSettings,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsNewsForm);
