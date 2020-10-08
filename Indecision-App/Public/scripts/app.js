'use strict';

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var template = _react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(
    'h1',
    null,
    'Alternar visibilidad'
  )
);

_reactDom2.default.render(template, document.getElementById('app'));
