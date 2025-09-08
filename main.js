import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, "MS-DOS Helper Program");

ti.output("Welcome to the MS-DOS Helper Program!");

//ask if can help, if user says DOS, say "go use something modern like Windows NT or Linux, or god forbid MacOS"
//if user says anything else, say "your message must include the word DOS"
//if user says anything with "fuck" say "rude" and ask for apology. if no, then quit program.
  let repeatAndAnnoyUser = true;
  let answerRude = false;
while (repeatAndAnnoyUser) {
  let help = await ti.prompt("How can I help?");
  if (help==="DOS" || help==="dos" || help==="Dos") {
    ti.output("Go use something modern like Windows NT or Linux, or god forbid MacOS");
    ti.output("get outta here!");
    ti.output("(It is now safe to turn off your computer)")
    repeatAndAnnoyUser = false;
  } else {
    ti.output("Your message must include the word DOS");   
    }
    }
if (help.toLowerCase().includes("fuck")) {
  let repeatAndAnnoyUser = false;
  answerRude = true;
  if (answerRude) {
  ti.output("Rude! I'm just trying to help!");
  ti.output("I expect an apology from you right this instant!");
  let apology = await ti.prompt("Do you apologize?");
  if (apology.toLowerCase().includes("yes")) {
    answerRude = false;
    ti.output("Thank you for your apology.");
    repeatAndAnnoyUser = true;
  }
  }
  }