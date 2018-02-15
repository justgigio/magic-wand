
import MagicWand from './index';
import { Asana } from './src/asana';

(async function() {

  var asana = new Asana('0/e95f107bfc8c85a0b4c0ee47b2591c15');
  var task = await asana.getTask(553688717926160);
  console.log(task.name);

})();

// async function add3(x) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(x + 3);
//     }, 2000);
//   });
// }

// async function t3() {
//   let x;
//   return new Promise(resolve => {
//     setTimeout(() => {
//       x = 24;
//       resolve(x);
//     }, 2000);
//   });
// }

// async function print(){
//   var k = await t3();
//   var l = await add3(k)
//   console.log(l);
// }

// print()
