import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Worker } from '../models/worker';
import { WorkerService } from '../services/worker.service';

@Component({
  selector: 'app-detail-worker',
  templateUrl: './detail-worker.component.html',
  styleUrls: ['./detail-worker.component.scss']
})
export class DetailWorkerComponent implements OnInit{

  worker: Worker| any = null;

  keys: any

  constructor(
    private workerService: WorkerService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    
  ) {};

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.workerService.detail(id).subscribe(
      data => {
        this.worker = data;
        this.keys = Object.keys(data['shop']);
        console.log(this.keys)
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.volver()
      }
    )
  };

  volver(): void {
    this.router.navigate(['worker/']);
  }

}
