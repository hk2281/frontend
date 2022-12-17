import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Worker } from '../models/worker';
import { WorkerService } from '../services/worker.service';

@Component({
  selector: 'app-update-worker',
  templateUrl: './update-worker.component.html',
  styleUrls: ['./update-worker.component.scss'],
})
export class UpdateWorkerComponent implements OnInit {
  worker: Worker | any = null;
  constructor(
    private workerServise: WorkerService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.workerServise.detail(id).subscribe(
      (data) => {
        this.worker = data;
      },
      (err) => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['worker/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.workerServise.update(id, this.worker).subscribe(
      (data) => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['worker/']);
      },
      (err) => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['worker/']);
  }
}
