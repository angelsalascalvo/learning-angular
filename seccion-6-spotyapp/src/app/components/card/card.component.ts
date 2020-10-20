import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {

  @Input() items:any[]; //Es un elemento de entrada del padre 

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  verArtista(item:any){
    let id;

    if(item.type == 'artist'){
      id= item.id;
    }else{
      id = item.artists[0].id;
    }

    this.router.navigate(['artist', id]);
  }
}
