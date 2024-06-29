import { NgModule } from '@angular/core'; 
import { BrowserModule }  
    from '@angular/platform-browser'; 
import { AppRoutingModule }  
    from './app.routes'; 
import { AppComponent } from './app.component'; 
import { HttpClientModule }  
    from '@angular/common/http'; 
  
@NgModule({ 
    declarations: [ 
        AppComponent 
    ], 
    imports: [ 
        BrowserModule, 
        AppRoutingModule, 
        HttpClientModule 
    ], 
    providers: [], 
    bootstrap: [AppComponent] 
}) 
export class AppModule { }