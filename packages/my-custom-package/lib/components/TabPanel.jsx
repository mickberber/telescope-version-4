import React, { PropTypes, Component } from 'react';

const TabPanel = () => {
  render() {

    var classes = this.props.active ? 'tab-pane active' : 'tab-pane';

    return (
      <div role="tabpanel" className={ classes } id={ this.props.id }>
        { this.props.children }
      </div>
    )
  }
};

export default TabPanel;
