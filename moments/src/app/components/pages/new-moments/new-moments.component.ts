import { MomentService } from './../../../services/moment.service';
import { Component, OnInit } from '@angular/core';

import { Moment } from 'src/app/Moments';

@Component({
  selector: 'app-new-moments',
  templateUrl: './new-moments.component.html',
  styleUrls: ['./new-moments.component.css']
})
export class NewMomentsComponent implements OnInit {
  btnText = "Compartilhar";

  constructor(private momentService: MomentService) { }

  ngOnInit(): void {
  }

  async createHandler(moment: Moment) {
    const formData = new FormData()

    formData.append("title", moment.title);
    formData.append("description", moment.description);
    
    if(moment.image) {
      formData.append("image", moment.image);
    }

    await this.momentService.createMoment(formData).subscribe();
  }

}
