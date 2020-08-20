import React from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { connect } from "react-redux";
import { ROUTE, AUTHORIZED } from "../../constants";
import { authUserManager } from "../../redux/actions/actionSession";

const withAuthorization = (Component) => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      const { history, authUserManager } = this.props;
      if (!localStorage.access_token) {
        authUserManager();
        history.push(ROUTE.SIGN_IN);
      }
    }

    render() {
      const { statusUser, limitNews } = this.props;
      const haveAllSettings = statusUser === AUTHORIZED && limitNews;
      return <>{haveAllSettings && <Component {...this.props} />}</>;
    }
  }

  const mapStateToProps = (state) => ({
    limitNews: state.settingsState.limitNews,
    statusUser: state.sessionState.statusUser,
  });

  const mapDispatchToProps = { authUserManager };

  return compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
  )(WithAuthorization);
};

export default withAuthorization;
