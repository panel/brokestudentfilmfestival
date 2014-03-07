(function(window, $, undefined) {

  var self;

  Follower = function($el) {
    this.$el = $el;
    this.anchorHeight = $el.position().top + 100;
    this.bind();

    this.$el.css('width', this.$el.css('width'));
    self = this;
  };

  Follower.prototype.toggleFixed = function() {
    if(window.pageYOffset > self.anchorHeight) {
      self.$el.addClass('follower-fixed');
    } else {
      self.$el.removeClass('follower-fixed');
    }
  };

  Follower.prototype.bind = function() {
    $(window).on('scroll', this.toggleFixed);
  };
  window.BSFF = window.BSFF || {};
  window.BSFF.Follower = Follower;

}(window, jQuery));
