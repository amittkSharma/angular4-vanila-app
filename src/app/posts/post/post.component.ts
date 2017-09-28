import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap  } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { HttpserviceService } from '../../_api/httpservice.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  details: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private api: HttpserviceService,
  ) { }

  ngOnInit() {
    this.details = this.route.paramMap.switchMap((params: ParamMap) => {
      const eventId = params.get('id');
      console.log('event id', eventId);
      return this.api.get(eventId);
    });
  }

}
