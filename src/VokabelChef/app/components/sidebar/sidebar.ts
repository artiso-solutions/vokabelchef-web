import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {CloseSidebarOnClickDirective} from '../../directives/closeSidebarOnClickDirective';
import {NavigationEntry} from "../../models/navigationEntry";

@Component({
    selector: 'sidebar',
    directives: [ROUTER_DIRECTIVES, CloseSidebarOnClickDirective],
    templateUrl: 'app/components/sidebar/sidebar.html'
})
export class SidebarComponent {
    public expanded: boolean = true;
    public navigationEntries: Array<NavigationEntry>;

    constructor() {
        this.navigationEntries = [];

        this.navigationEntries.push(new NavigationEntry(['Chapters'], 'list', 'Kapitel'));
    }

    toggleSidebar(): void {
        this.expanded = !this.expanded;
    }
}
