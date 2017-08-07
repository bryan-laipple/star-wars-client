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
        <md-card-subtitle>
          <a class="mat-card-subtitle" target="_blank" [href]="it.wiki?.href">{{ it.wiki?.href }}</a>
        </md-card-subtitle>
      </md-card-header>
      <div md-card-image>
        <img class="content-image" [src]="it.image">
      </div>
      <md-card-content>
        <pre>{{ it.data | summary }}</pre>
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
      margin: 0 auto;
    }
    @media (min-width: 320px) {
      .content-image {
        width: 300px;
      }
    }
    @media (min-width: 480px) {
      .content-image {
        width: 400px;
      }
    }
    @media (min-width: 768px) {
      .content-image {
        width: 500px;
      }
    }
  `
  ]
})
export class DetailsComponent implements OnInit {
  it = {
    id: '',
    avatar: '',
    name: '',
    image: '',
    wiki: {href: ''},
    data: {}
  };

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
        id: data.id,
        avatar: '/assets/Wiki-shrinkable.png',
        name: data.name || data.title,
        image: `${data.image}/revision/latest/scale-to-width-down/500`,
        wiki: this.findWikiLink(data),
        data: data
      }
    });
  }

  findWikiLink(data: any) {
    let links = data.links || [];
    return links.find(l => l.rel.toLowerCase() == 'wookieepedia')
  }
}
