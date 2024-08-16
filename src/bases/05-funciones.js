

const getUser = () => {
    return {
        uid: 'ABCD345', 
        username: 'EL_PAPITOO'
    }
}

console.log(getUser().username)


const getUsuarioActivo = (nombre) => { 
    return {
        uid: 'ABC4577', 
        username: nombre
    }
}

const userActive = getUsuarioActivo('Joel'); 

console.log(userActive)