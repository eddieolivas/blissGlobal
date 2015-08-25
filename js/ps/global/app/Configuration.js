(function (SC) {

    'use strict';

    // application configuration
    // if needed, the second argument - omitted here - is the application name ('Shopping', 'MyAccount', 'Checkout')
    _.each(SC._applications, function(application) {

        application.on('beforeStartGlobal', function() {

            var configuration = application.Configuration;

            /* add modules */
            //application.addModule('Content.EnhancedViews.Extensions');
            application.addModule(['Categories',{ addToNavigationTabs:true, navigationAddMethod: 'prepend' }]);
            //application.addModule('Facets.Model.SortFix');
            application.addModule('Facets.Translator.Categories');
            //application.addModule('NavigationHelper.Extensions');

            // ----- ----- ----- ----- ----- ----- ----- ----- -----
            _.extend(configuration, {

                navigationTabs: []

            });

        });


    });

}(SC));
