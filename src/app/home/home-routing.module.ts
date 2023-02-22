import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCollecteComponent } from './collecte/add-collecte/add-collecte.component';
import { EditCollecteComponent } from './collecte/edit-collecte/edit-collecte.component';
import { ListCollecteComponent } from './collecte/list-collecte/list-collecte.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AddFormulaireComponent } from './formulaire/add-formulaire/add-formulaire.component';
import { EditFormulaireComponent } from './formulaire/edit-formulaire/edit-formulaire.component';
import { ListFormulaireComponent } from './formulaire/list-formulaire/list-formulaire.component';
import { AddFournisseurComponent } from './fournisseur/add-fournisseur/add-fournisseur.component';
import { EditFournisseurComponent } from './fournisseur/edit-fournisseur/edit-fournisseur.component';
import { ListFournisseurComponent } from './fournisseur/list-fournisseur/list-fournisseur.component';
import { AddLotComponent } from './lot/add-lot/add-lot.component';
import { EditLotComponent } from './lot/edit-lot/edit-lot.component';
import { ListLotComponent } from './lot/list-lot/list-lot.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "utilisateur" },

  { path: "utilisateur/add", component:AddUserComponent},
  { path: "utilisateur/edit/:id_utilisateur", component:EditUserComponent},
  { path: "utilisateur", component:ListUserComponent},
  
  { path: "dashboard", component:DashboardComponent},

  { path: "collecte/add", component:AddCollecteComponent},
  { path: "collecte/edit/:id_collecte", component:EditCollecteComponent},
  { path: "collecte", component:ListCollecteComponent},

  { path: "fournisseur/add", component:AddFournisseurComponent},
  { path: "fournisseur/edit/:id_collecte", component:EditFournisseurComponent},
  { path: "fournisseur", component:ListFournisseurComponent},

  { path: "formulaire/add", component:AddFormulaireComponent},
  { path: "formulaire/edit/:id_collecte", component:EditFormulaireComponent},
  { path: "formulaire", component:ListFormulaireComponent},

  { path: "lot/add", component:AddLotComponent},
  { path: "lot/edit/:id_collecte", component:EditLotComponent},
  { path: "lot", component:ListLotComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
