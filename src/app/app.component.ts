import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent
{
  appComponentDummyValue: string;
  displayMain = true;

  constructor()
  {
    this.appComponentDummyValue = "hi";
  }

  ngOnInit()
  {
    setTimeout(() => {

      this.appComponentDummyValue = "bye";

    }, 3000);

    setTimeout(() => {

      // this.displayMain = false;

    }, 5000);
  }
}
