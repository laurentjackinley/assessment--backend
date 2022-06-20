
baseURL = `http://localhost:4000/api/compliment/`

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const deleteBtn = document.getElementById("delete")

//const addButton = docment.getElementById("newOne")

const getCompliment = () => {
    axios.get(baseURL)
    .then(res => {
        const data = res.data;
        alert(data);
    });
};
complimentBtn.addEventListener('click', getCompliment)


const getFortune = () => {
    axios.get(baseURL)
    .then(res => {
        const data = res.data
        alert(data)
    })
}

fortuneBtn.addEventListener('click', getFortune)

// let theCompli = document.querySelector('#newOne')
const createCompliment = body => {
    axios.post(baseURL, body)
    .then(res => {
        const data = res.data
        alert(data)
    } )
}
// addButton.addEventListener('click',createCompliment)

const deleteFortune =() => {
    axios.delete(baseURL)
    .then(res => {
        const data = res.data
        alert(data)
    })
}
deleteBtn.addEventListener('click', deleteFortune)