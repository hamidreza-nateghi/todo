import React from "react";
import Google from "./Google";

class Header extends React.Component {
  render() {
    return (
      <div className="ui menu">
        <div className="ui container">
          <div className="link item">
            <i className="home icon" /> Home
          </div>
          <div className="item">
            <div className="ui icon input">
              <input type="text" placeholder="Quick Find" />
              <i className="search link icon" />
            </div>
          </div>
          <div className="right menu">
            <Google />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
