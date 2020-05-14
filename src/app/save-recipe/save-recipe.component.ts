import { Component, OnInit } from '@angular/core'; 
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { SaveRecipeService } from '../save-recipe.service';
@Component({
  selector: 'app-save-recipe',
  templateUrl: './save-recipe.component.html',
  styleUrls: ['./save-recipe.component.css'],
  providers: [SaveRecipeService]
})
export class SaveRecipeComponent implements OnInit {
  saveRecipeForm: FormGroup;
  indexOfElement: number;
  constructor(
    private SaveRecipeService: SaveRecipeService
  ) {

   }

  ngOnInit() {
    this.initForm();
  }

  onSubmit(){
    console.log(this.saveRecipeForm);
    console.log("saveRecipe response");

    this.SaveRecipeService.SaveRecipes(this.saveRecipeForm.value);

  }

  onAddIngredient( indexofIngredient: number) {
    (<FormArray>this.saveRecipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(),
        'unitType': new FormControl(),
        'quantity': new FormControl(),
        'orderOf': new FormControl((indexofIngredient? indexofIngredient:0))
      })
    );
  }

  onAddSteps( indexofelement: number) {
    (<FormArray>this.saveRecipeForm.get('directions')).push(
      new FormGroup({
        'Instruction': new FormControl(),
        'StepNumber': new FormControl((indexofelement? indexofelement:0))
      })
      
    );

}

  get controls() {
    return (<FormArray>this.saveRecipeForm.get('ingredients')).controls;
  }
  get stepControls() {
    return (<FormArray>this.saveRecipeForm.get('directions')).controls;
  }
  
  private initForm() {
      let name = "";
       let Ingredients = new FormArray([]);
       let Directions = new FormArray([]);
      let category = "";

      this.saveRecipeForm = new FormGroup({
        'name': new FormControl(name),
        'ingredients': Ingredients,
        'directions' : Directions,
        'category': new FormControl(category)
      });
    }
    

}

