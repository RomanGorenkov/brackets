module.exports = function check(str, bracketsConfig) {
  // your solution
  if(checkLength(str)){
    return true;
  } else{
    return false;
  }

  
}

function checkLength(str){
  if(str.length % 2 == 0){
    return true;
  } else{
    return false;
  }
}

function sortBrackets(str,bracketsConfig){
  var stack = new Array(bracketsConfig.length);
  for (let i = 0; i < stack.length; i++) {
    stack[i] = [];
  }
  for (let i = 0; i < bracketsConfig.length; i++) {

    var elem = bracketsConfig[i][0];
    for( var j = 0; j< str.length;j++){

      if(str.charAt(j) == bracketsConfig[i][0] || str.charAt(j) == bracketsConfig[i][1]){
        stack[i].push(str.charAt(j));
      }
    }
    console.log(stack[i]);
  }

}

function checkCorreckClouse(str, bracketsConfig, position){
  var endBrackets;
  for(let i = 0;i<str.length;i++ ){

    for (let j = 0; j < bracketsConfig.length; j++) {

      if(str.charAt(i) == bracketsConfig[j][0]){

        endBrackets = bracketsConfig[j][1];
        checkCorreckClouse(str.substring(i+1,str.length), bracketsConfig, 0);

      }

      if(str.charAt(i) == endBrackets){
        position  = i;
      }
      
    }
  }
}

checkCorreckClouse('()[]',[['(', ')'], ['[', ']']],0);

