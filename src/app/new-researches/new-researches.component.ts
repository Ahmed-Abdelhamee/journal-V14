import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { data } from '../interfaces/revision.interface';
import { GetDataService } from '../services/get-data.service';

import Swal from 'sweetalert2'


@Component({
  selector: 'app-new-researches',
  templateUrl: './new-researches.component.html',
  styleUrls: ['./new-researches.component.scss']
})
export class NewResearchesComponent implements OnInit {

  revisionData:data[]=[]

  loading:Boolean=false;
  
  constructor(private title:Title, private getserviceData:GetDataService) { }

  ngOnInit(): void {
    this.title.setTitle("new researches");

    this.loading=true 

    this.getserviceData.getRevisionData().subscribe(data=>{
      this.revisionData=data
    })
    
    this.loading=false 

  }

  GeneralInformationText1:string=""
  GeneralInformationText2:string=""

  showGeneralInformation(General1:string,General2:string){
    this.GeneralInformationText1=General1
    this.GeneralInformationText2=General2
  }


  comment:string="";
  showComments(comnt:string){
    this.comment=comnt;
  }


  abstract:string="";
  showAbstract(abst:string){
    this.abstract=abst;
  }




  
  deleteItem(item:any){
  // ------------------------------------ code for design --------------------------------
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger',
    },
    // buttonsStyling: false,
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Are you sure?',
    text: "You want to remove this item!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel! ',
    reverseButtons: true,
    
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      ).then(()=>{
        this.getserviceData.delete_from_NewResearch(item.id)
        window.location.reload()
      })
      
  }else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelled',
        'Your imaginary file is safe :)',
        'error'
      )
    }
  })
}

}
