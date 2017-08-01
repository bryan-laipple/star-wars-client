import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {ApiService} from '../api.service';

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
              private router: Router,
              private service: ApiService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const type = params['type'];
      const id = params['id'];
      this.update(type, id);
    });
  }

  update(type: string, id: string) {
    this.service.getDetails(type, id).subscribe(data => {
      this.it = {
        id: data.Id,
        avatar: data.Avatar,
        name: data.Name,
        image: data.Image,
        content: data.Content
      }
    });
  }

}
