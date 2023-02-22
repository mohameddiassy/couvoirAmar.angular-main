import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
declare function toggle_password():any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  reactiveForm_add_agents !: FormGroup;
  submitted: boolean = false
  loading_add_agents: boolean = false
  constructor(private formBuilder: FormBuilder, public api: ApiService,private router:Router) { }

  ngOnInit(): void {
    this.init_form()
  }
  init_form() {
    this.reactiveForm_add_agents = this.formBuilder.group({
      login: ["", Validators.required],
      pwd: ["", Validators.required],
    });
  }

  // acces facile au champs de votre formulaire
  get f(): any { return this.reactiveForm_add_agents.controls; }
  // validation du formulaire
  onSubmit_add_agents() {
    this.submitted = true;
    console.log(this.reactiveForm_add_agents.value)
    // stop here if form is invalid
    if (this.reactiveForm_add_agents.invalid) {
      return;
    }
    var agents = this.reactiveForm_add_agents.value
    this.login(agents)
  }
  // vider le formulaire
  onReset_add_agents() {
    this.submitted = false;
    this.reactiveForm_add_agents.reset();
  }
  login(agents: any) {
    this.loading_add_agents = true;
    this.api.taf_post("taf_auth/auth.php", agents, async (reponse: any) => {
      this.loading_add_agents = false;
      if (reponse.status) {
        console.log("Opération effectuée avec succés sur la table agents. Réponse= ", reponse);
        await this.api.save_on_local_storage("token",reponse.data)
        this.api.network.token=reponse.data
        this.router.navigate(['/home'])
      } else {
        console.log("L\'opération sur la table agents a échoué. Réponse= ", reponse);
        alert("L'opération a echoué")
      }
    }, (error: any) => {
      this.loading_add_agents = false;
    })
  }
  toggle_password_button(){
    toggle_password()
  }
}
