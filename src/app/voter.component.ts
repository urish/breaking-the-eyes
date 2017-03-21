import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.scss']
})
export class VoterComponent {
  @Input() title: string;
  @Input() votes = 0;

  upvote() {
    this.votes++;
  }

  downvote() {
    this.votes--;
  }
}
