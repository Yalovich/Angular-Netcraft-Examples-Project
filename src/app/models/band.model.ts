export class BandModel
{
    id: number = 0;
    ticketPrice: number = 0;

    constructor(public name: string, public onTour?: boolean, id?: number)
    {
        if(id)
        {
            this.id = id;
        }
    }

    /**
     *
     * @param price
     * @return {BandModel}
     */
    addTicketPrice(price: number)
    {
        this.ticketPrice = price;
        return this;
    }
}