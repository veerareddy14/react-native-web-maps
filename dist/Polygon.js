
		return target;
	};
var _jsxFileName = "src\\Polygon.js";
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
var MapViewPolygon = (function(_Component) {
	_inherits(MapViewPolygon, _Component);
	function MapViewPolygon() {
		_classCallCheck(this, MapViewPolygon);
		return _possibleConstructorReturn(
			this,
			(MapViewPolygon.__proto__ || Object.getPrototypeOf(MapViewPolygon)).apply(
				this,
				arguments
			)
		);
	}
	_createClass(MapViewPolygon, [
		{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					_reactGoogleMaps.Polygon,
					_extends({}, this.props, {
						__source: { fileName: _jsxFileName, lineNumber: 6 },
					})
				);
			},
		},
	]);
	return MapViewPolygon;
})(_react.Component);
exports.default = MapViewPolygon;
