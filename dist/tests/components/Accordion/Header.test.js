'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Header = require('../../../src/components/Accordion/Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('components/Accordion/<Header/>', function () {
  var context = {
    accordion: {
      uid: 'foo',
      toggleItem: function toggleItem() {}
    }
  };

  var classNames = {
    header: 'accordion__header',
    header_link: 'accordion__header-link',
    header__active: 'is-active'
  };

  it('renders a header', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
      _Header2.default,
      { classNames: classNames, index: 0, active: false },
      'Child'
    ), { context: context });

    expect(wrapper.prop('role')).toBe('tab');
    expect(wrapper.prop('id')).toBe('titon-accordion-header-foo-0');
    expect(wrapper.prop('className')).toBe('accordion__header');
  });

  it('renders a header link', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
      _Header2.default,
      { classNames: classNames, index: 0, active: true },
      'Child'
    ), { context: context });
    var link = wrapper.find('a');

    expect(link).toHaveLength(1);
    expect(link.prop('children')).toBe('Child');
    expect(link.prop('className')).toBe('accordion__header-link');
  });

  it('sets active class', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
      _Header2.default,
      { classNames: classNames, index: 0, active: true },
      'Child'
    ), { context: context });

    expect(wrapper.prop('className')).toBe('accordion__header is-active');
  });

  it('supports ARIA', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
      _Header2.default,
      { classNames: classNames, index: 0, active: true },
      'Child'
    ), { context: context });

    expect(wrapper.prop('aria-controls')).toBe('titon-accordion-section-foo-0');
    expect(wrapper.prop('aria-selected')).toBe(true);
    expect(wrapper.prop('aria-expanded')).toBe(true);

    wrapper.setProps({
      active: false
    });

    expect(wrapper.prop('aria-selected')).toBe(false);
    expect(wrapper.prop('aria-expanded')).toBe(false);
  });

  it('clicking header link triggers the context `toggleItem`', function () {
    var toggleItem = jest.fn();
    var preventDefault = jest.fn();
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
      _Header2.default,
      { classNames: classNames, index: 10, active: true },
      'Child'
    ), {
      context: {
        accordion: Object.assign({}, context.accordion, {
          toggleItem: toggleItem
        })
      }
    });

    wrapper.find('a').simulate('click', {
      preventDefault: preventDefault
    });

    expect(preventDefault).toBeCalled();
    expect(toggleItem).toBeCalledWith(10);
  });

  it('clicking header link triggers `onClick` prop', function () {
    var onClick = jest.fn();
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
      _Header2.default,
      { classNames: classNames, index: 0, onClick: onClick, active: true },
      'Child'
    ), { context: context });
    var event = {
      preventDefault: function preventDefault() {}
    };

    wrapper.find('a').simulate('click', event);

    expect(onClick).toBeCalledWith(event);
  });
});

//# sourceMappingURL=Header.test.js.map