import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order.model';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})

export class MyFormComponent implements OnInit {

  model: Order = new Order("", 0, new Date(), "");

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    //Le formulaire envoyé 
    console.log(this.model);
  }


}

