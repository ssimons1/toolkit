/**
 * @copyright   2010-2017, The Titon Project
 * @license     http://opensource.org/licenses/BSD-3-Clause
 * @link        http://titon.io
 */

import React from 'react';
import Component from '../../Component';
import Tab from './Tab';
import childrenOf from '../../prop-types/childrenOf';
import CONTEXT_TYPES from './contextTypes';
import MODULE from './module';

export default class Nav extends Component {
  static module = MODULE;

  static contextTypes = CONTEXT_TYPES;

  static propTypes = {
    children: childrenOf(Tab),
  };

  render() {
    return (
      <nav
        id={this.formatID('tabs-nav')}
        className={this.formatChildClass('nav')}
      >
        <ol>
          {this.props.children}
        </ol>
      </nav>
    );
  }
}
