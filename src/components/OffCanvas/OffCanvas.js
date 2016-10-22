/**
 * @copyright   2010-2016, The Titon Project
 * @license     http://opensource.org/licenses/BSD-3-Clause
 * @link        http://titon.io
 */

import React, { Children, PropTypes } from 'react';
import Component from '../../Component';
import DocumentState from '../../machines/DocumentState';
import MainContent from './MainContent';
import Sidebar from './Sidebar';
import Swipe from '../../events/Swipe';
import bind from '../../decorators/bind';
import childrenOf from '../../prop-types/childrenOf';
import invariant from '../../utility/invariant';
import generateUID from '../../utility/generateUID';
import CONTEXT_TYPES from './contextTypes';
import MODULE from './module';
import { TOUCH } from '../../flags';

export default class OffCanvas extends Component {
  static module = MODULE;

  static childContextTypes = CONTEXT_TYPES;

  static defaultProps = {
    animation: 'push',
    multiple: true,
    showOnLoad: false,
    stopScroll: true,
    swipe: TOUCH,
  };

  static propTypes = {
    animation: PropTypes.oneOf([
      'push', 'push-reveal', 'push-down', 'reverse-push',
      'reveal', 'on-top', 'squish',
    ]),
    children: childrenOf(MainContent, Sidebar),
    multiple: PropTypes.bool,
    showOnLoad: PropTypes.bool,
    stopScroll: PropTypes.bool,
    swipe: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  };

  state = {
    sides: new Set(),
  };

  uid = generateUID();

  /**
   * Validate props.
   *
   * @param {Object} props
   */
  constructor(props) {
    super();

    // Only a select few animations can support showing all sidebars on page load
    const { showOnLoad, multiple, animation } = props;

    invariant(!(showOnLoad && multiple && animation !== 'on-top' && animation !== 'squish'),
      'Only `on-top` and `squish` animations are supported ' +
      'for `showOnLoad` when `multiple` sidebars are enabled.');
  }

  /**
   * Define a context that is passed to all children.
   *
   * @returns {Object}
   */
  getChildContext() {
    return {
      [MODULE.contextKey]: {
        activeSides: Array.from(this.state.sides),
        hideSidebar: this.hideSidebar,
        isSidebarActive: this.isSidebarActive,
        showSidebar: this.showSidebar,
        toggleSidebar: this.toggleSidebar,
        uid: this.uid,
      },
    };
  }

  /**
   * Manage sidebars and scrollbars before mounting.
   */
  componentWillMount() {
    this.showOnLoad();
    this.toggleScrolling();
  }

  /**
   * Only update if the active sides change.
   *
   * @param {Object} nextProps
   * @param {Object} nextState
   * @returns {Boolean}
   */
  shouldComponentUpdate(nextProps, nextState) {
    return (nextState.sides !== this.state.sides);
  }

  /**
   * Manage sidebars and scrollbars after updating.
   */
  componentDidUpdate() {
    this.toggleScrolling();
  }

  /**
   * Conceal a sidebar by removing its side from the active list.
   *
   * @param {String} side
   */
  @bind
  hideSidebar(side) {
    const sides = new Set(this.state.sides);

    sides.delete(side);

    this.setState({
      sides,
    });
  }

  /**
   * Returns true if the defined side is currently active.
   *
   * @param {String} side
   * @returns {Boolean}
   */
  @bind
  isSidebarActive(side) {
    return this.state.sides.has(side);
  }

  /**
   * Reveal a sidebar by adding the side to the active list.
   *
   * @param {String} side
   */
  @bind
  showSidebar(side) {
    const sides = new Set(this.state.sides);
    const single = (this.props.multiple === false);

    // If the left side is open, and we swipe right, go back to the content
    if (single && sides.has('left') && side === 'right') {
      sides.delete('left');

    // If the right side is open, and we swipe left, go back to the content
    } else if (single && sides.has('right') && side === 'left') {
      sides.delete('right');

    // No sidebars are open, so show one
    } else {
      sides.add(side);
    }

    this.setState({
      sides,
    });
  }

  /**
   * Show all sidebar(s) on page load.
   */
  showOnLoad() {
    const { children, multiple, showOnLoad } = this.props;

    if (showOnLoad) {
      const childlings = Children.toArray(children);
      let count = 0;

      for (const child of childlings) {
        // Only show the first sidebar if multiple is false
        if (!multiple && count) {
          break;
        }

        // Safe to mutate state directly here
        if (child.type === Sidebar && child.props.side) {
          this.state.sides.add(child.props.side);
          count += 1;
        }
      }
    }
  }

  /**
   * Toggle document scrollbars on and off.
   */
  toggleScrolling() {
    if (this.props.stopScroll) {
      DocumentState.toggleScrolling(this.state.sides.size === 0);
    }
  }

  /**
   * Toggle the active state of the defined sidebar.
   *
   * @param {String} side
   */
  @bind
  toggleSidebar(side) {
    if (this.isSidebarActive(side)) {
      this.hideSidebar(side);
    } else {
      this.showSidebar(side);
    }
  }

  /**
   * Handles all `swipe` events by toggling the display of sidebars
   * based on the direction of the swipe.
   *
   * @param {Event} e
   */
  @bind
  handleOnSwipe(e) {
    const side = e.target.getAttribute('data-offcanvas-sidebar');
    const direction = e.detail.direction;

    // Hide the sidebar if we swipe in the same direction as itself
    if (side && side === direction) {
      this.hideSidebar(side);

    // Else show the opposite sidebar if swiping on the content
    } else {
      this.showSidebar(direction === 'right' ? 'left' : 'right');
    }
  }

  /**
   * Render the off canvas container.
   *
   * @returns {ReactElement}
   */
  render() {
    const props = this.props;
    const swipeProps = this.generateNestedProps(props, 'swipe', [
      'onSwipe', 'onSwipeUp', 'onSwipeRight', 'onSwipeDown', 'onSwipeLeft',
    ]);

    swipeProps.onSwipeLeft.unshift(this.handleOnSwipe);
    swipeProps.onSwipeRight.unshift(this.handleOnSwipe);

    return (
      <Swipe {...swipeProps}>
        <div
          id={this.formatID('off-canvas')}
          className={this.formatClass({
            [props.animation]: true,
            'move-left': this.isSidebarActive('right'),
            'move-right': this.isSidebarActive('left'),
          })}
        >
          {props.children}
        </div>
      </Swipe>
    );
  }
}
