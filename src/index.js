import { totalPrice } from "./modules/totalPrice";
import { addLine } from "./modules/addLine";
import { saveLine } from "./modules/saveLine";
import { renderLine } from "./modules/renderLine";
import { setupSorting } from "./modules/setupSorting";
import { sortPrice } from "./modules/sortPrice";

renderLine();
addLine();
saveLine();
setupSorting();
totalPrice();
sortPrice();