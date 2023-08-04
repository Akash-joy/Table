import { Component } from '@angular/core';

interface Student {
  sl: number;
  name: string;
  in_english: number;
  in_hindi: number;
  in_malayalam: number;
  ex_english: number;
  ex_hindi: number;
  ex_malayalam: number;
  rowtotal: number;

}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  details: Student[] = [];
  
  ngOnInit() {
    
    this.details = [
      { sl: 1, name: 'Ajay', in_english: 30, in_hindi: 10, in_malayalam: 50, ex_english: 20, ex_hindi: 40, ex_malayalam: 50, rowtotal: 0 },
      { sl: 2, name: 'Arun', in_english: 50, in_hindi: 70, in_malayalam: 80, ex_english: 20, ex_hindi: 10, ex_malayalam: 50, rowtotal: 0 },
      { sl: 3, name: 'Adarsh', in_english: 50, in_hindi: 70, in_malayalam: 80, ex_english: 20, ex_hindi: 10, ex_malayalam: 50, rowtotal: 0 }
    ];

    this.details.forEach(student => {
      student.rowtotal = this.calculateTotalForStudent(student);
    });
  }

  calculateTotalForStudent(student: Student): number {
    return (
      student.in_english +
      student.in_hindi +
      student.in_malayalam +
      student.ex_english +
      student.ex_hindi +
      student.ex_malayalam
      
    );
   
  }
  


  calculateTotalForSubject(subject: keyof Student): number {
    let total = 0;
    for (const student of this.details) {
      total += Number(student[subject]);
    }
    
    return total;
    //return this.details.reduce((total,student)=>total + Number(student[subject]),0);
  }
  

}
