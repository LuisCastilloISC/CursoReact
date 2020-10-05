'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Indecisionapp = function (_React$Component) {
    _inherits(Indecisionapp, _React$Component);

    function Indecisionapp(props) {
        _classCallCheck(this, Indecisionapp);

        var _this = _possibleConstructorReturn(this, (Indecisionapp.__proto__ || Object.getPrototypeOf(Indecisionapp)).call(this, props));

        _this.HandelReset = _this.HandelReset.bind(_this);
        _this.HandelRandomPick = _this.HandelRandomPick.bind(_this);
        _this.HandleaddOption = _this.HandleaddOption.bind(_this);
        _this.HandleDeleteOption = _this.HandleDeleteOption.bind(_this);

        _this.state = {
            options: []
        };
        return _this;
    }

    _createClass(Indecisionapp, [{
        key: 'HandelReset',
        value: function HandelReset() {
            this.setState(function () {
                return { options: [] };
            });
            // () => {} funcion flecha con cuerpo de la funcion
            // () => {{}} funcion flecha devolviendo un objeto vacio
        }
    }, {
        key: 'HandleDeleteOption',
        value: function HandleDeleteOption(otraOpcion) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return otraOpcion !== option;
                    })
                };
            });
        }
    }, {
        key: 'HandelRandomPick',
        value: function HandelRandomPick() {
            alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]);
        }
    }, {
        key: 'HandleaddOption',
        value: function HandleaddOption(option) {
            if (!option) {
                return 'Enter valid value';
            } else {
                if (this.state.options.indexOf(option) > -1) {
                    return 'Already in';
                }
            }

            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat([option])
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = "Indecision App";
            var subtitle = "Put your life in the hands of a computer";
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, { hasOptions: this.state.options.length > 0 ? true : false, HandelRandomPick: this.HandelRandomPick }),
                React.createElement(Opcions, { options: this.state.options, HandelReset: this.HandelReset, HandleDeleteOption: this.HandleDeleteOption }),
                React.createElement(AddOpcion, { HandleaddOption: this.HandleaddOption })
            );
        }
    }]);

    return Indecisionapp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.props.title
                ),
                React.createElement(
                    'h2',
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { disabled: !this.props.hasOptions, onClick: this.props.HandelRandomPick },
                    'Boton'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Opcions = function (_React$Component4) {
    _inherits(Opcions, _React$Component4);

    function Opcions() {
        _classCallCheck(this, Opcions);

        return _possibleConstructorReturn(this, (Opcions.__proto__ || Object.getPrototypeOf(Opcions)).apply(this, arguments));
    }

    _createClass(Opcions, [{
        key: 'render',
        value: function render() {
            var _this5 = this;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.props.HandelReset },
                    'Remove All'
                ),
                this.props.options.map(function (option) {
                    return React.createElement(Option, {
                        key: option,
                        option: option,
                        HandleDeleteOption: _this5.props.HandleDeleteOption });
                })
            );
        }
    }]);

    return Opcions;
}(React.Component);

var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'render',
        value: function render() {
            var _this7 = this;

            return React.createElement(
                'div',
                null,
                this.props.option,
                React.createElement(
                    'button',
                    {
                        onClick: function onClick(e) {
                            _this7.props.HandleDeleteOption(_this7.props.option);
                        }
                    },
                    'Remove'
                )
            );
        }
    }]);

    return Option;
}(React.Component);

var AddOpcion = function (_React$Component6) {
    _inherits(AddOpcion, _React$Component6);

    function AddOpcion(props) {
        _classCallCheck(this, AddOpcion);

        var _this8 = _possibleConstructorReturn(this, (AddOpcion.__proto__ || Object.getPrototypeOf(AddOpcion)).call(this, props));

        _this8.onFormSubmit = _this8.onFormSubmit.bind(_this8);
        _this8.state = {
            error: undefined
        };
        return _this8;
    }

    _createClass(AddOpcion, [{
        key: 'onFormSubmit',
        value: function onFormSubmit(e) {
            e.preventDefault();

            var op = e.target.elements.Option.value.trim();
            var error = this.props.HandleaddOption(op);
            e.target.elements.Option.value = '';
            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error ? React.createElement(
                    'p',
                    null,
                    this.state.error
                ) : undefined,
                React.createElement(
                    'form',
                    { onSubmit: this.onFormSubmit },
                    React.createElement('input', { type: 'text', name: 'Option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOpcion;
}(React.Component);

ReactDOM.render(React.createElement(Indecisionapp, null), document.getElementById('app'));
