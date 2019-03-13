import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index";

class BookForm extends Component {
  state = {
    title: "",
    color: ""
  };
  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  componentWillUnmount() {
    if (this.props.errors.length) this.props.resetErrors();
  }

  submitBook = event => {
    event.preventDefault();
    this.props.postBook(this.state, this.props.closeModal);
  };
  render() {
    return (
      <form onSubmit={this.submitBook}>
        {!!errors.length && (
          <div className="alert alert-danger" role="alert">
            {errors.map(error => (
              <p key={error}>{error}</p>
            ))}
          </div>
        )}
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text"> Book Title</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="title"
            value={this.state.title}
            onChange={this.handleChange.bind(this)}
          />
          <textarea class="form-control" aria-label="With textarea" />
        </div>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Book Color
          </button>

          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a name="color" class="dropdown-item">
              Red
            </a>
            <a name="color" class="dropdown-item">
              White
            </a>
            <a name="color" class="dropdown-item">
              Black
            </a>
            <a name="color" class="dropdown-item">
              Blue
            </a>
            <a name="color" class="dropdown-item">
              Orange
            </a>
            <a name="color" class="dropdown-item">
              Green
            </a>
            <a name="color" class="dropdown-item">
              Yellow
            </a>
          </div>
        </div>
        <select name="color" onChange={this.handleChange} />
        <input type="submit" />
      </form>
    );
  }
}
//dispatch -send- the states as props
const mapStateToProps = state => {
  return {
    author: state.rootAuthor.author,
    errors: state.rootErrors.errors
  };
};
//disptch actions through this function.
const mapDispatchToProps = dispatch => {
  return {
    postBook: (newBook, author, closeModal) =>
      dispatch(actionCreators.postBook(newBook, author, closeModal)),
    resetErrors: () => dispatch(actionCreators.resetErrors())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookForm);
