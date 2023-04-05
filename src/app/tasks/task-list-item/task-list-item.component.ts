import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../shared/task';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css'],
})
export class TaskListItemComponent implements OnInit {
  /* input é um atributo do componente*/
  @Input()
  task!: Task;

  ngOnInit(): void {}
}
