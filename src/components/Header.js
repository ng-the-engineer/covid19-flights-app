import React from 'react';
import { connect } from 'react-redux';

const Header = (props) => (
  <header class="header">
    <div class="hero-text-box">
      <span class="hero-title">Fly safely with CovidClean</span>
      <span class="hero-version">beta</span>
    </div>
    <div class="credit">
      Photo credit to Mike Palmowski
    </div>
  </header>
)

export default connect()(Header)