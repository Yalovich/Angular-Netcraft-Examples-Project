import {Component, Output, EventEmitter, Input} from '@angular/core';
import {BandModel} from "../../../models/band.model";

@Component({
    selector: 'band-list-item',
    templateUrl: "./bandListItem.component.html",
    styleUrls: ["./bandListItem.component.css"],
    inputs: ["band"]
})
export class BandlistItemComponent
{
    band: BandModel;

    @Input()
    taxPercent: number = 0.23;

    @Output()
    onActivateTour: EventEmitter<BandModel> = new EventEmitter<BandModel>();

    @Output()
    onDelete: EventEmitter<BandModel> = new EventEmitter<BandModel>();

    /**
     *
     * @param event
     */
    activateTour(event: MouseEvent)
    {
        console.log("Activate: ", this.band)
        this.onActivateTour.emit(this.band);
    }
}