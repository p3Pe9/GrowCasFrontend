const API_URL = 'https://nodejs212.dszcbaross.edu.hu'
const BACKEND_URL = '/users'

export async function register(email, username, psw) {

    const res = await fetch(`${BACKEND_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, username, psw })
    })
    const data = await res.json()

    return data
}



export async function login(email, psw) {

    const res = await fetch(`${BACKEND_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ email, psw })
    })
    const data = await res.json()

    return data
}

export async function whoami() {
    const res = await fetch(`${BACKEND_URL}/whoami`, {
        method: 'GET',
        credentials: 'include'
    })

    if (!res.ok) {
        const data = await res.json()
        return { error: data?.error }
    }

    return await res.json()
}

export async function logout() {
    const res = await fetch(`${BACKEND_URL}/logout`, {
        method: 'POST',
        credentials: 'include'
    })

    if (!res.ok) {
        const data = await res.json()
        return { error: data?.error }
    }

    return await res.json()
}

export async function usernameUpdate(userId, username) {
    const res = await fetch(`${API_URL}${BACKEND_URL}/update-username`, {
        method: 'PUT',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
           userId,username
        })
    })

    return await res.json()
}

export async function uploadProfileImage( userId, file) {
    const formData = new FormData()
    formData.append('pfp', file)
    console.log(file);

    const res = await fetch(`${API_URL}/api/profile-images/upload-pfp/${userId}`, {
        method: 'POST',
        credentials: 'include',
        body: formData
    })

    return await res.json()
}

export async function changePassword(oldPassword, newPassword) {
    const res = await fetch(`${API_URL}/users/update-password`, {

        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({
            oldPassword: oldPassword,
            newPassword: newPassword
        })
    });

    return await res.json()
}

export async function deleteUser(userId) {

    const res = await fetch(`${API_URL}${BACKEND_URL}/delete-user/${userId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
    })
    const data = await res.json()

    return data
}

export async function deposit(amount) {

    const res = await fetch(`${API_URL}${BACKEND_URL}/deposit`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
         body: JSON.stringify({ amount: amount })
    })
    const data = await res.json()

    return data
}



/*
const BACKEND_URL='/users'

export async function register(email, username, psw){

    const res=await fetch (`${BACKEND_URL}/register`, {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({email, username, psw})
    })
    const data=await res.json()

    return data
}



export async function login(email, psw){

    const res=await fetch (`${BACKEND_URL}/login`, {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        credentials:'include',
        body: JSON.stringify({email, psw})
    })
    const data=await res.json()

    return data
}

export async function whoami(){
    const res=await fetch(`${BACKEND_URL}/whoami`,{
        method:'GET',
        credentials:'include'
    })
    
    if (!res.ok){
        const data = await res.json()
        return {error:data?.error}
    }

    return await res.json()
}

export async function logout() {
    const res=await fetch(`${BACKEND_URL}/logout`,{
        method:'POST',
        credentials:'include'
    })

    if(!res.ok){
        const data=await res.json()
        return {error:data?.error}
    }

    return await res.json()
}
*/






