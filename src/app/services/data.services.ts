
import {Injectable, EventEmitter} from "@angular/core";
import {BandModel} from "../models/band.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DataService
{
    bands: BandModel[] = [];
    onBandsUpdate: EventEmitter<BandModel[]> = new EventEmitter<BandModel[]>();

    constructor(private http: HttpClient)
    {
        console.log("HTTP:", http);


        http.get("http://localhost:3000/bands").subscribe(this.onBandsDataReady.bind(this), this.bandFallback.bind(this));
    }

    bandFallback()
    {
        /* data from server */
        let anderson: BandModel = new BandModel("Anderson Paak.", true, 100);
        anderson.addPicture("https://static.vibe.com/files/2016/08/Anderson-Paak-VIBE-1-1500x1000.png");
        this.bands.push(anderson);


        let george: BandModel = new BandModel("George Clinton", false, 200);
        george.addPicture("https://pbs.twimg.com/profile_images/482413674338869248/7GBlIsEm.jpeg");
        george.addTicketPrice(150);

        this.bands.push(george);

        let kendrick: BandModel = new BandModel("Kendrick Lamar", true, 300);
        kendrick.addPicture("https://www.billboard.com/files/media/kendrick-lamar-mtv-vmas-2017-ax-billboard-1548.jpg");
        kendrick.addTicketPrice(200);

        this.bands.push(kendrick);

        this.onBandsUpdate.emit(this.bands);
    }

    /**
     *
     * @param response
     */
    onBandsDataReady(response)
    {
        response.forEach(item => {

            let band: BandModel = new BandModel(item['name']);
            band.addPicture(item['image']);

            this.bands.push(band);

        });

        this.onBandsUpdate.emit(this.bands);
    }

    /**
     *
     * @param name
     * @param picture
     * @param onTour
     */
    addBand(name: string, picture: string, onTour: boolean)
    {
        let band: BandModel = new BandModel(name);

        if(picture) band.addPicture(picture);
        if(onTour) band.onTour = onTour;

        this.bands.push(band);
        this.onBandsUpdate.emit(this.bands);
    }

    /**
     *
     */
    removeLastBand()
    {
        this.bands.splice(-1, 1);
        this.onBandsUpdate.emit(this.bands);
    }


}
