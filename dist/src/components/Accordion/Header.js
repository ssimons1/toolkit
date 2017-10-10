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
var ToolkitAccordionHeader = function (_React$PureComponent) {
  _inherits(ToolkitAccordionHeader, _React$PureComponent);

  function ToolkitAccordionHeader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ToolkitAccordionHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ToolkitAccordionHeader.__proto__ || Object.getPrototypeOf(ToolkitAccordionHeader)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
      e.preventDefault();

      _this.context.accordion.toggleItem(_this.props.index);
      _this.props.onClick(e);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ToolkitAccordionHeader, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          classNames = _props.classNames,
          index = _props.index,
          active = _props.active;
      var accordion = this.context.accordion;


      return _react2.default.createElement(
        'header',
        {
          role: 'tab',
          id: (0, _formatID2.default)('accordion-header', accordion.uid, index),
          className: (0, _styler.classes)(classNames.header, active && classNames.header__active),
          'aria-controls': (0, _formatID2.default)('accordion-section', accordion.uid, index),
          'aria-selected': active,
          'aria-expanded': active
        },
        _react2.default.createElement(
          'a',
          { href: '', className: classNames.header_link, onClick: this.handleClick },
          children
        )
      );
    }
  }]);

  return ToolkitAccordionHeader;
}(_react2.default.PureComponent);

ToolkitAccordionHeader.contextTypes = {
  accordion: _contextTypes2.default.isRequired
};
ToolkitAccordionHeader.propTypes = {
  active: _propTypes2.default.bool.isRequired,
  children: _propTypes2.default.node.isRequired,
  classNames: _propTypes3.classNamesPropType.isRequired,
  index: _propTypes2.default.number.isRequired,
  onClick: _propTypes2.default.func
};
ToolkitAccordionHeader.defaultProps = {
  onClick: function onClick() {}
};
exports.default = ToolkitAccordionHeader;

//# sourceMappingURL=Header.js.map