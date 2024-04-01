let qiymet = prompt("meblegi daxil et: ");
let kilo = prompt("kilonu daxil et: ");

if (2 < qiymet / kilo && qiymet / kilo <= 4) {
  alert(`${qiymet / kilo} aalm`);
} else if (4 < qiymet / kilo && qiymet / kilo <= 6) {
  alert(`${qiymet / kilo} heyva`);
} else if (6 < qiymet / kilo && qiymet / kilo <= 10) {
  alert(`${qiymet / kilo} nar`);
}
