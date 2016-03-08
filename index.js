/* jshint node: true */
'use strict';

var path = require('path'),
  util = require('util'),
  extend = util._extend;

var defaultOptions = {
  importBootstrapFlat: true,
  importBootstrapFlatExtras: true
}

module.exports = {
  name: 'ember-cli-bootstrap-flat',

  included: function included(app) {
    var options = extend(defaultOptions, app.options['ember-cli-bootstrap-flat']);
    var bootstrapflatPath = path.join(app.bowerDirectory, 'bootstrap-flat');

    if (options.importBootstrapFlat) {
      app.import(path.join(bootstrapflatPath, 'css/bootstrap-flat.css'));
    }

    if(options.importBootstrapFlatExtras) {
      app.import(path.join(bootstrapflatPath, 'css/bootstrap-flat-extras.css'));
    }
  }
};
