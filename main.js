import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, "MS-DOS Helper Program");

ti.output("Welcome to the MS-DOS Helper Program!");
let name = await ti.prompt("What is your name?");
ti.output("Hello, " + name);

//ask if can help, if yes then say "great go away" if no then say "oh wonderful please leave now"
  let repeatNoRude = true;
while (repeatNoRude) {
  let help = await ti.prompt("How can I help?");
  if (help==="DOS" || help==="dos" || help==="Dos") {
    ti.output("Go use something modern like Windows NT or Linux, or god forbid MacOS");
    ti.output("get outta here!");
    ti.output("(It is now safe to turn off your computer)");
    repeatNoRude = false;
  } else {
    let repeatRude = true;
    if (help.toLowerCase()==="fuck") {
      ti.output("Hey, that's not very nice!");
      ti.output("I refuse to help you until you apologize.");
      let apology = await ti.prompt("Do you apologize?");
      if (apology.toLowerCase()==="yes") {
        ti.output("Thank you. I appreciate your apology.");
      } else {
        ti.output("Fine, be that way. You're a dick.");
        repeatRude = true;
      }
    }
    ti.output("Your message must include the word DOS");    
  }
}
if (repeatRude===true) {
  ti.output("Go away, I refuse to help you.");
}