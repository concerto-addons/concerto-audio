
var ConcertoAudio = {
  _initialized: false,

  initHandlers: function () {
    if (!ConcertoAudio._initialized) {
      $('input#audio_config_url').on("keyup", function (e) {
        var a = $('<audio>', { controls: 'controls', preload: 'none', src: $('input#audio_config_url').val() });
        $("#preview_div").empty().append(a);
      });

      ConcertoAudio._initialized = true;
    }
  }
};

$(document).ready(ConcertoAudio.initHandlers);
$(document).on('turbolinks:load', ConcertoAudio.initHandlers);
