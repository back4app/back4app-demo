//
// Created by davimacedo on 18/11/15.
//

(function () {
    'use strict';

    angular
        .module('app')
        .controller('ProjectIssuesController', ProjectIssuesController);

    ProjectIssuesController.$inject = [
        '$scope',
        'projectIssuesService'
    ];

    function ProjectIssuesController($scope, projectIssuesService) {
        var vc = $scope.vc = this;

        var vm = vc.vm = $scope.vm = projectIssuesService;

        vc.newProject = newProject;
        vc.deleteProject = deleteProject;
        vc.saveSelectedProject = saveSelectedProject;
        vc.newIssue = newIssue;
        vc.newBug = newBug;

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

        function newIssue() {
            var newIssueTitle = prompt('Please, type the issue title');
            if (newIssueTitle) {
                vm.selectedProject.newIssue(newIssueTitle);
            }
        }

        function newBug() {
            var newBugTitle = prompt('Please, type the bug title');
            if (newBugTitle) {
                vm.selectedProject.newBug(newBugTitle);
            }
        }
    }
})();
