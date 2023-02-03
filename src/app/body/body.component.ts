import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  links = ['https://recipes.timesofindia.com/thumb/48668194.cms?width=1200&height=900',
            'https://assets.gqindia.com/photos/5f159df22f32014dc34caf59/master/w_1600,c_limit/Tamagoyaki%20egg%20roll.jpg',
            'https://hips.hearstapps.com/delish/assets/17/19/1494614947-delish-philly-cheesesteak-omelette-1.jpg',
            'https://assets.gqindia.com/photos/5f159d8b2f32014dc34caf55/master/w_1600,c_limit/Spanish%20Omelette.jpg',
            'https://assets.gqindia.com/photos/5f159d97218423df45d406f9/master/w_1600,c_limit/Maggi%20omelette.jpg',
            'https://assets.gqindia.com/photos/5f159db52f32014dc34caf57/master/w_1600,c_limit/Loaded-Chicken%20omelette.jpg'
          ]
  names = ['Khai Chiao, Thailand',
            'Tamagoyaki Egg Roll',
            'Philly Cheesesteak Omelet',
            'Spanish Omelette',
            'Maggi Omelette',
            'Loaded-Chicken omelette'
          ]
  imageToShow: string = 'https://recipes.timesofindia.com/thumb/48668194.cms?width=1200&height=900';
  index = 0;
  name = 'Khai Chiao, Thailand';

  prev(){
    this.index = this.index<=0 ? this.links.length-1 : --this.index; 
    this.imageToShow =  this.links[this.index] ;
    this.name = this.names[this.index];
  }

  next(){
    this.index = this.index>=this.links.length-1 ? 0 : ++this.index;
    this.imageToShow =  this.links[this.index] ;
    this.name = this.names[this.index];
  }
}
