/**
 * @copyright 2015, Andrey Popp <8mayday@gmail.com>
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var Icon = (function (_React$PureComponent) {
  _inherits(Icon, _React$PureComponent);

  function Icon() {
    _classCallCheck(this, Icon);

    _get(Object.getPrototypeOf(Icon.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var Component = _props.Component;
      var name = _props.name;
      var size = _props.size;
      var rotate = _props.rotate;
      var flip = _props.flip;
      var spin = _props.spin;
      var fixedWidth = _props.fixedWidth;
      var stack = _props.stack;
      var inverse = _props.inverse;
      var pulse = _props.pulse;
      var className = _props.className;

      var props = _objectWithoutProperties(_props, ['Component', 'name', 'size', 'rotate', 'flip', 'spin', 'fixedWidth', 'stack', 'inverse', 'pulse', 'className']);

      var classNames = 'fa fa-' + name;
      if (size) {
        classNames = classNames + ' fa-' + size;
      }
      if (rotate) {
        classNames = classNames + ' fa-rotate-' + rotate;
      }
      if (flip) {
        classNames = classNames + ' fa-flip-' + flip;
      }
      if (fixedWidth) {
        classNames = classNames + ' fa-fw';
      }
      if (spin) {
        classNames = classNames + ' fa-spin';
      }
      if (pulse) {
        classNames = classNames + ' fa-pulse';
      }

      if (stack) {
        classNames = classNames + ' fa-stack-' + stack;
      }
      if (inverse) {
        classNames = classNames + ' fa-inverse';
      }

      if (className) {
        classNames = classNames + ' ' + className;
      }
      return _react2['default'].createElement(Component, _extends({}, props, { className: classNames }));
    }
  }], [{
    key: 'propTypes',
    value: {
      name: _propTypes2['default'].string.isRequired,
      className: _propTypes2['default'].string,
      size: _propTypes2['default'].oneOf(['lg', '2x', '3x', '4x', '5x']),
      rotate: _propTypes2['default'].oneOf(['45', '90', '135', '180', '225', '270', '315']),
      flip: _propTypes2['default'].oneOf(['horizontal', 'vertical']),
      fixedWidth: _propTypes2['default'].bool,
      spin: _propTypes2['default'].bool,
      pulse: _propTypes2['default'].bool,
      stack: _propTypes2['default'].oneOf(['1x', '2x']),
      inverse: _propTypes2['default'].bool,
      Component: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].func])
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      Component: 'span'
    },
    enumerable: true
  }]);

  return Icon;
})(_react2['default'].PureComponent);

exports['default'] = Icon;
module.exports = exports['default'];
