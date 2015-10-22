;(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define('MyModule', factory);
  } else if (typeof exports === 'object') {
    exports = module.exports = factory();
  } else {
    root.MyModule = factory();
  }
}(this, function () {
  'use strict';
  
  function MyModule () {
    var $public = {},
        $private = {};
    
    // exposed methods
    return $public;
  };
  
  return MyModule;
}));
