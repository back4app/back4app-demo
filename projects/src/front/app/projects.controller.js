//
// Created by davimacedo on 18/11/15.
//

(function () {
    'use strict';

    angular
        .module('app')
        .controller('projectsController', projectsController);

    projectsController.$inject = [
        '$scope',
        'projectsService'
    ];

    function projectsController($scope, projectsService) {
        var vc = $scope.vc = this;

        var vm = vc.vm = $scope.vm = projectsService;

        vc.newProject = newProject;
        vc.deleteProject = deleteProject;
        vc.saveSelectedProject = saveSelectedProject;

        function newProject() {
            var newProjectName = prompt('Please, type the project name');
            if (newProjectName) {
                vm.newProject(newProjectName);
            }
        }

        function deleteProject(project) {
            if (confirm('Please, confirm that you want to delete the project "' + project.name + '"')) {
                vm.deleteProject(project.id);
            }
        }

        function saveSelectedProject() {
            if (confirm('Please, confirm that you want to save the project "' + vm.selectedProject.name + '"')) {
                vm.saveProject(vm.selectedProject);
            }
        }
    }
})();
