import React from 'react';
import { connect } from 'react-redux';

import { actionFetchCharacter } from '../redux/actions';

class characterSearch extends React.Component {
  constructor () {
    super();
    this.state = {
      characterName: '',
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
    });
  }

  render(){
    const { dispatch, name, gender, died, born, isFetching } = this.props;
    const { characterName } = this.state;
    return (
      <div className="App">
      <h1>Game of Thunks</h1>
      <input id="input-name" name="characterName" value={ characterName } onChange={ (event) => this.handleChange(event) }></input>
      <button
        type="button"
        onClick={ () => dispatch(actionFetchCharacter()) }
      >
        Click
      </button>
        { isFetching ? (<p>Loading...</p>) :
        (
        <div>
          <h2>{ name }</h2>
          <p>Born: { born }</p>
          <p>Gender: { gender }</p>
          <p>Died: { died }</p>
        </div>
        )
        }
    </div>
    )
  } 
}

const mapStateToProps = (state) => ({
  name: state.name,
  gender: state.gender,
  born: state.born,
  died: state.died,
  isFetching: state.isFetching,
})

export default connect(mapStateToProps)(characterSearch);