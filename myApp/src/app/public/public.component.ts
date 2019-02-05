import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {
  public = []

  constructor(private _eventService: EventService) { }

  ngOnInit() {
    this._eventService.getEvents()
      .subscribe(
        res => this.public = res,
        err => console.log(err)
      )
  }

}
