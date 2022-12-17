import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Assortment } from '../models/assortment';
import { AssortmentService } from '../services/assortment.service';

@Component({
  selector: 'app-update-assortment',
  templateUrl: './update-assortment.component.html',
  styleUrls: ['./update-assortment.component.scss']
})
export class UpdateAssortmentComponent implements OnInit {
  assortment: Assortment | any = null;

  constructor(

    private assortmentService: AssortmentService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    
  ) {};

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.assortmentService.detail(id).subscribe(
      data => {
        this.assortment = data;
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['assortment/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    console.log(this.assortment)
    this.assortmentService.update(id, this.assortment).subscribe(
      data => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['assortment/']);
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['assortment/']);
  }

}
