import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/services/local-storage.service';
import { Cliente } from 'src/models/clientes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clientes:Array<Cliente>;

  constructor() { 
  }

  ngOnInit(): void {
    
  }



}
