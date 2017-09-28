import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { HttpserviceService } from '../../_api/httpservice.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css'],
  providers: [HttpserviceService]
})
export class PostlistComponent implements OnInit {

  routeName: string;
  posts: Observable<any[]>;

  constructor(
    private route: ActivatedRoute,
    private api: HttpserviceService
  ) { }

  ngOnInit() {
    this.posts = this.api.getAll().map(posts => {
      return posts;
    });

    this.routeName = this.route.snapshot.data.routeName;
  }

}
