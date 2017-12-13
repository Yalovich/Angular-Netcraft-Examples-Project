import {Injectable, EventEmitter} from "@angular/core";
import {BandModel} from "../models/band.model";
import {Subject} from "rxjs";

@Injectable()
export class UiService
{
    selectedBand: BandModel;
    onSelectedBandEvent: Subject<BandModel> = new Subject<BandModel>();

    /**
     * select band
     * @param band
     */
    selectBand(band: BandModel)
    {
        console.log("FROM UI SERVICE: ", band);
        this.selectedBand = band;

        this.onSelectedBandEvent.next(this.selectedBand);

        return this;
    }

    /**
     *
     * @return {BandModel}
     */
    getSelectedBand(): BandModel
    {
        return this.selectedBand;
    }
}