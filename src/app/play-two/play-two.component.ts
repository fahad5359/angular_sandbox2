import { Component, OnInit } from '@angular/core';
import {PlayTwoMdl} from "./play.model";
import {SpicialDealsModel} from "./spicialDeals.model";

@Component({
  selector: 'app-play-two',
  templateUrl: './play-two.component.html',
  styleUrls: ['./play-two.component.css']
})
export class PlayTwoComponent implements OnInit {
  plyToMdl:PlayTwoMdl[]=[
    new PlayTwoMdl("fad443","i think the air condtioonar is bad"),
    new PlayTwoMdl("alimmo","السلام عليكم"),
    new PlayTwoMdl("maha","there is a rat in the lab")
  ]
  arrayFor_Deals:SpicialDealsModel[]=[
    new SpicialDealsModel("baby Milk",500,true,"https://media-cdn.tripadvisor.com/media/photo-s/0e/80/e1/fc/great-stake-perfectly.jpg"),
    new SpicialDealsModel("Guns",1000+2,false,"https://images.unsplash.com/photo-1595590424283-b8f17842773f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"),
    new SpicialDealsModel("baby Milk",500,true,"https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1pbGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"),
    new SpicialDealsModel("Guns",104300+2,false,"https://images.unsplash.com/photo-1587205419020-1ff788f8ca54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"),
    new SpicialDealsModel("baby Milk",5020,true,"https://images.unsplash.com/photo-1523473827533-2a64d0d36748?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWlsa3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"),
    new SpicialDealsModel("Guns",10020+2,false,"\"https://images.unsplash.com/photo-1591123720164-de1348028a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80\"")
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
