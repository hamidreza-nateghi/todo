import React from "react";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="ui divided selection list">
        <div className="item">
          <i className="large database icon" />
          <div className="content">
            <div className="header">Inbox</div>
          </div>
        </div>
        <div className="item">
          <i className="large calendar check outline icon" />
          <div className="content">
            <div className="header">Today</div>
          </div>
        </div>
        <div className="item">
          <i className="large calendar alternate outline icon" />
          <div className="content">
            <div className="header">Next 7 days</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
