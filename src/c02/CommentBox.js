import React from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import withTimer from "../c06/withTimer";
import "./CommentBox.css";

const comments = [
  {
    author: "Nate",
    content: "Hello React! This is a sample comment.",
  },
  { author: "Kevin", content: "Hello Redux!" },
  { author: "Bood", content: "Hello Rekit!" },
];
export class CommentBox extends React.PureComponent {
  state = {
    commentsHistory: comments,
    inputMsg: ""
  };
  
  handleInput = evt => {
    
    this.setState({
      inputMsg: evt.target.value, 
    });
  };
  handleSend = () => {
    const text = this.state.inputMsg;
    if (text) {
      const newCommentsHistory = [...this.state.commentsHistory, {author: "Judith", content: this.state.inputMsg}];
      this.setState({
        commentsHistory: newCommentsHistory,
        inputMsg: "",
      });
    }
  };

  render() {
    return (
      <div className="comment-box">
        <h1>Comments ({this.state.commentsHistory.length})</h1>
        <CommentList comments={this.state.commentsHistory} />
        
        <input value={this.state.inputMsg} onChange={this.handleInput}/>
        <button onClick={this.handleSend}>Send</button>

        <CommentForm />
        {this.props.time.toLocaleString()}
      </div>
    );
  }
}

export default withTimer(CommentBox);
