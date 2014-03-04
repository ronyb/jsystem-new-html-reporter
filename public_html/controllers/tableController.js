/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function collectTestsFromScenario(children,tests){
    $(children).each(function(){
       switch (this.type) {
           case "test":
               tests.push(this);
               break;
           case "scenario":
               collectTestsFromScenario(this.children,tests);
               break;
       }
    });
}

function collectAllTests(){
    var tests = new Array();
    $(execution.machines).each(function(){
        var machineName = this.name;
        $(this.scenarios).each(function() {
            var suiteName = this.name;
            var suiteTests = new Array();
            collectTestsFromScenario(this.children,suiteTests);
            $(suiteTests).each(function() {
                this.machineName = machineName;
                this.suiteName = suiteName;
            });
            tests = tests.concat(suiteTests);
        });
        
    });
    return tests;
    
}

function appendTestsToTable(tests,table){
    $(tests).each(function(){
       var tr = $('<tr>');
       tr.append($('<td>').text(this.index));
       tr.append($('<td>').text(this.timestamp));
       tr.append($('<td>').append($('<a>').text(this.name).attr("href","testOne345353.html")));
       tr.append($('<td>').text(this.suiteName));
       tr.append($('<td>').text(this.machineName));
       tr.append($('<td>').text(this.status).addClass(this.status));
       tr.append($('<td>').text(this.duration));
       $(table).append(tr);
    });
}

function tableController(element) {
    var tests = collectAllTests();
    appendTestsToTable(tests,element);
}


