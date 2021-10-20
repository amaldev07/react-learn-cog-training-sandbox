import React from "react";

export class SearchBar extends React.Component {
  state = {
    term: ""
  };

  change = (e) => {
    this.setState({ term: e.target.value });
  };
  submit = (e) => {
    e.stopPropogation();
    e.preventDefault();
    this.props.search(this.state.term);
  };
  render() {
    const { term } = this.state;
    return (
      <form onSubmit={this.submit} className="form-group'">
        <input
          className="form-control"
          type="text"
          value={term}
          onChange={this.change}
        />
      </form>
    );
  }
}
