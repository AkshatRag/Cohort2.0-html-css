var arr = [
    {
        team: 'CSK',
        primary: '#fff8e1',
        secondary: '#e8f1ff',
        fullName: 'Chennai Super Kings',
        trophies: 4,
        captain: 'MS Dhoni',
        logo: './logos/CSK.jpg'

    },
    {
        team: 'RCB',
        primary: '#fff0f0',
        secondary: '#f5f6f8',
        fullName: 'Royal Challengers Bangalore',
        trophies: 0,
        captain: 'Faf du Plessis',
        logo: './logos/RCB.jpg'
    },
    {
        team: 'MI',
        primary: '#eaf6ff',
        secondary: '#fff6d9',
        fullName: 'Mumbai Indians',
        trophies: 5,
        captain: 'Rohit Sharma',
        logo: './logos/MI.jpg'
    },
    {
        team: 'KKR',
        primary: '#f6eefb',
        secondary: '#fff7e0',
        fullName: 'Kolkata Knight Riders',
        trophies: 2,
        captain: 'Shreyas Iyer',
        logo: './logos/KKR.jpg'
    },
    {
        team: 'SRH',
        primary: '#fff6ea',
        secondary: '#f5f6f8',
        fullName: 'Sunrisers Hyderabad',
        trophies: 1,
        captain: 'Aiden Markram',
        logo: './logos/SRH.jpg'
    },
    {
        team: 'PBKS',
        primary: '#fff2f4',
        secondary: '#f3f5f7',
        fullName: 'Punjab Kings',
        trophies: 0,
        captain: 'Shikhar Dhawan',
        logo: './logos/KP.jpg'
    },
]


var btn = document.querySelector('button')
var h1 = document.querySelector('h1')
var main = document.querySelector('main')
var card = document.querySelector('.card')
var teamName = document.querySelector('.team-name')
var fullName = document.querySelector('.team-fullname')
var trophies = document.querySelector('.team-trophies')
var captain = document.querySelector('.team-captain')
var logo = document.querySelector('.team-logo')
var img = document.createElement('img')
img.classList.add('hidden')
img.alt = ''



btn.addEventListener('click',function(){

    var winner = arr[Math.floor(Math.random()*arr.length)]
    console.log(winner)

    main.style.backgroundColor = winner.primary
    card.style.backgroundColor = winner.secondary
    teamName.innerHTML = winner.team
    fullName.innerHTML = winner.fullName
    trophies.innerHTML = `Trophies Won: ${winner.trophies}`
    captain.innerHTML = `Captain: ${winner.captain}`   
    // animate logo: hide, set new src, then remove hidden on load to trigger CSS transition
    img.classList.add('hidden')
    img.alt = `${winner.fullName} logo`
    // replace any previous onload handler
    img.onload = function () {
        // when image is ready, remove the hidden class to fade/scale it in
        img.classList.remove('hidden')
    }
    img.src = winner.logo
    logo.innerHTML = ''
    logo.appendChild(img)
})