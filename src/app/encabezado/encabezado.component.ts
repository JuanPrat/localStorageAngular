import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/services/clientes-local-storage.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
    
  }

}
