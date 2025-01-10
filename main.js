let loginInput = document.querySelector('.inputLogin');
let passwordInput = document.querySelector('.Inputpasword');
let btn = document.querySelector('.end-button');
let errorsms = document.querySelector('.errors')

let users = [{
    id: 1,
    fullName: 'Sobir Sirjiddinov',
    coin: 100,
    teacher: 'Emirhan',
    daraja: "⭐⭐⭐⭐",
    exp: 250,
    password: '4321',
    login: '4321'

},
{
    id: 2,
    fullName: 'jonson Olimov',
    coin: 22,
    daraja: "⭐⭐⭐",
    teacher: 'Emirhan',
    exp: 10,
    password: '5555',
    login: '5555',

},
{
    id: 3,
    fullName: 'jonson Olimov',
    coin: 22,
    teacher: 'Emirhan',
    daraja: "⭐⭐⭐⭐",
    exp: 10,
    password: '456',
    login: '456',

},
{
    id: 4,
    fullName: 'Ruhsor Zugushonka',
    coin: 222,
    teacher: 'Jons Sins',
    daraja: "⭐",
    exp: 1000,
    password: '478',
    login: '478',

}
]


btn.addEventListener('click', () => {

    users.filter(user => {
        if (loginInput.value === user.login && passwordInput.value === user.password) {
            localStorage.setItem('oquvchilar', JSON.stringify(user))
            window.location.href = "../about.html"
        } else {
            errorsms.textContent = "Bunday acaunt mavjud emas"
            errorsms.style.color = 'red'
            errorsms.style.fontSize = '20px'
            setTimeout(() => {
                errorsms.textContent = ""
            }, 2000)
            console.log('false nosave');
        }
    })
})

function toggleSwitchcase() {
    let newLogininput = loginInput.value;
    let newpaswodinput = passwordInput.value;
    if (newLogininput && newpaswodinput) {
        btn.style.backgroundColor = 'orange';
        btn.disabled = false;
        btn.style.opacity = '1'
    } else {
        btn.style.backgroundColor = 'orange';
        btn.style.opacity = '0.4'
        btn.disabled = true;
    }
}

loginInput.addEventListener('input', toggleSwitchcase);
passwordInput.addEventListener('input', toggleSwitchcase);


