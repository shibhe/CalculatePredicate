import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../model/student.model';
// import 'rxjs/operators/map';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

  constructor(private httpClient: HttpClient) { }


  getAllAssessment(){
    return this.httpClient.get<any>("https://uncreditable-window.000webhostapp.com/financial_planning/getAllAssessment.php")
  }

  getAssessment2(){
    return this.httpClient.get<any>("https://uncreditable-window.000webhostapp.com/financial_planning/getAssment2.php")
  }
  
  getAssessment(id){
    return this.httpClient.get<any>(`https://uncreditable-window.000webhostapp.com/financial_planning/getAssessment.php?assessment_Id=${id}`)
  }

  getAsses(){
    return this.httpClient.get<any>(`https://uncreditable-window.000webhostapp.com/financial_planning/getAllAssess.php`)
  }

  getGroups(){
    return this.httpClient.get<any>(`https://uncreditable-window.000webhostapp.com/financial_planning/getGroup.php`)
  }

  submitResults(results, mark_Obtained, status){
    return this.httpClient.get<any>(`https://uncreditable-window.000webhostapp.com/financial_planning/submitResults.php?student_Id=${results.stud_ID}&mark_Obtained=${mark_Obtained}&status=${status}`);
  }
}
