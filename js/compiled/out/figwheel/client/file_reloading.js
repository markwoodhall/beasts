// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__49521__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__49521__auto__){
return or__49521__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__49521__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__49521__auto__)){
return or__49521__auto__;
} else {
var or__49521__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__49521__auto____$1)){
return or__49521__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__150354_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__150354_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__150355 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__150356 = null;
var count__150357 = (0);
var i__150358 = (0);
while(true){
if((i__150358 < count__150357)){
var n = cljs.core._nth.call(null,chunk__150356,i__150358);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__150359 = seq__150355;
var G__150360 = chunk__150356;
var G__150361 = count__150357;
var G__150362 = (i__150358 + (1));
seq__150355 = G__150359;
chunk__150356 = G__150360;
count__150357 = G__150361;
i__150358 = G__150362;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__150355);
if(temp__5278__auto__){
var seq__150355__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__150355__$1)){
var c__50452__auto__ = cljs.core.chunk_first.call(null,seq__150355__$1);
var G__150363 = cljs.core.chunk_rest.call(null,seq__150355__$1);
var G__150364 = c__50452__auto__;
var G__150365 = cljs.core.count.call(null,c__50452__auto__);
var G__150366 = (0);
seq__150355 = G__150363;
chunk__150356 = G__150364;
count__150357 = G__150365;
i__150358 = G__150366;
continue;
} else {
var n = cljs.core.first.call(null,seq__150355__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__150367 = cljs.core.next.call(null,seq__150355__$1);
var G__150368 = null;
var G__150369 = (0);
var G__150370 = (0);
seq__150355 = G__150367;
chunk__150356 = G__150368;
count__150357 = G__150369;
i__150358 = G__150370;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__150380_150388 = cljs.core.seq.call(null,deps);
var chunk__150381_150389 = null;
var count__150382_150390 = (0);
var i__150383_150391 = (0);
while(true){
if((i__150383_150391 < count__150382_150390)){
var dep_150392 = cljs.core._nth.call(null,chunk__150381_150389,i__150383_150391);
topo_sort_helper_STAR_.call(null,dep_150392,(depth + (1)),state);

var G__150393 = seq__150380_150388;
var G__150394 = chunk__150381_150389;
var G__150395 = count__150382_150390;
var G__150396 = (i__150383_150391 + (1));
seq__150380_150388 = G__150393;
chunk__150381_150389 = G__150394;
count__150382_150390 = G__150395;
i__150383_150391 = G__150396;
continue;
} else {
var temp__5278__auto___150397 = cljs.core.seq.call(null,seq__150380_150388);
if(temp__5278__auto___150397){
var seq__150380_150398__$1 = temp__5278__auto___150397;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__150380_150398__$1)){
var c__50452__auto___150399 = cljs.core.chunk_first.call(null,seq__150380_150398__$1);
var G__150400 = cljs.core.chunk_rest.call(null,seq__150380_150398__$1);
var G__150401 = c__50452__auto___150399;
var G__150402 = cljs.core.count.call(null,c__50452__auto___150399);
var G__150403 = (0);
seq__150380_150388 = G__150400;
chunk__150381_150389 = G__150401;
count__150382_150390 = G__150402;
i__150383_150391 = G__150403;
continue;
} else {
var dep_150404 = cljs.core.first.call(null,seq__150380_150398__$1);
topo_sort_helper_STAR_.call(null,dep_150404,(depth + (1)),state);

var G__150405 = cljs.core.next.call(null,seq__150380_150398__$1);
var G__150406 = null;
var G__150407 = (0);
var G__150408 = (0);
seq__150380_150388 = G__150405;
chunk__150381_150389 = G__150406;
count__150382_150390 = G__150407;
i__150383_150391 = G__150408;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__150384){
var vec__150385 = p__150384;
var seq__150386 = cljs.core.seq.call(null,vec__150385);
var first__150387 = cljs.core.first.call(null,seq__150386);
var seq__150386__$1 = cljs.core.next.call(null,seq__150386);
var x = first__150387;
var xs = seq__150386__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__150385,seq__150386,first__150387,seq__150386__$1,x,xs,get_deps__$1){
return (function (p1__150371_SHARP_){
return clojure.set.difference.call(null,p1__150371_SHARP_,x);
});})(vec__150385,seq__150386,first__150387,seq__150386__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__150409 = cljs.core.seq.call(null,provides);
var chunk__150410 = null;
var count__150411 = (0);
var i__150412 = (0);
while(true){
if((i__150412 < count__150411)){
var prov = cljs.core._nth.call(null,chunk__150410,i__150412);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__150413_150421 = cljs.core.seq.call(null,requires);
var chunk__150414_150422 = null;
var count__150415_150423 = (0);
var i__150416_150424 = (0);
while(true){
if((i__150416_150424 < count__150415_150423)){
var req_150425 = cljs.core._nth.call(null,chunk__150414_150422,i__150416_150424);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_150425,prov);

var G__150426 = seq__150413_150421;
var G__150427 = chunk__150414_150422;
var G__150428 = count__150415_150423;
var G__150429 = (i__150416_150424 + (1));
seq__150413_150421 = G__150426;
chunk__150414_150422 = G__150427;
count__150415_150423 = G__150428;
i__150416_150424 = G__150429;
continue;
} else {
var temp__5278__auto___150430 = cljs.core.seq.call(null,seq__150413_150421);
if(temp__5278__auto___150430){
var seq__150413_150431__$1 = temp__5278__auto___150430;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__150413_150431__$1)){
var c__50452__auto___150432 = cljs.core.chunk_first.call(null,seq__150413_150431__$1);
var G__150433 = cljs.core.chunk_rest.call(null,seq__150413_150431__$1);
var G__150434 = c__50452__auto___150432;
var G__150435 = cljs.core.count.call(null,c__50452__auto___150432);
var G__150436 = (0);
seq__150413_150421 = G__150433;
chunk__150414_150422 = G__150434;
count__150415_150423 = G__150435;
i__150416_150424 = G__150436;
continue;
} else {
var req_150437 = cljs.core.first.call(null,seq__150413_150431__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_150437,prov);

var G__150438 = cljs.core.next.call(null,seq__150413_150431__$1);
var G__150439 = null;
var G__150440 = (0);
var G__150441 = (0);
seq__150413_150421 = G__150438;
chunk__150414_150422 = G__150439;
count__150415_150423 = G__150440;
i__150416_150424 = G__150441;
continue;
}
} else {
}
}
break;
}

var G__150442 = seq__150409;
var G__150443 = chunk__150410;
var G__150444 = count__150411;
var G__150445 = (i__150412 + (1));
seq__150409 = G__150442;
chunk__150410 = G__150443;
count__150411 = G__150444;
i__150412 = G__150445;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__150409);
if(temp__5278__auto__){
var seq__150409__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__150409__$1)){
var c__50452__auto__ = cljs.core.chunk_first.call(null,seq__150409__$1);
var G__150446 = cljs.core.chunk_rest.call(null,seq__150409__$1);
var G__150447 = c__50452__auto__;
var G__150448 = cljs.core.count.call(null,c__50452__auto__);
var G__150449 = (0);
seq__150409 = G__150446;
chunk__150410 = G__150447;
count__150411 = G__150448;
i__150412 = G__150449;
continue;
} else {
var prov = cljs.core.first.call(null,seq__150409__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__150417_150450 = cljs.core.seq.call(null,requires);
var chunk__150418_150451 = null;
var count__150419_150452 = (0);
var i__150420_150453 = (0);
while(true){
if((i__150420_150453 < count__150419_150452)){
var req_150454 = cljs.core._nth.call(null,chunk__150418_150451,i__150420_150453);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_150454,prov);

var G__150455 = seq__150417_150450;
var G__150456 = chunk__150418_150451;
var G__150457 = count__150419_150452;
var G__150458 = (i__150420_150453 + (1));
seq__150417_150450 = G__150455;
chunk__150418_150451 = G__150456;
count__150419_150452 = G__150457;
i__150420_150453 = G__150458;
continue;
} else {
var temp__5278__auto___150459__$1 = cljs.core.seq.call(null,seq__150417_150450);
if(temp__5278__auto___150459__$1){
var seq__150417_150460__$1 = temp__5278__auto___150459__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__150417_150460__$1)){
var c__50452__auto___150461 = cljs.core.chunk_first.call(null,seq__150417_150460__$1);
var G__150462 = cljs.core.chunk_rest.call(null,seq__150417_150460__$1);
var G__150463 = c__50452__auto___150461;
var G__150464 = cljs.core.count.call(null,c__50452__auto___150461);
var G__150465 = (0);
seq__150417_150450 = G__150462;
chunk__150418_150451 = G__150463;
count__150419_150452 = G__150464;
i__150420_150453 = G__150465;
continue;
} else {
var req_150466 = cljs.core.first.call(null,seq__150417_150460__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_150466,prov);

var G__150467 = cljs.core.next.call(null,seq__150417_150460__$1);
var G__150468 = null;
var G__150469 = (0);
var G__150470 = (0);
seq__150417_150450 = G__150467;
chunk__150418_150451 = G__150468;
count__150419_150452 = G__150469;
i__150420_150453 = G__150470;
continue;
}
} else {
}
}
break;
}

