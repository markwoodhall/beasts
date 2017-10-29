// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('beasts.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__271746__delegate = function (x){
if(cljs.core.truth_(beasts.core.on_js_reload)){
return cljs.core.apply.call(null,beasts.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'beasts.core/on-js-reload' is missing");
}
};
var G__271746 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__271777__i = 0, G__271777__a = new Array(arguments.length -  0);
while (G__271777__i < G__271777__a.length) {G__271777__a[G__271777__i] = arguments[G__271777__i + 0]; ++G__271777__i;}
  x = new cljs.core.IndexedSeq(G__271777__a,0,null);
} 
return G__271746__delegate.call(this,x);};
G__271746.cljs$lang$maxFixedArity = 0;
G__271746.cljs$lang$applyTo = (function (arglist__271799){
var x = cljs.core.seq(arglist__271799);
return G__271746__delegate(x);
});
G__271746.cljs$core$IFn$_invoke$arity$variadic = G__271746__delegate;
return G__271746;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1509266016002
