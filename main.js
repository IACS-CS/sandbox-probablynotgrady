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
    ti.output("(It is now safe to turn off your computer)")
    repeatAndAnnoyUser = false;
  if (help==="swear") {
      repeatAndAnnoyUser = false;
      answerRude = true;
      if (answerRude) {
        let rude = await ti.prompt("Rude. Apologize.");
        if (rude.toLowerCase()==="sorry") {
          answerRude = false;
          ti.output ("Apology accepted.");
          } else {
          ti.output("I refuse to help you.");
        }
      }
    }
}else {
  ti.output ("Your message must include the word DOS");
}
} 