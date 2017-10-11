function rentalCarCost(d) {
 var tnoofDays = 40 * d;
 if (d >= 7) {
  return tnoofDays - 50;
 }
 if (d >= 3) {
  return tnoofDays - 20;
 } else {
  return tnoofDays;
 }
}