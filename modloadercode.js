window.levelEditorMod = {};
levelEditorMod.runCodeBefore = function() {
  
}
levelEditorMod.alterSnakeCode = function(snakeCode) {
  snakeCode = snakeCode.replaceAll('.66','.06')

  return snakeCode;
}
levelEditorMod.runCodeAfter = function() {

}