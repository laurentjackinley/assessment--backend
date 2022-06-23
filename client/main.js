

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const formElement = document.getElementById("powerForm")
const nameInput = document.getElementById("name")
const plInput = document.getElementById("pl")
const formIncElement = document.getElementById("incForm")
const nameIncInput = document.getElementById("nameInc")
const formDelElement = document.getElementById("delForm")
const nameDelInput = document.getElementById("nameDel")
const playerBtn = document.getElementById("getplayer")
const clubBtn = document.getElementById("club")

baseURL = `http://localhost:4000`

const getCompliment = () => {
    axios.get(baseURL + "/api/compliment/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};


const getFortune = () => {
    axios.get(baseURL + "/api/fortune/")
    .then(res => {
        const data = res.data
        alert(data)
    })
}

const submitPerson = (event) => {
    event.preventDefault()

    const name = nameInput.value
    const pl = plInput.value

    const theBody = {
        name: name,
        power_level: +pl,
    }
    axios.post(baseURL + '/api/createUser',theBody)
    .then ((response) => {
        if (response.data.success){
            console.log('new database looks like:')
            console.log(response.data.info)
        } else {
            alert('failure')
        }
    })
    nameInput.value = ''
    plInput.value = ''
}
const incPower = (event) => {
    event.preventDefault()

    const name = nameIncInput.value

    axios.put (baseURL + '/api/inUser/' + name)
    .then ((response) => {
        if (response.data.success) {
            console.log('new database looks like:')
            console.log(response.data.info)
        } else {
            alert('Not Working')
        }
    })
}

const delUser = (event) => {
    event.preventDefault()

    const name = nameDelInput.value

    axios.put('http://localhost:4000/api/delUser/' + name)
    .then((response) => {
        if (response.data.success) {
            console.log('new database looks like:')
            console.log(response.data.info)
        } else {
            alert('failure')
        }
    })
  
}

const getPlayer = () => {
    axios.get(baseURL + "/api/player/")
    .then(res => {
        const data = res.data
        alert(data)
    })
}
const getClub = () => {
    axios.get(baseURL + "/api/club/")
    .then(res => {
        const data = res.data
        alert(data)
    })
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
formElement.addEventListener('Submit',submitPerson)
formIncElement.addEventListener('submit', incPower)
formDelElement.addEventListener('submit', delUser)
playerBtn.addEventListener('click', getPlayer)
clubBtn.addEventListener('click', getClub)
