import { Component, OnInit } from '@angular/core';
import { Assortment } from '../models/assortment';
import { AssortmentService } from '../services/assortment.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-assortment',
  templateUrl: './list-assortment.component.html',
  styleUrls: ['./list-assortment.component.scss'],
})
export class ListAssortmentComponent implements OnInit {
  assortment: Assortment[] | any = [];

  isListEmpty: undefined |any = null;


  constructor(
    private assortmentService: AssortmentService,
    private toastr: ToastrService,

      
  ) {};

  ngOnInit(): void {
    this.loadAssortment();
  }

  loadAssortment(): void{
    this.assortmentService.lista().subscribe(
      data => {
        this.assortment = data;
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.isListEmpty = 'список пуст'
        console.log(this.isListEmpty)
      }
    );
  }


  delete(id: number): void{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: true
    })
    swalWithBootstrapButtons.fire({
      title: 'вы точно хотите отправить запись в саму преисподню?',
      width: 600,
      padding: '3em',
      icon: 'warning',
      color: '#719bdd',
      showCancelButton: true,
      reverseButtons: true,
      confirmButtonText: 'Да, уничтожить',
      cancelButtonText: 'No, пощадить?',
      background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
      backdrop: `
        rgba(80,40,10,0.4)
        url("https://sweetalert2.github.io/images/nyan-cat.gif")
        left top
        no-repeat
      `
      
    }).then((result) => {
      if (result.isConfirmed) {
        this.assortmentService.delete(id).subscribe(res => this.loadAssortment())
        swalWithBootstrapButtons.fire(
          'Удалено!',
          'Твоя запись в аду'   
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Выдохни, с твоей записью все хорошо',
          'В этот раз мы ее пощадили'
        )
      }
    })
    }
}

