'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Item = require('../../../src/components/Accordion/Item');

var _Item2 = _interopRequireDefault(_Item);

var _Header = require('../../../src/components/Accordion/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Section = require('../../../src/components/Accordion/Section');

var _Section2 = _interopRequireDefault(_Section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('components/Accordion/<Item/>', function () {
  var context = {
    accordion: {
      uid: 'foo',
      isItemActive: function isItemActive(index) {
        return index === 0;
      }
    }
  };

  it('renders an item with a header and section', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
      _Item2.default,
      { index: 0, header: 'Title' },
      'Child'
    )).dive({ context: context });
    var header = wrapper.find(_Header2.default);
    var section = wrapper.find(_Section2.default);

    expect(wrapper.type()).toBe('li');
    expect(header.prop('index')).toBe(0);
    expect(header.prop('children')).toBe('Title');
    expect(section.prop('index')).toBe(0);
    expect(section.prop('children')).toBe('Child');
  });

  it('inherits `expanded` state from `index` prop', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
      _Item2.default,
      { index: 0, header: 'Title' },
      'Child'
    )).dive({ context: context });

    expect(wrapper.state('expanded')).toBe(true);
  });

  it('toggles `expanded` state based on `index` prop', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
      _Item2.default,
      { index: 0, header: 'Title' },
      'Child'
    )).dive({ context: context });

    expect(wrapper.state('expanded')).toBe(true);

    wrapper.setProps({
      index: 1
    });

    expect(wrapper.state('expanded')).toBe(false);
  });

  it('toggles `expanded` state on header and section', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
      _Item2.default,
      { index: 0, header: 'Title' },
      'Child'
    )).dive({ context: context });

    expect(wrapper.find(_Header2.default).prop('active')).toBe(true);
    expect(wrapper.find(_Section2.default).prop('expanded')).toBe(true);

    wrapper.setState({
      expanded: false
    });

    expect(wrapper.find(_Header2.default).prop('active')).toBe(false);
    expect(wrapper.find(_Section2.default).prop('expanded')).toBe(false);
  });

  it('emits `onShowing` and `onShowed` events when item is expanded', function () {
    var showing = jest.fn();
    var shown = jest.fn();
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
      _Item2.default,
      { index: 1, header: 'Title', onShowing: showing, onShown: shown },
      'Child'
    )).dive({ context: context });

    wrapper.setState({
      expanded: true
    });

    expect(showing).toBeCalled();
    expect(shown).toBeCalled();
  });

  it('emits `onHiding` and `onHidden` events when item is collapsed', function () {
    var hiding = jest.fn();
    var hidden = jest.fn();
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
      _Item2.default,
      { index: 0, header: 'Title', onHiding: hiding, onHidden: hidden },
      'Child'
    )).dive({ context: context });

    wrapper.setState({
      expanded: false
    });

    expect(hiding).toBeCalled();
    expect(hidden).toBeCalled();
  });
});

//# sourceMappingURL=Item.test.js.map