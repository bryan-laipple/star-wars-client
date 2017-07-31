import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

@Component({
  selector: 'sw-details',
  template:
  `
    <md-card>
      <md-card-header>
        <img md-card-avatar [src]="it.avatar">
        <md-card-title>{{ it.name }}</md-card-title>
        <md-card-subtitle>{{ it.id }}</md-card-subtitle>
      </md-card-header>
      <div md-card-image>
        <img class="content-image" [src]="it.image">
      </div>
      <md-card-content>
        <p>
          {{ it.content }}
        </p>
      </md-card-content>
      <md-card-actions>
        <button md-button>LIKE</button>
        <button md-button>SHARE</button>
      </md-card-actions>
    </md-card>
  `,
  styles: [
  `
    .content-image {
      display: block;
      width: 400px;
      height: 400px;
      margin: 0 auto;
    }
  `
  ]
})
export class DetailsComponent implements OnInit {
  it: any;

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const type = params['type'];
      const id = params['id'];
      this.update(type, id);
    });
  }

  update(type: string, id: number) {
    this.it = {
      id: id,
      avatar: 'http://lorempixel.com/50/50/?id=' + id,
      image: 'http://lorempixel.com/400/400/?id=' + id,
      name: 'My name',
      content: 'Duis laoreet consequat fermentum. Sed finibus tempor sapien sit amet sollicitudin. Suspendisse vestibulum lacus imperdiet arcu venenatis, non convallis neque faucibus. Donec hendrerit ultricies enim vitae pulvinar. Phasellus ullamcorper ultrices dui, ut imperdiet ipsum pretium a. Curabitur laoreet, lectus nec laoreet convallis, erat tellus rhoncus enim, nec rutrum lorem enim quis ipsum. Sed eleifend commodo orci ac posuere. Etiam commodo massa nisl, ac bibendum felis imperdiet non. Fusce purus ligula, faucibus at felis ut, consequat congue urna. Sed rutrum urna in erat dignissim consectetur.'
    }
  }

}
