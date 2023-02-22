import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FooterComponent } from './home/footer/footer.component';
import { ListCollecteComponent } from './collecte/list-collecte/list-collecte.component';
import { AddCollecteComponent } from './collecte/add-collecte/add-collecte.component';
import { EditCollecteComponent } from './collecte/edit-collecte/edit-collecte.component';
import { ListFournisseurComponent } from './fournisseur/list-fournisseur/list-fournisseur.component';
import { AddFournisseurComponent } from './fournisseur/add-fournisseur/add-fournisseur.component';
import { EditFournisseurComponent } from './fournisseur/edit-fournisseur/edit-fournisseur.component';
import { ListLotComponent } from './lot/list-lot/list-lot.component';
import { AddLotComponent } from './lot/add-lot/add-lot.component';
import { EditLotComponent } from './lot/edit-lot/edit-lot.component';
import { ListFormulaireComponent } from './formulaire/list-formulaire/list-formulaire.component';
import { AddFormulaireComponent } from './formulaire/add-formulaire/add-formulaire.component';
import { EditFormulaireComponent } from './formulaire/edit-formulaire/edit-formulaire.component';


@NgModule({
  declarations: [
    HomeComponent,
    ListUserComponent,
    AddUserComponent,
    EditUserComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    ListCollecteComponent,
    AddCollecteComponent,
    EditCollecteComponent,
    ListFournisseurComponent,
    AddFournisseurComponent,
    EditFournisseurComponent,
    ListLotComponent,
    AddLotComponent,
    EditLotComponent,
    ListFormulaireComponent,
    AddFormulaireComponent,
    EditFormulaireComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
