import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <div className="img-container">
        <img src={this.props.imgName} alt={this.props.imgAlt} width={300} />
        <p>{this.props.customTitle}</p>
      </div>
    );
  }
}

export default ImageComponent;
