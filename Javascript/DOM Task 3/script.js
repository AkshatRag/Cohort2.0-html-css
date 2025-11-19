var main = document.querySelector('main')
var btn = document.querySelector('button')
var arr = ['Hey! I am Sarthak','Sheryians is Best.','Anubhav is handsome','harsh bhaiya is great.','JS is Love','Keep practicing guys...']

btn.addEventListener('click',function(){    

    var h1 = document.createElement('h1')
    
    var x = Math.random()*80
    var y = Math.random()*80
    var rot = Math.random()*360
    var scl = Math.random()*3
    var a = Math.floor(Math.random()*arr.length)

    // Random RGB color (0–255)
    var r = Math.floor(Math.random()*256)
    var g = Math.floor(Math.random()*256)
    var b = Math.floor(Math.random()*256)

    h1.innerHTML = arr[a]
    h1.style.position = 'absolute'
    h1.style.left = x+'%'
    h1.style.top = y+'%'
    h1.style.rotate = rot+'deg'
    h1.style.scale = scl

    // 🔥 Apply random color
    h1.style.color = `rgb(${r}, ${g}, ${b})`

    main.appendChild(h1)
})
