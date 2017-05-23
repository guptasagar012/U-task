    'use strict';
    angular
    .module('app')
    .controller('HealthController', function($scope, $http, $rootScope, $state) {
      $scope.healthData = [
      {
        "babyPrescription": {
          "babyPresid": 128,
          "comments": "•\tFormula- Weight x dose (Dose written by doctor)/50 \n•\tAvailable formulation (1ml- 50 mg)\no\t125 mg- dilute in 2.5 ml\no\t250 mg- dilute in 5 ml                                            \no\t500 mg- dilute in 10 ml\no\t1 gm- dilute in 20 ml   \n•\tDilute dose in 10-20 ml saline or D5 and infuse over 2-3 hour.\nEg- 8.5 kg- 850 mg = 8.5 ml (dilute in 20-50 ml saline over 2-3 hours)\n•\tRenal adjustment needed",
          "creationtime": 1489169631331,
          "dose": 40,
          "enddate": null,
          "frequency": "BD Twice a day",
          "medicationtype": "TYPE0001",
          "medicinename": "Meropenem",
          "modificationtime": 1489121578770,
          "route": "IV",
          "startdate": "2017-03-10",
          "starttime": "10:10AM",
          "uhid": "161103591",
          "loggeduser": "test",
          "isactive": true,
          "calculateddose": "Meropenem : 59.2 Mg/dose ",
          "dilusion": null,
          "frequencyInt": null,
          "medicationTypeStr": "Antibiotics",
          "medicationFreqStr": "BD Twice a day",
          "loggedUser": "test"
        },
        "givenMedincineDateTime": [
        {
          "date": "2017-03-14",
          "time": [
          "05:12 PM",
          "05:13 PM"
          ]
        },
        {
          "date": "2017-03-13",
          "time": [
          "",
          ""
          ]
        },
        {
          "date": "2017-03-12",
          "time": [
          "",
          ""
          ]
        },
        {
          "date": "2017-03-11",
          "time": [
          "",
          ""
          ]
        },
        {
          "date": "2017-03-10",
          "time": [
          "",
          ""
          ]
        }
        ],
        "frequency": 3,
        "isMedicineSelected": false,
        "smallestStartDate": "2017-03-10"
      },
      {
        "babyPrescription": {
          "babyPresid": 127,
          "comments": "•\tFormula- Weight x dose (Dose written by doctor) /50\n•\tAvailable formulation (1ml- 50 mg)\n100 mg- 2 ml (1 ml= 50 mg)\n250 mg- 2 ml (1 ml= 125 mg) & then dilute in 3 ml saline\n500 mg- 2 ml (1ml= 250 mg) & then dilute in 8 ml saline\n•\tDon’t give first dose if child has not passed urine or creatinine is high\n•\tAdjustment required in renal impairment/don’t give Amikacin if no urine output in last 6-10 hours",
          "creationtime": 1488981733358,
          "dose": 15,
          "enddate": null,
          "frequency": "Daily once a day",
          "medicationtype": "TYPE0001",
          "medicinename": "Amikacin",
          "modificationtime": 1488981733358,
          "route": "IV",
          "startdate": "2017-03-08",
          "starttime": "12:15AM",
          "uhid": "161103591",
          "loggeduser": "test",
          "isactive": true,
          "calculateddose": "Amikacin : 22.2 Mg/dose ",
          "dilusion": null,
          "frequencyInt": null,
          "medicationTypeStr": "Antibiotics",
          "medicationFreqStr": "Daily once a day",
          "loggedUser": "test"
        },
        "givenMedincineDateTime": [
        {
          "date": "2017-03-14",
          "time": [
          ""
          ]
        },
        {
          "date": "2017-03-13",
          "time": [
          ""
          ]
        },
        {
          "date": "2017-03-12",
          "time": [
          ""
          ]
        },
        {
          "date": "2017-03-11",
          "time": [
          ""
          ]
        },
        {
          "date": "2017-03-10",
          "time": [
          ""
          ]
        },
        {
          "date": "2017-03-09",
          "time": [
          ""
          ]
        },
        {
          "date": "2017-03-08",
          "time": [
          "02:03 PM"
          ]
        }
        ],
        "frequency": 3,
        "isMedicineSelected": false,
        "smallestStartDate": "2017-03-08"
      }
      ];
});


