import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-edit-delete-research',
  templateUrl: './edit-delete-research.component.html',
  styleUrls: ['./edit-delete-research.component.scss']
})
export class EditDeleteResearchComponent implements OnInit {

  constructor(private formbuilder:FormBuilder , private service:GetDataService) { }

  btnAddNewResearch:boolean=true;
  
  editPublishedVolumeName=this.formbuilder.group({
    oldId:["",Validators.required],
    newId:["",Validators.required]
  })

  
  editGroupName=this.formbuilder.group({
    id:["",Validators.required],
    // researchGroupNames:this.formbuilder.array([])
    oldGroupNameId:["",Validators.required],
    newGroupNameId:["",Validators.required]
  })

  
  publishedVolumes=this.formbuilder.group({
    id:["",Validators.required],
    researchGroupNames:this.formbuilder.array([])
  })

  researchersArray:any // for get reaserchers the array in researchesGroups

  researchGroubData=this.formbuilder.group({
    id:["",Validators.required],
      researches:this.formbuilder.array([])
  }) 

  uploadResearchFileURL:any="";
  research=this.formbuilder.group({
    title:["",Validators.required],
    pages:["",Validators.required],
    summary:["",Validators.required],
    basicWords:["",Validators.required],
    researchers:this.formbuilder.array([]),
    researchfile:["",Validators.required],
  })




  deletePublishedVolume_=this.formbuilder.group({
    id:["",Validators.required],
  })

  deleteGroup_=this.formbuilder.group({
    id:["",Validators.required],
    GroupNameId:["",Validators.required],
  })

  deleteResearch_=this.formbuilder.group({
    id:["",Validators.required],
    GroupNameId:["",Validators.required],
    title:["",Validators.required],
  })


  ngOnInit(): void {
  }

  
  get getresearchesGroups(){  // get the big array of group names
    return this.publishedVolumes.get("researchGroupNames") as FormArray
  }
  get getResearches(){
    return this.researchGroubData.get("researches") as FormArray
  }
  get getResearch(){
    return this.researchGroubData.get("research") as FormGroup
  }
  addResearch(){
    let theGroupResearches=this.researchGroubData.get("researches") as FormArray
    theGroupResearches.push(this.research) // push research in researches array
    this.getresearchesGroups.push(this.researchGroubData) // push the object group variable for a group of researches in the real researches groups
    this.researchersArray=this.research.get("researchers") as FormArray  // store the researchers array in global variable=researchersArray
    this.btnAddNewResearch=false ;
  }
  uploadResearchFile(event:any){
    let loader=new FileReader();
      loader.readAsDataURL(event.target.files[0])
      loader.onload=(event)=>{
        this.uploadResearchFileURL=event.target?.result;
        this.research.patchValue({
          researchfile:this.uploadResearchFileURL
        })
      }
  }
  addReseachers(){
    let researcher=this.formbuilder.group({
      researcherName : ['',Validators.required ] 
    })
    this.researchersArray.push(researcher);
  }
  saveResearch(){
    console.log(this.publishedVolumes.value);
    this.service.addResearch(this.publishedVolumes.value);
    // window.location.reload();
  }



  updatePublishedChange(){
    console.log(this.editPublishedVolumeName.value)
  }
  updateGroupChange(){
    console.log(this.editGroupName.value)

  }



  deletePublishedVolume(){
    console.log(this.deletePublishedVolume_.value)
  }
  deleteGroup(){
    console.log(this.deleteGroup_.value)
  }
  deleteResearch(){
    console.log(this.deleteResearch_.value)
  }
}
