var execution = {
    "machines": [
        {
            "name": "127.0.0.1",
            "scenarios": [
                {
                    "type": "scenario",
                    "name": "myScenario",
                    "status": "failure",
                    "children": [
                        {
                            "type": "test",
                            "index": "0",
                            "name": "testOne",
                            "status": "success",
                            "duration": "1750",
                            "timestamp": "11:49:23"
                        },
                        {
                            "type": "test",
                            "index": "1",
                            "name": "testTwo",
                            "status": "warning",
                            "duration": "1750",
                            "timestamp": "11:50:23"
                        },
                        {
                            "type": "test",
                            "index": "2",
                            "name": "testThree",
                            "status": "failure",
                            "duration": "173",
                            "timestamp": "11:51:23"

                        },
                        {
                            "type": "scenario",
                            "name": "innerScenario",
                            "status": "success",
                            "children": [
                                {
                                    "type": "test",
                                    "index": "3",
                                    "name": "testFour",
                                    "status": "success",
                                    "duration": "174",
                                    "timestamp": "11:51:23"

                                }, {
                                    "type": "test",
                                    "index": "4",
                                    "name": "testFive",
                                    "status": "success",
                                    "duration": "176",
                                    "timestamp": "12:15:23"
                                }

                            ]

                        }, {
                            "type": "test",
                            "index": "5",
                            "name": "testSix",
                            "status": "success",
                            "duration": "173",
                            "timestamp": "12:20:23"
                        },
                        {
                            "type": "scenario",
                            "name": "Scenario with warning",
                            "status": "warning",
                            "children": [
                                {
                                    "type": "test",
                                    "index": "6",
                                    "name": "testSeven",
                                    "status": "success",
                                    "duration": "174",
                                    "timestamp": "11:51:23"

                                }, {
                                    "type": "test",
                                    "index": "7",
                                    "name": "testEight",
                                    "status": "warning",
                                    "duration": "176",
                                    "timestamp": "12:15:23"
                                }

                            ]

                        }
                    ]

                }

            ]
        }
    ]

}
