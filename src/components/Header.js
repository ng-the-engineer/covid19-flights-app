import React from 'react';
import { connect } from 'react-redux';

const Header = (props) => (
  <header class="header">
    <div class="hero-text-box">Fly safely with CovidClean</div>
  </header>
)

export default connect()(Header)