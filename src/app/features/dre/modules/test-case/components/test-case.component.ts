import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavService } from '@core/services/nav.service';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { TestCase } from '../test-case.model';
import { TestCaseService } from '../services/test-case-service';

@Component({
  selector: 'app-dre-test-case',
  templateUrl: './test-case.component.html',
  styleUrls: ['./test-case.component.scss']
})
export class TestCaseComponent implements OnInit, AfterViewInit {
  testCaseForm: FormGroup;
  testCase: TestCase;
  public dummyInp1: string;
  public dummyInp2: string;
  public title1: string;
  public title2: string;
  public showRTE1 = true;
  public showRTE2 = true;
  public output1: string;
  public output2: string;

  public panelOpenState: boolean;

  constructor(private navService: NavService, private testCaseService: TestCaseService) {
    navService.refreshLinks('dre');
  }

  ngOnInit(): void {
    this.dummyInp1 = 'Input 1';
    this.title1 = 'Expected Case';
    this.showRTE1 = false;
    this.dummyInp2 = 'Input 2';
    this.title2 = 'Actual Case';
    this.showRTE2 = true;

    this.panelOpenState = false;

    this.initTestCaseForm();

  }

  ngAfterViewInit(): void {
    this.assignTestCaseValue();
  }

  onRteEditorBlur(data: any): void {
    this.output1 = data;
    //console.log(data);
    if (data && data.trim() != '') {
      this.testCaseService.saveTestCase('CRN4102', 1, data).subscribe(status => {
        if (status) {
          console.log(status);
        }
      });
    }
  }

  initTestCaseForm(): void {
    this.testCaseForm = new FormGroup({});
    this.testCase = new TestCase();
    this.testCaseForm.addControl('tcStage', new FormControl(this.testCase.tcStage.value));
    this.testCaseForm.addControl('tcNo', new FormControl(this.testCase.tcNo.value));
    this.testCaseForm.addControl('by', new FormControl(this.testCase.by.value));
    this.testCaseForm.addControl('date', new FormControl(this.testCase.date.value));
    this.testCaseForm.addControl('for', new FormControl(this.testCase.for.value));
    this.testCaseForm.addControl('condition', new FormControl(this.testCase.condition.value));
    this.testCaseForm.addControl('expected', new FormControl(this.testCase.expected.value));
    this.testCaseForm.addControl('actual', new FormControl(this.testCase.actual.value));
    this.testCaseForm.addControl('passed', new FormControl(this.testCase.passed.value));
    this.testCaseForm.addControl('affectedModule', new FormControl(this.testCase.affectedModule.value));
    this.testCaseForm.addControl('fixDetail', new FormControl(this.testCase.fixDetail.value));
    this.testCaseForm.addControl('fixBy', new FormControl(this.testCase.fixBy.value));
    this.testCaseForm.addControl('fixDate', new FormControl(this.testCase.fixDate.value));
    this.testCaseForm.addControl('fixed', new FormControl(this.testCase.fixed.value));
    this.testCaseForm.addControl('comments', new FormControl(this.testCase.comments.value));
  }

  assignTestCaseValue(): void {
    this.testCaseService.getTestCaseVal('CRN4102', 1).subscribe(data => {
      if (data) {
        if (data.testCaseValue) {
          this.testCase.expected.value = data.testCaseValue.trim();
        }
      }
    });
  }

}
