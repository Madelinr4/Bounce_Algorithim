function bouncy(object1, object2){
    if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
      object2.x - object1.x < object2.width/2 + object1.width/2){
        object1.velocityX = object1.velocityX *(-1);
        object2.veloctiyX = object2.veloctiyX *(-1); 
      }
      if(object1.y - object2.y < object1.height/2 + object2.height/2 &&
        object2.y - object1.y < object2.height/2 + object1.height/2){
          object1.velocityY = object1.velocityY *(-1);
          object2.velocityY = object2.velocityY *(-1);
        }
  
  }

  function collide(object1, object2){
    if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
      object2.x - object1.x < object2.width/2 + object1.width/2 &&
      object1.y - object2.y < object1.height/2 + object2.height/2 &&
      object2.y - object1.y < object2.height/2 + object1.height/2){
      return true;  
    }
    else{
      return false;
    }
  }