import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { PAGES_ROUTERS } from './pages.routes';

import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';

// Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

// ng2-charts
import { ChartsModule } from 'ng2-charts';


@NgModule({
    declarations: [
         DashboardComponent,
         ProgressComponent,
         Graficas1Component,
         PagesComponent,
         IncrementadorComponent,
         GraficoDonaComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTERS,
        FormsModule,
        ChartsModule
    ]
})

export class PagesModule { }
