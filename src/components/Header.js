import React from 'react';
import { connect } from 'react-redux';

const Header = (props) => (
  <header class="header">
    <div class="hero-text-box hero-title">Fly safely with CovidClean</div>
    <div class="hero-text-box hero-version">beta</div>
  </header>
)

export default connect()(Header)