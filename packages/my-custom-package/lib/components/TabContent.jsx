import React, { PropTypes, Component } from 'react';

const TabContent = () => {
  return(
    <div className="tab-content">
        { this.props.children }
      </div>
  );
}

export default TabContent;
