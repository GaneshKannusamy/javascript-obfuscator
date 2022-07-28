var JSObfuscator = require('javascript-obfuscator');
var script_string = `
function triggerFlow(parameters) {
    var accountid = parameters.split('|')[0];
    var url1 = parameters.split('|')[1];
    var contactid = parameters.split('|')[2];
    var botid = parameters.split('|')[3];
    var botname = parameters.split('|')[4];
    var acupdate = '{ "cre0d_powerautomatetriggerlogs" : [' +
      '{ "cre0d_accountid": "' + accountid + '", "cre0d_contactid": "' + contactid + '", "cre0d_flowid": "' + botid + '", "cre0d_flowstatus": "386180000", "cre0d_name": "' + botname + '"} ]}';
    var req = new XMLHttpRequest();
    //alert(parameters)
    url1 = url1.replaceAll("pa@l", "a");
    url1 = url1.replaceAll("gx@97", "https://prod");
    url1 = url1.replaceAll("97*diq", "com:443");
    //alert(acupdate)
    var url = url1;
    req.open("POST", url, true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(acupdate);
    $(".btnTrigger").attr("disabled", "disabled");
    $(".btnTrigger").addClass("disabled");
    alert("Flow Triggered Successfully");
    setTimeout(function() {
      location.reload();
    }, 25000);
  }
  function stopFlow(parameters) {
    var envid = parameters.split('|')[0];
    var flowid = parameters.split('|')[1];
    var runid = parameters.split('|')[2];
    var botid = parameters.split('|')[3];
    var botname = parameters.split('|')[4];
    var accountid = parameters.split('|')[5];
    var contactid = parameters.split('|')[6];
    var url = parameters.split('|')[7];
    //alert(url)
    url = url.replaceAll("$cba", "a");
    url = url.replaceAll("kz@48", "https://prod");
    url = url.replaceAll("n*3e6", "com:443");
    //alert(url)
    var acupdate = '{ "flowid": "' + flowid + '", "runid": "' + runid + '", "envid": "' + envid + '", "teflowid": "' + botid + '", "botname": "' + botname + '", "accountid": "' + accountid + '", "contactid": "' + contactid + '"}';
    var req = new XMLHttpRequest();
    alert("Flow Stopped Successfully");
    req.open("POST", url, true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(acupdate);
    $(".btnTrigger").attr("disabled", "disabled");
    $(".btnTrigger").addClass("disabled");
    setTimeout(function() {
      location.reload();
    }, 4000);
  }
`
// Obfuscated Script
var script_obfuscated = JSObfuscator.obfuscate(script_string)
console.log(script_obfuscated.getObfuscatedCode());
