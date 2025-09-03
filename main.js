import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, "Example Text Interface Program");

ti.output("Welcome to my program!");
let name = await ti.prompt("What is your name?");
ti.output("Hello, " + name);
let canhelp = ti.promptYesOrNo("Can I help you with anything?");
if (canhelp) {
  ti.output("thats great, now go away");
} else {
  ti.output("Oh wonderful, please leave now");
  }