import React from "react";

class Item extends React.Component {
  state = { input: "", display: true };

  toggleDisplay = () => {
    this.setState({ input: this.props.children, display: !this.state.display });
  };

  onEditSubmit = () => {
    this.props.onEdit(this.state.input);
    this.toggleDisplay();
  };

  render() {
    return (
      <div className="item">
        {this.state.display ? (
          <React.Fragment>
            <div className="right floated content">
              <i onClick={this.props.onDelete} className="x red icon" />
            </div>
            <div className="ui checkbox">
              <input type="checkbox" name="example" />
              <label onClick={this.toggleDisplay}>{this.props.children}</label>
            </div>
          </React.Fragment>
        ) : (
          <div className="ui small form">
            <div className="field">
              <input
                value={this.state.input}
                onChange={e => this.setState({ input: e.target.value })}
                type="text"
              />
            </div>
            <button onClick={this.onEditSubmit} className="ui secondary button">
              Save
            </button>
            <button onClick={this.toggleDisplay} className="ui button">
              Cancel
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Item;
