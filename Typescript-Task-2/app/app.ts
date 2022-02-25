//document.getElementById('pagetitle').innerText="Hello ReqRes users!";

interface User {
    id: string
    email: string
    firstname:string
    lastname:string
    avatar:string
}

document.getElementById('users')!.addEventListener('click',allusers);

function allusers()
{
    const result = document.getElementById('subtitle')
    getAllUSers()
        .then(users => {
                result!.innerHTML = users.map(u => u.firstname).toString()
        })
    var allusers:any= getAllUSers();
    console.log(allusers);

}

function getAllUSers():Promise<User[]>
{
    
    return fetch('https://reqres.in/api/users?page=2')
                // the JSON body is taken from the response
                .then(res => res.json())
                .then(res => {
                        // The response has an `any` type, so we need to cast
                        // it to the `User` type, and return it from the promise
                        return res as User[]
                })

}
