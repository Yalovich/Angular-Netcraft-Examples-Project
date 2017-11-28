import { Component } from '@angular/core';
import {BandModel} from "../../models/band.model";

@Component({
    selector: 'sidebar',
    templateUrl: "./sidebar.component.html",
    styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent
{
    predefinedSearchTerm: string;
    bandsSidebar: BandModel[] = [];

    constructor()
    {
        /* data from server */
        this.bandsSidebar.push(new BandModel("Anderson Paak.", true, 100));

        let bob: BandModel = new BandModel("Bob Marley", false, 200);
        bob.addTicketPrice(150);

        this.bandsSidebar.push(bob);

        let kendrick: BandModel = new BandModel("Kendrick Lamar", true, 300);
        kendrick.addTicketPrice(200);

        this.bandsSidebar.push(kendrick);
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