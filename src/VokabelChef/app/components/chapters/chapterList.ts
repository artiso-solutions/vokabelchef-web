import {Component, OnInit} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';

import {ChaptersService} from '../../services/chaptersService';
import {NotificationService} from '../../services/notificationService';
import {Chapter} from "../../models/chapter";

@Component({
    selector: 'chapterlist',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/components/chapters/chapterList.html'
})
export class ChapterListComponent implements OnInit {
    public chapters: Chapter[];

    constructor(private chaptersService: ChaptersService, 
                private _router: Router, 
                private _notificationService: NotificationService) {
    }

    ngOnInit() {
        this.chaptersService.getAll()
            .subscribe(
                (chapters)=> this.chapters = chapters,
                (err) => this._notificationService.notifyError('Error while fetching game data')
            );
    }
}