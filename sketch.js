var shootSound;
var title;
var levelOneMusic;
var levelTwoMusic;
var levelThreeMusic;
var winMusic;
var loseMusic;
var enemyDeath;
var enemyDamage;
var heroDamage;
var heroDeath;

var HeroIdle;

//Hero Idle animation frames
var heroIdleAnimation;
var heroIdleFrames = [
    {'name':'Hero_Idle01','frame':{'x':0,'y':0,'width':256,'height':256}},
    {'name':'Hero_Idle02','frame':{'x':256,'y':0,'width':256,'height':256}},
    {'name':'Hero_Idle03','frame':{'x':512,'y':0,'width':256,'height':256}},
    {'name':'Hero_Idle04','frame':{'x':768,'y':0,'width':256,'height':256}},
    {'name':'Hero_Idle05','frame':{'x':1024,'y':0,'width':256,'height':256}},
    {'name':'Hero_Idle06','frame':{'x':1280,'y':0,'width':256,'height':256}},
    {'name':'Hero_Idle07','frame':{'x':1536,'y':0,'width':256,'height':256}},
    {'name':'Hero_Idle08','frame':{'x':1792,'y':0,'width':256,'height':256}}
  ];
  
var HeroLeft;

//Hero Left animation frames
var heroLeftAnimation;
var heroLeftFrames = [
    {'name':'Hero_Left01','frame':{'x':0,'y':256,'width':256,'height':256}},
    {'name':'Hero_Left02','frame':{'x':256,'y':256,'width':256,'height':256}},
    {'name':'Hero_Left03','frame':{'x':512,'y':256,'width':256,'height':256}},
    {'name':'Hero_Left04','frame':{'x':768,'y':256,'width':256,'height':256}},
    {'name':'Hero_Left05','frame':{'x':1024,'y':256,'width':256,'height':256}},
    {'name':'Hero_Left06','frame':{'x':1280,'y':256,'width':256,'height':256}}
  ];
  
var HeroRight;

var heroRightAnimation;
var heroRightFrames = [
    {'name':'Hero_Right01','frame':{'x':1536,'y':256,'width':256,'height':256}},
    {'name':'Hero_Right02','frame':{'x':1792,'y':256,'width':256,'height':256}},
    {'name':'Hero_Right03','frame':{'x':0,'y':512,'width':256,'height':256}},
    {'name':'Hero_Right04','frame':{'x':256,'y':512,'width':256,'height':256}},
    {'name':'Hero_Right05','frame':{'x':512,'y':512,'width':256,'height':256}},
    {'name':'Hero_Right06','frame':{'x':768,'y':512,'width':256,'height':256}},
    {'name':'Hero_Right07','frame':{'x':1024,'y':512,'width':256,'height':256}},
    {'name':'Hero_Right08','frame':{'x':1280,'y':512,'width':256,'height':256}},
    {'name':'Hero_Right09','frame':{'x':1536,'y':512,'width':256,'height':256}}
  ];
  
var greenEnemy;

var greenEnemyAnimation;
var greenEnemyFrames = [
    {'name':'Green01','frame':{'x':1792,'y':512,'width':256,'height':256}},
    {'name':'Green02','frame':{'x':0,'y':768,'width':256,'height':256}},
    {'name':'Green03','frame':{'x':256,'y':768,'width':256,'height':256}},
    {'name':'Green04','frame':{'x':512,'y':768,'width':256,'height':256}},
    {'name':'Green05','frame':{'x':768,'y':768,'width':256,'height':256}}
  ];
  
var blueEnemy;

var blueEnemyAnimation;
var blueEnemyFrames = [
    {'name':'Blue01','frame':{'x':1024,'y':768,'width':256,'height':256}},
    {'name':'Blue02','frame':{'x':1280,'y':768,'width':256,'height':256}},
    {'name':'Blue03','frame':{'x':1536,'y':768,'width':256,'height':256}},
    {'name':'Blue04','frame':{'x':1792,'y':768,'width':256,'height':256}}
    
  ];
  
