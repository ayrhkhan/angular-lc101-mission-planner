import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experimentBeingEdited: string = null;
  inExperiments: boolean = false;


  experimentItems: string[] = ['Mars soil sample', 'Plant growth in habitat', 'Human bone density', 'Oxygen tanks'];

  constructor() { }

  ngOnInit() {
  }

  add(item: string) {
    for (let i=0; i < this.experimentItems.length; i++) {
        if(this.experimentItems[i] === item) {
            this.inExperiments = true;
        }
    }
    if (!this.inExperiments) {
        this.experimentItems.push(item);
    }
    this.inExperiments = false;
  }


  remove(item: string) {
    let index = this.experimentItems.indexOf(item);
    this.experimentItems.splice(index, 1);
  }

  edit(item: string) {
    this.experimentBeingEdited = item;
 }

 //  save(name: string, member: object) {
//   member['name'] = name;
//   this.memberBeingEdited = null;
//   }
}
