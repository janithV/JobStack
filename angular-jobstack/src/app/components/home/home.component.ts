import { Component, OnInit } from '@angular/core';
import { AotCompiler } from '@angular/compiler';
import AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
}
)
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init({
      offset: 400,
      duration: 1000
  });
    window.addEventListener('load', AOS.refresh)

    document.onreadystatechange = function(){
      if(document.readyState == 'complete'){
        AOS.refresh();
      }
    }
  }

}
