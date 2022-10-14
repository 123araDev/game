gdjs.contact_32_63Code = {};
gdjs.contact_32_63Code.GDNewTiledSpriteObjects1= [];
gdjs.contact_32_63Code.GDNewTiledSpriteObjects2= [];
gdjs.contact_32_63Code.GDNewSpriteObjects1= [];
gdjs.contact_32_63Code.GDNewSpriteObjects2= [];
gdjs.contact_32_63Code.GDNewSprite2Objects1= [];
gdjs.contact_32_63Code.GDNewSprite2Objects2= [];
gdjs.contact_32_63Code.GDNewTextObjects1= [];
gdjs.contact_32_63Code.GDNewTextObjects2= [];
gdjs.contact_32_63Code.GDNewText2Objects1= [];
gdjs.contact_32_63Code.GDNewText2Objects2= [];
gdjs.contact_32_63Code.GDNewSprite3Objects1= [];
gdjs.contact_32_63Code.GDNewSprite3Objects2= [];
gdjs.contact_32_63Code.GDNewText3Objects1= [];
gdjs.contact_32_63Code.GDNewText3Objects2= [];

gdjs.contact_32_63Code.conditionTrue_0 = {val:false};
gdjs.contact_32_63Code.condition0IsTrue_0 = {val:false};
gdjs.contact_32_63Code.condition1IsTrue_0 = {val:false};
gdjs.contact_32_63Code.condition2IsTrue_0 = {val:false};


gdjs.contact_32_63Code.mapOfGDgdjs_46contact_9532_9563Code_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.contact_32_63Code.GDNewSpriteObjects1});
gdjs.contact_32_63Code.mapOfGDgdjs_46contact_9532_9563Code_46GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.contact_32_63Code.GDNewSprite2Objects1});
gdjs.contact_32_63Code.mapOfGDgdjs_46contact_9532_9563Code_46GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.contact_32_63Code.GDNewSprite3Objects1});
gdjs.contact_32_63Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.contact_32_63Code.GDNewSpriteObjects1);

gdjs.contact_32_63Code.condition0IsTrue_0.val = false;
gdjs.contact_32_63Code.condition1IsTrue_0.val = false;
{
gdjs.contact_32_63Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.contact_32_63Code.mapOfGDgdjs_46contact_9532_9563Code_46GDNewSpriteObjects1Objects, runtimeScene, true, false);
}if ( gdjs.contact_32_63Code.condition0IsTrue_0.val ) {
{
gdjs.contact_32_63Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.contact_32_63Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.contact_32_63Code.GDNewSprite2Objects1);

gdjs.contact_32_63Code.condition0IsTrue_0.val = false;
gdjs.contact_32_63Code.condition1IsTrue_0.val = false;
{
gdjs.contact_32_63Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.contact_32_63Code.mapOfGDgdjs_46contact_9532_9563Code_46GDNewSprite2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.contact_32_63Code.condition0IsTrue_0.val ) {
{
gdjs.contact_32_63Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.contact_32_63Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.contact_32_63Code.GDNewSprite3Objects1);

gdjs.contact_32_63Code.condition0IsTrue_0.val = false;
gdjs.contact_32_63Code.condition1IsTrue_0.val = false;
{
gdjs.contact_32_63Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.contact_32_63Code.condition0IsTrue_0.val ) {
{
gdjs.contact_32_63Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.contact_32_63Code.mapOfGDgdjs_46contact_9532_9563Code_46GDNewSprite3Objects1Objects, runtimeScene, true, false);
}}
if (gdjs.contact_32_63Code.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://scratch.mit.edu/users/My_Ara", runtimeScene);
}}

}


};

gdjs.contact_32_63Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.contact_32_63Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.contact_32_63Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.contact_32_63Code.GDNewSpriteObjects1.length = 0;
gdjs.contact_32_63Code.GDNewSpriteObjects2.length = 0;
gdjs.contact_32_63Code.GDNewSprite2Objects1.length = 0;
gdjs.contact_32_63Code.GDNewSprite2Objects2.length = 0;
gdjs.contact_32_63Code.GDNewTextObjects1.length = 0;
gdjs.contact_32_63Code.GDNewTextObjects2.length = 0;
gdjs.contact_32_63Code.GDNewText2Objects1.length = 0;
gdjs.contact_32_63Code.GDNewText2Objects2.length = 0;
gdjs.contact_32_63Code.GDNewSprite3Objects1.length = 0;
gdjs.contact_32_63Code.GDNewSprite3Objects2.length = 0;
gdjs.contact_32_63Code.GDNewText3Objects1.length = 0;
gdjs.contact_32_63Code.GDNewText3Objects2.length = 0;

gdjs.contact_32_63Code.eventsList0(runtimeScene);
return;

}

gdjs['contact_32_63Code'] = gdjs.contact_32_63Code;
