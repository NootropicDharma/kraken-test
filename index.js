const canvas = document.getElementById('game')
const ctx = canvas.getContext("2d")


// rectangulo 

ctx.fillStyle = "purple"

// fillRect(x en que punto del cambas voy a estar trabajando, y en  que punto se va a ibicar, ancho , altura)
ctx.fillRect(260, 260, 30, 30)

ctx.fillStyle = "green"
ctx.fillRect(25,25,100,100)
ctx.clearRect(45,45,60,60)
//limpia canvas
ctx.strokeRect(50,50,50,50)

// paths caminos de dibujo
//en donde empezar a dibujar en donde acabar de dibujar 

ctx.beginPath()
    ctx.moveTo(450,150)//inicion de posicion
    ctx.lineTo(450,50)//fin de posicion
    ctx.stroke()//ejecucion de pintado
ctx.closePath()