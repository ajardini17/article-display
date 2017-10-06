import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleTopic } from '../../Actions/TopicsAction.jsx';
import NavBar from '../../Components/NavBar/NavBar.jsx';

const mapStateToProps = state => {
  return {
    totalTopics: state.topics.totalTopics
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({toggleTopic}, dispatch)
}
class TopicsPage extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(id){
    this.props.toggleTopic(id);
  }
  render() {
    const { totalTopics } = this.props;
    return (
      <div>
        <NavBar />
        <div className ='alphabet-container'>

        </div>
        <div className='container'>
          <div className='row article-entry'>
            
             {Object.keys(totalTopics).sort((a,b) => totalTopics[a].name > totalTopics[b].name).map((topicID, index) => (
              <div className='topic-entry-first-child'>
               <div className='col-xs-offset-1 col-xs-8 col-sm-offset-1 col-sm-8 topic-entry'>
                {totalTopics[topicID].name}
               </div>
               <div className='col-xs-3 col-sm-2' onClick={() => {this.handleClick(topicID)}}>
                 
                 {
                   totalTopics[topicID].followed
                 ?
                 <div className='followed'>
                   <button className='btn btn-danger btn-xs btn-block'>
                    <span className='glyphicon glyphicon-ok glyph-size'></span><span>Following</span>
                    </button>
                </div>
                 :
                 <div className='notFollowed'>
                  <button className='btn btn-outline-primary btn-block btn-xs'>
                  <span className='glyphicon glyphicon-plus glyph-size'></span><span>Follow</span>
                  </button>
                 </div>
                 }
              </div>
            </div>
             ))}
            
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicsPage);