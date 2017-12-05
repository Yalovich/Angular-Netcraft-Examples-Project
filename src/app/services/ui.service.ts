import {Injectable, EventEmitter} from "@angular/core";
import {BandModel} from "../models/band.model";

@Injectable()
export class UiService
{
    selectedBand: BandModel;
    onSelectedBandEvent: EventEmitter<BandModel> = new EventEmitter<BandModel>();

    /**
     * select band
     * @param band
     */
    selectBand(band: BandModel)
    {
        console.log("FROM UI SERVICE: ", band);
        this.selectedBand = band;

        this.onSelectedBandEvent.emit(this.selectedBand);

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