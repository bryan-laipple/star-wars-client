import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ApiService} from '../api.service';

@Component({
  selector: 'sw-list',
  template:
  `
    <div class="sw-list">
      <md-list>
        <md-list-item *ngFor="let one of many">
          <div md-line class="accent" (click)="goToDetails(one)">
            <img md-list-avatar [src]="one.avatar">
            <span class="name"> {{one.name}} </span>
          </div>
        </md-list-item>
      </md-list>
    </div>
  `,
  styles: [
    `
    md-list-item {
      cursor: pointer;
    }
    
    /* hack for theme in md-list */
    .sw-list {
      background: #424242;
      color: #fff;
    }
    
    md-list-item img {
      margin-left: 5px;
      margin-right: 5px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      flex-shrink: 0;
      vertical-align: middle;
    }
    
    md-list-item .name {
      vertical-align: middle;
      height: 50px;
    }
    
    /* some pseudo css magic to get above vertical align to work */
    md-list-item:before {
      content: "";
      display: inline-block;
      vertical-align: middle;
      height: 100%;
    }
  `
  ]
})
export class ListComponent implements OnInit {
  many: any[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: ApiService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const type = params['type'];
      this.update(type);
    });
  }

  goToDetails(one: any) {
    this.router.navigate([one.id], {relativeTo: this.route});
  }

  update(type: string) {
    this.service.getList(type).subscribe(data => {
      const updated = [];
      const key = Object.keys(data)[0];
      data[key].forEach(o => {
        updated.push({
          id: o.id,
          avatar: o.avatar,
          name: o.name || o.title
        })
      });
      this.many = updated;
    });
  }

}
