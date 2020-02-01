import React, { Component } from "react";
import MenuItem from "../MenuItem/MenuItem";
import "../../styles/directory.scss";
import { connect } from "react-redux";
import { selectDirectorySections } from '../../redux/selectors/directorySelectors';
import { createStructuredSelector } from 'reselect';
const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...restSectionProps }) => (
      <MenuItem key={id} {...restSectionProps} />
    ))}
  </div>
);

const mapStateToProps =createStructuredSelector ({
  sections:selectDirectorySections
});
export default connect(mapStateToProps)(Directory);
