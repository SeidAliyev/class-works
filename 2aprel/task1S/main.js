let meyve = prompt("hansi meyve: ")
let kilo = prompt('kilosun daxil edin: ')
switch(meyve){
    case 'alma':
      alert(`${3*kilo} manat`)
      break;
    case 'nar':
        alert(`${5*kilo} manat`)
      break;
      case 'heyva':
        alert(`${7*kilo} manat`)
      break;
      default:
        alert('bele meyve yoxdur ')
}