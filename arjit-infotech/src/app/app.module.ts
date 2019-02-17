import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminDashComponent } from './admin/admin-dash/admin-dash.component';
import { AuthGaurd } from './services/auth-gaurd.service';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { LeftPanelComponent } from './common/left-panel/left-panel.component';
import { PanFormComponent } from './pan-form/pan-form.component';
import { ApplyPanComponent } from './apply-pan/apply-pan.component';
import { PanPendingListComponent } from './pan-pending-list/pan-pending-list.component';
import { PanApprovedListComponent } from './pan-approved-list/pan-approved-list.component';



const appRoutes: Routes = [
  { path: '', component: WelcomePageComponent,  },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGaurd]},
  { path: 'admin/dash', component: AdminDashComponent, canActivate: [AuthGaurd]},
  { path: 'apply-pan', component: ApplyPanComponent,  canActivate: [AuthGaurd]},
  { path: 'pending-list', component: PanPendingListComponent,  canActivate: [AuthGaurd]},
  { path: 'approved-list', component: PanApprovedListComponent,  canActivate: [AuthGaurd]},
];
@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    DashboardComponent,
    AdminDashComponent,
    HeaderComponent,
    FooterComponent,
    LeftPanelComponent,
    PanFormComponent,
    ApplyPanComponent,
    PanPendingListComponent,
    PanApprovedListComponent,
    // ApprovedListComponent,
    // PendingListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
