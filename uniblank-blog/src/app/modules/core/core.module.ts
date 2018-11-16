import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { HttpService , httpClientCreator } from './services/http.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PaggingComponent } from './components/pagging/pagging.component';
import { SystemMessageComponent } from './components/system-message/system-message.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        HttpClientModule
    ],
    declarations: [
        SpinnerComponent,
        PaggingComponent,
        SystemMessageComponent,
        HeaderComponent
    ],
    exports: [
        FormsModule,
        SpinnerComponent,
        PaggingComponent,
        SystemMessageComponent
    ],
    providers: [
        // HttpService,
        // {
        //     provide: HttpClientModule,
        //     useFactory: httpClientCreator,
        //     deps: [HttpClient]
        // }
    ]
})
export class CoreModule {
}
