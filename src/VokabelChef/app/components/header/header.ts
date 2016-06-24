import {Component, OnInit} from 'angular2/core';
import {NgClass} from 'angular2/common';

import {BackButtonDirective} from '../../directives/backButtonDirective';

@Component({
    selector: 'boardz-header',
    directives: [NgClass, BackButtonDirective],
    templateUrl: 'app/components/header/header.html'
})
export class HeaderComponent {

    constructor() {
    }
}
