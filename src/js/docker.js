/**
 * @author wind.b.liu@leaptocloud
 * @description Definition Docker module and config docker router
 * @version 0.1.0
 */

var docker = angular.module('docker', ['ui.router']);

docker.config(function($stateProvider, $urlRouterProvider) {

    //config docker modle how to route
    $stateProvider
        .state('main.sysconfig.containers', {
            url: '/containers',
            templateUrl: 'templates/containerList.html'
        })

});

