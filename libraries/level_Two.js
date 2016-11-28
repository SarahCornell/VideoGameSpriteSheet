function level_Two(){
  //setup the enemy to be created every 30 frames
  if(frameCount%enemyRate2 === 0){
  //make an enemy at the top, random X position
    var enemy = createSprite(random(width),0,30,30);
      enemy.scale = .5;
      //set speed and direction of enemy
      enemy.setSpeed(5,90);
      //make the enemy disapear after x amout of frames
      enemy.life = 400;
      //enemy health slot
      enemy.type = 2;
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
  
  
  //change in backgound color
  background (bg_level2);

  //test for overlap
  enemies.overlap(bullets,enemyHit);
  //did the enemy hit the hero?
  enemies.overlap(hero,heroHit);
  
  textSize(32);
  //score on screen
  text(+score,100,90);
  //health on screen
  text(+heroHealth,130,50);
  
  
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