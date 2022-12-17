import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Provider } from '../models/provider';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-create-prowider',
  templateUrl: './create-prowider.component.html',
  styleUrls: ['./create-prowider.component.scss']
})
export class CreateProwiderComponent implements OnInit{

  name = '';
  contact = '';
  country = '';

  constructor(
    private providerService: ProviderService,
    private toastr: ToastrService,
    private router: Router
  ){};

  ngOnInit(): void {
    
  }

  onCreate(): void {
    const provider = new Provider(this.name,this.country,this.contact);
    this.providerService.save(provider).subscribe(
      data => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['category/']);
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
