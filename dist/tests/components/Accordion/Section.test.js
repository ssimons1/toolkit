'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Section = require('../../../src/components/Accordion/Section');

var _Section2 = _interopRequireDefault(_Section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('components/Accordion/<Section/>', function () {
  var context = {
    accordion: { uid: 'foo' }
  };

  var classNames = {
    section: 'accordion__section',
    section__expanded: 'is-expanded'
  };

  it('renders a section', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
      _Section2.default,
      { classNames: classNames, index: 0, expanded: false },
      'Child'
    ), { context: context });
    var section = wrapper.find('section');

    expect(wrapper.prop('expanded')).toBe(false);
    expect(section.prop('role')).toBe('tabpanel');
    expect(section.prop('id')).toBe('titon-accordion-section-foo-0');
    expect(section.prop('className')).toBe('accordion__section');
    expect(section.prop('children')).toBe('Child');
  });

  it('sets expanded class', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
      _Section2.default,
      { classNames: classNames, index: 0, expanded: true },
      'Child'
    ), { context: context });

    expect(wrapper.prop('expanded')).toBe(true);
    expect(wrapper.find('section').prop('className')).toBe('accordion__section is-expanded');
  });

  it('supports ARIA', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
      _Section2.default,
      { classNames: classNames, index: 0, expanded: true },
      'Child'
    ), { context: context });
    var section = wrapper.find('section');

    expect(section.prop('aria-labelledby')).toBe('titon-accordion-header-foo-0');
    expect(section.prop('aria-hidden')).toBe(false);
    expect(section.prop('aria-expanded')).toBe(true);

    wrapper.setProps({
      expanded: false
    });

    section = wrapper.find('section');

    expect(section.prop('aria-hidden')).toBe(true);
    expect(section.prop('aria-expanded')).toBe(false);
  });
});

//# sourceMappingURL=Section.test.js.map