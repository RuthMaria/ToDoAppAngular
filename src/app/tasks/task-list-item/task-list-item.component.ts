import { TaskService } from './../shared/task.service';
import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../shared/task';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css'],
})
export class TaskListItemComponent {
  /* input é um atributo do componente, semelhante a passar uma prop no react*/
  @Input()
  task!: Task;

  constructor(private taskService: TaskService) {}

  remove(task: Task) {
    this.taskService.delete(task.id);
  }

  onCompletedCheckChange(task: Task) {
    this.taskService.save(task);
  }
}
