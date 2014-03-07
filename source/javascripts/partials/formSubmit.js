(function(window, $, undefined) {

  var self;

  FormConfirmation = function($message, $form) {
    this.$form = $form;
    this.$message = $message;

    this.$form.on('submit', this.submitData);
    self = this;
  };

  FormConfirmation.prototype.collectData = function() {
    var hash = {};
    this.$form.find('input, select, textarea').each(function(i, el) {
        hash[el.name] = el.value;
    });
    return hash;
  };

  FormConfirmation.prototype.showMessage = function() {
    self.$form.slideUp();
    self.$message.fadeIn();
    $('html,body').animate({
      scrollTop: 0
    }, 1000);
  };

  FormConfirmation.prototype.submitData = function(e) {
    e.preventDefault();
    $.ajax({
        url: self.$form.attr('action'),
        data: self.collectData(),
        type: 'POST'
    }).done(self.showMessage);
  };

  window.BSFF = window.BSFF || {};
  window.BSFF.FormConfirmation = FormConfirmation;

}(window, jQuery));
