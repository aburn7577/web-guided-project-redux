import React from 'react';
import { connect } from 'react-redux';

import { addNewMember, toggleDragonStatus } from '../actions';

class DragonList extends React.Component {
  state = {
    newMember: '',
  };

  handleChanges = e => {
    this.setState({ newMember: e.target.value });
  };

  handleAddMember = e => {
    e.preventDefault();
    this.props.addNewMember(this.state.newMember);
  }

  updateDragonStatus = (e, memberName) => {
    e.preventDefault();
    this.props.toggleDragonStatus(memberName);
  }

  render() {
    return (
      <React.Fragment>
        <div className="friends-list">
          {this.props.members.map((member, index) => (
            <h4 key={index} onClick={e => this.updateDragonStatus(e, member.name)}>
              {member.name}
              {member.dragonStatus && <i className="fas fa-dragon">🐲</i>}
            </h4>
          ))}
        </div>
        <input
          type="text"
          value={this.state.newMember}
          onChange={this.handleChanges}
          placeholder="Add new member"
        />
        <button onClick={this.handleAddMember}>Add member</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    members: state.membersReducer.members
  }
}

export default connect(mapStateToProps, { addNewMember, toggleDragonStatus })(DragonList);
