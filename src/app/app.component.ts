import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.configurarFormulario();
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      tipo: ['FISICA'],
      cnpjcpf: [null, [Validators.required/*, this.validarTipoPessoa, this.validarDuplicidadeRegistro*/] ]
    });
  }

  mudartipo() {
//    console.log(this.formulario.get('cnpjcpf').value);
    
    if ((this.formulario.get('cnpjcpf').value).length <= 14) {
      this.formulario.get('tipo').setValue('FISICA');
    } else {
      this.formulario.get('tipo').setValue('JURIDICA');
    }
  }

}
