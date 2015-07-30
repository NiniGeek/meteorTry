angular.module('socially',['angular-meteor', 'ui.router']);

Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
});