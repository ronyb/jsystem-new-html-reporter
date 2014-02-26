/* test controller - build the test result page */



$(document).ready(function () {
    console.log("in document ready");
    var json = testJson;
        var paramsTableApp = "";
        console.log("testJson :" +json.description);
        console.log("testJson :" +json.timestamp);
        $('#resultHeader').append(json.timestamp + "  " +json.steps[0].timestamp);
        $('#testNameHeadline').append(json.name);
        $('#testDescription').append(json.description);
        for (var j in testJson.parameters){if (testJson.parameters.hasOwnProperty(j)){
                for (var i in testJson.parameters[j]){if (testJson.parameters[j].hasOwnProperty(i)){
                    paramsTableApp += "<tr>\n" + "<td>" + i + "</td>\n" + "<td>" + testJson.parameters[j][i] + "</td>\n"+"</tr>\n"
                    }};
            //console.log(i + "  " + testJson.parameters[j][i])
            console.log("paramsTableApp : " + paramsTableApp);
            }
        };
        $('#paramBody').append(paramsTableApp);





        /*

         <br>
         <!-- cellspacing="0" border="0" -->
         <table class="testtbl" >
         <thead>
         <tr>
         <th>11:49:22</th>
         <th><div onclick="toggle('step1')">Step 1 - Login To System</div></th>
         </tr>
         </thead>
         <tbody id="step1" >
         <tr>
         <td>11:49:23</td>
         <td>Clicking on some button</td>
         </tr>
         <tr>
         <td>11:49:25</td>
         <td>Entering text to something</td>
         </tr>
         <tr>
         <td >11:49:28</td>
         <td>
         <a onClick="toggle('sc')" href="#">Screenshot - Click on me!</a>
         <div>
         <img id='sc' style="display:none" src="resources/Capture323234.PNG" alt="Image" height="500" width="500" />
         </div>
         </td>
         </tr>
         <tr>
         <td >11:50:25</td>
         <td><a href='testOne345353_0.html'>Some title that links to a message</td>
         </tr>
         <tr>
         <td>11:55:25</td>
         <td>
         <a href="#" onClick="toggle('1111')">Actually, You can toggle all kind of elements - Click on me</a>
         <div id="1111" style="display:none">Toggled text <br/> with multiple <br/> lines.</div>
         </td>
         </tr>

         </tbody>
         </table>
         <br/>

         */



            //parameter-table
        //for (var i in testJson.parameters[0]){if (testJson.parameters[0].hasOwnProperty(i)){console.log(i + "  " + testJson.parameters[0][i])}};
//        $(json.parameters).each(function(paramIndex){
//                console.log("json.parameters[paramIndex] - "+json.parameters[paramIndex]);
//
//
//            }
//
//        )



    //$('#headTest').append(json.testExecutionResult[0].date + " " + json.testExecutionResult[0].beginning);
    //console.log("json.testExecutionResult[0].date: " +json.testExecutionResult[0].date);
    /*
    $(json.testExecutionResult).each(function(executionIndex){
            console.log("executionIndex:" +executionIndex);
            console.log("date :" +json.testExecutionResult[executionIndex].date);
            $(this.testsList).each(function(listIndex){
                    console.log("listIndex :" + listIndex);
                }

            )
        */}

    )