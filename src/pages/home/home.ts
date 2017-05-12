import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ActionSheetController } from 'ionic-angular';
import { RedditService } from '../../app/services/reddit.service'

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	constructor(
		public actionSheetCtrl: ActionSheetController,
		private redditService: RedditService
	) {
	}

	ngOnInit() {
		this.getPosts('sports', 5);
	}

	getPosts(category, limit) {
		this.redditService.getPosts(category, limit).subscribe(response => {
			console.log(response);
		});
	}
}
