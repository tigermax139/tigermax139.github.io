//const form = document.getElementById('form');
const login = document.getElementById('login');
const password = document.getElementById('password');
const submit = document.getElementById('submit');

submit.onclick = function () {
    console.log('login:' + login.value);
    console.log('password:' + password.value);
}