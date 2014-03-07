(function(window, $, undefined) {
	var BSFF = window.BSFF || {};

	BSFF.logo = function(container, panelSelector) {
		var that = {};

		that.$container = $(container);
		that.$panels = $(panelSelector);

		function _getRandomDuration(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		function _cycleImages($panel) {
			var images = $panel.children('img');
			var active = images.filter('.active');
			var next = images.filter('[data-order="' + active.data('next') + '"]');

			next.fadeIn().addClass('active');

			if(active.data('order') === 0) {
				var afterNext = (images.length - 1 === next.data('order')) ? 1 : parseInt(next.data('order'), 10) + 1;
				active.data('next', afterNext);
			} else {
				active.fadeOut();
			}

			active.removeClass('active');
		}

		that.bindPanels = function() {
			that.$panels.each(function(index, el) {
				setInterval(function() {
					_cycleImages($(el));
				}, _getRandomDuration(2000, 4000));
			});
		};

		that.cycleImages = _cycleImages;

		return that;
	};

	window.BSFF = BSFF;

}(window, jQuery));
