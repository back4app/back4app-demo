//
// Created by davimacedo on 18/11/15.
//

(function () {
    'use strict';

    var fakePromise = {
        then: function (callback) {
            setTimeout(callback, 1000);
            return {
                catch: function () {}
            }
        }
    }

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
    projectRepository.prototype.createIssue = createIssue;
    projectRepository.prototype.readIssues = readIssues;
    projectRepository.prototype.createBug = createBug;
    projectRepository.prototype.readBugs = readBugs;

    function create(name) {
        return this.$http({
            method: 'POST',
            url: 'https://api.back4app.com/entities/Project/',
            headers: {
                'X-Application-ID': 'test1',
                'X-Access-Token': 'access_token_1'
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
                'X-Application-ID': 'test1',
                'X-Access-Token': 'access_token_1'
            }
        });
    }

    function readOne(id) {
        return this.$http({
            method: 'GET',
            url: 'https://api.back4app.com/entities/Project/' + id + '/',
            headers: {
                'X-Application-ID': 'test1',
                'X-Access-Token': 'access_token_1'
            }
        });
    }

    function update(project) {
        return this.$http({
            method: 'PUT',
            url: 'https://api.back4app.com/entities/Project/' + project.id + '/',
            headers: {
                'X-Application-ID': 'test1',
                'X-Access-Token': 'access_token_1'
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
                'X-Application-ID': 'test1',
                'X-Access-Token': 'access_token_1'
            }
        });
    }

    function createIssue(projectId, title) {
        return this.$http({
            method: 'POST',
            url: 'https://api.back4app.com/entities/Issue/',
            headers: {
                'X-Application-ID': 'test1',
                'X-Access-Token': 'access_token_1'
            },
            data: JSON.stringify({
                project: projectId,
                title: title
            }),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json'
        });
    }

    function readIssues(projectId) {
        return this.$http({
            method: 'GET',
            url: 'https://api.back4app.com/entities/Issue/?query=' +
            encodeURIComponent(JSON.stringify({
                project: projectId
            })),
            headers: {
                'X-Application-ID': 'test1',
                'X-Access-Token': 'access_token_1'
            }
        });
    }

    function createBug(projectId, title) {
        return this.$http({
            method: 'POST',
            url: 'https://api.back4app.com/entities/Bug/',
            headers: {
                'X-Application-ID': 'test1',
                'X-Access-Token': 'access_token_1'
            },
            data: JSON.stringify({
                project: projectId,
                title: title
            }),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json'
        });
    }

    function readBugs(projectId) {
        return this.$http({
            method: 'GET',
            url: 'https://api.back4app.com/entities/Bug/?query=' +
            encodeURIComponent(JSON.stringify({
                project: projectId
            })),
            headers: {
                'X-Application-ID': 'test1',
                'X-Access-Token': 'access_token_1'
            }
        });
    }
})();
