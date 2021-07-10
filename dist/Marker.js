Object.defineProperty(exports, "__esModule", { value: true });
var _extends =
	Object.assign ||
	function(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];
			for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}
		return target;
	};
var _jsxFileName = "src/Marker.js";
var _createClass = (function() {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];
			descriptor.enumerable = descriptor.enumerable || false;
			descriptor.configurable = true;
			if ("value" in descriptor) descriptor.writable = true;
			Object.defineProperty(target, descriptor.key, descriptor);
		}
	}
	return function(Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);
		if (staticProps) defineProperties(Constructor, staticProps);
		return Constructor;
	};
})();
var _react = require("react");
var _react2 = _interopRequireDefault(_react);
var _reactGoogleMaps = require("react-google-maps");
function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}
function _objectWithoutProperties(obj, keys) {
	var target = {};
	for (var i in obj) {
		if (keys.indexOf(i) >= 0) continue;
		if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
		target[i] = obj[i];
	}
	return target;
}
function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}
function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError(
			"this hasn't been initialised - super() hasn't been called"
		);
	}
	return call && (typeof call === "object" || typeof call === "function")
		? call
		: self;
}
function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError(
			"Super expression must either be null or a function, not " +
				typeof superClass
		);
	}
	subClass.prototype = Object.create(superClass && superClass.prototype, {
		constructor: {
			value: subClass,
			enumerable: false,
			writable: true,
			configurable: true,
		},
	});
	if (superClass)
		Object.setPrototypeOf
			? Object.setPrototypeOf(subClass, superClass)
			: (subClass.__proto__ = superClass);
}
var MapViewMarker = (function(_Component) {
	_inherits(MapViewMarker, _Component);
	function MapViewMarker() {
		var _ref;
		var _temp, _this, _ret;
		_classCallCheck(this, MapViewMarker);
		for (
			var _len = arguments.length, args = Array(_len), _key = 0;
			_key < _len;
			_key++
		) {
			args[_key] = arguments[_key];
		}
		return (
			(_ret =
				((_temp =
					((_this = _possibleConstructorReturn(
						this,
						(_ref =
							MapViewMarker.__proto__ ||
							Object.getPrototypeOf(MapViewMarker)).call.apply(
							_ref,
							[this].concat(args)
						)
					)),
					_this)),
				(_this.state = { isOpen: false }),
				_temp)),
			_possibleConstructorReturn(_this, _ret)
		);
	}
	_createClass(MapViewMarker, [
		{
			key: "showCallout",
			value: function showCallout() {
				this.setState({ isOpen: true });
			},
		},
		{
			key: "hideCallout",
			value: function hideCallout() {
				this.setState({ isOpen: false });
			},
		},
		{
			key: "render",
			value: function render() {
				var _this2 = this;
				var _props = this.props,
					description = _props.description,
					title = _props.title,
					coordinate = _props.coordinate,
					onPress = _props.onPress,
					rest = _objectWithoutProperties(_props, [
						"description",
						"title",
						"coordinate",
						"onPress",
					]);
				var childrenWithProps = _react2.default.Children.map(
					this.props.children,
					function(child) {
						return _react2.default.cloneElement(child, {
							hideCallout: _this2.hideCallout.bind(_this2),
						});
					}
				);
				return _react2.default.createElement(
					_reactGoogleMaps.Marker,
					_extends({}, rest, {
						title: description ? title + "\n" + description : title,
						position: { lat: coordinate.latitude, lng: coordinate.longitude },
						onClick: onPress,
						__source: { fileName: _jsxFileName, lineNumber: 21 },
					}),
					this.state.isOpen && childrenWithProps
				);
			},
		},
	]);
	return MapViewMarker;
})(_react.Component);
exports.default = MapViewMarker;
