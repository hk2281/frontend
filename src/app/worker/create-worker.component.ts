import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Worker } from '../models/worker';
import { WorkerService } from '../services/worker.service';

@Component({
  selector: 'app-create-worker',
  templateUrl: './create-worker.component.html',
  styleUrls: ['./create-worker.component.scss']
})
export class CreateWorkerComponent implements OnInit{

  firstName: string = '';
  lastName: string = '';
  contact: string = '';
  positionRole: string= '';
  shop: number | any = null;

  constructor(
    private workerService: WorkerService,
    private toastr: ToastrService,
    private router: Router
  ){};

  ngOnInit(): void {
    
  }

  onCreate(): void {
    const worker = new Worker(this.firstName,this.lastName, this.positionRole,this.contact, this.shop);
    console.log(worker)
    this.workerService.save(worker).subscribe(
      data => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['shop/']);
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }
  volver(): void {
    this.router.navigate(['worker/']);
  }

}
