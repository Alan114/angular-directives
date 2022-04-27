import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  oddNumbers = this.numbers.map((num) => {
    if (num % 2 !== 0) {
      return num;
    }
  });

  evenNumbers = this.numbers.map((num) => {
    if (num % 2 === 0) {
      return num;
    }
  });

  onlyOdd = true;
}
