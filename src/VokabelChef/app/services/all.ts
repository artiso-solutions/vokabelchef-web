import {provide} from 'angular2/core';
import {XHRBackend, ConnectionBackend} from 'angular2/http';

import {AppConfiguration} from '../appConfig';
import {AuthenticatedHttp} from './authenticatedHttp';
import {LoginService} from './loginService';
import {ChaptersService} from './chaptersService';
import {NotificationService} from './notificationService';
import {SignalRService} from './signalrService';
import {UiNotificationService} from './uiNotificationService';
import {PlatformInformationService} from './platformInformationService';
import {NativeIntegrationService} from "./nativeIntegrationService";

declare var window;

export var APP_SERVICES = [
    provide(ConnectionBackend, { useClass: XHRBackend }),
    AppConfiguration,
    PlatformInformationService,
    NativeIntegrationService,
    AuthenticatedHttp,
    LoginService,
    ChaptersService,
    NotificationService,
    UiNotificationService,
    SignalRService
];
