/**
 * @author wind.b.liu@leaptocloud
 * @description This is a module for providing docker services
 * @version 0.1.0
 */

(function(window, angular, undefined) {'use strict';

angular.module("docker.services",['ngResource'])
    .factory('Container', ['$resource','Settings', function (resource,settings) {
        var api_path="http://localhost:8812/docker-service/image/";
        return resource(api_path,{}, {
            query:{
                url:api_path+"list",
                method: 'GET',
                isArray:true
            }
        });

        //return $resource("http://localhost:8812/docker-service/image/list", {
        //    name: '@name'
        //}, {
        //    query: {
        //        method: 'GET',
        //        params: {
        //            all: 0,
        //            action: 'json'
        //        },
        //        isArray: true},
        //    get: {method: 'GET', params: {action: 'json'}}
        //    start: {method: 'POST', params: {id: '@id', action: 'start'}},
        //    stop: {method: 'POST', params: {id: '@id', t: 5, action: 'stop'}},
        //    restart: {method: 'POST', params: {id: '@id', t: 5, action: 'restart'}},
        //    kill: {method: 'POST', params: {id: '@id', action: 'kill'}},
        //    pause: {method: 'POST', params: {id: '@id', action: 'pause'}},
        //    unpause: {method: 'POST', params: {id: '@id', action: 'unpause'}},
        //    changes: {method: 'GET', params: {action: 'changes'}, isArray: true},
        //    create: {method: 'POST', params: {action: 'create'}},
        //    remove: {method: 'DELETE', params: {id: '@id', v: 0}},
        //    rename: {method: 'POST', params: {id: '@id', action: 'rename'}, isArray: false}
        //});
    }])
    .factory('Settings', function (DOCKER_ENDPOINT, DOCKER_PORT, DOCKER_API_VERSION, UI_VERSION) {
        var url = DOCKER_ENDPOINT;
        if (DOCKER_PORT) {
            url = url + DOCKER_PORT + '\\' + DOCKER_PORT;
        }
        return {
            displayAll: false,
            endpoint: DOCKER_ENDPOINT,
            version: DOCKER_API_VERSION,
            rawUrl: DOCKER_ENDPOINT+ ":" + DOCKER_PORT,
            uiVersion: UI_VERSION,
            url: url,
            firstLoad: true
        };
    });

})(window, window.angular);
