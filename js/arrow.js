class Arrow{
	constructor(){
		this.x=0;		//初始位置
		this.y=0;
		this.rotation=0;		//初始旋转角度
		this.color="#ffff00";
	}
	
	draw(context){
		context.save();
		context.translate(this.x,this.y);
		context.rotate(this.rotation);
		context.lineWidth=5;
		context.fillStyle=this.color;
		
		context.beginPath();
		context.moveTo(-50,-25);
		context.lineTo(0,-25);
		context.lineTo(0,-50);
		context.lineTo(50,0);
		context.lineTo(0,50);
		context.lineTo(0,25);
		context.lineTo(-50,25);
		context.closePath();//路径闭合
		context.stroke();//描边
		context.fill();//填充
		context.restore();
		
	}
}

