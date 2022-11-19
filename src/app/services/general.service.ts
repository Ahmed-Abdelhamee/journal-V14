import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serverURL } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {


  constructor(private http:HttpClient) { }

  swalDelete(identify:any , id:any){
    // ------------------------------------ code for design --------------------------------
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
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
          if(identify=="delete_carsoul"){
            this.http.delete(serverURL.serverURL+`home-carousel/${id}`).subscribe(),
            window.location.reload()
          }else if(identify=="delete_HomeData"){
            this.http.delete(serverURL.serverURL+`home-data/${id}`).subscribe()
            window.location.reload()
          }else if(identify=="delete_Istructions"){
            this.http.delete(serverURL.serverURL+`instruction-data/${id}`).subscribe()
            window.location.reload()
          }else if(identify=="delete_Aim"){
            this.http.delete(serverURL.serverURL+`aim-data/${id}`).subscribe()
            window.location.reload()
          }else if(identify=="delete_Board"){
            this.http.delete(serverURL.serverURL+`board-data/${id}`).subscribe()
            window.location.reload()
          }else if(identify=="delete_Reviewer"){
            // this.http.delete(serverURL.serverURL+`board-reviewers/${id}`).subscribe()
            window.location.reload()
          }else if(identify=="delete_ReviewersGroup"){
            this.http.delete(serverURL.serverURL+`board-reviewers/${id}`).subscribe()
            window.location.reload()
          }else if(identify=="delete_About"){
            this.http.delete(serverURL.serverURL+`about/${id}`).subscribe()
            window.location.reload()
          }else if(identify=="delete_Support"){
            this.http.delete(serverURL.serverURL+`support/${id}`).subscribe()
            window.location.reload()
          }else if(identify=="delete_Contact"){
            this.http.delete(serverURL.serverURL+`contact/${id}`).subscribe()
            window.location.reload()
          }else if(identify=="Approve"){
            this.http.delete(serverURL.serverURL+`authorsapproval/${id}`).subscribe()
            window.location.reload()
          }else if(identify=="Note"){
            this.http.delete(serverURL.serverURL+`researches-notes/${id}`).subscribe()
            window.location.reload()
          }
          else if(identify=="ResearchResult"){
            this.http.delete(serverURL.serverURL+`revision-results/${id}`).subscribe()
            window.location.reload()
          }else if(identify=="CompeletedResearch"){
            this.http.delete(serverURL.serverURL+`complete-reseaches/${id}`).subscribe()
            window.location.reload()
          }
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
