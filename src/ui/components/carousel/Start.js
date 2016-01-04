/**
 * @copyright   2010-2016, The Titon Project
 * @license     http://opensource.org/licenses/BSD-3-Clause
 * @link        http://titon.io
 */

import React, { PropTypes } from 'react';
import Component from '../../Component';
import autoBind from '../../../ext/decorators/autoBind';
import collectionOf from '../../../ext/prop-types/collectionOf';
import CONTEXT_TYPES from './ContextTypes';

export default class Start extends Component {

    /**
     * Handles clicking the start button.
     *
     * @param {SyntheticEvent} e
     */
    @autoBind
    onClick(e) {
        this.context.startCycle();
        this.handleEvent('click', e);
    }

    /**
     * Render a button that starts the automatic cycle.
     *
     * @returns {JSX}
     */
    render() {
        return (
            <button
                type="button" role="button"
                className={this.formatClass(this.props.className)}
                onClick={this.onClick}>
                {this.props.children}
            </button>
        );
    }
}

Start.contextTypes = CONTEXT_TYPES;

Start.defaultProps = {
    className: 'carousel-start'
};

Start.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: collectionOf.func
};
