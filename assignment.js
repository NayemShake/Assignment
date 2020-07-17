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
function brickCalculator(floorNumber){
    if(floorNumber<=10){
        var total_height = floorNumber * 15;
        var num_of_bricks = total_height * 1000;
    }
    else if(floorNumber<=20){
        var prev_height = 10 * 15;
        var total_height = prev_height + (floorNumber-10)*12;
        var num_of_bricks = total_height * 1000;
    }
    else{
        var prev_height = (10 * 15) + (10 * 12);
        var total_height = prev_height + (floorNumber-20) * 10;
        var num_of_bricks = total_height * 1000;
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
