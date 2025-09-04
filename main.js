import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, "MS-DOS Helper Program");

ti.output("Welcome to the MS-DOS Helper Program!");
let name = await ti.prompt("What is your name?");
ti.output("Hello, " + name);

//ask if can help, if yes then say "great go away" if no then say "oh wonderful please leave now"
  let help = await ti.prompt("How can I help");
  if (help==="DOS", "dos", "Dos") {
    ti.output("DOS is too old, get a new computer");
    ti.output("Go use something modern you ancient dipshit");
    ti.output("get outta here");
  } else {
    ti.output("I cant help you. Maybe try Google?");
  }