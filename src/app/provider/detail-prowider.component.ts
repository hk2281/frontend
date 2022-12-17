import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Provider } from '../models/provider';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-detail-prowider',
  templateUrl: './detail-prowider.component.html',
  styleUrls: ['./detail-prowider.component.scss']
})
export class DetailProwiderComponent implements OnInit {


  provider: Provider|any =null;

  constructor(
    private providerService: ProviderService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    
  ) {};

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.providerService.detail(id).subscribe(
      data => {
        this.provider = data;
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
    this.router.navigate(['provider/']);
  }

}
