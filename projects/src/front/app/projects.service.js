//
// Created by davimacedo on 18/11/15.
//

(function () {
    'use strict';

    angular
        .module('app')
        .factory('projectsService', projectsService);

    projectsService.$inject = [
        'projectRepository'
    ];

    function projectsService(projectRepository) {
        var vm = {};

        vm.projects = [];
        vm.selectedProject = null;

        vm.refreshProjects = refreshProjects;
        vm.newProject = newProject;
        vm.deleteProject = deleteProject;
        vm.selectProject = selectProject;
        vm.saveProject = saveProject;

        vm.refreshProjects();

        return vm;

        function refreshProjects() {
            projectRepository
                .readAll()
                .then(function (projects) {
                    vm.projects = projects.data.results;
                })
                .catch(function (error) {
                    console.error(error);
                    alert(error);
                });
        }

        function newProject(name) {
            projectRepository
                .create(name)
                .then(function () {
                    alert('Project successfully created');
                    refreshProjects();
                    selectProject(null);
                })
                .catch(function (error) {
                    console.error(error);
                    alert(error);
                });
        }

        function deleteProject(id) {
            projectRepository
                .del(id)
                .then(function () {
                    alert('Project successfully deleted');
                    refreshProjects();
                    selectProject(null);
                })
                .catch(function (error) {
                    console.error(error);
                    alert(error);
                });
        }

        function selectProject(id) {
            if (id) {
                projectRepository
                    .readOne(id)
                    .then(function (project) {
                        if (project.data) {
                            vm.selectedProject = project.data;
                        } else {
                            vm.selectedProject = null;
                        }
                    })
                    .catch(function (error) {
                        console.error(error);
                        alert(error);
                    });
            } else {
                vm.selectedProject = null;
            }
        }

        function saveProject(project) {
            projectRepository
                .update(project)
                .then(function () {
                    alert('Project successfully updated');
                    refreshProjects();
                })
                .catch(function (error) {
                    console.error(error);
                    alert(error);
                });
        }
    }
})();
