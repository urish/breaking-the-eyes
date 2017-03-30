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

}
