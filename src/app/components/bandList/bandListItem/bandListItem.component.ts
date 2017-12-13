import {Component, Output, EventEmitter, Input} from '@angular/core';
import {BandModel} from "../../../models/band.model";
import {UiService} from "../../../services/ui.service";
import {Router} from "@angular/router";

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

    constructor(private uiService: UiService, private router: Router) {}

    ngOnInit()
    {
     //   console.log("Init: ", this.band);
    }

    ngOnChanges()
    {

    }

    ngOnDestroy()
    {
      //  console.log("Destroy: ", this.band);
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
        this.router.navigate(["/main"]);
        this.uiService.selectBand(this.band);
    }

    /**
     *
     * @param event
     */
    onShowProfile(event: MouseEvent)
    {
        this.router.navigate(["/user-profile", this.band.name, this.band.id]);
        /*                     /user-profile / george-clinton / 123127       */
    }
}