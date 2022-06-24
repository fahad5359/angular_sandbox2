import {Component} from "@angular/core";

@Component({

  selector: "play-one",
  templateUrl: "./play.component.html",
  styleUrls: ["./play.component.css"]
})

export class PlayComponent {
  place: String = "ryadh";


  ////////// States
  hallah: String = "bad";
  hallah2: String = "Good";


  ////////// Button states
  stateOfButton1: Boolean = false;
  stateOfButton2: Boolean = true;


  ////////// Methods
  letHaveGoodTime() {
    this.hallah2 = "good"
  }

  letHaveBadTime() {
    this.hallah = "bad"
  }

  ChangeValue() {
    if (this.stateOfButton1 == false) {
      this.stateOfButton1 = true
    } else if (this.stateOfButton1 == true) {
      this.stateOfButton1 = false

    }
  }

  changevalue2() {
    if (this.stateOfButton2 == false) {
      this.stateOfButton2 = true
    } else if (this.stateOfButton2 == true) {
      this.stateOfButton2 = false
    }
  }
}
