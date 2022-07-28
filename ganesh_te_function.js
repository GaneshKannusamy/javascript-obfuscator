var JSObfuscator = require('javascript-obfuscator');
var script_string = `
function triggerFlow(parameters) {
    
  }
  function stopFlow(parameters) {
    
  }
`
// Obfuscated Script
var script_obfuscated = JSObfuscator.obfuscate(script_string)
console.log(script_obfuscated.getObfuscatedCode());
