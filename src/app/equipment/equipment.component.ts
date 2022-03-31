import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  itemBeingEdited: string = null;
  inItems: boolean = false;

  equipmentItems: string[] = ['Habitat dome', 'Drones', 'Food containers', 'Oxygen tanks'];

  constructor() { }

  ngOnInit() {
  }


  add(item: string) {
    for (let i=0; i < this.equipmentItems.length; i++) {
        if(this.equipmentItems[i] === item) {
            this.inItems = true;
        }
    }
    if (!this.inItems) {
        this.equipmentItems.push(item);
    }
    this.inItems = false;
  }


  remove(item: string) {
    let index = this.equipmentItems.indexOf(item);
    this.equipmentItems.splice(index, 1);
  }

  edit(item: string) {
    this.itemBeingEdited = item;
 }

//  save(updatedItem: string, itemArray: array) {
//   let index = this.equipmentItems.indexOf(updatedItem);
//   this.equipmentItems[index] = updatedItem;
//   this.itemBeingEdited = null;
//   }
}


// i didnt figure out how to save in the bonus mission, i know i need to reference the array and update it but idk how 