import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public formLogin: FormGroup;

public mensagens_validacao = { 
  // mensagem que vai aparecer se ouver erro em algum dos campos 
  email: [
    {tipo: 'required', mensagem: 'O campo E-mail é obrigatório!' },
    {tipo: 'email', mensagem: 'E-mail inválido!' }
  ],
  senha: [
    {tipo: 'required', mensagem: 'O campo senha é obrigatório!' }, 
    {tipo: 'minLength', mensagem: 'A senha deve ter pelo menos 6 caracteres!' }
  ]
}; 

  constructor(private formBuilder: FormBuilder, private router: Router) { 
    this.formLogin = formBuilder.group({
    //campos que eu queira que meu formulario tenha 
    email: ['', Validators.compose([Validators.required, Validators.email])],
    senha: ['', Validators.compose([Validators.required, Validators.minLength(6)])]  
    });
  }

  ngOnInit() {
  }

  public login(){ 
    //verificando se a condicao é verdadeira
    if(this.formLogin.valid){
      console.log('formulário válido!');
      this.router.navigateByUrl("/home");
    }
    else{
      console.log('formulário inválido!')
    }
  }

}
