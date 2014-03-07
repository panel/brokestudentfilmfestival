$(function() {
  var logo = window.BSFF.logo('#logo', '.logo-panel');
  logo.bindPanels();

  var $el = $('#follower');

  if($el.length) {
    window.follower = new window.BSFF.Follower($el);
  }

  $('input[required], textarea[required]').attr('placeholder', 'required');

  var $form = $('#sponsor-form');
  if($form.length) {
    window.formHandler = new window.BSFF.FormConfirmation($('.after-submit'), $form);
  }
});
