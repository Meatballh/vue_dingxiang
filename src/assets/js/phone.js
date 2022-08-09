// (function(doc,win){
//     var docEl = doc.documentElement,
//         resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//         recalc = function(){
//             //js获取当前的设备大小；document.documentElement.clientWidth;
//             var clientWidth = docEl.clientWidth;//获取设备的宽度
//             if(!clientWidth) return;
//             if(clientWidth>=750){
//               docEl.style.fontSize = '100px';
//             }else{
//                 docEl.style.fontSize = 100 *(clientWidth/750)+'px';
//             }
//         };
//     if(!doc.addEventLister) return;
//     win.addEventLister(resizeEvt,recalc,false);
//     doc.addEventLister('DOMContentLoaded',recalc,false);
// })(document,window);

(function(doc,win){
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function(){
            var clientWidth = docEl.clientWidth;
            if(!clientWidth) return;
            if(clientWidth>=750){
                docEl.style.fontSize = '100px';
            }else{
                docEl.style.fontSize = 100 * (clientWidth/750)+'px';
            }
        };
    if(!doc.addEventListener) return;
    win.addEventListener(resizeEvt,recalc,false);
    doc.addEventListener('DOMConrentLoaded',recalc,false);
})(document,window);