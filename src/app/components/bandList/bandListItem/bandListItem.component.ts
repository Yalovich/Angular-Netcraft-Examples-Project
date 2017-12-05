import {Component, Output, EventEmitter, Input} from '@angular/core';
import {BandModel} from "../../../models/band.model";
import {UiService} from "../../../services/ui.service";

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

    constructor(private uiService: UiService) {}

    ngOnInit()
    {
        console.log("Init: ", this.band);
    }

    ngOnChanges()
    {

    }

    ngOnDestroy()
    {
        console.log("Destroy: ", this.band);
    }

    /**
     *
     * @param event
     */
    activateTour(event: MouseEvent)
    {
        console.log("Activate: ", this.band)
        this.onActivateTour.emit(this.band);
    }

    /**
     *
     * @param event
     */
    onBandSelect(event: MouseEvent)
    {
        this.uiService.selectBand(this.band);
    }
}