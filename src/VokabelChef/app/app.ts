import {Component, AfterViewInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';

import {SidebarComponent} from './components/sidebar/sidebar';
import {HeaderComponent} from './components/header/header';
import {APP_SERVICES} from './services/all';
import {LogService} from './services/logService';
import {LogLevel} from './models/logLevel';
import {UiNotificationService} from './services/uiNotificationService';
import {NativeIntegrationService} from "./services/nativeIntegrationService";
import {ChapterListComponent} from "./components/chapters/chapterList";

@Component({
    selector: 'vokabelchef-app',
    providers: APP_SERVICES,
    directives: [ROUTER_DIRECTIVES, SidebarComponent, HeaderComponent],
    templateUrl: 'app/app.html'
})
@RouteConfig([
    { path: '/', component: ChapterListComponent, name: 'Chapters', useAsDefault: true }
])
export class VokabelChefAppComponent implements AfterViewInit {
    constructor(private _nativeIntegrationService: NativeIntegrationService,
                private _uiNotificationService: UiNotificationService,
                private _logService: LogService) {
        _logService.maximumLogLevel = LogLevel.Verbose;
        _uiNotificationService.subscribeToNotifications();
        _nativeIntegrationService.init();
    }

    ngAfterViewInit(): any {
        if (window.initAdminLTE) {
            window.initAdminLTE();
        }
    }
}






























interface BoardZAppWindow extends Window {
    initAdminLTE(): void;
}

declare var window: BoardZAppWindow;
