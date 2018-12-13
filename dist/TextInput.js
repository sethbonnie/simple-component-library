'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin-bottom: 1rem;\n'], ['\n  margin-bottom: 1rem;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: inline-block;\n  margin-bottom: .5rem;\n  font-size: 16px;\n  font-weight: 400;\n  color: rgb(33, 37, 41);\n'], ['\n  display: inline-block;\n  margin-bottom: .5rem;\n  font-size: 16px;\n  font-weight: 400;\n  color: rgb(33, 37, 41);\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: block;\n  color: #555;\n'], ['\n  display: block;\n  color: #555;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FormGroup = _styledComponents2.default.div(_templateObject);

var Input = _styledComponents2.default.input(_templateObject2);

var Label = _styledComponents2.default.label(_templateObject3);

var TextInput = function TextInput(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === undefined ? 'text' : _ref$type,
      label = _ref.label,
      value = _ref.value,
      _onChange = _ref.onChange;
  return _react2.default.createElement(
    FormGroup,
    null,
    label && _react2.default.createElement(
      Label,
      null,
      label
    ),
    _react2.default.createElement(Input, {
      type: type,
      value: value,
      onChange: function onChange(e) {
        return _onChange && _onChange(e.target.value);
      }
    })
  );
};

exports.default = TextInput;