var G__150471 = cljs.core.next.call(null,seq__150409__$1);
var G__150472 = null;
var G__150473 = (0);
var G__150474 = (0);
seq__150409 = G__150471;
chunk__150410 = G__150472;
count__150411 = G__150473;
i__150412 = G__150474;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__150475_150479 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__150476_150480 = null;
var count__150477_150481 = (0);
var i__150478_150482 = (0);
while(true){
if((i__150478_150482 < count__150477_150481)){
var ns_150483 = cljs.core._nth.call(null,chunk__150476_150480,i__150478_150482);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_150483);

var G__150484 = seq__150475_150479;
var G__150485 = chunk__150476_150480;
var G__150486 = count__150477_150481;
var G__150487 = (i__150478_150482 + (1));
seq__150475_150479 = G__150484;
chunk__150476_150480 = G__150485;
count__150477_150481 = G__150486;
i__150478_150482 = G__150487;
continue;
} else {
var temp__5278__auto___150488 = cljs.core.seq.call(null,seq__150475_150479);
if(temp__5278__auto___150488){
var seq__150475_150489__$1 = temp__5278__auto___150488;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__150475_150489__$1)){
var c__50452__auto___150490 = cljs.core.chunk_first.call(null,seq__150475_150489__$1);
var G__150491 = cljs.core.chunk_rest.call(null,seq__150475_150489__$1);
var G__150492 = c__50452__auto___150490;
var G__150493 = cljs.core.count.call(null,c__50452__auto___150490);
var G__150494 = (0);
seq__150475_150479 = G__150491;
chunk__150476_150480 = G__150492;
count__150477_150481 = G__150493;
i__150478_150482 = G__150494;
continue;
} else {
var ns_150495 = cljs.core.first.call(null,seq__150475_150489__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_150495);

var G__150496 = cljs.core.next.call(null,seq__150475_150489__$1);
var G__150497 = null;
var G__150498 = (0);
var G__150499 = (0);
seq__150475_150479 = G__150496;
chunk__150476_150480 = G__150497;
count__150477_150481 = G__150498;
i__150478_150482 = G__150499;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__49521__auto__ = goog.require__;
if(cljs.core.truth_(or__49521__auto__)){
return or__49521__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__150500__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__150500 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__150501__i = 0, G__150501__a = new Array(arguments.length -  0);
while (G__150501__i < G__150501__a.length) {G__150501__a[G__150501__i] = arguments[G__150501__i + 0]; ++G__150501__i;}
  args = new cljs.core.IndexedSeq(G__150501__a,0,null);
} 
return G__150500__delegate.call(this,args);};
G__150500.cljs$lang$maxFixedArity = 0;
G__150500.cljs$lang$applyTo = (function (arglist__150502){
var args = cljs.core.seq(arglist__150502);
return G__150500__delegate(args);
});
G__150500.cljs$core$IFn$_invoke$arity$variadic = G__150500__delegate;
return G__150500;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__150503_SHARP_,p2__150504_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__150503_SHARP_)].join('')),p2__150504_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__150505_SHARP_,p2__150506_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__150505_SHARP_)].join(''),p2__150506_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__150507 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__150507.addCallback(((function (G__150507){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__150507))
);

G__150507.addErrback(((function (G__150507){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__150507))
);

return G__150507;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__150508 = cljs.core._EQ_;
var expr__150509 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__150508.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__150509))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__150508,expr__150509){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__150508,expr__150509))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__150508,expr__150509){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e150511){if((e150511 instanceof Error)){
var e = e150511;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e150511;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__150508,expr__150509))
} else {
if(cljs.core.truth_(pred__150508.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__150509))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__150508.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__150509))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__150508.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__150509))){
return ((function (pred__150508,expr__150509){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e150512){if((e150512 instanceof Error)){
var e = e150512;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e150512;

}
}})());
});
;})(pred__150508,expr__150509))
} else {
return ((function (pred__150508,expr__150509){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__150508,expr__150509))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__150513,callback){
var map__150514 = p__150513;
var map__150514__$1 = ((((!((map__150514 == null)))?((((map__150514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__150514.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__150514):map__150514);
var file_msg = map__150514__$1;
var request_url = cljs.core.get.call(null,map__150514__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__150514,map__150514__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__150514,map__150514__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__148175__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__148175__auto__){
return (function (){
var f__148176__auto__ = (function (){var switch__148085__auto__ = ((function (c__148175__auto__){
return (function (state_150538){
var state_val_150539 = (state_150538[(1)]);
if((state_val_150539 === (7))){
var inst_150534 = (state_150538[(2)]);
var state_150538__$1 = state_150538;
var statearr_150540_150557 = state_150538__$1;
(statearr_150540_150557[(2)] = inst_150534);

(statearr_150540_150557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150539 === (1))){
var state_150538__$1 = state_150538;
var statearr_150541_150558 = state_150538__$1;
(statearr_150541_150558[(2)] = null);

(statearr_150541_150558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150539 === (4))){
var inst_150518 = (state_150538[(7)]);
var inst_150518__$1 = (state_150538[(2)]);
var state_150538__$1 = (function (){var statearr_150542 = state_150538;
(statearr_150542[(7)] = inst_150518__$1);

return statearr_150542;
})();
if(cljs.core.truth_(inst_150518__$1)){
var statearr_150543_150559 = state_150538__$1;
(statearr_150543_150559[(1)] = (5));

} else {
var statearr_150544_150560 = state_150538__$1;
(statearr_150544_150560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150539 === (6))){
var state_150538__$1 = state_150538;
var statearr_150545_150561 = state_150538__$1;
(statearr_150545_150561[(2)] = null);

(statearr_150545_150561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150539 === (3))){
var inst_150536 = (state_150538[(2)]);
var state_150538__$1 = state_150538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_150538__$1,inst_150536);
} else {
if((state_val_150539 === (2))){
var state_150538__$1 = state_150538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_150538__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_150539 === (11))){
var inst_150530 = (state_150538[(2)]);
var state_150538__$1 = (function (){var statearr_150546 = state_150538;
(statearr_150546[(8)] = inst_150530);

return statearr_150546;
})();
var statearr_150547_150562 = state_150538__$1;
(statearr_150547_150562[(2)] = null);

(statearr_150547_150562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150539 === (9))){
var inst_150524 = (state_150538[(9)]);
var inst_150522 = (state_150538[(10)]);
var inst_150526 = inst_150524.call(null,inst_150522);
var state_150538__$1 = state_150538;
var statearr_150548_150563 = state_150538__$1;
(statearr_150548_150563[(2)] = inst_150526);

(statearr_150548_150563[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150539 === (5))){
var inst_150518 = (state_150538[(7)]);
var inst_150520 = figwheel.client.file_reloading.blocking_load.call(null,inst_150518);
var state_150538__$1 = state_150538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_150538__$1,(8),inst_150520);
} else {
if((state_val_150539 === (10))){
var inst_150522 = (state_150538[(10)]);
var inst_150528 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_150522);
var state_150538__$1 = state_150538;
var statearr_150549_150564 = state_150538__$1;
(statearr_150549_150564[(2)] = inst_150528);

(statearr_150549_150564[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150539 === (8))){
var inst_150524 = (state_150538[(9)]);
var inst_150518 = (state_150538[(7)]);
var inst_150522 = (state_150538[(2)]);
var inst_150523 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_150524__$1 = cljs.core.get.call(null,inst_150523,inst_150518);
var state_150538__$1 = (function (){var statearr_150550 = state_150538;
(statearr_150550[(9)] = inst_150524__$1);

(statearr_150550[(10)] = inst_150522);

return statearr_150550;
})();
if(cljs.core.truth_(inst_150524__$1)){
var statearr_150551_150565 = state_150538__$1;
(statearr_150551_150565[(1)] = (9));

} else {
var statearr_150552_150566 = state_150538__$1;
(statearr_150552_150566[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__148175__auto__))
;
return ((function (switch__148085__auto__,c__148175__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__148086__auto__ = null;
var figwheel$client$file_reloading$state_machine__148086__auto____0 = (function (){
var statearr_150553 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_150553[(0)] = figwheel$client$file_reloading$state_machine__148086__auto__);

(statearr_150553[(1)] = (1));

return statearr_150553;
});
var figwheel$client$file_reloading$state_machine__148086__auto____1 = (function (state_150538){
while(true){
var ret_value__148087__auto__ = (function (){try{while(true){
var result__148088__auto__ = switch__148085__auto__.call(null,state_150538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__148088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__148088__auto__;
}
break;
}
}catch (e150554){if((e150554 instanceof Object)){
var ex__148089__auto__ = e150554;
var statearr_150555_150567 = state_150538;
(statearr_150555_150567[(5)] = ex__148089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_150538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e150554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__148087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150568 = state_150538;
state_150538 = G__150568;
continue;
} else {
return ret_value__148087__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__148086__auto__ = function(state_150538){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__148086__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__148086__auto____1.call(this,state_150538);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__148086__auto____0;
figwheel$client$file_reloading$state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__148086__auto____1;
return figwheel$client$file_reloading$state_machine__148086__auto__;
})()
;})(switch__148085__auto__,c__148175__auto__))
})();
var state__148177__auto__ = (function (){var statearr_150556 = f__148176__auto__.call(null);
(statearr_150556[(6)] = c__148175__auto__);

return statearr_150556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__148177__auto__);
});})(c__148175__auto__))
);

return c__148175__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__150569,callback){
var map__150570 = p__150569;
var map__150570__$1 = ((((!((map__150570 == null)))?((((map__150570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__150570.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__150570):map__150570);
var file_msg = map__150570__$1;
var namespace = cljs.core.get.call(null,map__150570__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__150570,map__150570__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__150570,map__150570__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__150572){
var map__150573 = p__150572;
var map__150573__$1 = ((((!((map__150573 == null)))?((((map__150573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__150573.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__150573):map__150573);
var file_msg = map__150573__$1;
var namespace = cljs.core.get.call(null,map__150573__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__150575){
var map__150576 = p__150575;
var map__150576__$1 = ((((!((map__150576 == null)))?((((map__150576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__150576.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__150576):map__150576);
var file_msg = map__150576__$1;
var namespace = cljs.core.get.call(null,map__150576__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__49509__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__49509__auto__){
var or__49521__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__49521__auto__)){
return or__49521__auto__;
} else {
var or__49521__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__49521__auto____$1)){
return or__49521__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__49509__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__150578,callback){
var map__150579 = p__150578;
var map__150579__$1 = ((((!((map__150579 == null)))?((((map__150579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__150579.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__150579):map__150579);
var file_msg = map__150579__$1;
var request_url = cljs.core.get.call(null,map__150579__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__150579__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__148175__auto___150629 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__148175__auto___150629,out){
return (function (){
var f__148176__auto__ = (function (){var switch__148085__auto__ = ((function (c__148175__auto___150629,out){
return (function (state_150614){
var state_val_150615 = (state_150614[(1)]);
if((state_val_150615 === (1))){
var inst_150588 = cljs.core.seq.call(null,files);
var inst_150589 = cljs.core.first.call(null,inst_150588);
var inst_150590 = cljs.core.next.call(null,inst_150588);
var inst_150591 = files;
var state_150614__$1 = (function (){var statearr_150616 = state_150614;
(statearr_150616[(7)] = inst_150590);

(statearr_150616[(8)] = inst_150591);

(statearr_150616[(9)] = inst_150589);

return statearr_150616;
})();
var statearr_150617_150630 = state_150614__$1;
(statearr_150617_150630[(2)] = null);

(statearr_150617_150630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150615 === (2))){
var inst_150597 = (state_150614[(10)]);
var inst_150591 = (state_150614[(8)]);
var inst_150596 = cljs.core.seq.call(null,inst_150591);
var inst_150597__$1 = cljs.core.first.call(null,inst_150596);
var inst_150598 = cljs.core.next.call(null,inst_150596);
var inst_150599 = (inst_150597__$1 == null);
var inst_150600 = cljs.core.not.call(null,inst_150599);
var state_150614__$1 = (function (){var statearr_150618 = state_150614;
(statearr_150618[(11)] = inst_150598);

(statearr_150618[(10)] = inst_150597__$1);

return statearr_150618;
})();
if(inst_150600){
var statearr_150619_150631 = state_150614__$1;
(statearr_150619_150631[(1)] = (4));

} else {
var statearr_150620_150632 = state_150614__$1;
(statearr_150620_150632[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150615 === (3))){
var inst_150612 = (state_150614[(2)]);
var state_150614__$1 = state_150614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_150614__$1,inst_150612);
} else {
if((state_val_150615 === (4))){
var inst_150597 = (state_150614[(10)]);
var inst_150602 = figwheel.client.file_reloading.reload_js_file.call(null,inst_150597);
var state_150614__$1 = state_150614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_150614__$1,(7),inst_150602);
} else {
if((state_val_150615 === (5))){
var inst_150608 = cljs.core.async.close_BANG_.call(null,out);
var state_150614__$1 = state_150614;
var statearr_150621_150633 = state_150614__$1;
(statearr_150621_150633[(2)] = inst_150608);

(statearr_150621_150633[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150615 === (6))){
var inst_150610 = (state_150614[(2)]);
var state_150614__$1 = state_150614;
var statearr_150622_150634 = state_150614__$1;
(statearr_150622_150634[(2)] = inst_150610);

(statearr_150622_150634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150615 === (7))){
var inst_150598 = (state_150614[(11)]);
var inst_150604 = (state_150614[(2)]);
var inst_150605 = cljs.core.async.put_BANG_.call(null,out,inst_150604);
var inst_150591 = inst_150598;
var state_150614__$1 = (function (){var statearr_150623 = state_150614;
(statearr_150623[(12)] = inst_150605);

(statearr_150623[(8)] = inst_150591);

return statearr_150623;
})();
var statearr_150624_150635 = state_150614__$1;
(statearr_150624_150635[(2)] = null);

(statearr_150624_150635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__148175__auto___150629,out))
;
return ((function (switch__148085__auto__,c__148175__auto___150629,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__148086__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__148086__auto____0 = (function (){
var statearr_150625 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_150625[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__148086__auto__);

(statearr_150625[(1)] = (1));

return statearr_150625;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__148086__auto____1 = (function (state_150614){
while(true){
var ret_value__148087__auto__ = (function (){try{while(true){
var result__148088__auto__ = switch__148085__auto__.call(null,state_150614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__148088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__148088__auto__;
}
break;
}
}catch (e150626){if((e150626 instanceof Object)){
var ex__148089__auto__ = e150626;
var statearr_150627_150636 = state_150614;
(statearr_150627_150636[(5)] = ex__148089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_150614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e150626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__148087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150637 = state_150614;
state_150614 = G__150637;
continue;
} else {
return ret_value__148087__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__148086__auto__ = function(state_150614){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__148086__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__148086__auto____1.call(this,state_150614);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__148086__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__148086__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__148086__auto__;
})()
;})(switch__148085__auto__,c__148175__auto___150629,out))
})();
var state__148177__auto__ = (function (){var statearr_150628 = f__148176__auto__.call(null);
(statearr_150628[(6)] = c__148175__auto___150629);

return statearr_150628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__148177__auto__);
});})(c__148175__auto___150629,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__150638,opts){
var map__150639 = p__150638;
var map__150639__$1 = ((((!((map__150639 == null)))?((((map__150639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__150639.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__150639):map__150639);
var eval_body = cljs.core.get.call(null,map__150639__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__150639__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__49509__auto__ = eval_body;
if(cljs.core.truth_(and__49509__auto__)){
return typeof eval_body === 'string';
} else {
return and__49509__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e150641){var e = e150641;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5276__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__150642_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__150642_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5276__auto__)){
var file_msg = temp__5276__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__150643){
var vec__150644 = p__150643;
var k = cljs.core.nth.call(null,vec__150644,(0),null);
var v = cljs.core.nth.call(null,vec__150644,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__150647){
var vec__150648 = p__150647;
var k = cljs.core.nth.call(null,vec__150648,(0),null);
var v = cljs.core.nth.call(null,vec__150648,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__150654,p__150655){
var map__150656 = p__150654;
var map__150656__$1 = ((((!((map__150656 == null)))?((((map__150656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__150656.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__150656):map__150656);
var opts = map__150656__$1;
var before_jsload = cljs.core.get.call(null,map__150656__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__150656__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__150656__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__150657 = p__150655;
var map__150657__$1 = ((((!((map__150657 == null)))?((((map__150657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__150657.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__150657):map__150657);
var msg = map__150657__$1;
var files = cljs.core.get.call(null,map__150657__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__150657__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__150657__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__148175__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__148175__auto__,map__150656,map__150656__$1,opts,before_jsload,on_jsload,reload_dependents,map__150657,map__150657__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__148176__auto__ = (function (){var switch__148085__auto__ = ((function (c__148175__auto__,map__150656,map__150656__$1,opts,before_jsload,on_jsload,reload_dependents,map__150657,map__150657__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_150811){
var state_val_150812 = (state_150811[(1)]);
if((state_val_150812 === (7))){
var inst_150672 = (state_150811[(7)]);
var inst_150673 = (state_150811[(8)]);
var inst_150671 = (state_150811[(9)]);
var inst_150674 = (state_150811[(10)]);
var inst_150679 = cljs.core._nth.call(null,inst_150672,inst_150674);
var inst_150680 = figwheel.client.file_reloading.eval_body.call(null,inst_150679,opts);
var inst_150681 = (inst_150674 + (1));
var tmp150813 = inst_150672;
var tmp150814 = inst_150673;
var tmp150815 = inst_150671;
var inst_150671__$1 = tmp150815;
var inst_150672__$1 = tmp150813;
var inst_150673__$1 = tmp150814;
var inst_150674__$1 = inst_150681;
var state_150811__$1 = (function (){var statearr_150816 = state_150811;
(statearr_150816[(11)] = inst_150680);

(statearr_150816[(7)] = inst_150672__$1);

(statearr_150816[(8)] = inst_150673__$1);

(statearr_150816[(9)] = inst_150671__$1);

(statearr_150816[(10)] = inst_150674__$1);

return statearr_150816;
})();
var statearr_150817_150900 = state_150811__$1;
(statearr_150817_150900[(2)] = null);

(statearr_150817_150900[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (20))){
var inst_150714 = (state_150811[(12)]);
var inst_150722 = figwheel.client.file_reloading.sort_files.call(null,inst_150714);
var state_150811__$1 = state_150811;
var statearr_150818_150901 = state_150811__$1;
(statearr_150818_150901[(2)] = inst_150722);

(statearr_150818_150901[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (27))){
var state_150811__$1 = state_150811;
var statearr_150819_150902 = state_150811__$1;
(statearr_150819_150902[(2)] = null);

(statearr_150819_150902[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (1))){
var inst_150663 = (state_150811[(13)]);
var inst_150660 = before_jsload.call(null,files);
var inst_150661 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_150662 = (function (){return ((function (inst_150663,inst_150660,inst_150661,state_val_150812,c__148175__auto__,map__150656,map__150656__$1,opts,before_jsload,on_jsload,reload_dependents,map__150657,map__150657__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__150651_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__150651_SHARP_);
});
;})(inst_150663,inst_150660,inst_150661,state_val_150812,c__148175__auto__,map__150656,map__150656__$1,opts,before_jsload,on_jsload,reload_dependents,map__150657,map__150657__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_150663__$1 = cljs.core.filter.call(null,inst_150662,files);
var inst_150664 = cljs.core.not_empty.call(null,inst_150663__$1);
var state_150811__$1 = (function (){var statearr_150820 = state_150811;
(statearr_150820[(14)] = inst_150660);

(statearr_150820[(15)] = inst_150661);

(statearr_150820[(13)] = inst_150663__$1);

return statearr_150820;
})();
if(cljs.core.truth_(inst_150664)){
var statearr_150821_150903 = state_150811__$1;
(statearr_150821_150903[(1)] = (2));

} else {
var statearr_150822_150904 = state_150811__$1;
(statearr_150822_150904[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (24))){
var state_150811__$1 = state_150811;
var statearr_150823_150905 = state_150811__$1;
(statearr_150823_150905[(2)] = null);

(statearr_150823_150905[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (39))){
var inst_150764 = (state_150811[(16)]);
var state_150811__$1 = state_150811;
var statearr_150824_150906 = state_150811__$1;
(statearr_150824_150906[(2)] = inst_150764);

(statearr_150824_150906[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (46))){
var inst_150806 = (state_150811[(2)]);
var state_150811__$1 = state_150811;
var statearr_150825_150907 = state_150811__$1;
(statearr_150825_150907[(2)] = inst_150806);

(statearr_150825_150907[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (4))){
var inst_150708 = (state_150811[(2)]);
var inst_150709 = cljs.core.List.EMPTY;
var inst_150710 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_150709);
var inst_150711 = (function (){return ((function (inst_150708,inst_150709,inst_150710,state_val_150812,c__148175__auto__,map__150656,map__150656__$1,opts,before_jsload,on_jsload,reload_dependents,map__150657,map__150657__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__150652_SHARP_){
var and__49509__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__150652_SHARP_);
if(cljs.core.truth_(and__49509__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__150652_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__150652_SHARP_)));
} else {
return and__49509__auto__;
}
});
;})(inst_150708,inst_150709,inst_150710,state_val_150812,c__148175__auto__,map__150656,map__150656__$1,opts,before_jsload,on_jsload,reload_dependents,map__150657,map__150657__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_150712 = cljs.core.filter.call(null,inst_150711,files);
var inst_150713 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_150714 = cljs.core.concat.call(null,inst_150712,inst_150713);
var state_150811__$1 = (function (){var statearr_150826 = state_150811;
(statearr_150826[(12)] = inst_150714);

(statearr_150826[(17)] = inst_150710);

(statearr_150826[(18)] = inst_150708);

return statearr_150826;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_150827_150908 = state_150811__$1;
(statearr_150827_150908[(1)] = (16));

} else {
var statearr_150828_150909 = state_150811__$1;
(statearr_150828_150909[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (15))){
var inst_150698 = (state_150811[(2)]);
var state_150811__$1 = state_150811;
var statearr_150829_150910 = state_150811__$1;
(statearr_150829_150910[(2)] = inst_150698);

(statearr_150829_150910[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (21))){
var inst_150724 = (state_150811[(19)]);
var inst_150724__$1 = (state_150811[(2)]);
var inst_150725 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_150724__$1);
var state_150811__$1 = (function (){var statearr_150830 = state_150811;
(statearr_150830[(19)] = inst_150724__$1);

return statearr_150830;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_150811__$1,(22),inst_150725);
} else {
if((state_val_150812 === (31))){
var inst_150809 = (state_150811[(2)]);
var state_150811__$1 = state_150811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_150811__$1,inst_150809);
} else {
if((state_val_150812 === (32))){
var inst_150764 = (state_150811[(16)]);
var inst_150769 = inst_150764.cljs$lang$protocol_mask$partition0$;
var inst_150770 = (inst_150769 & (64));
var inst_150771 = inst_150764.cljs$core$ISeq$;
var inst_150772 = (cljs.core.PROTOCOL_SENTINEL === inst_150771);
var inst_150773 = (inst_150770) || (inst_150772);
var state_150811__$1 = state_150811;
if(cljs.core.truth_(inst_150773)){
var statearr_150831_150911 = state_150811__$1;
(statearr_150831_150911[(1)] = (35));

} else {
var statearr_150832_150912 = state_150811__$1;
(statearr_150832_150912[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (40))){
var inst_150786 = (state_150811[(20)]);
var inst_150785 = (state_150811[(2)]);
var inst_150786__$1 = cljs.core.get.call(null,inst_150785,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_150787 = cljs.core.get.call(null,inst_150785,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_150788 = cljs.core.not_empty.call(null,inst_150786__$1);
var state_150811__$1 = (function (){var statearr_150833 = state_150811;
(statearr_150833[(20)] = inst_150786__$1);

(statearr_150833[(21)] = inst_150787);

return statearr_150833;
})();
if(cljs.core.truth_(inst_150788)){
var statearr_150834_150913 = state_150811__$1;
(statearr_150834_150913[(1)] = (41));

} else {
var statearr_150835_150914 = state_150811__$1;
(statearr_150835_150914[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (33))){
var state_150811__$1 = state_150811;
var statearr_150836_150915 = state_150811__$1;
(statearr_150836_150915[(2)] = false);

(statearr_150836_150915[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (13))){
var inst_150684 = (state_150811[(22)]);
var inst_150688 = cljs.core.chunk_first.call(null,inst_150684);
var inst_150689 = cljs.core.chunk_rest.call(null,inst_150684);
var inst_150690 = cljs.core.count.call(null,inst_150688);
var inst_150671 = inst_150689;
var inst_150672 = inst_150688;
var inst_150673 = inst_150690;
var inst_150674 = (0);
var state_150811__$1 = (function (){var statearr_150837 = state_150811;
(statearr_150837[(7)] = inst_150672);

(statearr_150837[(8)] = inst_150673);

(statearr_150837[(9)] = inst_150671);

(statearr_150837[(10)] = inst_150674);

return statearr_150837;
})();
var statearr_150838_150916 = state_150811__$1;
(statearr_150838_150916[(2)] = null);

(statearr_150838_150916[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (22))){
var inst_150728 = (state_150811[(23)]);
var inst_150732 = (state_150811[(24)]);
var inst_150724 = (state_150811[(19)]);
var inst_150727 = (state_150811[(25)]);
var inst_150727__$1 = (state_150811[(2)]);
var inst_150728__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_150727__$1);
var inst_150729 = (function (){var all_files = inst_150724;
var res_SINGLEQUOTE_ = inst_150727__$1;
var res = inst_150728__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_150728,inst_150732,inst_150724,inst_150727,inst_150727__$1,inst_150728__$1,state_val_150812,c__148175__auto__,map__150656,map__150656__$1,opts,before_jsload,on_jsload,reload_dependents,map__150657,map__150657__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__150653_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__150653_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_150728,inst_150732,inst_150724,inst_150727,inst_150727__$1,inst_150728__$1,state_val_150812,c__148175__auto__,map__150656,map__150656__$1,opts,before_jsload,on_jsload,reload_dependents,map__150657,map__150657__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_150730 = cljs.core.filter.call(null,inst_150729,inst_150727__$1);
var inst_150731 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_150732__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_150731);
var inst_150733 = cljs.core.not_empty.call(null,inst_150732__$1);
var state_150811__$1 = (function (){var statearr_150839 = state_150811;
(statearr_150839[(23)] = inst_150728__$1);

(statearr_150839[(24)] = inst_150732__$1);

(statearr_150839[(26)] = inst_150730);

(statearr_150839[(25)] = inst_150727__$1);

return statearr_150839;
})();
if(cljs.core.truth_(inst_150733)){
var statearr_150840_150917 = state_150811__$1;
(statearr_150840_150917[(1)] = (23));

} else {
var statearr_150841_150918 = state_150811__$1;
(statearr_150841_150918[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (36))){
var state_150811__$1 = state_150811;
var statearr_150842_150919 = state_150811__$1;
(statearr_150842_150919[(2)] = false);

(statearr_150842_150919[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (41))){
var inst_150786 = (state_150811[(20)]);
var inst_150790 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_150791 = cljs.core.map.call(null,inst_150790,inst_150786);
var inst_150792 = cljs.core.pr_str.call(null,inst_150791);
var inst_150793 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_150792)].join('');
var inst_150794 = figwheel.client.utils.log.call(null,inst_150793);
var state_150811__$1 = state_150811;
var statearr_150843_150920 = state_150811__$1;
(statearr_150843_150920[(2)] = inst_150794);

(statearr_150843_150920[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (43))){
var inst_150787 = (state_150811[(21)]);
var inst_150797 = (state_150811[(2)]);
var inst_150798 = cljs.core.not_empty.call(null,inst_150787);
var state_150811__$1 = (function (){var statearr_150844 = state_150811;
(statearr_150844[(27)] = inst_150797);

return statearr_150844;
})();
if(cljs.core.truth_(inst_150798)){
var statearr_150845_150921 = state_150811__$1;
(statearr_150845_150921[(1)] = (44));

} else {
var statearr_150846_150922 = state_150811__$1;
(statearr_150846_150922[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (29))){
var inst_150728 = (state_150811[(23)]);
var inst_150764 = (state_150811[(16)]);
var inst_150732 = (state_150811[(24)]);
var inst_150730 = (state_150811[(26)]);
var inst_150724 = (state_150811[(19)]);
var inst_150727 = (state_150811[(25)]);
var inst_150760 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_150763 = (function (){var all_files = inst_150724;
var res_SINGLEQUOTE_ = inst_150727;
var res = inst_150728;
var files_not_loaded = inst_150730;
var dependencies_that_loaded = inst_150732;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_150728,inst_150764,inst_150732,inst_150730,inst_150724,inst_150727,inst_150760,state_val_150812,c__148175__auto__,map__150656,map__150656__$1,opts,before_jsload,on_jsload,reload_dependents,map__150657,map__150657__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__150762){
var map__150847 = p__150762;
var map__150847__$1 = ((((!((map__150847 == null)))?((((map__150847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__150847.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__150847):map__150847);
var namespace = cljs.core.get.call(null,map__150847__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_150728,inst_150764,inst_150732,inst_150730,inst_150724,inst_150727,inst_150760,state_val_150812,c__148175__auto__,map__150656,map__150656__$1,opts,before_jsload,on_jsload,reload_dependents,map__150657,map__150657__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_150764__$1 = cljs.core.group_by.call(null,inst_150763,inst_150730);
var inst_150766 = (inst_150764__$1 == null);
var inst_150767 = cljs.core.not.call(null,inst_150766);
var state_150811__$1 = (function (){var statearr_150849 = state_150811;
(statearr_150849[(28)] = inst_150760);

(statearr_150849[(16)] = inst_150764__$1);

return statearr_150849;
})();
if(inst_150767){
var statearr_150850_150923 = state_150811__$1;
(statearr_150850_150923[(1)] = (32));

} else {
var statearr_150851_150924 = state_150811__$1;
(statearr_150851_150924[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (44))){
var inst_150787 = (state_150811[(21)]);
var inst_150800 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_150787);
var inst_150801 = cljs.core.pr_str.call(null,inst_150800);
var inst_150802 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_150801)].join('');
var inst_150803 = figwheel.client.utils.log.call(null,inst_150802);
var state_150811__$1 = state_150811;
var statearr_150852_150925 = state_150811__$1;
(statearr_150852_150925[(2)] = inst_150803);

(statearr_150852_150925[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (6))){
var inst_150705 = (state_150811[(2)]);
var state_150811__$1 = state_150811;
var statearr_150853_150926 = state_150811__$1;
(statearr_150853_150926[(2)] = inst_150705);

(statearr_150853_150926[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (28))){
var inst_150730 = (state_150811[(26)]);
var inst_150757 = (state_150811[(2)]);
var inst_150758 = cljs.core.not_empty.call(null,inst_150730);
var state_150811__$1 = (function (){var statearr_150854 = state_150811;
(statearr_150854[(29)] = inst_150757);

return statearr_150854;
})();
if(cljs.core.truth_(inst_150758)){
var statearr_150855_150927 = state_150811__$1;
(statearr_150855_150927[(1)] = (29));

} else {
var statearr_150856_150928 = state_150811__$1;
(statearr_150856_150928[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (25))){
var inst_150728 = (state_150811[(23)]);
var inst_150744 = (state_150811[(2)]);
var inst_150745 = cljs.core.not_empty.call(null,inst_150728);
var state_150811__$1 = (function (){var statearr_150857 = state_150811;
(statearr_150857[(30)] = inst_150744);

return statearr_150857;
})();
if(cljs.core.truth_(inst_150745)){
var statearr_150858_150929 = state_150811__$1;
(statearr_150858_150929[(1)] = (26));

} else {
var statearr_150859_150930 = state_150811__$1;
(statearr_150859_150930[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (34))){
var inst_150780 = (state_150811[(2)]);
var state_150811__$1 = state_150811;
if(cljs.core.truth_(inst_150780)){
var statearr_150860_150931 = state_150811__$1;
(statearr_150860_150931[(1)] = (38));

} else {
var statearr_150861_150932 = state_150811__$1;
(statearr_150861_150932[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (17))){
var state_150811__$1 = state_150811;
var statearr_150862_150933 = state_150811__$1;
(statearr_150862_150933[(2)] = recompile_dependents);

(statearr_150862_150933[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (3))){
var state_150811__$1 = state_150811;
var statearr_150863_150934 = state_150811__$1;
(statearr_150863_150934[(2)] = null);

(statearr_150863_150934[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (12))){
var inst_150701 = (state_150811[(2)]);
var state_150811__$1 = state_150811;
var statearr_150864_150935 = state_150811__$1;
(statearr_150864_150935[(2)] = inst_150701);

(statearr_150864_150935[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (2))){
var inst_150663 = (state_150811[(13)]);
var inst_150670 = cljs.core.seq.call(null,inst_150663);
var inst_150671 = inst_150670;
var inst_150672 = null;
var inst_150673 = (0);
var inst_150674 = (0);
var state_150811__$1 = (function (){var statearr_150865 = state_150811;
(statearr_150865[(7)] = inst_150672);

(statearr_150865[(8)] = inst_150673);

(statearr_150865[(9)] = inst_150671);

(statearr_150865[(10)] = inst_150674);

return statearr_150865;
})();
var statearr_150866_150936 = state_150811__$1;
(statearr_150866_150936[(2)] = null);

(statearr_150866_150936[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (23))){
var inst_150728 = (state_150811[(23)]);
var inst_150732 = (state_150811[(24)]);
var inst_150730 = (state_150811[(26)]);
var inst_150724 = (state_150811[(19)]);
var inst_150727 = (state_150811[(25)]);
var inst_150735 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_150737 = (function (){var all_files = inst_150724;
var res_SINGLEQUOTE_ = inst_150727;
var res = inst_150728;
var files_not_loaded = inst_150730;
var dependencies_that_loaded = inst_150732;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_150728,inst_150732,inst_150730,inst_150724,inst_150727,inst_150735,state_val_150812,c__148175__auto__,map__150656,map__150656__$1,opts,before_jsload,on_jsload,reload_dependents,map__150657,map__150657__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__150736){
var map__150867 = p__150736;
var map__150867__$1 = ((((!((map__150867 == null)))?((((map__150867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__150867.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__150867):map__150867);
var request_url = cljs.core.get.call(null,map__150867__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_150728,inst_150732,inst_150730,inst_150724,inst_150727,inst_150735,state_val_150812,c__148175__auto__,map__150656,map__150656__$1,opts,before_jsload,on_jsload,reload_dependents,map__150657,map__150657__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_150738 = cljs.core.reverse.call(null,inst_150732);
var inst_150739 = cljs.core.map.call(null,inst_150737,inst_150738);
var inst_150740 = cljs.core.pr_str.call(null,inst_150739);
var inst_150741 = figwheel.client.utils.log.call(null,inst_150740);
var state_150811__$1 = (function (){var statearr_150869 = state_150811;
(statearr_150869[(31)] = inst_150735);

return statearr_150869;
})();
var statearr_150870_150937 = state_150811__$1;
(statearr_150870_150937[(2)] = inst_150741);

(statearr_150870_150937[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (35))){
var state_150811__$1 = state_150811;
var statearr_150871_150938 = state_150811__$1;
(statearr_150871_150938[(2)] = true);

(statearr_150871_150938[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (19))){
var inst_150714 = (state_150811[(12)]);
var inst_150720 = figwheel.client.file_reloading.expand_files.call(null,inst_150714);
var state_150811__$1 = state_150811;
var statearr_150872_150939 = state_150811__$1;
(statearr_150872_150939[(2)] = inst_150720);

(statearr_150872_150939[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (11))){
var state_150811__$1 = state_150811;
var statearr_150873_150940 = state_150811__$1;
(statearr_150873_150940[(2)] = null);

(statearr_150873_150940[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (9))){
var inst_150703 = (state_150811[(2)]);
var state_150811__$1 = state_150811;
var statearr_150874_150941 = state_150811__$1;
(statearr_150874_150941[(2)] = inst_150703);

(statearr_150874_150941[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (5))){
var inst_150673 = (state_150811[(8)]);
var inst_150674 = (state_150811[(10)]);
var inst_150676 = (inst_150674 < inst_150673);
var inst_150677 = inst_150676;
var state_150811__$1 = state_150811;
if(cljs.core.truth_(inst_150677)){
var statearr_150875_150942 = state_150811__$1;
(statearr_150875_150942[(1)] = (7));

} else {
var statearr_150876_150943 = state_150811__$1;
(statearr_150876_150943[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (14))){
var inst_150684 = (state_150811[(22)]);
var inst_150693 = cljs.core.first.call(null,inst_150684);
var inst_150694 = figwheel.client.file_reloading.eval_body.call(null,inst_150693,opts);
var inst_150695 = cljs.core.next.call(null,inst_150684);
var inst_150671 = inst_150695;
var inst_150672 = null;
var inst_150673 = (0);
var inst_150674 = (0);
var state_150811__$1 = (function (){var statearr_150877 = state_150811;
(statearr_150877[(7)] = inst_150672);

(statearr_150877[(8)] = inst_150673);

(statearr_150877[(9)] = inst_150671);

(statearr_150877[(10)] = inst_150674);

(statearr_150877[(32)] = inst_150694);

return statearr_150877;
})();
var statearr_150878_150944 = state_150811__$1;
(statearr_150878_150944[(2)] = null);

(statearr_150878_150944[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (45))){
var state_150811__$1 = state_150811;
var statearr_150879_150945 = state_150811__$1;
(statearr_150879_150945[(2)] = null);

(statearr_150879_150945[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (26))){
var inst_150728 = (state_150811[(23)]);
var inst_150732 = (state_150811[(24)]);
var inst_150730 = (state_150811[(26)]);
var inst_150724 = (state_150811[(19)]);
var inst_150727 = (state_150811[(25)]);
var inst_150747 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_150749 = (function (){var all_files = inst_150724;
var res_SINGLEQUOTE_ = inst_150727;
var res = inst_150728;
var files_not_loaded = inst_150730;
var dependencies_that_loaded = inst_150732;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_150728,inst_150732,inst_150730,inst_150724,inst_150727,inst_150747,state_val_150812,c__148175__auto__,map__150656,map__150656__$1,opts,before_jsload,on_jsload,reload_dependents,map__150657,map__150657__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__150748){
var map__150880 = p__150748;
var map__150880__$1 = ((((!((map__150880 == null)))?((((map__150880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__150880.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__150880):map__150880);
var namespace = cljs.core.get.call(null,map__150880__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__150880__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_150728,inst_150732,inst_150730,inst_150724,inst_150727,inst_150747,state_val_150812,c__148175__auto__,map__150656,map__150656__$1,opts,before_jsload,on_jsload,reload_dependents,map__150657,map__150657__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_150750 = cljs.core.map.call(null,inst_150749,inst_150728);
var inst_150751 = cljs.core.pr_str.call(null,inst_150750);
var inst_150752 = figwheel.client.utils.log.call(null,inst_150751);
var inst_150753 = (function (){var all_files = inst_150724;
var res_SINGLEQUOTE_ = inst_150727;
var res = inst_150728;
var files_not_loaded = inst_150730;
var dependencies_that_loaded = inst_150732;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_150728,inst_150732,inst_150730,inst_150724,inst_150727,inst_150747,inst_150749,inst_150750,inst_150751,inst_150752,state_val_150812,c__148175__auto__,map__150656,map__150656__$1,opts,before_jsload,on_jsload,reload_dependents,map__150657,map__150657__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_150728,inst_150732,inst_150730,inst_150724,inst_150727,inst_150747,inst_150749,inst_150750,inst_150751,inst_150752,state_val_150812,c__148175__auto__,map__150656,map__150656__$1,opts,before_jsload,on_jsload,reload_dependents,map__150657,map__150657__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_150754 = setTimeout(inst_150753,(10));
var state_150811__$1 = (function (){var statearr_150882 = state_150811;
(statearr_150882[(33)] = inst_150747);

(statearr_150882[(34)] = inst_150752);

return statearr_150882;
})();
var statearr_150883_150946 = state_150811__$1;
(statearr_150883_150946[(2)] = inst_150754);

(statearr_150883_150946[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (16))){
var state_150811__$1 = state_150811;
var statearr_150884_150947 = state_150811__$1;
(statearr_150884_150947[(2)] = reload_dependents);

(statearr_150884_150947[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (38))){
var inst_150764 = (state_150811[(16)]);
var inst_150782 = cljs.core.apply.call(null,cljs.core.hash_map,inst_150764);
var state_150811__$1 = state_150811;
var statearr_150885_150948 = state_150811__$1;
(statearr_150885_150948[(2)] = inst_150782);

(statearr_150885_150948[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (30))){
var state_150811__$1 = state_150811;
var statearr_150886_150949 = state_150811__$1;
(statearr_150886_150949[(2)] = null);

(statearr_150886_150949[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (10))){
var inst_150684 = (state_150811[(22)]);
var inst_150686 = cljs.core.chunked_seq_QMARK_.call(null,inst_150684);
var state_150811__$1 = state_150811;
if(inst_150686){
var statearr_150887_150950 = state_150811__$1;
(statearr_150887_150950[(1)] = (13));

} else {
var statearr_150888_150951 = state_150811__$1;
(statearr_150888_150951[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (18))){
var inst_150718 = (state_150811[(2)]);
var state_150811__$1 = state_150811;
if(cljs.core.truth_(inst_150718)){
var statearr_150889_150952 = state_150811__$1;
(statearr_150889_150952[(1)] = (19));

} else {
var statearr_150890_150953 = state_150811__$1;
(statearr_150890_150953[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (42))){
var state_150811__$1 = state_150811;
var statearr_150891_150954 = state_150811__$1;
(statearr_150891_150954[(2)] = null);

(statearr_150891_150954[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (37))){
var inst_150777 = (state_150811[(2)]);
var state_150811__$1 = state_150811;
var statearr_150892_150955 = state_150811__$1;
(statearr_150892_150955[(2)] = inst_150777);

(statearr_150892_150955[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150812 === (8))){
var inst_150684 = (state_150811[(22)]);
var inst_150671 = (state_150811[(9)]);
var inst_150684__$1 = cljs.core.seq.call(null,inst_150671);
var state_150811__$1 = (function (){var statearr_150893 = state_150811;
(statearr_150893[(22)] = inst_150684__$1);

return statearr_150893;
})();
if(inst_150684__$1){
var statearr_150894_150956 = state_150811__$1;
(statearr_150894_150956[(1)] = (10));

} else {
var statearr_150895_150957 = state_150811__$1;
(statearr_150895_150957[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__148175__auto__,map__150656,map__150656__$1,opts,before_jsload,on_jsload,reload_dependents,map__150657,map__150657__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__148085__auto__,c__148175__auto__,map__150656,map__150656__$1,opts,before_jsload,on_jsload,reload_dependents,map__150657,map__150657__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__148086__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__148086__auto____0 = (function (){
var statearr_150896 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_150896[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__148086__auto__);

(statearr_150896[(1)] = (1));

return statearr_150896;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__148086__auto____1 = (function (state_150811){
while(true){
var ret_value__148087__auto__ = (function (){try{while(true){
var result__148088__auto__ = switch__148085__auto__.call(null,state_150811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__148088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__148088__auto__;
}
break;
}
}catch (e150897){if((e150897 instanceof Object)){
var ex__148089__auto__ = e150897;
var statearr_150898_150958 = state_150811;
(statearr_150898_150958[(5)] = ex__148089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_150811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e150897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__148087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150959 = state_150811;
state_150811 = G__150959;
continue;
} else {
return ret_value__148087__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__148086__auto__ = function(state_150811){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__148086__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__148086__auto____1.call(this,state_150811);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__148086__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__148086__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__148086__auto__;
})()
;})(switch__148085__auto__,c__148175__auto__,map__150656,map__150656__$1,opts,before_jsload,on_jsload,reload_dependents,map__150657,map__150657__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__148177__auto__ = (function (){var statearr_150899 = f__148176__auto__.call(null);
(statearr_150899[(6)] = c__148175__auto__);

return statearr_150899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__148177__auto__);
});})(c__148175__auto__,map__150656,map__150656__$1,opts,before_jsload,on_jsload,reload_dependents,map__150657,map__150657__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__148175__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__150962,link){
var map__150963 = p__150962;
var map__150963__$1 = ((((!((map__150963 == null)))?((((map__150963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__150963.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__150963):map__150963);
var file = cljs.core.get.call(null,map__150963__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5278__auto__ = link.href;
if(cljs.core.truth_(temp__5278__auto__)){
var link_href = temp__5278__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5278__auto__,map__150963,map__150963__$1,file){
return (function (p1__150960_SHARP_,p2__150961_SHARP_){
if(cljs.core._EQ_.call(null,p1__150960_SHARP_,p2__150961_SHARP_)){
return p1__150960_SHARP_;
} else {
return false;
}
});})(link_href,temp__5278__auto__,map__150963,map__150963__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5278__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__150966){
var map__150967 = p__150966;
var map__150967__$1 = ((((!((map__150967 == null)))?((((map__150967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__150967.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__150967):map__150967);
var match_length = cljs.core.get.call(null,map__150967__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__150967__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__150965_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__150965_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5278__auto__)){
var res = temp__5278__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__150969_SHARP_,p2__150970_SHARP_){
return cljs.core.assoc.call(null,p1__150969_SHARP_,cljs.core.get.call(null,p2__150970_SHARP_,key),p2__150970_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5276__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5276__auto__)){
var link = temp__5276__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5276__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5276__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_150971 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_150971);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_150971);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__150972,p__150973){
var map__150974 = p__150972;
var map__150974__$1 = ((((!((map__150974 == null)))?((((map__150974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__150974.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__150974):map__150974);
var on_cssload = cljs.core.get.call(null,map__150974__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__150975 = p__150973;
var map__150975__$1 = ((((!((map__150975 == null)))?((((map__150975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__150975.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__150975):map__150975);
var files_msg = map__150975__$1;
var files = cljs.core.get.call(null,map__150975__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5278__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5278__auto__)){
var f_datas = temp__5278__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1509265455653
