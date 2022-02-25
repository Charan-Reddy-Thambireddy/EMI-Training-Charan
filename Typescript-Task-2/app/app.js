//document.getElementById('pagetitle').innerText="Hello ReqRes users!";
document.getElementById('users').addEventListener('click', allusers);
function allusers() {
    var result = document.getElementById('subtitle');
    getAllUSers()
        .then(function (users) {
        result.innerHTML = users.map(function (u) { return u.firstname; }).toString();
    });
    var allusers = getAllUSers();
    console.log(allusers);
}
function getAllUSers() {
    return fetch('https://reqres.in/api/users?page=2')
        // the JSON body is taken from the response
        .then(function (res) { return res.json(); })
        .then(function (res) {
        // The response has an `any` type, so we need to cast
        // it to the `User` type, and return it from the promise
        return res;
    });
}
