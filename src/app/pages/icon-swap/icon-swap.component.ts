import { Component, OnInit } from '@angular/core';
import {Icon} from "../../model/icon";

@Component({
  selector: 'app-icon-swap',
  templateUrl: './icon-swap.component.html',
  styleUrls: ['./icon-swap.component.css']
})
export class IconSwapComponent implements OnInit {

  constructor() { }

  icons: Icon[] = [];

  ngOnInit(): void {
    this.initSomeIcons();
  }

  getValueOfSelectMenu(event: any) {
    console.log(event.target.value)

    if (event.target.value == 1) {
      this.newArrayAndInitIcons()
      this.icons[0].isOpacity = "icon-active";
      this.icons[4].isOpacity = "icon-active";
      this.icons[5].isOpacity = "icon-active";
    } else if (event.target.value == 2) {
      this.newArrayAndInitIcons()
      this.icons[1].isOpacity = "icon-active";
      this.icons[2].isOpacity = "icon-active";
      this.icons[3].isOpacity = "icon-active";
    } else if (event.target.value == 3) {
      this.newArrayAndInitIcons()
      this.icons[4].isOpacity = "icon-active";
      this.icons[5].isOpacity = "icon-active";
    }


  }

  newArrayAndInitIcons() {
    this.icons = [];
    this.initSomeIcons();
  }

  cssBuilder(icon: Icon) {
    return icon.className + " " + icon.isOpacity;
  }

  initSomeIcons() {
    this.icons.push(new Icon("devicon-aftereffects-plain", "icon-inactive"));
    this.icons.push(new Icon("devicon-atom-original", "icon-inactive"));
    this.icons.push(new Icon("devicon-bootstrap-plain", "icon-inactive"));
    this.icons.push(new Icon("devicon-codepen-plain", "icon-inactive"));
    this.icons.push(new Icon("devicon-css3-plain", "icon-inactive"));
    this.icons.push(new Icon("devicon-aftereffects-plain", "icon-inactive"));
  }

}
