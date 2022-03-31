import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  memberBeingEdited: object = null;
  inCrew: boolean = false;


  crew: object[] = [
    {name: 'Eileen Collins', firstMission: false},
    {name: 'Mae Jemison', firstMission: false},
    {name: 'Ellen Ochoa', firstMission: true}
  ];

  constructor() { }

  ngOnInit() {
  }



  // add(memberName: string, isFirst: boolean) {
  //     let errorMsg = '';
  //     if(memberName === '') {
  //        errorMsg = 'Please enter a crew member.';
  //      }
  //     // for (const name in this.crew) {
  //     //   console.log(${this.crew[name]});
  //     // }

  //     // else if (this.crew[0].name.includes(memberName)) {
  //     //    errorMsg = `${memberName} is already in your crew.`;
  //     // } else {
  //     //    this.crew.push({name: memberName, firstMission: isFirst});
  //     // }
  //     // return errorMsg;
  //   this.crew.push({name: memberName, firstMission: isFirst});
  // }


  add(memberName: string, isFirst: boolean) {
    for (let i=0; i < this.crew.length; i++) {
        if(this.crew[i]['name'] === memberName) {
            this.inCrew = true;
        }
    }
    if (!this.inCrew) {
        this.crew.push({name: memberName, firstMission: isFirst});
    }
    this.inCrew = false;
  }


  remove(member: object) {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }

  edit(member: object) {
    this.memberBeingEdited = member;
 }

 save(name: string, member: object) {
  member['name'] = name;
  this.memberBeingEdited = null;
  }

}
