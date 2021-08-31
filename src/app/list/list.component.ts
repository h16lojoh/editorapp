import { Component, OnInit } from '@angular/core';
import { ListServiceService } from '../list-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public objects = []


  constructor(private _listServiceService: ListServiceService) { }

  ngOnInit() {
    this._listServiceService.getList().subscribe(data => this.objects = data);
  }

}
