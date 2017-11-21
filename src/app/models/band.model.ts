export class BandModel
{
    id: number = 0;

    constructor(public name: string, public onTour?: boolean, id?: number)
    {
        if(id)
        {
            this.id = id;
        }
    }
}