(function() {

  window.App = {
    // ----------
    init: function() {
    },

    // ----------
    template: function(name, config) {
      var rawTemplate = $("#" + name + "-template").text();
      var template = _.template(rawTemplate);
      var html = template(config);
      var $container = $('<div>')
        .addClass(name)
        .html(html);

      return $container;
    }
  };

  $(document).ready(function() {
    App.init();
  });

})();
