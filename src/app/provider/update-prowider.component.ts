import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Provider } from '../models/provider';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-update-prowider',
  templateUrl: './update-prowider.component.html',
  styleUrls: ['./update-prowider.component.scss']
})
export class UpdateProwiderComponent implements OnInit{
  provider: Provider|any = null;

  constructor(

    private providerServise: ProviderService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    
  ) {};


  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.providerServise.detail(id).subscribe(
      data => {
        this.provider = data;
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['provider/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    console.log(this.provider)
    this.providerServise.update(id, this.provider).subscribe(
      data => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['provider/']);
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['provider/']);
  }


}
