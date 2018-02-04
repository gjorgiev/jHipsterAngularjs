(function () {
    'use strict';

    angular
        .module('jHipsterAngularjsApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
