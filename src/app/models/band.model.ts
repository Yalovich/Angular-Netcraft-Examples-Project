export class BandModel
{
    id: number = 0;
    ticketPrice: number = 0;
    picture: string = null;

    constructor(public name: string, public onTour?: boolean, id?: number)
    {
        if(id)
        {
            this.id = id;
        }
    }

    /**
     *
     * @param url
     */
    addPicture(url: string)
    {
        this.picture = url;
        return this;
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