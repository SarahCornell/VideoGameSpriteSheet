function level_One(){
//setup the enemy to be created every 30 frames
  if(frameCount%enemyRate1 === 0){
  //make an enemy at the top, random X position
    var enemy = createSprite(random(width),0,30,30);
    enemy.scale = .5;
      //set speed and direction of enemy
      enemy.setSpeed(4,random(90 - enemyAngle, 90 + enemyAngle));
      //make the enemy disapear after x amout of frames
      enemy.life = 350;
      //health slot
      enemy.type = 0;
      //adding the image that was added in the preload
      //enemy.addImage(enemyOneImg);
      
      //Prepare for battle!
      //add animation to enemy
      enemy.addAnimation("greenEnemy",greenEnemy);
      
  
      //adding enemy to the group enemies
      enemies.add(enemy);
  }
  
 //Wrapping!
  for(var i = 0;i < enemies.length;i++){
    if(enemies[i].position.x > width){
      enemies[i].position.x = 0;
    }
    if (enemies[i].position.x < 0){
      enemies[i].position.x = width;
    }
  }
  
  
  background (bg_level1);

  //test for overlap
  enemies.overlap(bullets,enemyHit);
  //did the enemy hit the hero?
  enemies.overlap(hero,heroHit);
  
  textSize(32);
  //score on screen
  text(+score,110,100);
  //health on screen
  text(+heroHealth,130,55);
  
 //are we turning left?
 //are we done turning left?
 if(hero.getAnimationLabel() == "left" && hero.animation.getFrame() === hero.animation.getLastFrame()){
    hero.changeAnimation("idle");
    //start at the beginning
    hero.animation.changeFrame(0);
  }
  //are we turning right?
  //are we done turning right?
   if(hero.getAnimationLabel() == "right" && hero.animation.getFrame() === hero.animation.getLastFrame()){
    hero.changeAnimation("idle");
    //start at the beginning
    hero.animation.changeFrame(0);
  }
 
  
  drawSprites();
}