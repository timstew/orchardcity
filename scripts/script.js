$(document).ready(function() {
  $('form').ajaxChimp({
    callback: function(response) {
      $('form .result').text(response.msg);
    }
  });
});