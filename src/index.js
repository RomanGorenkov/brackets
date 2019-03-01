module.exports = function check(str, bracketsConfig) {
  // your solution
  
  var brackets = [];
  var count;
  var lastBrackets;

  leter:
  for(let i = 0;i<str.length;i++ ){

    count = brackets.length;

    for (let j = 0; j < bracketsConfig.length; j++) {

      if(str.charAt(i) == bracketsConfig[j][0]){
        
        if(str.charAt(i) == bracketsConfig[j][0] && str.charAt(i) == bracketsConfig[j][1] && str.charAt(i) != lastBrackets){

          brackets.push(str.charAt(i));
          lastBrackets = str.charAt(i);
          break;
        } else if(!(str.charAt(i) == bracketsConfig[j][0] && str.charAt(i) == bracketsConfig[j][1])){

          brackets.push(str.charAt(i));
          break;
        } 
      }

      if(str.charAt(i) == bracketsConfig[j][1] && brackets[brackets.length - 1] == bracketsConfig[j][0]){

        if(str.charAt(i) == bracketsConfig[j][1] && str.charAt(i) == bracketsConfig[j][0] && brackets[brackets.length - 1] == bracketsConfig[j][0] && lastBrackets == str.charAt(i)){
          brackets.pop();
          lastBrackets = brackets[brackets.length -1];
          break;
        } else{
          brackets.pop();
          break;
        }
        
      }
    }

    if(count == brackets.length){
      return false;
    }
  }
  
  if(brackets.length == 0){
    return true;
  } else{
    return false;
  }
  
}







console.log(checkCorreckClouse('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])((([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])))',[['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']]));

function checkCorreckClouse(str, bracketsConfig){

  var brackets = [];
  var count;
  var lastBrackets;

  leter:
  for(let i = 0;i<str.length;i++ ){

    count = brackets.length;

    for (let j = 0; j < bracketsConfig.length; j++) {

      if(str.charAt(i) == bracketsConfig[j][0]){
        
        if(str.charAt(i) == bracketsConfig[j][0] && str.charAt(i) == bracketsConfig[j][1] && str.charAt(i) != lastBrackets){

          brackets.push(str.charAt(i));
          lastBrackets = str.charAt(i);
          break;
        } else if(!(str.charAt(i) == bracketsConfig[j][0] && str.charAt(i) == bracketsConfig[j][1])){

          brackets.push(str.charAt(i));
          break;
        } 
      }

      if(str.charAt(i) == bracketsConfig[j][1] && brackets[brackets.length - 1] == bracketsConfig[j][0]){

        if(str.charAt(i) == bracketsConfig[j][1] && str.charAt(i) == bracketsConfig[j][0] && brackets[brackets.length - 1] == bracketsConfig[j][0] && lastBrackets == str.charAt(i)){
          brackets.pop();
          lastBrackets = brackets[brackets.length -1];
          break;
        } else{
          brackets.pop();
          break;
        }
        
      }
    }

    if(count == brackets.length){
      return false;
    }
  }
  
  if(brackets.length == 0){
    return true;
  } else{
    return false;
  }
  
}