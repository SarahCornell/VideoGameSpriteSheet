function level_Three(){
  //setup the enemy to be created every 30 frames
  if(frameCount%enemyRate3 === 0){
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
  
  //Bouncing!
  for(var i = 0;i < enemies.length;i++){
    if(enemies[i].position.x > width || enemies[i].position.x < 0){
      enemies[i].velocity.x *= -1;
    }
  }

  background (bg_level3);

  //test for overlap
  enemies.overlap(bullets,enemyHit);
  //did the enemy hit the hero?
  enemies.overlap(hero,heroHit);
  
  textSize(32);
  //score on screen
  text(+score,90,90);
  //health on screen
  text(+heroHealth,120,50);
  
  
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
