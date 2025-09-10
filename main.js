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
let exitRightAway = false;
while (repeatAndAnnoyUser && !exitRightAway) {
  let help = await ti.prompt("How can I help?");
  if (help === "DOS" || help === "dos" || help === "Dos") {
    ti.output(
      "Go use something modern like Windows NT or Linux, or god forbid MacOS"
    );
    ti.output("(It is now safe to turn off your computer)");
    repeatAndAnnoyUser = false;
  } else {
    if (help.toLowerCase()==="swear") {
      let apology = await ti.prompt("Rude. Apologize.");
      if (apology.toLowerCase()==="sorry") {
        ti.output ("Apology accepted.");
      } else {
        exitRightAway = true;
        ti.output("Goodbye. I don't like you.");
      }
    }
    if (!exitRightAway) {
      ti.output("Your message must include the word DOS");
    }
  }
}

// idk what the hell i did but not it dont work
