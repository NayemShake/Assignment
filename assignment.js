//feet to mile
function feetTomile(feet){
    var mile=feet/5280;
    return mile;
  }


//woodcalculator
function woodCalculator(chair, table, khat){ 
    var chairAmount = chair*1;
    var tableAmount = table*3;
    var khatAmount = khat*5;
    var totalWood = chairAmount+tableAmount+khatAmount;
    return totalWood; 
}

//brickcalculator
function brickCalculator(total_height,prev_height, num_of_bricks, floorNumber){
    if(floorNumber<=10){
        total_height = floorNumber*15;
        num_of_bricks = total_height*1000;
    }
    else if(floorNumber<=20){
        prev_height = 10*15;
        total_height = prev_height + (floorNumber-10)*12;
        num_of_bricks = total_height*1000;
    }
    else{
        prev_height = 10*15 + 10*12;
        total_height = prev_height + (floorNumber-20)*10;
        num_of_bricks = total_height*1000;
    }
    return num_of_bricks;
}

//tinyfriend

function tinyFriend(name){
    for(var i = 0; i<tinyFriend.length; i++){
        if(max_value>tinyFriend[i].length){
            max_value=tinyFriend[i].length;
            ans=tinyFriend[i];
        }
    }
    return ans;
}