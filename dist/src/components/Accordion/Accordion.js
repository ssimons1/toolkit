'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolkitAccordion = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _airbnbPropTypes = require('airbnb-prop-types');

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

var _generateUID = require('../../utility/generateUID');

var _generateUID2 = _interopRequireDefault(_generateUID);

var _formatID = require('../../utility/formatID');

var _formatID2 = _interopRequireDefault(_formatID);

var _styler = require('../../styler');

var _styler2 = _interopRequireDefault(_styler);

var _propTypes3 = require('../../propTypes');

var _contextTypes = require('./contextTypes');

var _contextTypes2 = _interopRequireDefault(_contextTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright   2010-2017, The Titon Project
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license     http://opensource.org/licenses/BSD-3-Clause
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @link        http://titon.io
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var ToolkitAccordion = exports.ToolkitAccordion = function (_React$Component) {
  _inherits(ToolkitAccordion, _React$Component);

  function ToolkitAccordion() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ToolkitAccordion);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ToolkitAccordion.__proto__ || Object.getPrototypeOf(ToolkitAccordion)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      indices: new Set()
    }, _this.uid = (0, _generateUID2.default)(), _this.hideItem = function (index) {
      var indices = new Set(_this.state.indices);

      (Array.isArray(index) ? index : [index]).forEach(function (i) {
        return indices.delete(i);
      });

      _this.setState({
        indices: indices
      });
    }, _this.isItemCollapsible = function (index) {
      return (_this.props.multiple || _this.props.collapsible) && _this.isItemActive(index);
    }, _this.isItemActive = function (index) {
      return _this.state.indices.has(index);
    }, _this.showItem = function (index) {
      var _this$props = _this.props,
          children = _this$props.children,
          multiple = _this$props.multiple;

      var total = _react.Children.count(children);
      var indices = new Set(multiple ? _this.state.indices : []);
      var newIndices = [];

      if (Array.isArray(index)) {
        if (!multiple) {
          newIndices.push(index[0]);
        } else {
          newIndices.push.apply(newIndices, _toConsumableArray(index));
        }
      } else {
        newIndices.push(index);
      }

      newIndices.forEach(function (i) {
        if (i >= 0 && i < total) {
          indices.add(i);
        }
      });

      _this.setState({
        indices: indices
      });
    }, _this.toggleItem = function (index) {
      if (_this.isItemCollapsible(index)) {
        _this.hideItem(index);
      } else {
        _this.showItem(index);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ToolkitAccordion, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        accordion: {
          activeIndices: Array.from(this.state.indices),
          hideItem: this.hideItem,
          isItemActive: this.isItemActive,
          isItemCollapsible: this.isItemCollapsible,
          showItem: this.showItem,
          toggleItem: this.toggleItem,
          uid: this.uid
        }
      };
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.showItem(this.props.defaultIndex);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return nextProps.multiple || nextState.indices !== this.state.indices;
    }
  }, {
    key: 'render',
    value: function render() {
      var _classes;

      var _props = this.props,
          children = _props.children,
          classNames = _props.classNames,
          collapsible = _props.collapsible,
          multiple = _props.multiple;


      return _react2.default.createElement(
        'ul',
        {
          role: 'tablist',
          id: (0, _formatID2.default)('accordion', this.uid),
          className: (0, _styler.classes)(classNames.accordion, (_classes = {}, _defineProperty(_classes, classNames.accordion__collapsible, collapsible), _defineProperty(_classes, classNames.accordion__multiple, multiple), _classes)),
          'aria-live': 'off'
        },
        children
      );
    }
  }]);

  return ToolkitAccordion;
}(_react2.default.Component);

ToolkitAccordion.childContextTypes = {
  accordion: _contextTypes2.default.isRequired
};
ToolkitAccordion.propTypes = {
  children: (0, _airbnbPropTypes.childrenOfType)(_Item2.default).isRequired,
  classNames: _propTypes3.classNamesPropType.isRequired,
  collapsible: _propTypes2.default.bool,
  defaultIndex: _propTypes3.numberCollectionPropType,
  multiple: _propTypes2.default.bool
};
ToolkitAccordion.defaultProps = {
  collapsible: false,
  defaultIndex: 0,
  multiple: false
};
exports.default = (0, _styler2.default)({
  accordion: 'accordion',
  accordion__collapsible: 'is-collapsible',
  accordion__multiple: 'is-multiple'
})(ToolkitAccordion);

//# sourceMappingURL=Accordion.js.map