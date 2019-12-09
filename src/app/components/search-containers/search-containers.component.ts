import { SearchContainersService } from './../../services/search-containers.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-containers',
  templateUrl: './search-containers.component.html',
  styleUrls: ['./search-containers.component.scss']
})
export class SearchContainersComponent implements OnInit {

  private SearchContainersForm: FormGroup
  public Containers: any

  constructor( private FormBuilder: FormBuilder, private _SearchContainersService: SearchContainersService ) { }

  ngOnInit() {
    this.SearchContainersForm = this.FormBuilder.group({
      number: new FormControl('', [Validators.required, Validators.maxLength(11), Validators.pattern(/(^[a-zA-Z]{4})(\d{7})/)])
    })
  }

  GetContainers() {
    this._SearchContainersService.getContainers(this.SearchContainersForm.value.number)
        .subscribe(
          res => {
            this.Containers = res
          }
        )
  }
  validate(){
    const number = this.SearchContainersForm.value.number.replace(/\W/, '')
    this.SearchContainersForm.setValue({number})
  }
}
