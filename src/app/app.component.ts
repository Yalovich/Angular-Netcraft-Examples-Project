import { Component } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent
{
  appComponentDummyValue: string;
  displayMain = true;

  constructor(private activatedRoute: ActivatedRoute)
  {
    this.appComponentDummyValue = "hi";
  }

  ngOnInit()
  {
    /* get profile name */
    this.activatedRoute.paramMap.subscribe((paramsMap: ParamMap) => {

      console.log("ParamMap: ", paramsMap);

    })
  }
}
