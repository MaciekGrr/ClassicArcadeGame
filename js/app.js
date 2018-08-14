// Enemies our player must avoid
/* Setting the Enemy initial location (you need to implement)
Setting the Enemy speed (you need to implement)
The update method for the Enemy
Updates the Enemy location (you need to implement)
Handles collision with the Player (you need to implement)
*/
// var Enemy = function() {
// Variables applied to each of our instances go here,
// we've provided one for you to get started
// The image/sprite for our enemies, this uses
// a helper we've provided to easily load images

class Enemy {

    constructor(x, y, speed) {

    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.width = 100;
    this.height = 30;
    }

    update(dt) { // Parameter: dt, a time delta between ticks 
     // Update the enemy's position, required method for game
    if (this.x <= 504) 
        {this.x = this.x + dt*this.speed;}
    else {
       this.x = -100;
    }

if (this.x < player.x + player.width &&  // MDN documentation 2D collisions function
   this.x + this.width > player.x &&
   this.y < player.y + player.height &&
   this.height + this.y > player.y) {                        
        player.x= 200;
        player.y= 400;
        gg.classList.remove("none");
        myCanvas.classList.add("none"); 
        document.querySelector(".mid").innerHTML = 'You are dead!';
        }
    }

// Enemy.prototype.update = function(dt) {};
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player {

    constructor(x, y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
    this.width = 90;
    this.height = 30;
    }

        update(x,y) {
            if (this.x >= 401) {  // this if blocks from the left side
            this.x = 400;
            }

            if (this.x <= 0) {   // this if blocks from the right side
            this.x = 1;
            }

            if (this.y >= 401) { // this if blocks from the bottom side
            this.y = 400;
            }

            if (this.y <= -16) { // this if blocks from the top side
            this.y = -15;
            }

            if (this.y <= 67) { // this if blocks from the top side
            gg.classList.remove("none");
            myCanvas.classList.add("none"); 
            player.x= 200;
            player.y= 400;
            document.querySelector(".mid").innerHTML = 'Congratulation you won!';
            }

        }
    

    

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    handleInput(oneStep) {    // the keyCode name = oneStep value will be the input
        switch (oneStep) {
            case 'right':    
            this.update(this.x += 100);
            break;
            case 'left':
            this.update(this.x -= 100);
            break; 
            case 'up':
            this.update(this.y -= 83)
            break;
            case 'down':
            this.update(this.y += 83)
            break;
        }
         
    }
};


const allEnemies = [];                    // Place all enemy objects in an array called allEnemies
let firstEnemy = new Enemy(60, 60, 20);
allEnemies.push(firstEnemy);
let firEnemy = new Enemy(10, 60, 60);   // One y step = 83
allEnemies.push(firEnemy);
let secEnemy = new Enemy(30, 143, 60);
allEnemies.push(secEnemy);
let thirdEnemy = new Enemy(1, 226, 60);
allEnemies.push(thirdEnemy);
let player = new Player(200, 400); // Place the player object in a variable called player


function restart() { 
gg.classList.add("none");
myCanvas.classList.remove("none"); 
};


// Draw the enemy on the screen, required method for game
// Now instantiate your objects.

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]); // w oryginale: (player.handleInput(allowedKeys[e.keyCode]); )
}
);

