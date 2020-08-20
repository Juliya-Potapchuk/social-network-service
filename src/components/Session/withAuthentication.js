import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { authorization } from "../../redux/actions/actionSession";
import { getSettings } from "../../redux/actions/actionsSettings";
import { AUTHORIZED } from "../../constants";

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    async componentDidMount() {
      const { authorization } = this.props;
      await authorization();
    }

    async componentDidUpdate(prevProps) {
      const { getSettings, statusUser, authUser, limitNews } = this.props;
      if (
        statusUser !== prevProps.statusUser &&
        statusUser === AUTHORIZED &&
        !limitNews
      ) {
        await getSettings(authUser.uid);
      }
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  const mapStateToProps = (state) => {
    return {
      authUser: state.sessionState.authUser,
      statusUser: state.sessionState.statusUser,
      limitNews: state.settingsState.limitNews,
    };
  };

  const mapDispatchToProps = { authorization, getSettings };

  return compose(connect(mapStateToProps, mapDispatchToProps))(
    WithAuthentication
  );
};

export default withAuthentication;
