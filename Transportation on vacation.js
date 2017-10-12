function rentalCarCost(d) {
 var tnoofDays = 40 * d;
 if (d >= 7) {
  result= tnoofDays - 50;
 }
else if (d >= 3) {
  result= tnoofDays - 20;
 } else {
 result= tnoofDays;
 }
 return result;
}
