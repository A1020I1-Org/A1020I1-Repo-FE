import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-computer',
  templateUrl: './delete-computer.component.html',
  styleUrls: ['./delete-computer.component.css']
})
export class DeleteComputerComponent implements OnInit {
  id!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
