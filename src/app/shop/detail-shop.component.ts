import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Shop } from '../models/shop';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-detail-shop',
  templateUrl: './detail-shop.component.html',
  styleUrls: ['./detail-shop.component.scss']
})
export class DetailShopComponent implements OnInit{

  shop: Shop | any = null;

  constructor(
    private shopService: ShopService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    
  ) {};

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.shopService.detail(id).subscribe(
      data => {
        this.shop = data;
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
    this.router.navigate(['shop/']);
  }
}
