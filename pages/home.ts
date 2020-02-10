import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  show: boolean = false;
  courseName: string = '';
  rating: any = '';
  constructor(public navCtrl: NavController) {
  }

  async onClick(){
    if(this.courseName=='' || this.rating == '' || this.rating<=0 || this.rating>5){
      alert('Invalid CourseName or Rating')
    }
    else{
      this.show = true;
    }
  }

  onClear(){
    this.courseName = '';
    this.rating = '';
    this.show = false;
  }
}
