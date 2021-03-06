import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Pet } from 'src/model/Pet';
import { AdCreateService } from '../../../z-service/ad-create.service';

@Component({
  selector: 'app-pet-form-edit',
  templateUrl: './pet-form-edit.component.html',
  styleUrls: ['./pet-form-edit.component.css']
})
export class PetFormEditComponent {

  @Input() pet: Pet
  petFormSubmmited = false;
  image = false;
  @Output() petForm = new EventEmitter<boolean>();

  constructor(private adCreateService: AdCreateService) { }

  onSubmitPetForm(): void {
    this.petFormSubmmited = true;
    this.adCreateService.setPet(this.pet);
    this.petForm.emit(true);
  }

  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

    var pattern = /image-*/;
    var reader = new FileReader();

    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.readAsDataURL(file);
    reader.onload = this._handleReaderLoaded.bind(this);
  }
  _handleReaderLoaded(e) {
    var reader = e.target;
    this.pet.image = reader.result;
    this.image = true;
  }
}
