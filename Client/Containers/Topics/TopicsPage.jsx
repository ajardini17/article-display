import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setTopics } from '../../Actions/Topics/TopicsAction.jsx';
import NavBar from '../../Components/NavBar/NavBar.jsx';

const mapStateToProps = state => {
  return {
    topics: state.topics.totalTopics
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({setTopics}, dispatch)
}
class TopicsPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      alaphabet: 'abcdefghijklmnopqrstuvwxyz'.split('')
    }
  }
  render() {
    console.log('topic page')
    return (
      <div>
        <NavBar />
        <div>
        <ul className='alphabet-list'>
        {this.state.alaphabet.map((letter, index) => (
          <li className='alphabet-entry'>{letter}</li>
        ))}
        </ul>
        </div>
        <div className = 'container'>
          <div className = 'row'>
            {this.props.topics.map((topic, index) => (
              <p>hello</p>
            ))}
            </div>
          </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicsPage);