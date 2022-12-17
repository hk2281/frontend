import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Shop } from '../models/shop';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-create-shop',
  templateUrl: './create-shop.component.html',
  styleUrls: ['./create-shop.component.scss']
})
export class CreateShopComponent implements OnInit{

  shopName: string = "";
  shopAddress: string = "";

  constructor(
    private shopService: ShopService,
    private toastr: ToastrService,
    private router: Router
  ){};

  ngOnInit(): void {
    
  }

  onCreate(): void {
    const shop = new Shop(this.shopName,this.shopAddress);
    this.shopService.save(shop).subscribe(
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
    this.router.navigate(['shop/']);
  }

}
