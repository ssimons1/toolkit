'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Collapse = require('../../motions/Collapse');

var _Collapse2 = _interopRequireDefault(_Collapse);

var _formatID = require('../../utility/formatID');

var _formatID2 = _interopRequireDefault(_formatID);

var _styler = require('../../styler');

var _propTypes3 = require('../../propTypes');

var _contextTypes = require('./contextTypes');

var _contextTypes2 = _interopRequireDefault(_contextTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright   2010-2017, The Titon Project
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license     http://opensource.org/licenses/BSD-3-Clause
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @link        http://titon.io
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// Private
var ToolkitAccordionSection = function (_React$PureComponent) {
  _inherits(ToolkitAccordionSection, _React$PureComponent);

  function ToolkitAccordionSection() {
    _classCallCheck(this, ToolkitAccordionSection);

    return _possibleConstructorReturn(this, (ToolkitAccordionSection.__proto__ || Object.getPrototypeOf(ToolkitAccordionSection)).apply(this, arguments));
  }

  _createClass(ToolkitAccordionSection, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          classNames = _props.classNames,
          expanded = _props.expanded,
          index = _props.index;
      var accordion = this.context.accordion;


      return _react2.default.createElement(
        _Collapse2.default,
        { expanded: expanded },
        _react2.default.createElement(
          'section',
          {
            role: 'tabpanel',
            id: (0, _formatID2.default)('accordion-section', accordion.uid, index),
            className: (0, _styler.classes)(classNames.section, expanded && classNames.section__expanded),
            'aria-labelledby': (0, _formatID2.default)('accordion-header', accordion.uid, index),
            'aria-hidden': !expanded,
            'aria-expanded': expanded
          },
          children
        )
      );
    }
  }]);

  return ToolkitAccordionSection;
}(_react2.default.PureComponent);

ToolkitAccordionSection.contextTypes = {
  accordion: _contextTypes2.default.isRequired
};
ToolkitAccordionSection.propTypes = {
  children: _propTypes2.default.node.isRequired,
  classNames: _propTypes3.classNamesPropType.isRequired,
  expanded: _propTypes2.default.bool.isRequired,
  index: _propTypes2.default.number.isRequired
};
exports.default = ToolkitAccordionSection;

//# sourceMappingURL=Section.js.map