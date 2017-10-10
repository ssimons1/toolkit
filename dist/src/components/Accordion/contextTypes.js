'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

exports.default = _react.PropTypes.shape({
  activeIndices: _react.PropTypes.arrayOf(_react.PropTypes.number).isRequired,
  hideItem: _react.PropTypes.func.isRequired,
  isItemActive: _react.PropTypes.func.isRequired,
  isItemCollapsible: _react.PropTypes.func.isRequired,
  showItem: _react.PropTypes.func.isRequired,
  toggleItem: _react.PropTypes.func.isRequired,
  uid: _react.PropTypes.string.isRequired
}); /**
     * @copyright   2010-2017, The Titon Project
     * @license     http://opensource.org/licenses/BSD-3-Clause
     * @link        http://titon.io
     * 
     */

//# sourceMappingURL=contextTypes.js.map