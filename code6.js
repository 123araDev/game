gdjs.Sc_232ne_32sans_32titreCode = {};
gdjs.Sc_232ne_32sans_32titreCode.GDNewSpriteObjects1= [];
gdjs.Sc_232ne_32sans_32titreCode.GDNewSpriteObjects2= [];
gdjs.Sc_232ne_32sans_32titreCode.GDNewSprite2Objects1= [];
gdjs.Sc_232ne_32sans_32titreCode.GDNewSprite2Objects2= [];
gdjs.Sc_232ne_32sans_32titreCode.GDNewSprite3Objects1= [];
gdjs.Sc_232ne_32sans_32titreCode.GDNewSprite3Objects2= [];
gdjs.Sc_232ne_32sans_32titreCode.GDNewTextObjects1= [];
gdjs.Sc_232ne_32sans_32titreCode.GDNewTextObjects2= [];
gdjs.Sc_232ne_32sans_32titreCode.GDNewText2Objects1= [];
gdjs.Sc_232ne_32sans_32titreCode.GDNewText2Objects2= [];
gdjs.Sc_232ne_32sans_32titreCode.GDNewText3Objects1= [];
gdjs.Sc_232ne_32sans_32titreCode.GDNewText3Objects2= [];

gdjs.Sc_232ne_32sans_32titreCode.conditionTrue_0 = {val:false};
gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0 = {val:false};
gdjs.Sc_232ne_32sans_32titreCode.condition1IsTrue_0 = {val:false};
gdjs.Sc_232ne_32sans_32titreCode.condition2IsTrue_0 = {val:false};


gdjs.Sc_232ne_32sans_32titreCode.mapOfGDgdjs_46Sc_95232ne_9532sans_9532titreCode_46GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Sc_232ne_32sans_32titreCode.GDNewSprite2Objects1});
gdjs.Sc_232ne_32sans_32titreCode.mapOfGDgdjs_46Sc_95232ne_9532sans_9532titreCode_46GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.Sc_232ne_32sans_32titreCode.GDNewSprite3Objects1});
gdjs.Sc_232ne_32sans_32titreCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Sc_232ne_32sans_32titreCode.GDNewSprite2Objects1);

gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = false;
gdjs.Sc_232ne_32sans_32titreCode.condition1IsTrue_0.val = false;
{
gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Sc_232ne_32sans_32titreCode.mapOfGDgdjs_46Sc_95232ne_9532sans_9532titreCode_46GDNewSprite2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val ) {
{
gdjs.Sc_232ne_32sans_32titreCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Sc_232ne_32sans_32titreCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Sc_232ne_32sans_32titreCode.GDNewSprite3Objects1);

gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = false;
gdjs.Sc_232ne_32sans_32titreCode.condition1IsTrue_0.val = false;
{
gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Sc_232ne_32sans_32titreCode.mapOfGDgdjs_46Sc_95232ne_9532sans_9532titreCode_46GDNewSprite3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val ) {
{
gdjs.Sc_232ne_32sans_32titreCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Sc_232ne_32sans_32titreCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", true);
}}

}


};

gdjs.Sc_232ne_32sans_32titreCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Sc_232ne_32sans_32titreCode.GDNewSpriteObjects1.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDNewSpriteObjects2.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDNewSprite2Objects1.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDNewSprite2Objects2.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDNewSprite3Objects1.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDNewSprite3Objects2.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDNewTextObjects1.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDNewTextObjects2.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDNewText2Objects1.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDNewText2Objects2.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDNewText3Objects1.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDNewText3Objects2.length = 0;

gdjs.Sc_232ne_32sans_32titreCode.eventsList0(runtimeScene);
return;

}

gdjs['Sc_232ne_32sans_32titreCode'] = gdjs.Sc_232ne_32sans_32titreCode;
