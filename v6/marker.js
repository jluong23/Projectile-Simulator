    function Marker(){

        this.drawMarker = function(projectile,isMaxima){
            ctx2.beginPath();
            ctx2.arc(projectile.x+25,projectile.y+25,5, 0, 2*Math.PI);
            isMaxima ? ctx2.strokeStyle = "green":  ctx2.strokeStyle = "black";
            ctx2.stroke();
        }

        this.addMarker = function(projectile){
            markerVals = {
                x:Math.round(projectile.x),
                // y: Math.round(450-projectile.y),
                yCanvas : projectile.y, //y position of projectile on canvas
                yVal: Math.round(450-projectile.y), //actual y displacement from origin
                //Multiply rounded value by 10 and divide result by 10 for rounding to 1dp
                time:Math.round(currTime*10) / 10,
                vx:Math.round(projectile.vx*10)/10,
                vy:Math.round(projectile.vy*10)/10,
                v:Math.round(projectile.v*10)/10,
            }
            //push the markerValues to allMarkers and projectile's array of markers
            projectile.markers.push(markerVals);
            allMarkers.push(markerVals);
        }
    }
