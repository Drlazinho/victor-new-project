import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-content',
  templateUrl: './top-content.component.html',
  styleUrls: ['./top-content.component.css']
})
export class TopContentComponent implements OnInit {

  imagePath='../assets/images/innerpage/about-us.jpg';

  openInstagram() {
    window.open('https://www.instagram.com/microwebr?igsh=MWIxajMydWRpMDk2dA%3D%3D', '_blank')}

  constructor() { }

  ngOnInit(): void {
  }

}
