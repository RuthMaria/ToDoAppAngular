import { TaskService } from './../shared/task.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../shared/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  task: Task = new Task();
  title: string = 'Nova tarefa';

  constructor(
    private activatedRoute: ActivatedRoute /*rota que está ativa no momento*/,
    private router: Router /*Responsável pela navegação*/,
    private taskService: TaskService //Nossas regras de negócio
  ) {}

  ngOnInit() {
    const id =
      this.activatedRoute.snapshot.paramMap.get(
        'id'
      ); /* Pega o parâmetro da rota */

    if (id) {
      const foundTask = this.taskService.getById(parseInt(id));

      if (foundTask) {
        this.task = foundTask;
        this.title = 'Alterando tarefa';
      }
    }
  }

  onSubmit() {
    this.taskService.save(this.task);
    this.router.navigate(['']); // redireciona o usuário para outra rota
  }
}
