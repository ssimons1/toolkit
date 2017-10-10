'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolkitAccordionItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Section = require('./Section');

var _Section2 = _interopRequireDefault(_Section);

var _emitEvent = require('../../utility/emitEvent');

var _emitEvent2 = _interopRequireDefault(_emitEvent);

var _styler = require('../../styler');

var _styler2 = _interopRequireDefault(_styler);

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

var ToolkitAccordionItem = exports.ToolkitAccordionItem = function (_React$Component) {
  _inherits(ToolkitAccordionItem, _React$Component);

  function ToolkitAccordionItem(_ref, _ref2) {
    var index = _ref.index;
    var accordion = _ref2.accordion;

    _classCallCheck(this, ToolkitAccordionItem);

    var _this = _possibleConstructorReturn(this, (ToolkitAccordionItem.__proto__ || Object.getPrototypeOf(ToolkitAccordionItem)).call(this));

    _this.state = {
      expanded: accordion.isItemActive(index)
    };
    return _this;
  }

  _createClass(ToolkitAccordionItem, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref3, _ref4) {
      var index = _ref3.index;
      var accordion = _ref4.accordion;

      this.setState({
        expanded: accordion.isItemActive(index)
      });
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, _ref5) {
      var expanded = _ref5.expanded;

      return expanded !== this.state.expanded;
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {
      (0, _emitEvent2.default)(this, 'accordion', this.state.expanded ? 'onHiding' : 'onShowing');
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      (0, _emitEvent2.default)(this, 'accordion', this.state.expanded ? 'onShown' : 'onHidden');
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          classNames = _props.classNames,
          index = _props.index,
          header = _props.header,
          onClickHeader = _props.onClickHeader;
      var expanded = this.state.expanded;


      return _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _Header2.default,
          {
            index: index,
            active: expanded,
            onClick: onClickHeader,
            classNames: classNames
          },
          header
        ),
        _react2.default.createElement(
          _Section2.default,
          {
            index: index,
            expanded: expanded,
            classNames: classNames
          },
          children
        )
      );
    }
  }]);

  return ToolkitAccordionItem;
}(_react2.default.Component);

ToolkitAccordionItem.contextTypes = {
  accordion: _contextTypes2.default.isRequired
};
ToolkitAccordionItem.propTypes = Object.assign({}, _propTypes3.showHidePropTypes, {
  children: _propTypes2.default.node.isRequired,
  classNames: _propTypes3.classNamesPropType.isRequired,
  header: _propTypes2.default.node.isRequired,
  index: _propTypes2.default.number.isRequired,
  onClickHeader: _propTypes2.default.func
});
ToolkitAccordionItem.defaultProps = Object.assign({}, _propTypes3.showHideDefaults, {
  onClickHeader: function onClickHeader() {}
});
exports.default = (0, _styler2.default)({
  header: 'accordion__header',
  header_link: 'accordion__header-link',
  header__active: 'is-active',
  section: 'accordion__section',
  section__expanded: 'is-expanded'
})(ToolkitAccordionItem);

//# sourceMappingURL=Item.js.map