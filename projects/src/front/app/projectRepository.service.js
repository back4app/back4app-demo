//
// Created by davimacedo on 18/11/15.
//

(function () {
    'use strict';

    angular
        .module('app')
        .config(function($httpProvider){
            delete $httpProvider.defaults.headers.common['X-Requested-With'];
        })
        .service('projectRepository', projectRepository);

    projectRepository.$inject = [
        '$http'
    ];

    function projectRepository($http) {
        this.$http = $http;
    }

    projectRepository.prototype.create = create;
    projectRepository.prototype.readAll = readAll;
    projectRepository.prototype.readOne = readOne;
    projectRepository.prototype.update = update;
    projectRepository.prototype.del = del;

    function create(name) {
        return this.$http({
            method: 'POST',
            url: 'https://api.back4app.com/entities/Project/',
            headers: {
                'X-Application-ID': 'test2',
                'X-Access-Token': 'access_token_2'
            },
            data: JSON.stringify({
                name: name
            }),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json'
        });
    }

    function readAll() {
        return this.$http({
            method: 'GET',
            url: 'https://api.back4app.com/entities/Project/',
            headers: {
                'X-Application-ID': 'test2',
                'X-Access-Token': 'access_token_2'
            }
        });
    }

    function readOne(id) {
        return this.$http({
            method: 'GET',
            url: 'https://api.back4app.com/entities/Project/' + id + '/',
            headers: {
                'X-Application-ID': 'test2',
                'X-Access-Token': 'access_token_2'
            }
        });
    }

    function update(project) {
        return this.$http({
            method: 'PUT',
            url: 'https://api.back4app.com/entities/Project/' + project.id + '/',
            headers: {
                'X-Application-ID': 'test2',
                'X-Access-Token': 'access_token_2'
            },
            data: JSON.stringify({
                name: project.name
            }),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json'
        });
    }

    function del(id) {
        return this.$http({
            method: 'DELETE',
            url: 'https://api.back4app.com/entities/Project/' + id + '/',
            headers: {
                'X-Application-ID': 'test2',
                'X-Access-Token': 'access_token_2'
            }
        });
    }
})();
