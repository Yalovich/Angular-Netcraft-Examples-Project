import {Component} from "@angular/core";
import {ActivatedRoute, Router, ParamMap} from "@angular/router";

@Component({
    selector: 'profile-container',
    templateUrl: "./profile.component.html",
    styleUrls: ["./profile.component.css"]
})
export class ProfileComponent
{
    name: string;

    constructor(private activatedRoute: ActivatedRoute) {}

    /**
     *
     */
    ngOnInit()
    {
        /* get profile name */
        this.activatedRoute.paramMap.subscribe((paramsMap: ParamMap) => {

            this.name = paramsMap.get("name");

        })
    }

    /**
     *
     */
    ngOnDestroy()
    {
        console.log("Bye Profile. Hello Main");
    }
}