import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Pessoa } from '../models/pessoa.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { PessoasService } from '../services/pessoas.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  private pessoa : Pessoa;
  private pessoaForm : FormGroup;
  public arrayPessoa: any



  id: Guid
  alt : number
  peso : number
  resultado: string
  inf: string
  gen: string
  imagem: any = "assets/icon/favicon.png"

  constructor(
    private pessoaService : PessoasService 
  ) {}

  ngOnInit(){}

  enviar(){
    if (this.pessoaForm.valid){
      this.pessoaService.inserir(this.pessoaForm.value)
    }}

  IMC(){

    var conta = this.peso / this.alt **2

    if (this.gen == 'F') {

      if (conta <= 19){
        this.inf = "Abaixo do Peso"
        this.imagem = "assets/icon/cintura.png"
      }
  
      else if (conta > 19 && conta <= 27.3){
        this.inf = "Peso Normal"
        this.imagem = "assets/icon/mulher.png"
      }    
  
      else {
        this.inf = "Acima do Peso"
        this.imagem = "assets/icon/cintura.png"
      }    
      
    }

    if (this.gen == 'M') {

      if (conta <= 20.7){
        this.inf = "Abaixo do Peso"
        this.imagem = "assets/icon/favicon.png"
      }
  
      else if (conta > 20.7 && conta <= 27.8){
        this.inf = "Peso Normal"
        this.imagem = "assets/icon/favicon.png"
      }    
  
      else {
        this.inf = "Acima do Peso"
        this.imagem = "assets/icon/homem.png"
      }    
      
    }

      this.resultado = conta.toFixed(2)

    this.pessoa = {
    id: Guid.createEmpty(),
    alt : this.alt.toString(),
    peso : this.peso.toString(),
    resultado: this.resultado.toString(),
    inf: this.inf,
    gen: this.gen
    }
    this.pessoaService.inserir(this.pessoa)
  }
}
