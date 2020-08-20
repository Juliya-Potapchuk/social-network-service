import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { Route, Switch, Redirect } from "react-router-dom";
import { ROUTE } from "./constants";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import PasswordForgetPage from "./pages/PasswordForgetPage/PasswordForgetPage";
import MyPostPage from "./pages/MyPostPage/MyPostPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import NewsPage from "./pages/NewsPage/NewsPage";
import NotFound from "./pages/NotFound/NotFound";
import withAuthentication from "./components/Session/withAuthentication";
import "./App.scss";

class App extends Component {
  render() {
    const { authUser } = this.props;

    return (
      <>
        <Header />
        <main className="main">
          <Switch>
            <Route exact path={ROUTE.SIGN_IN} component={SignInPage} />
            <Route exact path={ROUTE.SIGN_UP} component={SignUpPage} />
            <Route exact path={ROUTE.NEWS_PAGE} component={NewsPage} />
            <Route exact path={ROUTE.PROFILE} component={ProfilePage} />
            <Route exact path={ROUTE.MY_POST} component={MyPostPage} />
            <Route exact path="/">
              {authUser ? (
                <Redirect to={ROUTE.NEWS_PAGE} />
              ) : (
                <Redirect to={ROUTE.SIGN_IN} />
              )}
            </Route>
            <Route
              exact
              path={ROUTE.PASSWORD_FORGET}
              component={PasswordForgetPage}
            />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    limitNews: state.settingsState.limitNews,
    authUser: state.sessionState.authUser,
    statusUser: state.sessionState.statusUser,
  };
};

export default compose(withAuthentication, connect(mapStateToProps, null))(App);
