'use strict';

module.exports = {
    systemJsConfig: './system.config.js',
    source: {
        folder: './src/VokabelChef/',
        files: {
            injectables: [
                './dist/www/scripts/es6-shim.min.js',
                './dist/www/scripts/shims_for_IE.js',
                './dist/www/scripts/vendor.min.js',
                './dist/www/scripts/angular2.min.js',
                './dist/www/scripts/system.setup.js',
                './dist/www/css/vendor.min.css',
                './dist/www/css/app.css'
            ],
            electronFiles: './electron/**/*.*',
            cordovaFiles: './cordova/',
            cordova: './src/VokabelChef/cordova.js',
            main: [
                './src/VokabelChef/index.html'
            ],
            systemSetupScript: './src/VokabelChef/system.setup.js',
            app: {
                everything: ['./src/VokabelChef/app/**/*', './src/VokabelChef/system.setup.js'],
                ts: [
                    './src/VokabelChef/app/**/*.ts'
                ],
                html: [
                    './src/VokabelChef/app/**/*.html'
                ],
                css: [

                    './src/VokabelChef/css/**/*.css'
                ],
                componentCss: [
                    './src/VokabelChef/app/**/*.css'
                ],
                assets: [
                    './src/VokabelChef/assets/**/*.*'
                ]
            },
            vendorStylesheets: [
                './src/VokabelChef/vendor/bootstrap/css/bootstrap.css',
                './src/VokabelChef/vendor/admin-lte/css/AdminLTE.css',
                './src/VokabelChef/vendor/admin-lte/css/skins/_all-skins.css',
                './src/VokabelChef/vendor/font-awesome/css/font-awesome.css',
                './src/VokabelChef/vendor/pNotify/pnotify.custom.css',
                './src/VokabelChef/vendor/leaflet-js/leaflet.css'
            ],
            vendorFonts: [
                './src/VokabelChef/vendor/font-awesome/fonts/*.*',
                './src/VokabelChef/vendor/bootstrap/fonts/*.*'
            ],
            shim: [
                './node_modules/es6-shim/es6-shim.min.js',
                './node_modules/angular2/es6/dev/src/testing/shims_for_IE.js'
            ],
            vendorJs: [
                './src/VokabelChef/vendor/hammerjs/hammer.js',
                './src/VokabelChef/vendor/jquery/jquery-2.1.4.js',
                './src/VokabelChef/vendor/jquery/jquery.hammer.js',
                './src/VokabelChef/vendor/jquery/jquery.slimscroll.js',
                './src/VokabelChef/vendor/pNotify/pnotify-adapter.js',
                './src/VokabelChef/vendor/pNotify/pnotify.custom.js',
                './src/VokabelChef/vendor/signalr/signalr.js',
                './src/VokabelChef/vendor/bootstrap/js/bootstrap.js',
                './src/VokabelChef/vendor/fastclick/fastclick.js',
                './src/VokabelChef/vendor/admin-lte/js/app.js',
                './src/VokabelChef/vendor/leaflet-js/leaflet-src.js'],
            angular2: [
                './node_modules/systemjs/dist/system-polyfills.js',
                './node_modules/angular2/bundles/angular2-polyfills.js',
                './node_modules/systemjs/dist/system.src.js',
                './node_modules/rxjs/bundles/Rx.js',
                './node_modules/angular2/bundles/angular2.dev.js',
                './node_modules/angular2/bundles/http.dev.js',
                './node_modules/angular2/bundles/router.dev.js'
            ]
        }
    },
    ts: {
        config: './tsconfig.json'
    },
    targets: {
        angular2MinJs: 'angular2.min.js',
        vendorMinJs: 'vendor.min.js',
        vendorMinCss: 'vendor.min.css',
        buildFolder: './dist/www',
        electronFolder: './dist/desktop',
        cordovaFolder: './dist/mobile',
        resourcesFolder: './resources/',
        hooksFolder: './cordova/hooks/',
        appFolder: 'app',
        stylesFolder: 'css',
        minified: {
            js: 'app.js',
            css: 'app.css',
            templateCache: 'ng-templates.js'
        }
    }
};
