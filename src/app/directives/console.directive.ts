import {Directive, ElementRef, HostListener, Input} from "@angular/core";

@Directive({
    selector: '[console]'
})
export class ConsoleDirective
{
    @Input()
    severity: string;

    @Input('console')
    whatToPrint: string;

    constructor(public elm: ElementRef)
    {
        // console.log("---> ", elm);
    }

    ngOnChanges()
    {
        // console.log("Band From Directive: ", this.whatToPrint);
    }

    @HostListener("dbclick") onClick()
    {
        console.log("--> ");
    }
}






