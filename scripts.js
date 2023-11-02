const theButton = document.querySelector('button')
const castDie = document.querySelector('.content-wrapper>.die')
const dice = document.querySelectorAll('.dice>.die')
const throwCounter = document.querySelector('h2')

let throws = 0

const gameState = {
    _1: false,
    _2: false,
    _3: false,
    _4: false,
    _5: false,
    _6: false
}

const dieFaces = ['_1', '_2', '_3', '_4', '_5', '_6']

theButton.addEventListener('click', () => {
    if (gameState._6==false) {
        let cast = dieFaces[Math.floor(Math.random()*6)]
        castDie.className = ''
        castDie.classList.add('die')
        castDie.classList.add(cast)
        throws++
        throwCounter.innerText = `Kast: ${throws}`
        if (gameState._1==true) {
            if (gameState._2==true) {
                if (gameState._3==true) {
                    if (gameState._4==true) {
                        if (gameState._5==true) {
                            if (cast=='_6') {
                                gameState._6=true;
                                dice[5].classList.add('_6')
                            }
                        } else if (cast=='_5') {
                            gameState._5=true;
                            dice[4].classList.add('_5')
                        }
                    } else if (cast=='_4') {
                        gameState._4=true;
                        dice[3].classList.add('_4')
                    }
                } else if (cast=='_3') {
                    gameState._3=true;
                    dice[2].classList.add('_3')
                }
            } else if (cast=='_2') {
                gameState._2 = true;
                dice[1].classList.add('_2')
            }
        } else if (cast=='_1') {
            gameState._1 = true;
            dice[0].classList.add('_1')
        }
    }
})