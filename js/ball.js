class Ball{
	constructor(radius,color){
		radius=radius||40;
		color=color||"#00ff00";
		
		this.x=0;
		this.y=0;
		this.vx=0;
		this.vy=0;
		this.radius=radius;
		this.rotation=0;
		this.mass=1;
		this.scaleX=1;
		this.scaleY=1;
		this.name="";
		this.color=color;//utils.parseColor(color);
		this.lineWidth=1;
	}
	
	draw(context){
		context.save();
		context.translate(this.x,this.y);
		context.rotate(this.rotation);
		context.scale(this.scaleX,this.scaleY);
		context.lineWidth=this.lineWidth;
		context.fillStyle=this.color;
		context.strokeStyle=this.color;
		context.beginPath();
		context.arc(0,0,this.radius,0,Math.PI*2,false);
		context.closePath();
		context.fill();
		context.stroke();
		context.restore();
	}
	
	getBounds(){
		return {
			x:this.x-this.radius,
			y:this.y-this.radius,
			width:this.radius*2,
			height:this.radius*2
		}
	}
	
}

