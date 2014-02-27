/* test controller - build the test result page */



$(document).ready(function () {
        var json = testJson;
        var paramsTableApp = "";
        var stepTable = "";
        var toggle = "onclick='toggle('step0')";
        $('#resultHeader').append(json.timestamp + "  " +json.steps[0].timestamp);
        $('#testNameHeadline').append(json.name);
        $('#testDescription').append(json.description);
        for (var j in testJson.parameters){if (testJson.parameters.hasOwnProperty(j)){
                for (var i in testJson.parameters[j]){if (testJson.parameters[j].hasOwnProperty(i)){
                    paramsTableApp += "<tr>\n" + "<td>" + i + "</td>\n" + "<td>" + testJson.parameters[j][i] + "</td>\n"+"</tr>\n"
                    }
                };
            }
        };
        $('#paramBody').append(paramsTableApp);

        for (var i in testJson.steps){
            if (testJson.steps.hasOwnProperty(i)){
                stepTable += "<br>\n" + "<table class='testtbl' >\n" + "<thead>\n" + "<tr>\n" + "<th>" +testJson.steps[i].timestamp + "</th>\n";
                stepTable += "<th"
                if(testJson.steps[i].status === "failure"){
                    stepTable += " class='header fail'"
                }
                else if(testJson.steps[i].status === "warning"){
                    stepTable += " class='header warning'"
                }
                stepTable += "><div >" + testJson.steps[i].description + "</div></th>\n" + "</tr>\n </thead>\n <tbody id='step" + i + "' >\n";
                for (var j in testJson.steps[i].reportElements){
                    if (testJson.steps[i].reportElements.hasOwnProperty(j)){
                        if(testJson.steps[i].reportElements[j].hasOwnProperty("type")){
                            if(testJson.steps[i].reportElements[j].type === 'IMAGE'){
                                //TODO: If it is an image element what do we want to do?
                                console.log('doing something with picture')};
                            if(testJson.steps[i].reportElements[j].type === 'VIDEO'){
                                //TODO: If it is a video element what do we want to do?
                                console.log('doing something with video')};
                            if(testJson.steps[i].reportElements[j].type === 'LOG'){
                                //TODO: If it is a log element what do we want to do?
                                console.log('doing something with log file')};
                        }
                        else if(testJson.steps[i].reportElements[j].hasOwnProperty("message")){
                            //TODO: If it is some message we want to present to user how do we want to do it?
                            console.log("doing something with message");
                        }
                        else{
                            stepTable += "<tr>\n<td>" + testJson.steps[i].reportElements[j].timestamp + "</td>\n";
                            stepTable += "<td";
                            if(testJson.steps[i].reportElements[j].status === "warning"){
                                stepTable += " class='warning'";
                            }
                            else if(testJson.steps[i].reportElements[j].status === "failure"){
                                stepTable += " class='fail'";
                            }
                            stepTable += ">" + testJson.steps[i].reportElements[j].title + "</td>\n</tr>\n";
                        };
                        if(testJson.steps[i].reportElements[j].hasOwnProperty("message")){console.log(testJson.steps[i].reportElements[j].message)};
                    }
                }
                stepTable+= "</tbody>\n</table>\n<br/>\n";
            }
        };
        $('#stepTables').append(stepTable);
    }
)