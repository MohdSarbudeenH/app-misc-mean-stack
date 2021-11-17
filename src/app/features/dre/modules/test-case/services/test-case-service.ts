import { Injectable } from '@angular/core'
import { ApiService } from '@core/services/api.service';
import { Observable } from 'rxjs';

@Injectable()
export class TestCaseService {
    constructor(private apiService: ApiService) {
    }

    saveTestCase(projectId: string, testCaseNo: number, testCaseVal: string): Observable<any> {
        var testCase = {
            projectId: projectId,
            testId: testCaseNo,
            testValue: testCaseVal
        }
        return this.apiService.post('/testCase', testCase);
    }

    getTestCaseVal(projectId: string, testCaseNo: number): Observable<any> {
        return this.apiService.get('/testCase?projectId=' + projectId + '&testCaseNo=' + testCaseNo);
    }

}