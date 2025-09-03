import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, "Example Text Interface Program");

ti.output("Welcome to my program!");
let name = await ti.prompt("What is your name?");
ti.output("Hello, " + name);


