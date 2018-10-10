import React from 'react';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {'name': ''}
  }
  inputChange(e) {
    this.setState({'name': e});
    this.props.onSearchChange(e);
  }
  render() {
    return (
      <div className="search">
        <input value={this.state.name} onChange={event=> this.inputChange(event.target.value)} />
      </div>
    )
  }
}

export default SearchBar;
