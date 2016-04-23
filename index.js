;(function(window){
	'use strict';

	function unitify(input){
		var _w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		var _h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

		var regex = /(^(-?\d+)(px|vmin|vmax|%|vh|vw|in|pt|pc)|0)$/i;
		var regexResult = regex.exec(input);
		var inputRawString = regexResult[2] || input;
		var inputRawNumber = parseFloat(inputRawString);
		var unit = regexResult[3] || 'px';

		var converters = {
			'px': function(){
				return {
					raw: inputRawNumber,
					vmin: inputRawNumber * 100 / Math.min(_w, _h),
					vmax: inputRawNumber * 100 / Math.max(_w, _h),
					'%': function(relative) {
						return inputRawNumber * 100 / relative;
					},
					vh: inputRawNumber * 100 / _h,
					vw: inputRawNumber * 100 / _w,
					in: inputRawNumber / 96,
					pt: inputRawNumber * 0.75,
					pc: inputRawNumber * 0.0625

				}
			},
			'vmin': function(){
				var _pixels = inputRawNumber * Math.min(_w, _h) / 100;
				return {
					raw: inputRawNumber,
					px: _pixels + 'px',
					vmax: _pixels *  Math.max(_w, _h) / 100,
					'%': function(relative) {
						return _pixels * 100 / relative;
					},
					vh: _pixels * 100 / _h,
					vw: _pixels * 100 / _w,
					in: _pixels / 96,
					pt: _pixels * 0.75,
					pc: _pixels * 0.0625
				}
			},
			'vmax': function(){
				var _pixels = inputRawNumber * Math.max(_w, _h) / 100;
				return {
					raw: inputRawNumber,
					px: _pixels + 'px',
					vmin: _pixels *  Math.min(_w, _h) / 100,
					'%': function(relative) {
						return _pixels * 100 / relative;
					},
					vh: _pixels * 100 / _h,
					vw: _pixels * 100 / _w,
					in: _pixels / 96,
					pt: _pixels * 0.75,
					pc: _pixels * 0.0625
				}
			},
			'%': function(relative){
				if (typeof relative === 'undefined'){
					throw 'Percentage requires relative argument for value ' + inputRawNumber;
				}
				var _pixels = inputRawNumber * 100 / relative;
				return {
					raw: inputRawNumber,
					px: _pixels + 'px',
					vmin: _pixels * 100 / Math.min(_w, _h),
					vmax: _pixels * 100 / Math.max(_w, _h),
					vh: _pixels * 100 / _h,
					vw: _pixels * 100 / _w,
					in: _pixels / 96,
					pt: _pixels * 0.75,
					pc: _pixels * 0.0625
				}
			},
			'vh': function(){
				var _pixels = inputRawNumber * _h / 100;
				return {
					raw: inputRawNumber,
					px: _pixels + 'px',
					vmin: _pixels * 100 / Math.min(_w, _h),
					vmax: _pixels * 100 / Math.max(_w, _h),
					'%': function(relative) {
						return _pixels * 100 / relative;
					},
					vw: _pixels * 100 / _w,
					in: _pixels / 96,
					pt: _pixels * 0.75,
					pc: _pixels * 0.0625
				}
			},
			'vw': function(){
				var _pixels = inputRawNumber * _w / 100;
				return {
					raw: inputRawNumber,
					px: _pixels + 'px',
					vmin: _pixels * 100 / Math.min(_w, _h),
					vmax: _pixels * 100 / Math.max(_w, _h),
					'%': function(relative) {
						return _pixels * 100 / relative;
					},
					vh: _pixels * 100 / _h,
					in: _pixels / 96,
					pt: _pixels * 0.75,
					pc: _pixels * 0.0625
				}
			},
			'in': function(){
				var _pixels = inputRawNumber / 96;
				return {
					raw: inputRawNumber,
					px: _pixels + 'px',
					vmin: _pixels * 100 / Math.min(_w, _h),
					vmax: _pixels * 100 / Math.max(_w, _h),
					'%': function(relative) {
						return _pixels * 100 / relative;
					},
					vw: _pixels * 100 / _w,
					vh: _pixels * 100 / _h,
					pt: _pixels * 0.75,
					pc: _pixels * 0.0625
				}
			},
			'pt': function(){
				var _pixels = inputRawNumber * 0.75;
				return {
					raw: inputRawNumber,
					px: _pixels + 'px',
					vmin: _pixels * 100 / Math.min(_w, _h),
					vmax: _pixels * 100 / Math.max(_w, _h),
					'%': function(relative) {
						return _pixels * 100 / relative;
					},
					vw: _pixels * 100 / _w,
					vh: _pixels * 100 / _h,
					in: _pixels / 96,
					pc: _pixels * 0.0625
				}
			},
			'pc': function(){
				var _pixels = inputRawNumber * 0.0625;
				return {
					raw: inputRawNumber,
					px: _pixels + 'px',
					vmin: _pixels * 100 / Math.min(_w, _h),
					vmax: _pixels * 100 / Math.max(_w, _h),
					'%': function(relative) {
						return _pixels * 100 / relative;
					},
					vw: _pixels * 100 / _w,
					vh: _pixels * 100 / _h,
					in: _pixels / 96,
					pt: _pixels * 0.75
				}
			}
		};
		if(converters[unit]) {
			return converters[unit]();
		} else {
			return converters['px']();
		}
	}
	window.unitify = unitify;
})(window);
