
import MagicWand from './index';
import { Asana } from './src/asana';

(async function() {

  var asana = new Asana('0/e95f107bfc8c85a0b4c0ee47b2591c15');
  var task = await asana.getTask(553688717926160);
  console.log(task.name);

})();
