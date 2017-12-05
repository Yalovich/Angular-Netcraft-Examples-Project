import {Injectable} from "@angular/core";

@Injectable()
export class StorageService
{
    constructor()
    {

    }

    /**
     *
     * @param key
     * @param value
     * @return {StorageService}
     */
    set(key: string, value: any)
    {
        localStorage.setItem(key, JSON.stringify(value));
        return this;
    }

    /**
     *
     * @param key
     * @return {any}
     */
    get(key: string)
    {
        let localStorageResponse: any = localStorage.getItem(key);

        if (localStorageResponse == null) return null;

        try {

            return JSON.parse(localStorageResponse);

        } catch (error) {}

        return localStorageResponse;
    }
}
