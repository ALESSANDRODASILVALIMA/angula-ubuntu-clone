import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boot',
  templateUrl: './boot.component.html',
  styleUrls: ['./boot.component.scss']
})
export class BootComponent {

  progresso:string = "5s"
  progressoNumber:number = Number.parseInt(this.progresso.replace("s",""));

  constructor(private router: Router){

  }

  ngOnInit(){
    console.log(this.progressoNumber)
    let interval = setInterval(()=>{
      this.progressoNumber = this.progressoNumber + Math.floor(Math.random() * 10 ) +40;
      if(this.progressoNumber >= 10){
        this.progressoNumber = 100;
        clearInterval(interval);
        this.router.navigate(['logon']);
      }
      
    }, 2000)
  }
}
