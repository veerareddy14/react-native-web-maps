Object.defineProperty(exports, "__esModule", { value: true });
var _jsxFileName = "src/Circle.js";
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
var MapViewCircle = (function(_PureComponent) {
	_inherits(MapViewCircle, _PureComponent);
	function MapViewCircle() {
		_classCallCheck(this, MapViewCircle);
		return _possibleConstructorReturn(
			this,
			(MapViewCircle.__proto__ || Object.getPrototypeOf(MapViewCircle)).apply(
				this,
				arguments
			)
		);
	}
	_createClass(MapViewCircle, [
		{
			key: "render",
			value: function render() {
				var _props = this.props,
					center = _props.center,
					radius = _props.radius,
					options = _props.options;
				return _react2.default.createElement(_reactGoogleMaps.Circle, {
					center: { lat: center.latitude, lng: center.longitude },
					radius: radius,
					options: options,
					__source: { fileName: _jsxFileName, lineNumber: 12 },
				});
			},
		},
	]);
	return MapViewCircle;
})(_react.PureComponent);
exports.default = MapViewCircle;
