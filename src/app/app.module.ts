import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './features/header/header.component';
import { FooterComponent } from './features/footer/footer.component';
import { DetailsProduitComponent } from './pages/details-produit/details-produit.component';
import { ProductsService } from '../app/core/services/products.service';
import { ButtonDetailsHomeComponent } from './shared/button-details-home/button-details-home.component';
import { ButtonManageHomeComponent } from './shared/button-manage-home/button-manage-home.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DetailsProduitComponent,
    ButtonDetailsHomeComponent,
    ButtonManageHomeComponent,
<<<<<<< HEAD
    DashboardComponent
=======
>>>>>>> 52c64f6b95e3c0e3563142f8ce36e62244d238fe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
