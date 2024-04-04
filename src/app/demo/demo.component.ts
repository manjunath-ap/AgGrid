import { Component, ViewChild } from '@angular/core';
import { CellClickedEvent, ColDef } from 'ag-grid-community';
import { ServiceService } from '../service.service';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
constructor(private srv:ServiceService,private http:HttpClient){}

ngOnInit(){
  // this.srv.getData().subscribe((data)=>{
  //   this.rowData=data
  // })
  this.rowData=this.http.get("https://ag-grid.com/example-assets/row-data.json")
}

  rowData:any;
  colDefs:ColDef[]=[
    {field:'make'},
    {field:'model'},
    {field:'price'}
  ]
  @ViewChild(AgGridAngular) grid!:AgGridAngular;

  sort_filter=
    {sortable:true,filter:true}

    celclicked(event:CellClickedEvent){
      console.log(event.data)
    }
    clear(){
      this.grid.api.deselectAll()
    }
}