var orangeEnemy;

var orangeEnemyAnimation;
var orangeEnemyFrames = [
  {'name':'Orange01','frame':{'x':0,'y':1024,'width':256,'height':256}},
  {'name':'Orange02','frame':{'x':256,'y':1024,'width':256,'height':256}},
  {'name':'Orange03','frame':{'x':512,'y':1024,'width':256,'height':256}},
  {'name':'Orange04','frame':{'x':768,'y':1024,'width':256,'height':256}}
  ];

var canvasMultiplier = 40;

//declare the hero!
var hero;

//make an enemy every so many frames
var enemyRate1 = 60;
var enemyRate2 = 50;
var enemyRate3 = 45;

var bubbleRate = 35;

var heroSpeed = 8;
var explosionDensity = 20;
var score = 0;
var gameState = 'startUp';
var heroHealth = 5;



//declare sprite groups
var bullets;
var enemies;
var bubbles;

var enemyAngle = 30
var enemyDrunkness = 50;

//declare enemy sprite images
var enemyOneImg,enemyTwoImg,enemyThreeImg;

//Background Images
var bg_level1;


//Cout down timer 
var count1Downtimer = 0;
var count2Downtimer = 0;
var count3Downtimer = 0;

var level1ScoreAdvance = 5;
var level2ScoreAdvance = 10;
var level3ScoreAdvance = 15;

//use preload to load any media before application starts
function preload(){
 
 //Hero Animation 
  HeroIdle = loadSpriteSheet('assets/SpriteSheetHero.png',heroIdleFrames);
  heroIdleAnimation = loadAnimation(HeroIdle);
  HeroLeft = loadSpriteSheet('assets/SpriteSheetHero.png',heroLeftFrames);
  heroLeftAnimation = loadAnimation(HeroLeft);
  HeroRight = loadSpriteSheet('assets/SpriteSheetHero.png',heroRightFrames);
  HeroRightAnimation = loadAnimation(HeroRight);
  
//Green, Blue and Orange Enemy Animation
  greenEnemy = loadSpriteSheet('assets/SpriteSheetHero.png',greenEnemyFrames);
  greenEnemyAnimation = loadAnimation(greenEnemy);
  blueEnemy = loadSpriteSheet('assets/SpriteSheetHero.png',blueEnemyFrames);
  blueEnemyAnimation = loadAnimation(blueEnemy);
  orangeEnemy = loadSpriteSheet('assets/SpriteSheetHero.png',orangeEnemyFrames);
  orangeEnemyAnimation = loadAnimation(orangeEnemy);
  
  //loading the titlescreen and level screens
  titleScreen = loadImage("assets/TitleSceen.png");
  levelOneLoad = loadImage('assets/LevelOneStartScreen.png');
  levelTwoLoad = loadImage("assets/LevelTwoStartScreen.png");
  levelThreeLoad = loadImage("assets/LevelThreeStartScreen.png");
  
  //Loading the background images
  bg_level1 = loadImage("assets/BackgroundOne.png");
  bg_level2 = loadImage("assets/Background_Two.png");
  bg_level3 = loadImage("assets/Background_Three.png");
  
  //Loading Enemy Images
  enemyOneImg = loadImage('assets/GreenEnemy.png');
  enemyTwoImg = loadImage('assets/BlueEnemy.png');
  enemyThreeImg = loadImage('assets/Third_Enemy.png');
  
  //Title screen bubble
  bubbleImg = loadImage('assets/Bubble.png');
  
  //Bullet image
  bulletImg = loadImage('assets/Bullet.png');
  
  //bullet sound
  shootSound = loadSound('assets/magic.mp3')
  
  //music
  title = loadSound('assets/TitleScreenMusic.mp3');
  levelOneMusic = loadSound('assets/LevelOneMusic.mp3');
  levelTwoMusic = loadSound('assets/LevelTwoMusic.mp3');
  levelThreeMusic = loadSound('assets/LevelThreeMusic.mp3');
  winMusic = loadSound('assets/YouWinMusic.mp3');
  loseMusic = loadSound('assets/DeathScreenMusic.mp3');
  
  //sounds!!!
  enemyDeath = loadSound('assets/EnemyDeath.mp3');
  enemyDamage = loadSound('assets/EnemyHit.mp3');
  heroDamage = loadSound('assets/HeroHit.mp3');
  heroDeath = loadSound('assets/HeroDeath.mp3');
  
  //Load Win Screen
  winImg = loadImage('assets/YouWin.png');
  loseImg = loadImage('assets/YouLose.png');
  
  
  //Enemy animations
 /* greenEnemy = loadAnimation("assets/GreenEnemy_00000.png","assets/GreenEnemy_00010.png");
  blueEnemy = loadAnimation("assets/BlueEnemy_00000.png","assets/BlueEnemy_00010.png");
  orangeEnemy = loadAnimation("assets/OrangeEnemy_00000.png","assets/OrangeEnemy_00010.png");
  //Hero animations
  /*heroIdle = loadAnimation("assets/Hero_00000.png","assets/Hero_00007.png");
  heroLeft = loadAnimation("assets/HeroLeft_00000.png","assets/HeroLeft_00007.png");
  heroRight = loadAnimation("assets/HeroRight_00000.png","assets/HeroRight_00007.png");*/
  
  //Making sure the left and right animations stop
  /*heroLeft.looping = false;
  heroRight.looping = false;*/

}

