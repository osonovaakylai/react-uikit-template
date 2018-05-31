import React from 'react';
import $ from 'jquery';
import UIkit from 'uikit';

export default class Grid extends React.Component {
  static UIkitComponent;

  componentDidMount() {
    this.UIkitComponent = UIkit.grid($(this.gridElement), {
      firstColumn: this.props.firstColumn,
      margin: this.props.margin
    });
  }

  componentWillUnmount() {
    this.UIkitComponent.$destroy();
  }

  render () {
    return (
      <div
        className={this.props.className}
        ref={(element) => {this.gridElement = element;}}
      >
        {this.props.children}
      </div>
    );
  }
}
