gdjs.menuCode = {};
gdjs.menuCode.GDNewSpriteObjects1= [];
gdjs.menuCode.GDNewSpriteObjects2= [];
gdjs.menuCode.GDNewSprite2Objects1= [];
gdjs.menuCode.GDNewSprite2Objects2= [];
gdjs.menuCode.GDNewSprite3Objects1= [];
gdjs.menuCode.GDNewSprite3Objects2= [];
gdjs.menuCode.GDNewSprite4Objects1= [];
gdjs.menuCode.GDNewSprite4Objects2= [];
gdjs.menuCode.GDNewSprite5Objects1= [];
gdjs.menuCode.GDNewSprite5Objects2= [];
gdjs.menuCode.GDNewTextObjects1= [];
gdjs.menuCode.GDNewTextObjects2= [];
gdjs.menuCode.GDNewSprite6Objects1= [];
gdjs.menuCode.GDNewSprite6Objects2= [];
gdjs.menuCode.GDNewText2Objects1= [];
gdjs.menuCode.GDNewText2Objects2= [];
gdjs.menuCode.GDNewParticlesEmitterObjects1= [];
gdjs.menuCode.GDNewParticlesEmitterObjects2= [];
gdjs.menuCode.GDNewSprite7Objects1= [];
gdjs.menuCode.GDNewSprite7Objects2= [];
gdjs.menuCode.GDNewText3Objects1= [];
gdjs.menuCode.GDNewText3Objects2= [];
gdjs.menuCode.GDNewSprite8Objects1= [];
gdjs.menuCode.GDNewSprite8Objects2= [];

gdjs.menuCode.conditionTrue_0 = {val:false};
gdjs.menuCode.condition0IsTrue_0 = {val:false};
gdjs.menuCode.condition1IsTrue_0 = {val:false};
gdjs.menuCode.condition2IsTrue_0 = {val:false};


gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDNewSprite5Objects1Objects = Hashtable.newFrom({"NewSprite5": gdjs.menuCode.GDNewSprite5Objects1});
gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs.menuCode.GDNewSprite6Objects1});
gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDNewSprite7Objects1Objects = Hashtable.newFrom({"NewSprite7": gdjs.menuCode.GDNewSprite7Objects1});
gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDNewSprite8Objects1Objects = Hashtable.newFrom({"NewSprite8": gdjs.menuCode.GDNewSprite8Objects1});
gdjs.menuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.menuCode.GDNewSprite5Objects1);

gdjs.menuCode.condition0IsTrue_0.val = false;
gdjs.menuCode.condition1IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.menuCode.condition0IsTrue_0.val ) {
{
gdjs.menuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDNewSprite5Objects1Objects, runtimeScene, true, false);
}}
if (gdjs.menuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level 1", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.menuCode.GDNewSprite6Objects1);

gdjs.menuCode.condition0IsTrue_0.val = false;
gdjs.menuCode.condition1IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDNewSprite6Objects1Objects, runtimeScene, true, false);
}if ( gdjs.menuCode.condition0IsTrue_0.val ) {
{
gdjs.menuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.menuCode.condition1IsTrue_0.val) {
{gdjs.deviceVibration.startVibration(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "contact ?", true);
}}

}


{


gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.menuCode.condition0IsTrue_0.val) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.menuCode.GDNewSprite7Objects1);

gdjs.menuCode.condition0IsTrue_0.val = false;
gdjs.menuCode.condition1IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDNewSprite7Objects1Objects, runtimeScene, true, false);
}if ( gdjs.menuCode.condition0IsTrue_0.val ) {
{
gdjs.menuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.menuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scène sans titre", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.menuCode.GDNewSprite8Objects1);

gdjs.menuCode.condition0IsTrue_0.val = false;
gdjs.menuCode.condition1IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDNewSprite8Objects1Objects, runtimeScene, true, false);
}if ( gdjs.menuCode.condition0IsTrue_0.val ) {
{
gdjs.menuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.menuCode.condition1IsTrue_0.val) {
{gdjs.deviceVibration.startVibration(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "contact ?", true);
}}

}


{


{
}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDNewSpriteObjects1.length = 0;
gdjs.menuCode.GDNewSpriteObjects2.length = 0;
gdjs.menuCode.GDNewSprite2Objects1.length = 0;
gdjs.menuCode.GDNewSprite2Objects2.length = 0;
gdjs.menuCode.GDNewSprite3Objects1.length = 0;
gdjs.menuCode.GDNewSprite3Objects2.length = 0;
gdjs.menuCode.GDNewSprite4Objects1.length = 0;
gdjs.menuCode.GDNewSprite4Objects2.length = 0;
gdjs.menuCode.GDNewSprite5Objects1.length = 0;
gdjs.menuCode.GDNewSprite5Objects2.length = 0;
gdjs.menuCode.GDNewTextObjects1.length = 0;
gdjs.menuCode.GDNewTextObjects2.length = 0;
gdjs.menuCode.GDNewSprite6Objects1.length = 0;
gdjs.menuCode.GDNewSprite6Objects2.length = 0;
gdjs.menuCode.GDNewText2Objects1.length = 0;
gdjs.menuCode.GDNewText2Objects2.length = 0;
gdjs.menuCode.GDNewParticlesEmitterObjects1.length = 0;
gdjs.menuCode.GDNewParticlesEmitterObjects2.length = 0;
gdjs.menuCode.GDNewSprite7Objects1.length = 0;
gdjs.menuCode.GDNewSprite7Objects2.length = 0;
gdjs.menuCode.GDNewText3Objects1.length = 0;
gdjs.menuCode.GDNewText3Objects2.length = 0;
gdjs.menuCode.GDNewSprite8Objects1.length = 0;
gdjs.menuCode.GDNewSprite8Objects2.length = 0;

gdjs.menuCode.eventsList0(runtimeScene);
return;

}

gdjs['menuCode'] = gdjs.menuCode;
