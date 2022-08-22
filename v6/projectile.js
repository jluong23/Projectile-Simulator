function Projectile(){
    this.ux = 0; this.uy = 0;
    this.vx = 0; this.vy = 0; this.v = 0;
    this.x = 0; this.y = 0;
    this.a = 0;
    this.h = 0;
    this.markers = [];
    this.maximaReached = false;
    this.markerLoopCalled = false;

    this.setVariables = function(){
        //Function which sets the values of the projectile's attributes to the values of the html slider values.
        v = {};
        $('.input-range').each(function() {
            v[$(this).attr("name")] = parseFloat(this.value);
        });
        this.ux  = v.ux;
        this.uy = v.uy;
        this.a = v.a;
        this.h = v.h;
        this.x = 0;
        this.y = 450-this.h;
        this.vx = this.ux;
        this.vy = this.uy;
        this.v = Math.sqrt(this.vx*this.vx + this.vy*this.vy)
    }

    this.drawProjectile = function(){
        /*Function which is repeatedly called by moveProjectile(), clearing the screen and
        redrawing the object on the canvas.
        */
        ctx.beginPath(); //Required to draw path
        ctx.clearRect(0, 0, canvas.width, canvas.height); //Clear the projectile screen
        ctx.drawImage(projectileObject,this.x,this.y,50,50);
        ctx.fill();
    }

    this.moveProjectile = function(){
        //Function that changes the velocity of the projectile which in turn changes the displacement of the projectile.
        this.v = Math.sqrt(this.vx*this.vx + this.vy*this.vy) //Calculate previous final resultant velocity
        this.vy+=this.a*dt; // velocity in y direction
        this.y-=this.vy*dt; //y displacement decreases as the origin of flight path is defined at (0,500)
        this.x+=this.vx*dt;
        this.drawProjectile();
    }

    this.drawTrail = function(){
        ctx2.beginPath();
        ctx2.arc(this.x+25,this.y+25,1, 0, 2*Math.PI);
        ctx2.fillStyle = "blue";
        ctx2.fill();
    }
    this.clearTrail = function(){
        ctx2.clearRect(0, 0, canvas.width, canvas.height); //Clear the trail canvas
    }

    this.calculateTime = function(){
        //Function which returns calculated by hand time of projectile flight

        // Terms in ax^2+bx+c = 0
        A = this.a;
        B = this.uy;
        C = this.h;

        t = (-B-Math.sqrt(B*B - 4*A*C))/(2*A);
        if(this.uy == 0 && this.a == 0){
            return(-Infinity)
        }
        else{
            return Math.round(10*t)/10 //multiply rounded value by 10 and divide by 10 for 1dp rounding.
        }
    }

    this.explode = function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height); //Clear the projectile canvas
        ctx2.drawImage(projectileExplosion,this.x,this.y-50,100,100) //Draw explosion on trail canvas
    }
}
