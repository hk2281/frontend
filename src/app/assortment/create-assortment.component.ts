import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Assortment } from '../models/assortment';
import { AssortmentService } from '../services/assortment.service';

@Component({
  selector: 'app-create-assortment',
  templateUrl: './create-assortment.component.html',
  styleUrls: ['./create-assortment.component.scss']
})
export class CreateAssortmentComponent implements OnInit {

  item = '';
  price:number | any = null;
  provider: number | any = null ;
  category: number| any = null;

  constructor(
    private assortmentService: AssortmentService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    
  }

  onCreate(): void {
    const assortment = new Assortment(this.item, this.price, this.provider,this.category);
    this.assortmentService.save(assortment).subscribe(
      data => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }
  volver(): void {
    this.router.navigate(['/']);
  }
}
