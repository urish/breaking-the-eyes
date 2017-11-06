import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {
  @Input() title: string;
  @Input() votes = 0;

  constructor() { }

  ngOnInit() {
  }

  upvote() {
    this.votes++;
  }

  downvote() {
    this.votes--;
  }

  voteKeyDown($event: KeyboardEvent, vote: number) {
    const key = $event.which;
    if (key === 13 || key === 32) {
      this.votes += vote;
    }
  }
}
