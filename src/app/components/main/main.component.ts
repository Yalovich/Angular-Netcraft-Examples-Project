import {
    Component, ViewChild, ElementRef, SimpleChanges, Input, ChangeDetectionStrategy,
    ChangeDetectorRef
} from '@angular/core';
import {BandModel} from "../../models/band.model";
import {UiService} from "../../services/ui.service";
import {DataService} from "../../services/data.services";

@Component({
    selector: 'main-cotainer',
    templateUrl: "./main.component.html",
    styleUrls: ["./main.component.css"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent
{
    title: string = "Welcome.";
    bandsMain: BandModel[] = [];
    selectedBand: BandModel;

    onTourBands: BandModel[] = [];

    currentDate: Date = new Date();
    displayDate: string;

    @Input()
    dummy: string;

    @ViewChild("bandname")
    bandName: ElementRef;

    @ViewChild("myFooter")
    componentFooter: ElementRef;

    constructor(private uiService: UiService, private dataService: DataService, private changeDetectionRef: ChangeDetectorRef) {}

    ngOnInit()
    {
        let reference = this.uiService.onSelectedBandEvent.subscribe(this.onSelectBand.bind(this));
    }

    removeLastBand(event: MouseEvent)
    {
        this.dataService.removeLastBand();
    }

    /**
     * dispatched when someone choose band from BandListItem
     * @param band
     */
    onSelectBand(band: BandModel)
    {
        console.warn("HELLO FROM onSelectBand")
        this.selectedBand = band;

        setTimeout(() => {
            this.changeDetectionRef.markForCheck();
        }, 2500);
    }

    /**
     * query ui service for selected band
     * @param event
     */
    getSelectedBand(event: MouseEvent)
    {
        this.selectedBand = this.uiService.getSelectedBand();
        console.log("FROM MAIN: ", this.selectedBand);
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