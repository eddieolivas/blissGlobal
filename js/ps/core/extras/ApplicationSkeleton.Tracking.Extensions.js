(function ()
{
    'use strict';

    var application_prototype = SC.ApplicationSkeleton.prototype;

    _.extend(application_prototype, {

        // do not track if user agent is Keynote
        track: _.wrap(application_prototype.track, function(fn, method) {
            // These are the strings that Keynote adds to the User Agent string:
            var gk_KEYNOTE_TXP_MONITOR = "KTXN"; // Transaction Perspective agents
            if (navigator.userAgent.indexOf(gk_KEYNOTE_TXP_MONITOR, 0) == -1) {
                fn.apply(this, Array.prototype.slice.call(arguments, 1));
            }
            return this;
        })

    });

})();