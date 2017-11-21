import {Component, ViewChild, ElementRef} from '@angular/core';
import { BandModel } from "../../models/band.model";

@Component({
    selector: 'main-cotainer',
    templateUrl: "./main.component.html",
    styleUrls: ["./main.component.css"]
})
export class MainComponent
{
    title: string = "Welcome.";
    bands: BandModel[] = [];

    onTourBands: BandModel[] = [];

    @ViewChild("bandname")
    bandName: ElementRef;

    @ViewChild("myFooter")
    componentFooter: ElementRef;

    constructor()
    {
        /* data from server */
        this.bands.push(new BandModel("Anderson Paak.", true, 100));
        this.bands.push(new BandModel("Bob Marley", false, 200));
        this.bands.push(new BandModel("Kendrick Lamar", true, 300));

        this.bands.forEach((band: BandModel) => {

            if(band.onTour) this.onTourBands.push(band);

        });

        setTimeout(() => {

            console.log("this is the footer: ", this.componentFooter)

        }, 2500);
    }

    /**
     * return component's title
     * @return string
     */
    getTitle(name?: string): string
    {
        return `${name}, ${this.title}`;
    }

    /**
     *
     * @return {boolean}
     */
    highlightBand(band: BandModel): boolean
    {
        return band.onTour;
    }

    /**
     *
     * @param band
     * @return {string|string}
     */
    getTourColor(band: BandModel): string
    {
        return (band.onTour ? "#000" : "rgba(0, 0, 0, 0.3)");
    }

    /**
     *
     * @param band
     */
    activateToggle(band: BandModel)
    {
        band.onTour = !band.onTour;
    }

    /**
     *
     * @param event
     * @param band
     */
    onMouseEnter(event: MouseEvent, band: BandModel)
    {

    }

    /**
     *
     * @param event
     * @param band
     */
    onMouseLeave(event: MouseEvent, band: BandModel)
    {

    }

    /**
     *
     * @param event
     */
    addNewBand(event: MouseEvent)
    {
        console.log("Click This: ", this.bandName);
    }

    /**
     *
     * @param event
     */
    onKeyup(event: KeyboardEvent)
    {
        console.log("Key: ", event.which);
    }

    /**
     *
     * @param event
     */
    onFocus(event: FocusEvent)
    {
        console.log("This focus:", event)
    }
}