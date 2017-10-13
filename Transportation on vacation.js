function rentalCarCost(d) {
 var tnoofDays = 40 * d, result;
 if (d >= 7) {
  result= tnoofDays - 50;
 }
 if (d >= 3) {
  result= tnoofDays - 20;
 } else {
  result= tnoofDays;
 }
    return result;
}
