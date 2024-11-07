import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relay-on',
  templateUrl: './relay-on.component.html',
  styleUrls: ['./relay-on.component.css']
})
export class RelayOnComponent implements OnInit {

  relayOn = [
    {
      icon: 'sl-icon-target text-info-gradiant',
      field: 'Nosso alvo',
      fieldText: 'Atingir o maior número de pessoas, para que conhecam e usem os serviços das micro-empresas.'
    },
    {
      icon: 'sl-icon-mouse text-info-gradiant',
      field: 'Nossos Resultados',
      fieldText: 'Como resultados buscamos trazer mais clientes e gerar mais receita para que as micro-empresas crescam cada vez mais!.'
    },
    {
      icon: 'sl-icon-earphones-alt text-info-gradiant',
      field: 'Nossas soluções',
      fieldText: 'Nossas soluções e contato com o publico está associado diretamente com nossas redes sociais, por la podemos gerenciar nossas enquetes e os próximos radares de micro-empresas.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
