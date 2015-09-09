(function() {

  // ----------
  var component = App.DemoView = function(config) {
    var data = {
      text: 'Hello, world!'
    };

    this.$el = App.template('demo-view', data)
      .appendTo(config.$container);
  };

  // ----------
  component.prototype = {
    // ----------
    enlarge: function() {
      this.$el.animate({
        'font-size': 200
      });
    }
  };

})();
