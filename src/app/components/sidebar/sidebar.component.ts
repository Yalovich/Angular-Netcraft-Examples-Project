import { Component } from '@angular/core';
import {BandModel} from "../../models/band.model";
import {StorageService} from "../../services/storage.service";
import {DataService} from "../../services/data.services";

@Component({
    selector: 'sidebar',
    templateUrl: "./sidebar.component.html",
    styleUrls: ["./sidebar.component.css"],
    providers: [StorageService]
})
export class SidebarComponent
{
    predefinedSearchTerm: string;
    bandsSidebar: BandModel[] = [];

    constructor(private storageService: StorageService, private dataService: DataService) {}

    ngOnInit()
    {
        this.bandsSidebar = this.dataService.bands;
        this.dataService.onBandsUpdate.subscribe(this.onBandUpdate.bind(this));
    }

    /**
     *
     * @param bands
     */
    onBandUpdate(bands: BandModel[])
    {
        this.bandsSidebar = bands;
    }

    /**
     * remove last band from service
     */
    removeLastBand()
    {
        this.dataService.removeLastBand();
    }

    /**
     *
     * @param event
     */
    saveList(event: MouseEvent)
    {
        console.log("Bands: ", this.bandsSidebar);

        this.storageService.set("bands", this.bandsSidebar);
    }

    /**
     *
     * @param event
     */
    addBand(event: MouseEvent)
    {
        this.bandsSidebar.push(new BandModel("Bobby Womack", false, 400));
    }

    /**
     *
     * @param term
     */
    searchBands(term: string)
    {
        console.log("Search term: ", term);
    }
}