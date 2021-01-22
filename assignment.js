/**killometerToMeter*/
function kilometerToMeter(kilometer){
      let meter =kilometer*1000;
      if(meter<= -1){
          return "Measuring units can't be negative";
      }
      else if(meter==0){
          return 0;
      }
      else{
          return meter;
        }
}
let result=kilometerToMeter(5);
 console.log(result);








/**budgetCalculator*/ 
function budgetCalculator(clock,mobile,laptop){
    var total= clock*50 + mobile*100 + laptop*5000;
    if(clock<= -1 || mobile<= -1 || laptop<= -1){
        return "Quantity can't be negative";
    } 
    else{
        return total;
    }
}
let quantity = budgetCalculator(1,2,3)
console.log(quantity)






/**hotelCost */
function hotelCost(days){
    var cost =0
    if(days<=-1){
        return "Days,Months,Year can't be negative";
    }
    else if(days==0){
        return "Please input value of days which is gratter than 0";
    }
    else{
        if(days<=10){
            cost =days*100;
            return cost;
        }
        else if(days<=20){
            let first10days = 10*100;
            let  inhand = days-10;
            let last10days =inhand*80;
            cost=first10days+last10days;
            return cost;
        }
    }
}
let total =hotelCost(20);
console.log(total)








/*megaFriend*/
function megaFriend(names){
    if(names.length<=1){
        return "Please enter 2 or more names in the array to compare";
    }
    else{
        let bigger =names[0];
       for(var i=0; i<names.length; i++){
           var biggest=names[i];
           if(biggest.length>bigger.length){
               bigger=biggest;
           }
       }
       return bigger;         
    }
}
var biggerName = megaFriend("");
console.log(biggerName);







