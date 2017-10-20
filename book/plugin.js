require(['gitbook', 'jquery'], function(gitbook, $) {
  function addTargets() {
    var targets = gitbook.state.config.pluginsConfig['link-targets'].targets;
    var keys = Object.keys(targets);
    keys.forEach(function(key) {
      $('a[href*="'+ key + '"]').each(function(idx, el) {
        $(el).attr('target', targets[key]);
      });
    });
  }

  gitbook.events.bind('page.change', addTargets);
});
