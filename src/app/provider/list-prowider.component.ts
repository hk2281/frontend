import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Provider } from '../models/provider';
import { ProviderService } from '../services/provider.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-prowider',
  templateUrl: './list-prowider.component.html',
  styleUrls: ['./list-prowider.component.scss']
})
export class ListProwiderComponent  implements OnInit {

  provider: Provider[] = [];
  isListEmpty: undefined | any = null;

  constructor(
    private providerService: ProviderService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.loadProvider();
  }

  loadProvider(): void {
    this.providerService.listAll().subscribe(
      (data) => {
        this.provider = data;
      },
      (err) => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.isListEmpty = 'список пуст';
        console.log(this.isListEmpty);
      }
    );
  }

  delete(id: number): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: true,
    });
    swalWithBootstrapButtons
      .fire({
        title: 'вы точно хотите отправить запись в саму преисподню?',
        width: 600,
        padding: '3em',
        icon: 'warning',
        color: '#719bdd',
        showCancelButton: true,
        reverseButtons: true,
        confirmButtonText: 'Да, уничтожить',
        cancelButtonText: 'No, пощадить?',
        background: '#fff url("./../assets/trees.png")',
        backdrop: `
          rgba(80,40,10,0.4)
          url("./../assets/nyan-cat.gif")
          left top
          no-repeat
        `,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.providerService
            .delete(id)
            .subscribe((res) => this.loadProvider());
          swalWithBootstrapButtons.fire('Удалено!', 'Твоя запись в аду');
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Выдохни, с твоей записью все хорошо',
            'В этот раз мы ее пощадили'
          );
        }
      });
  }
}
