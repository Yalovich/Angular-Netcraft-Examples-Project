import {Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
    selector: 'search-input',
    templateUrl: "./searchInput.component.html",
    styleUrls: ["./searchInput.component.css"]
})
export class SearchInputComponent
{
    @Input()
    searchTerm: string;

    @Output()
    onSearch: EventEmitter<string> = new EventEmitter<string>();

    /**
     *
     * @param event
     */
    search(event: KeyboardEvent)
    {
        this.onSearch.emit(this.searchTerm);
    }
}