function setup() {
  
  var tempWidth = canvasMultiplier * 9;
  var tempHeight = canvasMultiplier * 16;
  
  
  createCanvas(tempWidth,tempHeight);
  title.loop();
  
  //initialize bullets as a group
  bullets = new Group();
  enemies = new Group();
  bubbles = new Group();
  
  var heroImg = loadImage("assets/Hero.png");
  
  
  
  //define the hero sprite
  hero = createSprite(width/2,height*.9);
  hero.scale = .3;
  
  
  hero.addAnimation('idle',HeroIdle);
  hero.addAnimation('left',HeroLeft);
  hero.addAnimation('right',HeroRight);
  

  //give the sprite some friction
  hero.friction = 0.8;
  //In comes the hero!
 //adding animations to the hero
  //hero.addAnimation("heroIdle",heroIdle);
  //hero.addAnimation("heroLeft",heroLeft);
  //hero.addAnimation("heroRight",heroRight);
  //hero.changeAnimation("heroIdle");

  
}

function draw(){

  //hero.changeAnimation('idle',HeroIdle);
  
  switch(gameState){
    case 'startUp':
      
    //draw background here
    background(titleScreen);
    if(frameCount%bubbleRate === 0){
  //make an enemy at the top, random X position
    var bubble = createSprite(random(width),height,30,30);
      //set speed and direction of enemy
      bubble.setSpeed(5,270);
      //make the enemy disapear after x amout of frames
      bubble.life = 400;
      //make the enemies the standard color
      bubble.shapeColor = 'orange';
      //adding the image that was added in the preload
      bubble.addImage(bubbleImg);
      //adding bubble to the group bubbles
      bubbles.add(bubble);
  }
  
  
  //make the bubbles drunk!
   for(var i = 0;i < bubbles.length;i++){
     if(random(100) > enemyDrunkness){
      bubbles[i].velocity.x += random(-2,2);
     }
     
    if(bubbles[i].position.x > width || bubbles[i].position.x < 0){
      bubbles[i].velocity.x *= -1;
    }
  }
  //only draws the bubbles
  drawSprites(bubbles);
  
    break;
    
    case 'lose':
      levelOneMusic.stop();
      levelTwoMusic.stop();
      levelThreeMusic.stop();
      background(loseImg);
        //creating orange enemy
        if(frameCount%enemyRate2 === 0){
  //make an enemy at the top, random X position
    var enemy = createSprite(random(width),0,30,30);
      enemy.scale = .5;
      //set speed and direction of enemy
      enemy.setSpeed(8,random(30 - enemyAngle, 100 + enemyAngle));
      //make the enemy disapear after x amout of frames
      enemy.life = 400;
      //make the enemy stronger
      enemy.type = 2;
      //adding enemy to the group enemies
      enemies.add(enemy);
      //adding animation to enemy
      enemy.addAnimation("orangeEnemy",orangeEnemy);
  }
    //creating green enemy
    if(frameCount%enemyRate2 === 0){
  //make an enemy at the top, random X position
    var enemy = createSprite(random(width),0,30,30);
      enemy.scale = .5;
      //set speed and direction of enemy
      enemy.setSpeed(8,random(30 - enemyAngle, 100 + enemyAngle));
      //make the enemy disapear after x amout of frames
      enemy.life = 400;
      //make the enemy stronger
      enemy.type = 2;
      //adding enemy to the group enemies
      enemies.add(enemy);
      //adding animation to enemy
      enemy.addAnimation("greenEnemy",greenEnemy);
      
}
        //creating blue enemy
    if(frameCount%enemyRate2 === 0){
  //make an enemy at the top, random X position
    var enemy = createSprite(random(width),0,30,30);
      enemy.scale = .5;
      //set speed and direction of enemy
      enemy.setSpeed(8,random(30 - enemyAngle, 100 + enemyAngle));
      //make the enemy disapear after x amout of frames
      enemy.life = 400;
      //make the enemy stronger
      enemy.type = 2;
      //adding enemy to the group enemies
      enemies.add(enemy);
      //adding animation to enemy
      enemy.addAnimation("blueEnemy",blueEnemy);
      
}
    
  //Bouncing!
  for(var i = 0;i < enemies.length;i++){
    if(enemies[i].position.x > width || enemies[i].position.x < 0){
      enemies[i].velocity.x *= -1;
    }
  }
  drawSprites(enemies);
      break;
      
      case 'win':
        background(winImg);
        levelThreeMusic.stop();
        break;
        
    case 'level_One':
      level_One();
      break;
      
      case 'countDown1':
      background(levelOneLoad);
      textSize(32);
      //only runs the first time through the coutdown
      if(count1Downtimer === 0){
        count1Downtimer = frameCount;
      }
      var flooredCount = floor((frameCount - count1Downtimer)/50);
      //this runs every time
      if((3 - flooredCount) <= 0){
        text("GO!",width/2,400);
      }else{
        text(3 - flooredCount,width/2,400);
      }
      
      if(frameCount%enemyRate2 === 0){
  //make an enemy at the top, random X position
    var enemy = createSprite(random(width),height,30,30);
      enemy.scale = .5;
      //set speed and direction of enemy
      enemy.setSpeed(5,270);
      //make the enemy disapear after x amout of frames
      enemy.life = 400;
      //make the enemies the standard color
      enemy.shapeColor = 'orange';
      //adding the image that was added in the preload
      //enemy.addImage(enemyTwoImg);
      enemy.addAnimation("greenEnemy",greenEnemy);
      //adding enemy to the group enemies
      enemies.add(enemy);
  }
  
  //make the enemies drunk!
   for(var i = 0;i < enemies.length;i++){
     if(random(100) > enemyDrunkness){
       enemies[i].velocity.x += random(-2,2);
     }
     
    if(enemies[i].position.x > width || enemies[i].position.x < 0){
      enemies[i].velocity.x *= -1;
    }
  }
  
  
  drawSprites(enemies);
  
  if(flooredCount > 3){
        gameState = "level_One";
      }  
      break;
    
    
    case 'level_Two':
      level_Two();
      break;
    
    case 'countDown2':
      background(levelTwoLoad);
      levelOneMusic.stop();
      textSize(32);
      //only runs the first time through the coutdown
      if(count2Downtimer === 0){
        count2Downtimer = frameCount;
      }
      var flooredCount = floor((frameCount - count2Downtimer)/50);
      //this runs every time
      if((3 - flooredCount) <= 0){
        text("GO!",width/2,400);
      }else{
        text(3 - flooredCount,width/2,400);
      }
      
      if(frameCount%enemyRate2 === 0){
  //make an enemy at the top, random X position
    var enemy = createSprite(random(width),height,30,30);
      enemy.scale = .5;
      //set speed and direction of enemy
      enemy.setSpeed(5,270);
      //make the enemy disapear after x amout of frames
      enemy.life = 400;
      //make the enemies the standard color
      enemy.shapeColor = 'orange';
      //adding the image that was added in the preload
      //enemy.addImage(enemyTwoImg);
       enemy.addAnimation("blueEnemy",blueEnemy);
      //adding enemy to the group enemies
      enemies.add(enemy);
  }
  
  //make the enemies drunk!
   for(var i = 0;i < enemies.length;i++){
     if(random(100) > enemyDrunkness){
       enemies[i].velocity.x += random(-2,2);
     }
     
    if(enemies[i].position.x > width || enemies[i].position.x < 0){
      enemies[i].velocity.x *= -1;
    }
  }
  
  
  drawSprites(enemies);    
      
      //advance to level 2
      if(flooredCount > 3){
        gameState = "level_Two";
      }  
      break;
      
      
    case 'level_Three':
      level_Three();
      break;
      
      case 'countDown3':
      background(levelThreeLoad);
      levelTwoMusic.stop();
      textSize(32);
      //only runs the first time through the coutdown
      if(count3Downtimer === 0){
        count3Downtimer = frameCount;
      }
      var flooredCount = floor((frameCount - count3Downtimer)/50);
      //this runs every time
      textAlign(CENTER);
      textSize(32);
      if((3 - flooredCount) <= 0){
        
        text("GO!",width/2,400);
      }else{
        text(3 - flooredCount,width/2,400);
      }
      
      if(frameCount%enemyRate2 === 0){
  //make an enemy at the top, random X position
    var enemy = createSprite(random(width),height,30,30);
      enemy.scale = .5;
      //set speed and direction of enemy
      enemy.setSpeed(5,270);
      //make the enemy disapear after x amout of frames
      enemy.life = 400;
      //make the enemies the standard color
      enemy.shapeColor = 'orange';
      //adding the image that was added in the preload
      //enemy.addImage(enemyTwoImg);
       enemy.addAnimation("orangeEnemy",orangeEnemy);
      //adding enemy to the group enemies
      enemies.add(enemy);
  }
  
  //make the enemies drunk!
   for(var i = 0;i < enemies.length;i++){
     if(random(100) > enemyDrunkness){
       enemies[i].velocity.x += random(-2,2);
     }
     
    if(enemies[i].position.x > width || enemies[i].position.x < 0){
      enemies[i].velocity.x *= -1;
    }
  }
      
drawSprites(enemies);
      
      //advance to level 3
      if(flooredCount > 3){
        gameState = "level_Three";
      }  
      break;
      
}
}


function keyPressed(){
  
  if (keyCode == RIGHT_ARROW) {
    //provide a burst of speed the right (180 derees)
    hero.setSpeed(heroSpeed,0);
    //start right turn animation
    hero.changeAnimation("right");
    //start at the beginning
    hero.animation.changeFrame(0);
  } else if (keyCode == LEFT_ARROW) {
    //provide a brust of speed to the left (0 degrees)
    hero.setSpeed(heroSpeed,180);
    //start the left turn animation
    hero.changeAnimation("left");
    //start at the beginnning
    hero.animation.changeFrame(0);
  } else if(key == ' '){
    
    //for the shooty sound
    shootSound.play();
    
    //create bullet
      var bullet = createSprite(hero.position.x,hero.position.y,5,5);
      //set speed and direction of bullet
      bullet.setSpeed(20,270);
      //mkae the bullet disapear after x amout of frames
      bullet.life = 30;
      bullet.addImage(bulletImg);
      //adding bullet to the group bullets
      bullets.add(bullet);}
}
    
function keyTyped(){
    if(key === 'x'){
      gameState = 'countDown1';
      title.stop();
       levelOneMusic.loop();
       
  }
}