import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as shape from 'd3-shape';
import { NgxGraphModule } from '@swimlane/ngx-graph';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  name = 'Angular 5';
  hierarchialGraph = {nodes: [], links: []}
  curve = shape.curveBundle.beta(1);
  // curve = shape.curveLinear;

  public ngOnInit():void {
    this.showGraph();
  }

  showGraph() {
    this.hierarchialGraph.nodes = [

  {
    id: 'start1',
    label: 'avro'
   
  },
  {
    id: 'start2',
    label: 'avro'
  },
  
   {
    id: 'start3',
    label: 'avro'
  },
  
  {
    id: 'ParquetSuccess01',
    label: 'ParquetSuccess'
  },
  
   {
    id: 'ParquetSuccess02',
    label: 'ParquetSuccess'
  },
  
  {
    id: 'ParquetError01',
    label: 'ParquetError'
  },
  
   {
    id: 'D1MPPSuccess01',
    label: 'D1MPPSuccess'
  },
  
   {
    id: 'D1MPPSuccess02',
    label: 'D1MPPSuccess'
  },
  
  {
    id: 'D1MPPError01',
    label: 'D1MPPError'
  },
  
   {
    id: 'D2ASuccess01',
    label: 'D2ASuccess'
  },
  {
    id: 'D2AError01',
    label: 'D2AError'
  },
  
  {
    id: 'D2BSuccess01',
    label: 'D2BSuccess'
  },
  
   {
    id: 'D2BError01',
    label: 'D2BError'
  }
  ];

  this.hierarchialGraph.links = [
  
	  {
      source: 'start1',
      target: 'ParquetSuccess01',
      label: 'tbl.avro'
    },
    
    {
      source: 'start2',
      target: 'ParquetSuccess02',
      label: 'tbl.avro'
    },
    
     {
      source: 'start3',
      target: 'ParquetError01',
      label: 'tbl.avro'
    },
    
     {
      source: 'ParquetSuccess01',
      target: 'D1MPPSuccess01',
      label: 'tbl.parquet'
    },
    
    {
      source: 'ParquetSuccess02',
      target: 'D1MPPSuccess02',
      label: 'tbl.parquet'
    },
    
     {
      source: 'ParquetError01',
      target: 'D1MPPError01',
      label: 'tbl.parquet'
    },
    
     {
      source: 'D1MPPSuccess01',
      target: 'D2ASuccess01',
      label: 'tbl.d1mpp'
    },
    
    {
      source: 'D1MPPSuccess02',
      target: 'D2ASuccess01',
      label: 'tbl.d1mpp'
    },
    
     {
      source: 'D1MPPError01',
      target: 'D2AError01',
      label: 'tbl.d1mpp'
    },
    
     {
      source: 'D2ASuccess01',
      target: 'D2BSuccess01',
      label: 'tbl.d2a'
    },
    
     {
      source: 'D2AError01',
      target: 'D2BError01',
      label: 'tbl.d2a'
    }
  ];

  }
}
