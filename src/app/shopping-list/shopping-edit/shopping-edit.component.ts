import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() onIngredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() { }

  createIngredient(nameInput, amountInput) {
    if (nameInput && amountInput) {
      const newIngredient = new Ingredient(nameInput, amountInput);
      this.onIngredientAdded.emit(newIngredient);
    }
  }

  clearFields(nameInput, amountInput) {
    nameInput.value = '';
    amountInput.value = '';
  }
}
