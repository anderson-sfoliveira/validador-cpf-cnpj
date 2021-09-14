import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { cpf, cnpj } from 'cpf-cnpj-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.configurarFormulario();
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      tipo: ['FISICA'],
      cnpjcpf: [null, [Validators.required, this.validarCpfCnpj]]
    });
  }

  mudartipo() {
    if ((this.formulario.get('cnpjcpf').value).length <= 14) {
      this.formulario.get('tipo').setValue('FISICA');
    } else {
      this.formulario.get('tipo').setValue('JURIDICA');
    }
  }

  validarCpfCnpj(input: FormControl) {
    let result: Boolean;

    if (input.value == null || input.value == '') {
      result = true;
    } else {
      // Não podemos utilizar o valor do "tipo" pois o método "mudarTipo()" é executado depois deste método.
      if (String(input.value).length <= 14) {
        result = cpf.isValid(input.value);
      } else {
        result = cnpj.isValid(input.value);
      }
    }

    return (result ? null : { erroCpfCnpj: true });
  }
}
