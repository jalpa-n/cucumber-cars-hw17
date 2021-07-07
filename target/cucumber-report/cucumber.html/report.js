$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featureFile/buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search Functionality",
  "description": "\r\nAs a user I want to search car by make and model",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on by+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car Tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"\u003cmake\u003e\" in result",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 18,
      "id": "search-functionality;search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Land Rover",
        "Discovery",
        "VIC - Central Victoria",
        "$90,000"
      ],
      "line": 19,
      "id": "search-functionality;search-the-buy-car-with-model;;2"
    },
    {
      "cells": [
        "BMW",
        "2 Series",
        "NSW - New England",
        "$80,000"
      ],
      "line": 20,
      "id": "search-functionality;search-the-buy-car-with-model;;3"
    },
    {
      "cells": [
        "Honda",
        "CR-V",
        "NSW - Sydney",
        "$60,000"
      ],
      "line": 21,
      "id": "search-functionality;search-the-buy-car-with-model;;4"
    },
    {
      "cells": [
        "Hyundai",
        "I30",
        "NSW - Newcastle",
        "$40,000"
      ],
      "line": 22,
      "id": "search-functionality;search-the-buy-car-with-model;;5"
    },
    {
      "cells": [
        "Nissan",
        "Qashqai",
        "SA - North",
        "$50,000"
      ],
      "line": 23,
      "id": "search-functionality;search-the-buy-car-with-model;;6"
    },
    {
      "cells": [
        "Audi",
        "A3",
        "NSW - All",
        "$30,000"
      ],
      "line": 24,
      "id": "search-functionality;search-the-buy-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4262037200,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on by+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Land Rover\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"Discovery\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"VIC - Central Victoria\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$90,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car Tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Land Rover\" in result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStepDefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 218729400,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepDefs.iMouseHoverOnBySellTab()"
});
formatter.result({
  "duration": 772001300,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepDefs.iClickSearchCars()"
});
formatter.result({
  "duration": 1349864600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "BuyStepDefs.iNavigateTo(String)"
});
formatter.result({
  "duration": 130176300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Land Rover",
      "offset": 15
    }
  ],
  "location": "BuyStepDefs.iSelectMake(String)"
});
formatter.result({
  "duration": 227782000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Discovery",
      "offset": 16
    }
  ],
  "location": "BuyStepDefs.iSelectModel(String)"
});
formatter.result({
  "duration": 197236500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIC - Central Victoria",
      "offset": 19
    }
  ],
  "location": "BuyStepDefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 204807800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$90,000",
      "offset": 16
    }
  ],
  "location": "BuyStepDefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 176870400,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepDefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 12305948200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Land Rover",
      "offset": 23
    }
  ],
  "location": "BuyStepDefs.iShouldSeeTheMakeInResult(String)"
});
formatter.result({
  "duration": 50043800,
  "status": "passed"
});
formatter.after({
  "duration": 786728600,
  "status": "passed"
});
formatter.before({
  "duration": 9778646300,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on by+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"BMW\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"2 Series\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"NSW - New England\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$80,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car Tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"BMW\" in result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStepDefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 46500,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepDefs.iMouseHoverOnBySellTab()"
});
formatter.result({
  "duration": 213224900,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepDefs.iClickSearchCars()"
});
formatter.result({
  "duration": 1626076400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "BuyStepDefs.iNavigateTo(String)"
});
formatter.result({
  "duration": 69202500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 15
    }
  ],
  "location": "BuyStepDefs.iSelectMake(String)"
});
formatter.result({
  "duration": 233076300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 Series",
      "offset": 16
    }
  ],
  "location": "BuyStepDefs.iSelectModel(String)"
});
formatter.result({
  "duration": 183250800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - New England",
      "offset": 19
    }
  ],
  "location": "BuyStepDefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 199045600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$80,000",
      "offset": 16
    }
  ],
  "location": "BuyStepDefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 203863900,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepDefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 12212642500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 23
    }
  ],
  "location": "BuyStepDefs.iShouldSeeTheMakeInResult(String)"
});
formatter.result({
  "duration": 54992800,
  "status": "passed"
});
formatter.after({
  "duration": 791450300,
  "status": "passed"
});
formatter.before({
  "duration": 9586127700,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on by+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Honda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"CR-V\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"NSW - Sydney\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$60,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car Tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Honda\" in result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStepDefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 27800,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepDefs.iMouseHoverOnBySellTab()"
});
formatter.result({
  "duration": 242165400,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepDefs.iClickSearchCars()"
});
formatter.result({
  "duration": 1739218900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "BuyStepDefs.iNavigateTo(String)"
});
formatter.result({
  "duration": 78478100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 15
    }
  ],
  "location": "BuyStepDefs.iSelectMake(String)"
});
formatter.result({
  "duration": 225999700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CR-V",
      "offset": 16
    }
  ],
  "location": "BuyStepDefs.iSelectModel(String)"
});
formatter.result({
  "duration": 214008000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Sydney",
      "offset": 19
    }
  ],
  "location": "BuyStepDefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 205139700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$60,000",
      "offset": 16
    }
  ],
  "location": "BuyStepDefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 194217600,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepDefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 12127071100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 23
    }
  ],
  "location": "BuyStepDefs.iShouldSeeTheMakeInResult(String)"
});
formatter.result({
  "duration": 48985400,
  "status": "passed"
});
formatter.after({
  "duration": 752812600,
  "status": "passed"
});
formatter.before({
  "duration": 9462446900,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on by+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Hyundai\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"I30\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"NSW - Newcastle\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$40,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car Tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Hyundai\" in result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStepDefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 41700,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepDefs.iMouseHoverOnBySellTab()"
});
formatter.result({
  "duration": 238686500,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepDefs.iClickSearchCars()"
});
formatter.result({
  "duration": 1642389900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "BuyStepDefs.iNavigateTo(String)"
});
formatter.result({
  "duration": 49325500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hyundai",
      "offset": 15
    }
  ],
  "location": "BuyStepDefs.iSelectMake(String)"
});
formatter.result({
  "duration": 257155600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "I30",
      "offset": 16
    }
  ],
  "location": "BuyStepDefs.iSelectModel(String)"
});
formatter.result({
  "duration": 200700800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Newcastle",
      "offset": 19
    }
  ],
  "location": "BuyStepDefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 204939700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$40,000",
      "offset": 16
    }
  ],
  "location": "BuyStepDefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 174316900,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepDefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 11896767600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hyundai",
      "offset": 23
    }
  ],
  "location": "BuyStepDefs.iShouldSeeTheMakeInResult(String)"
});
formatter.result({
  "duration": 45930500,
  "status": "passed"
});
formatter.after({
  "duration": 759889700,
  "status": "passed"
});
formatter.before({
  "duration": 3557179200,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on by+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Nissan\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"Qashqai\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"SA - North\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$50,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car Tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Nissan\" in result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStepDefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 24100,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepDefs.iMouseHoverOnBySellTab()"
});
formatter.result({
  "duration": 660544900,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepDefs.iClickSearchCars()"
});
formatter.result({
  "duration": 1869068300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "BuyStepDefs.iNavigateTo(String)"
});
formatter.result({
  "duration": 42119800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nissan",
      "offset": 15
    }
  ],
  "location": "BuyStepDefs.iSelectMake(String)"
});
formatter.result({
  "duration": 211926100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qashqai",
      "offset": 16
    }
  ],
  "location": "BuyStepDefs.iSelectModel(String)"
});
formatter.result({
  "duration": 164358000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SA - North",
      "offset": 19
    }
  ],
  "location": "BuyStepDefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 176525500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$50,000",
      "offset": 16
    }
  ],
  "location": "BuyStepDefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 161544900,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepDefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 11944834400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nissan",
      "offset": 23
    }
  ],
  "location": "BuyStepDefs.iShouldSeeTheMakeInResult(String)"
});
formatter.result({
  "duration": 40863400,
  "status": "passed"
});
formatter.after({
  "duration": 809580600,
  "status": "passed"
});
formatter.before({
  "duration": 3641082300,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on by+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Audi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"A3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$30,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car Tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Audi\" in result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStepDefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 38500,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepDefs.iMouseHoverOnBySellTab()"
});
formatter.result({
  "duration": 359540500,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepDefs.iClickSearchCars()"
});
formatter.result({
  "duration": 2014412600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "BuyStepDefs.iNavigateTo(String)"
});
formatter.result({
  "duration": 79467200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "BuyStepDefs.iSelectMake(String)"
});
formatter.result({
  "duration": 273554300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A3",
      "offset": 16
    }
  ],
  "location": "BuyStepDefs.iSelectModel(String)"
});
formatter.result({
  "duration": 149426000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "BuyStepDefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 141305100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$30,000",
      "offset": 16
    }
  ],
  "location": "BuyStepDefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 155445100,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepDefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 13180551200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "BuyStepDefs.iShouldSeeTheMakeInResult(String)"
});
formatter.result({
  "duration": 55300700,
  "status": "passed"
});
formatter.after({
  "duration": 800997600,
  "status": "passed"
});
});