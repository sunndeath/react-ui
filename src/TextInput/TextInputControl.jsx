'use strict';

import React, { PropTypes } from 'react';
import View from '../View';

import { StyleSheet, css } from '../helpers/styles';
import { FONT, COLOR, SHADOW } from '../const/theme.js';

export default class TextInputControl extends React.Component {
	static __TEXT_INPUT_CONTROL__ = true;

	static propTypes = {
		/**
		 * placeholder text
		 */
		placeholder: PropTypes.string,
		/**
		 * size of the input
		 */
		size: PropTypes.oneOf(['l', 'm', 's', 'xs', 'title']),
		/**
		 * Is input field disabled.
		 */
		isDisabled: PropTypes.bool,
		/**
		 * text value of the input
		 */
		value: PropTypes.string,
		/**
		 * width value of the input
		 */
		width: PropTypes.string,
		/**
		 * text-align of the input text
		 */
		textAlign: PropTypes.oneOf(['left', 'center', 'right']),
		/**
		 * is multiline field (textarea)
		 */
		isMultiLine: PropTypes.bool,
		/**
		 * is input has autofocus after create
		 */
		autoFocus: PropTypes.bool,
		/**
		 * number of textarea rows
		 */
		rows: PropTypes.number,
		/**
		 * On change event handler
		 */
		onChange: PropTypes.func,
		/**
		 * On focus event handler
		 */
		onFocus: PropTypes.func,
		/**
		 * On blur event handler
		 */
		onBlur: PropTypes.func,
		/**
		 * On click event handler
		 */
		onClick: PropTypes.func,
		/**
		 * On keydown event handler
		 */
		onKeyDown: PropTypes.func,
		/**
		 * On keypress event handler
		 */
		onKeyPress: PropTypes.func,
		/**
		 * On keyup event handler
		 */
		onKeyUp: PropTypes.func
	};

	_renderControl() {
		const props = this.props;
		
		return React.createElement(
			props.isMultiLine ? 'textarea' : 'input',
			Object.assign({},
				{
					value: props.value,
					disabled: props.isDisabled,
					autoFocus: props.autoFocus,
					onFocus: props.onFocus,
					onBlur: props.onBlur,
					onChange: props.onChange,
					onKeyDown: props.onKeyDown,
					onKeyPress: props.onKeyPress,
					onKeyUp: props.onKeyUp,
					className: css(
						STYLE.control,
						STYLE[`controlSize${props.size.toUpperCase()}`]
					)
				},
				props.isMultiLine && { rows: props.rows }
			));
	}

	_renderPlaceholder() {
		const props = this.props;
		
		if (!props.placeholder || props.value) {
			return null
		}

		return (
			<div
				className={css(STYLE.placeholder, STYLE[`placeholderSize${props.size.toUpperCase()}`])}>
				{props.placeholder}
			</div>
		)
	}

	render() {
		const props = this.props;

		return (
			<View className={css(STYLE.root)} style={{ flex: 1 }}>
				{this._renderPlaceholder()}
				<View style={{ position: 'relative', flex: 1 }}>
					{this._renderControl()}
				</View>
			</View>
		)
	}
}

const STYLE = StyleSheet.create({
	root: {
		position: 'relative'
	},
	control: {
		position: 'relative',
		display: 'inline-block',
		verticalAlign: 'top',
		margin: 0,
		padding: 0,
		border: 'none',
		outline: 'none',
		lineHeight: '1rem',
		background: 'transparent',
		minWidth: '40px',
		width: '100%',
		cursor: 'text',
		resize: 'vertical'
	},
	controlSizeXL: {
		padding: '.7rem .4rem'
	},
	controlSizeL: {
		padding: '.5rem .3rem'
	},
	controlSizeM: {
		padding: '.3rem .2rem'
	},
	controlSizeS: {
		padding: '.1rem .1rem'
	},
	controlSizeTITLE: {
		padding: '.3rem .2rem'
	},
	placeholder: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		color: COLOR.MUTED,
		background: 'transparent',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis'
	},
	placeholderSizeL: {
		padding: '0 .4rem'
	},
	placeholderSizeM: {
		padding: '0 .3rem'
	},
	placeholderSizeS: {
		padding: '0 .2rem'
	},
	placeholderSizeXS: {
		padding: '0 .1rem'
	},
	placeholderSizeTITLE: {
		padding: '0 .2rem'
	}
});

