import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

/* added const data 
	array of objects  */

const data = [{
		title: 'post1',
		body: 'hi',
		id: 0

},{
		title: 'post2',
		body: 'hi2',
		id: 1

},{
		title: 'post3',
		body: 'hi3',
		id: 2

},]

/* component decorator */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

/* added -posts : type */
 	posts: any

  constructor(public navCtrl: NavController) {

/* added */
	
	this.posts = data;
  }

}

