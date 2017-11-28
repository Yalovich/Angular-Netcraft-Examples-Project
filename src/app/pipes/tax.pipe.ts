import {Pipe} from "@angular/core";

@Pipe({
    name: "addTax"
})
export class TaxPipe
{
    transform(currentPrice: number, percent: number = 0.17)
    {
        return (currentPrice + (currentPrice * percent));
    }
}