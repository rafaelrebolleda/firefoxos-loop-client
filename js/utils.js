/* -*- Mode: js; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- /
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

'use strict';

(function(exports) {
  var DEBUG = true;

  var Utils = {
    /**
     * Helper function. Check whether the id parameter is a phone number.
     *
     * @param {String} id The id to check.
     *
     * @return {Boolean} Result.
     */
    isPhoneNumberValid: function u_isPhoneNumberValid(id) {
      if (id) {
        var re = /^([\+]*[0-9])+$/;
        if (re.test(id)) {
          return true;
        }
      }
      return false;
    },

    /**
     * Helper function. Check whether the id parameter is a email address.
     *
     * @param {String} id The id to check.
     *
     * @return {Boolean} Result.
     */
    isEmailValid: function u_isEmailValid(id) {
      // TODO.
      return false;
    },

    /**
     * Simple dump function.
     * 
     * @param {String} s Message. 
     */
    log: function u_log(s) {
      DEBUG && console.log(s);
    }
  };

  exports.Utils = Utils;
}(this));