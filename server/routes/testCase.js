const express = require("express");
const TestCase = require('../models/testCase');
const router = express.Router();

router.post('/', (req, res, next) => {
    if (req.body) {
        var _projId = req.body.projectId;
        var _testId = req.body.testId;
        var _testVal = req.body.testValue;

        if (_projId && _testVal) {
            var testCase = new TestCase({
                projectId: _projId,
                testCaseNo: _testId,
                testCaseValue: _testVal
            });

            testCase.save(function (err) {
                if (err) {
                    res.send('Test Case not updated!');
                } else {
                    res.send('Test Case updated successfully');
                }
            })
        }
    }
});

router.get('/', (req, res, next) => {
    if (req.query) {
        var _projId = req.query.projectId;
        var _testCaseNo = req.query.testCaseNo;

        if(_projId && _testCaseNo){
            TestCase.findOne({ 'projectId': _projId, 'testCaseNo': _testCaseNo })
            .exec(function (err, testCaseRes) {
                if (err) { return next(err); }
                if(testCaseRes){ //&& testCaseRes.testCaseValue
                    res.send(testCaseRes);
                }
            });
        }

    }
})

module.exports = router;
