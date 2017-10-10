'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Accordion = require('../../../src/components/Accordion/Accordion');

var _Accordion2 = _interopRequireDefault(_Accordion);

var _Item = require('../../../src/components/Accordion/Item');

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('components/Accordion/<Accordion/>', function () {
  var wrapper = void 0;
  var instance = void 0;

  beforeEach(function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
      _Accordion2.default,
      null,
      _react2.default.createElement(
        _Item2.default,
        { header: 'Foo' },
        'Foo child'
      ),
      _react2.default.createElement(
        _Item2.default,
        { header: 'Bar' },
        'Bar child'
      ),
      _react2.default.createElement(
        _Item2.default,
        { header: 'Baz' },
        'Baz child'
      )
    )).dive();
    instance = wrapper.instance();
  });

  it('renders a list', function () {
    expect(wrapper.type()).toBe('ul');
    expect(wrapper.prop('id')).toMatch(/^titon-accordion-/);
    expect(wrapper.prop('className')).toBe('accordion');
    expect(wrapper.prop('aria-live')).toBe('off');
  });

  it('sets `multiple` class name', function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
      _Accordion2.default,
      { multiple: true },
      _react2.default.createElement(
        _Item2.default,
        { header: 'Foo' },
        'Foo child'
      ),
      _react2.default.createElement(
        _Item2.default,
        { header: 'Bar' },
        'Bar child'
      ),
      _react2.default.createElement(
        _Item2.default,
        { header: 'Baz' },
        'Baz child'
      )
    )).dive();

    expect(wrapper.prop('className')).toBe('accordion is-multiple');
  });

  it('sets `collapsible` class name', function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
      _Accordion2.default,
      { collapsible: true },
      _react2.default.createElement(
        _Item2.default,
        { header: 'Foo' },
        'Foo child'
      ),
      _react2.default.createElement(
        _Item2.default,
        { header: 'Bar' },
        'Bar child'
      ),
      _react2.default.createElement(
        _Item2.default,
        { header: 'Baz' },
        'Baz child'
      )
    )).dive();

    expect(wrapper.prop('className')).toBe('accordion is-collapsible');
  });

  describe('componentWillMount()', function () {
    it('sets default index on mount', function () {
      wrapper.setProps({
        defaultIndex: 2
      });
      instance.componentWillMount();

      expect(wrapper.state('indices').has(2)).toBe(true);
    });
  });

  describe('shouldComponentUpdate()', function () {
    it('returns true when `multiple`', function () {
      expect(instance.shouldComponentUpdate({ multiple: true })).toBe(true);
    });

    it('returns true when indices are different', function () {
      expect(instance.shouldComponentUpdate({}, { indices: new Set([1]) })).toBe(true);
    });

    it('returns false when not `multiple` and same indices', function () {
      expect(instance.shouldComponentUpdate({
        multiple: false
      }, {
        indices: instance.state.indices
      })).toBe(false);
    });
  });

  describe('hideItem()', function () {
    beforeEach(function () {
      wrapper.state('indices').add(1).add(2).add(3);
    });

    it('removes an index from the list', function () {
      instance.hideItem(2);

      expect(Array.from(wrapper.state('indices'))).toEqual([0, 1, 3]);
    });

    it('removes multiple indices from the list', function () {
      instance.hideItem([1, 3, 5]);

      expect(Array.from(wrapper.state('indices'))).toEqual([0, 2]);
    });

    it('does nothing if the index doesnt exist', function () {
      instance.hideItem(5);

      expect(Array.from(wrapper.state('indices'))).toEqual([0, 1, 2, 3]);
    });
  });

  describe('isItemCollapsible()', function () {
    it('returns true if the index is active and `multiple` is enabled', function () {
      wrapper.setProps({
        multiple: true
      });
      wrapper.state('indices').add(1);

      expect(instance.isItemCollapsible(1)).toBe(true);
    });

    it('returns true if the index is active and `collapsible` is enabled', function () {
      wrapper.setProps({
        collapsible: true
      });
      wrapper.state('indices').add(1);

      expect(instance.isItemCollapsible(1)).toBe(true);
    });

    it('returns false if neither prop is enabled', function () {
      wrapper.state('indices').add(1);

      expect(instance.isItemCollapsible(1)).toBe(false);
    });

    it('returns false if index is not active', function () {
      wrapper.setProps({
        multiple: true,
        collapsible: true
      });

      expect(instance.isItemCollapsible(1)).toBe(false);
    });
  });

  describe('isItemActive()', function () {
    it('returns a boolean if the index exists', function () {
      wrapper.state('indices').add(5);

      expect(instance.isItemActive(1)).toBe(false);
      expect(instance.isItemActive(5)).toBe(true);
    });

    it('supports multiple indices', function () {
      wrapper.state('indices').add(1).add(5);

      expect(instance.isItemActive(1)).toBe(true);
      expect(instance.isItemActive(5)).toBe(true);
    });
  });

  describe('showItem()', function () {
    beforeEach(function () {
      // Remove default index for easier testing
      wrapper.state('indices').delete(0);
    });

    it('adds an index and replaces previous index', function () {
      instance.showItem(1);

      expect(Array.from(wrapper.state('indices'))).toEqual([1]);

      instance.showItem(2);

      expect(Array.from(wrapper.state('indices'))).toEqual([2]);
    });

    it('adds many indices if `multiple` is on', function () {
      wrapper.setProps({
        multiple: true
      });
      instance.showItem(0);
      instance.showItem(1);

      expect(Array.from(wrapper.state('indices'))).toEqual([0, 1]);

      instance.showItem(2);

      expect(Array.from(wrapper.state('indices'))).toEqual([0, 1, 2]);
    });

    it('must be greater than or equal to 0', function () {
      instance.showItem(-1);

      expect(Array.from(wrapper.state('indices'))).toEqual([]);

      instance.showItem(0);

      expect(Array.from(wrapper.state('indices'))).toEqual([0]);
    });

    it('must be less than or equal to the number of children', function () {
      instance.showItem(3);

      expect(Array.from(wrapper.state('indices'))).toEqual([]);

      instance.showItem(2);

      expect(Array.from(wrapper.state('indices'))).toEqual([2]);
    });

    it('uses first index if an array is passed', function () {
      instance.showItem([1, 2, 3]);

      expect(Array.from(wrapper.state('indices'))).toEqual([1]);
    });

    it('uses entire array if `multiple` is on', function () {
      wrapper.setProps({
        multiple: true
      });
      instance.showItem([1, 2, 3]);

      expect(Array.from(wrapper.state('indices'))).toEqual([1, 2]);
    });
  });

  describe('toggleItem()', function () {
    it('replaces indices when nothing is on', function () {
      expect(Array.from(wrapper.state('indices'))).toEqual([0]);

      instance.toggleItem(1);

      expect(Array.from(wrapper.state('indices'))).toEqual([1]);

      instance.toggleItem(2);

      expect(Array.from(wrapper.state('indices'))).toEqual([2]);
    });

    it('toggles an index on and off when `multiple` is on', function () {
      wrapper.setProps({
        multiple: true
      });

      expect(Array.from(wrapper.state('indices'))).toEqual([0]);

      instance.toggleItem(0);

      expect(Array.from(wrapper.state('indices'))).toEqual([]);

      instance.toggleItem(0);

      expect(Array.from(wrapper.state('indices'))).toEqual([0]);
    });

    it('toggles an index on and off when `multiple` is on', function () {
      wrapper.setProps({
        collapsible: true
      });

      expect(Array.from(wrapper.state('indices'))).toEqual([0]);

      instance.toggleItem(0);

      expect(Array.from(wrapper.state('indices'))).toEqual([]);

      instance.toggleItem(0);

      expect(Array.from(wrapper.state('indices'))).toEqual([0]);
    });
  });
});

//# sourceMappingURL=Accordion.test.js.map