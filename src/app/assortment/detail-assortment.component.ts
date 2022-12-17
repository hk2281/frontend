import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Assortment } from '../models/assortment';
import { AssortmentService } from '../services/assortment.service';

@Component({
  selector: 'app-detail-assortment',
  templateUrl: './detail-assortment.component.html',
  styleUrls: ['./detail-assortment.component.scss'],
})
export class DetailAssortmentComponent implements OnInit {

  assortment: Assortment| any = null;

  keys: any;

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
        this.keys = Object.keys(data['provider']);
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
    this.router.navigate(['assortment/']);
  }
}
