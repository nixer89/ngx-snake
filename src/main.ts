import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
import 'hammerjs';

enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);
    