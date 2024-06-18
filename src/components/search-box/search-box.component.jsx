import { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
  render() {
    const { onChangeHandler, className, placeHolder } = this.props;
    return (
      <div>
        <input
          className={` search-box ${className}`}
          type="text"
          placeholder={placeHolder}
          onChange={onChangeHandler}
        />
      </div>
    );
  }
}

export default SearchBox;
