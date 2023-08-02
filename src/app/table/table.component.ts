
export interface student {
 
  sl:number;
  name:string;
  in_english:number;
  in_hindi:number;
  in_malayalam:number;
  ex_english:number;
  ex_hindi:number;
  ex_malayalam:number;
   rowtotal:number;
   


}

import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  details: student[]=[]
 

  ngOnInit() {
    
    this.details = [
      { sl:1,name:'Ajay',in_english:30,in_hindi:10,in_malayalam:50,  ex_english:20,ex_hindi:40,ex_malayalam:50,rowtotal:0,},
      { sl:2,name:'Arun',in_english:50,in_hindi:70,in_malayalam:80,  ex_english:20,ex_hindi:10,ex_malayalam:50,rowtotal:0,},
      { sl:3,name:'Adarsh',in_english:50,in_hindi:70,in_malayalam:80,  ex_english:20,ex_hindi:10,ex_malayalam:50,rowtotal:0,},
      
    ];
     
    this.details.forEach(student => {
      student.rowtotal = this.Frtotal(student);
     

    });
  }
  Frtotal(student: student): number {
    return (
      student.in_english +
      student.in_hindi +
      student.in_malayalam +
      student.ex_english +
      student.ex_hindi +
      student.ex_malayalam
    );
} 

calculateInEnglishTotal(): number {
  return this.details.reduce((total, student) => total + student.in_english, 0);
}
calculateInHindiTotal(): number {
  return this.details.reduce((total, student) => total + student.in_hindi, 0);
}
calculateInMalaTotal(): number {
  return this.details.reduce((total, student) => total + student.in_malayalam, 0);
}
calculateexEnglishTotal(): number {
  return this.details.reduce((total, student) => total + student.ex_english, 0);
}
calculateexHindiTotal(): number {
  return this.details.reduce((total, student) => total + student.ex_hindi, 0);
}
calculateexMalaTotal(): number {
  return this.details.reduce((total, student) => total + student.ex_malayalam, 0);
}
calculateTotal(){
  return this.details.reduce((total, student) => total + student.rowtotal, 0);

}
}

