import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Password';

  password = '';
  lenght:number = 0;
  includeLetters:boolean = false;
  includeNumbers:boolean = false;
  includeSymbols:boolean = false;

  modifyLenght(value:string) {
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)){
      this.lenght = parsedValue;
    }
  }

  modifyLetters() {
    this.includeLetters = !this.includeLetters;
  }

  modifyNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  modifySymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  buttonClick() {
    const letters = 'abcdefghijklmnoprstuvwyz';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()';

    let validChars = '' ;

    if (this.includeLetters){
      validChars += letters;
    }
    if (this.includeNumbers){
      validChars += numbers;
    }
    if (this.includeSymbols){
      validChars += symbols;
    }

    let generatePassword = '';
    for(let i=0; i<this.lenght; i++){
      const index = Math.floor(Math.random()*validChars.length);
      generatePassword += validChars[index];
    }
    this.password = generatePassword;
  }
}
