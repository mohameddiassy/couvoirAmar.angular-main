# installation du gestionnaire des token
npm i @auth0/angular-jwt

# configuration de HttpClientModule et de ReactiveFormsModule
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
...

@NgModule({
  ....,
  imports: [
   ...,
    HttpClientModule,
    ReactiveFormsModule
  ],
  ...
})
....
# code couleur
jaune= rgb(246, 166, 51)