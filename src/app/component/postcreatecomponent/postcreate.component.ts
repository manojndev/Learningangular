import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: 'postcreate.component.html',
  styleUrls: ['./postcreate.component.scss']
 
})
export class PostcreateComponent {

posttitle="please enter the post and click on save button";
value1="";

  onAddPost(){


this.posttitle=this.value1;

}





}
