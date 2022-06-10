var imgs = [];
var avgImg;
var numOfImages = 30;
var img_arr = []
var firstImgIn

//////////////////////////////////////////////////////////
function preload() { // preload() runs once
    
    for(var i = 0; i < numOfImages; i++){
        var filename = "assets/" + String(i) + ".jpg"
        imgs[i] = filename

    }
    
//    firstImgIn = loadImage(imgs[0]);
    
    firstImgIn = loadImage(random_face());


    for(var i = 0; i < numOfImages; i++){

        img_arr[i] =  loadImage(imgs[i]);

    }
      
}
//////////////////////////////////////////////////////////
function setup() {

    createCanvas((firstImgIn.width * 2), firstImgIn.height);
    pixelDensity(1);

    avgImg  =  createGraphics(firstImgIn.width,firstImgIn.height)
    
}
//////////////////////////////////////////////////////////
function draw() {
    background(125);

 
    image(firstImgIn, 0, 0);
    
    avgImg.background(0,0,0); 
    avgImg.loadPixels();

    for(var j = 0; j < numOfImages; j++){

        img_arr[j].loadPixels();

    }
 
         for (var x=0; x < firstImgIn.width; x++){

                for (var y=0; y < firstImgIn.height; y++){

                    var index = ((y * firstImgIn.width)+ x ) * 4;

                    avgImg.pixels[index + 0] = 255;
                     var sumR = 0;
                     var sumG = 0;
                     var sumB = 0;

                    for(var k = 0; k < numOfImages; k++){
 
                        sumR = sumR + img_arr[k].pixels[index + 0]
                        sumG = sumG + img_arr[k].pixels[index + 1]
                        sumB = sumB + img_arr[k].pixels[index + 2] 
                    
                    }

                    avgImg.pixels[index + 0] = sumR/numOfImages;
                    avgImg.pixels[index + 1] = sumG/numOfImages;
                    avgImg.pixels[index + 2] = sumB/numOfImages;

                }
         }
  
        avgImg.updatePixels();
        image(avgImg, firstImgIn.width, 0);
    
    noLoop()
}


function random_face(){
    var filename = "assets/" + Math.floor(random(0,29)) .toString() + ".jpg"
    console.log(filename);
    return filename;

}


function keyPressed() {
    
    
//    background(125);
//    randomImgIn = loadImage(random_face());
//    image(randomImgIn,0,0); 
    
//    firstImgIn  =  createGraphics(firstImgIn.width,firstImgIn.height)
    firstImgIn = loadImage(random_face());

//    firstImgIn.loadPixels();
//    image(firstImgIn, 0, 0);

//    ran = loadImage(random_face());
//    ran.loadPixels();
//    
//             for (var x=0; x < firstImgIn.width; x++){
//
//                for (var y=0; y < firstImgIn.height; y++){
//
//                    var index = ((y * firstImgIn.width)+ x ) * 4;
//
//                    firstImgIn.pixels[index + 0] = ran.pixels[index + 0];
//                    firstImgIn.pixels[index + 1] = ran.pixels[index + 1];
//                    firstImgIn.pixels[index + 2] = ran.pixels[index + 2];
//                }
//             }
//        firstImgIn.updatePixels();
//        image(firstImgIn, 0, 0);
//     image(avgImg, firstImgIn.width, 0);
//    loop();
}


function mouseMoved(){
    
//    avgImg.loadPixels();
    
    random_pic = loadImage(random_face());
    random_pic = loadPixels();
    
    for (var x=0; x < firstImgIn.width; x++){

                for (var y=0; y < firstImgIn.height; y++){

                    var index = ((y * firstImgIn.width)+ x ) * 4;

                    avgImg.pixels[index + 0] = 255;

                    
                    random_pic.pixels[index + 0]
                    random_pic.pixels[index + 1]
                    random_pic.pixels[index + 2] 
                    


                    avgImg.pixels[index + 0] = sumR/numOfImages;
                    avgImg.pixels[index + 1] = sumG/numOfImages;
                    avgImg.pixels[index + 2] = sumB/numOfImages;

                }
         }
  
        avgImg.updatePixels();
        image(avgImg, firstImgIn.width, 0);
        
        lerp(a, b, 0.2)
}
