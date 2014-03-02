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
                stepTable += "><div onclick=" + String.fromCharCode(34) +"toggle('step" + i + "')" + String.fromCharCode(34) + ">";
                stepTable += testJson.steps[i].description + "</div></th>\n" + "</tr>\n </thead>\n <tbody id='step" + i + "' >\n";
                for (var j in testJson.steps[i].reportElements){
                    if (testJson.steps[i].reportElements.hasOwnProperty(j)){
                        stepTable += "<tr>\n<td>" + testJson.steps[i].reportElements[j].timestamp + "</td>\n";

                        if(testJson.steps[i].reportElements[j].hasOwnProperty("type")){
                            if(testJson.steps[i].reportElements[j].type === 'IMAGE'){
                                stepTable += String("<td>\n<a onclick=") + String.fromCharCode(34) +"toggle('sc')" + String.fromCharCode(34) + "href='#'>";
                                stepTable += testJson.steps[i].reportElements[j].title+"</a>\n";
                                stepTable += "<div>\n" + new String("<img id='sc' style='display: none;' src='");
                                stepTable +=  testJson.steps[i].reportElements[j].file + "' alt='Image' height='500' width='500'>";
                                stepTable += "\n</div>\n</td>\n";};
                            if(testJson.steps[i].reportElements[j].type === 'VIDEO'){
                                stepTable += "<td>" + testJson.steps[i].reportElements[j].title + "</td>\n";
                                //TODO: If it is a video element what do we want to do?
                                console.log('doing something with video')};
                            if(testJson.steps[i].reportElements[j].type === 'LOG'){
                                stepTable += "<td>" + testJson.steps[i].reportElements[j].title + "</td>\n";
                                //TODO: If it is a log element what do we want to do?
                                console.log('doing something with log file')};
                        }
                        else if(testJson.steps[i].reportElements[j].hasOwnProperty("message")){
                            stepTable += "<td>" + testJson.steps[i].reportElements[j].title + "</td>\n";
                            //TODO: If it is some message we want to present to user how do we want to do it?
                            console.log("doing something with message");
                        }
                        else{
                            stepTable += "<td";
                            if(testJson.steps[i].reportElements[j].status === "warning"){
                                stepTable += " class='warning'";
                            }
                            else if(testJson.steps[i].reportElements[j].status === "failure"){
                                stepTable += " class='fail'";
                            }
                            stepTable += ">" + testJson.steps[i].reportElements[j].title + "</td>\n";
                        };
                        stepTable += "</tr>\n";
                    }
                }
                stepTable+= "</tbody>\n</table>\n<br/>\n";
            }
        };
        $('#stepTables').append(stepTable);
    }
)