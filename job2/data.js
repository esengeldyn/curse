fetch('data.json')
.then(response => {
if (!response.ok) {
    console.log('Error fetching data')
}
return response.json()
})
.then(users => {
const userList = document.getElementById('user-list')
const usersAcc = document.getElementById('user-acc')
console.log(users)
let total = users.length
usersAcc.textContent = `Всего пользователей: ${total}`;
users.forEach(data => {
    const userItem = document.createElement('div')
    userItem.classList.add('user')

    userItem.innerHTML = `
    <h2>${data.name}</h2>
    <p>Email: ${data.email}</p>
    <p>Phone: ${data.phone}</p>
    `

    userList.appendChild(userItem)
})
})
.catch(error => {
console.log('Error processing data:', error)
})