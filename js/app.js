(function() {

  // ----------
  window.App = {
    // ----------
    init: function() {
      this.demoView = new App.DemoView({
        $container: $('.page-wrapper')
      });

      this.demoView.enlarge();
    },

    // ----------
    template: function(name, data) {
      var rawTemplate = $('#' + name + '-template').text();
      var template = _.template(rawTemplate);
      var html = template(data);
      return $(html);
    }
  };

  // ----------
  $(document).ready(function() {
    App.init();
  });

})();
