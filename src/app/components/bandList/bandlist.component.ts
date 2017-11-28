import {Component, Input} from '@angular/core';
import {BandModel} from "../../models/band.model";

@Component({
    selector: 'band-list',
    templateUrl: "./bandlist.component.html",
    styleUrls: ["./bandlist.component.css"]
})
export class BandlistComponent
{
    @Input()
    bands: BandModel[] = [];

    /**
     *
     * @param band
     */
    bandListOnActivateTour(band: BandModel)
    {
        console.log("Hi from bandList.component.ts", band.name);
    }
}