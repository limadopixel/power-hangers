var canvas = new fabric.Canvas('myCanvas')
// Create canvas variable
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(getImage)
{
	fabric.image.fronURL(get_image,function(img)){
		blockImageObject.scaletoheight(block_Image_Height);
		blockImageObject.scaletowidth(block_Image_Width);
		blockImageObject.set({
			top:block_y
			top:block_X
		})
	}
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
	
	if(keyPressed == '82')
	{
		// enviar ranger escarlate
		new_Image('rr1.png')
		code.log("r")
	}
	if(keyPressed == '86')
	{
		blockX = 200;
		// enviar ranger verde
		new_Image('gr.png')
		code.log("?")
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		// enviar ranger amarelo
		new_Image('ir.png')
		code.log("?")
	}
	if(keyPressed == '82')
	{
		blockX = 600;
		// enviar ranger rosa
		new_Image('pr.png')
		code.log("?")
	}
	if(keyPressed == '73')
	{
		blockX = 700;
	// enviar ranger índigo
	new_Image('br.png')
		code.log("?")
	}
	
}
//sei que ta errado mas segui o negocio.(obs:nao sei as letras)
