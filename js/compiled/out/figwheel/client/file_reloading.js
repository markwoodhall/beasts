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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__3259720_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__3259720_SHARP_));
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
var seq__3259721 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__3259722 = null;
var count__3259723 = (0);
var i__3259724 = (0);
while(true){
if((i__3259724 < count__3259723)){
var n = cljs.core._nth.call(null,chunk__3259722,i__3259724);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__3259725 = seq__3259721;
var G__3259726 = chunk__3259722;
var G__3259727 = count__3259723;
var G__3259728 = (i__3259724 + (1));
seq__3259721 = G__3259725;
chunk__3259722 = G__3259726;
count__3259723 = G__3259727;
i__3259724 = G__3259728;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__3259721);
if(temp__5278__auto__){
var seq__3259721__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3259721__$1)){
var c__50452__auto__ = cljs.core.chunk_first.call(null,seq__3259721__$1);
var G__3259729 = cljs.core.chunk_rest.call(null,seq__3259721__$1);
var G__3259730 = c__50452__auto__;
var G__3259731 = cljs.core.count.call(null,c__50452__auto__);
var G__3259732 = (0);
seq__3259721 = G__3259729;
chunk__3259722 = G__3259730;
count__3259723 = G__3259731;
i__3259724 = G__3259732;
continue;
} else {
var n = cljs.core.first.call(null,seq__3259721__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__3259733 = cljs.core.next.call(null,seq__3259721__$1);
var G__3259734 = null;
var G__3259735 = (0);
var G__3259736 = (0);
seq__3259721 = G__3259733;
chunk__3259722 = G__3259734;
count__3259723 = G__3259735;
i__3259724 = G__3259736;
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

var seq__3259746_3259754 = cljs.core.seq.call(null,deps);
var chunk__3259747_3259755 = null;
var count__3259748_3259756 = (0);
var i__3259749_3259757 = (0);
while(true){
if((i__3259749_3259757 < count__3259748_3259756)){
var dep_3259758 = cljs.core._nth.call(null,chunk__3259747_3259755,i__3259749_3259757);
topo_sort_helper_STAR_.call(null,dep_3259758,(depth + (1)),state);

var G__3259759 = seq__3259746_3259754;
var G__3259760 = chunk__3259747_3259755;
var G__3259761 = count__3259748_3259756;
var G__3259762 = (i__3259749_3259757 + (1));
seq__3259746_3259754 = G__3259759;
chunk__3259747_3259755 = G__3259760;
count__3259748_3259756 = G__3259761;
i__3259749_3259757 = G__3259762;
continue;
} else {
var temp__5278__auto___3259763 = cljs.core.seq.call(null,seq__3259746_3259754);
if(temp__5278__auto___3259763){
var seq__3259746_3259764__$1 = temp__5278__auto___3259763;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3259746_3259764__$1)){
var c__50452__auto___3259765 = cljs.core.chunk_first.call(null,seq__3259746_3259764__$1);
var G__3259766 = cljs.core.chunk_rest.call(null,seq__3259746_3259764__$1);
var G__3259767 = c__50452__auto___3259765;
var G__3259768 = cljs.core.count.call(null,c__50452__auto___3259765);
var G__3259769 = (0);
seq__3259746_3259754 = G__3259766;
chunk__3259747_3259755 = G__3259767;
count__3259748_3259756 = G__3259768;
i__3259749_3259757 = G__3259769;
continue;
} else {
var dep_3259770 = cljs.core.first.call(null,seq__3259746_3259764__$1);
topo_sort_helper_STAR_.call(null,dep_3259770,(depth + (1)),state);

var G__3259771 = cljs.core.next.call(null,seq__3259746_3259764__$1);
var G__3259772 = null;
var G__3259773 = (0);
var G__3259774 = (0);
seq__3259746_3259754 = G__3259771;
chunk__3259747_3259755 = G__3259772;
count__3259748_3259756 = G__3259773;
i__3259749_3259757 = G__3259774;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__3259750){
var vec__3259751 = p__3259750;
var seq__3259752 = cljs.core.seq.call(null,vec__3259751);
var first__3259753 = cljs.core.first.call(null,seq__3259752);
var seq__3259752__$1 = cljs.core.next.call(null,seq__3259752);
var x = first__3259753;
var xs = seq__3259752__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__3259751,seq__3259752,first__3259753,seq__3259752__$1,x,xs,get_deps__$1){
return (function (p1__3259737_SHARP_){
return clojure.set.difference.call(null,p1__3259737_SHARP_,x);
});})(vec__3259751,seq__3259752,first__3259753,seq__3259752__$1,x,xs,get_deps__$1))
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
var seq__3259775 = cljs.core.seq.call(null,provides);
var chunk__3259776 = null;
var count__3259777 = (0);
var i__3259778 = (0);
while(true){
if((i__3259778 < count__3259777)){
var prov = cljs.core._nth.call(null,chunk__3259776,i__3259778);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__3259779_3259787 = cljs.core.seq.call(null,requires);
var chunk__3259780_3259788 = null;
var count__3259781_3259789 = (0);
var i__3259782_3259790 = (0);
while(true){
if((i__3259782_3259790 < count__3259781_3259789)){
var req_3259791 = cljs.core._nth.call(null,chunk__3259780_3259788,i__3259782_3259790);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_3259791,prov);

var G__3259792 = seq__3259779_3259787;
var G__3259793 = chunk__3259780_3259788;
var G__3259794 = count__3259781_3259789;
var G__3259795 = (i__3259782_3259790 + (1));
seq__3259779_3259787 = G__3259792;
chunk__3259780_3259788 = G__3259793;
count__3259781_3259789 = G__3259794;
i__3259782_3259790 = G__3259795;
continue;
} else {
var temp__5278__auto___3259796 = cljs.core.seq.call(null,seq__3259779_3259787);
if(temp__5278__auto___3259796){
var seq__3259779_3259797__$1 = temp__5278__auto___3259796;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3259779_3259797__$1)){
var c__50452__auto___3259798 = cljs.core.chunk_first.call(null,seq__3259779_3259797__$1);
var G__3259799 = cljs.core.chunk_rest.call(null,seq__3259779_3259797__$1);
var G__3259800 = c__50452__auto___3259798;
var G__3259801 = cljs.core.count.call(null,c__50452__auto___3259798);
var G__3259802 = (0);
seq__3259779_3259787 = G__3259799;
chunk__3259780_3259788 = G__3259800;
count__3259781_3259789 = G__3259801;
i__3259782_3259790 = G__3259802;
continue;
} else {
var req_3259803 = cljs.core.first.call(null,seq__3259779_3259797__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_3259803,prov);

var G__3259804 = cljs.core.next.call(null,seq__3259779_3259797__$1);
var G__3259805 = null;
var G__3259806 = (0);
var G__3259807 = (0);
seq__3259779_3259787 = G__3259804;
chunk__3259780_3259788 = G__3259805;
count__3259781_3259789 = G__3259806;
i__3259782_3259790 = G__3259807;
continue;
}
} else {
}
}
break;
}

var G__3259808 = seq__3259775;
var G__3259809 = chunk__3259776;
var G__3259810 = count__3259777;
var G__3259811 = (i__3259778 + (1));
seq__3259775 = G__3259808;
chunk__3259776 = G__3259809;
count__3259777 = G__3259810;
i__3259778 = G__3259811;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__3259775);
if(temp__5278__auto__){
var seq__3259775__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3259775__$1)){
var c__50452__auto__ = cljs.core.chunk_first.call(null,seq__3259775__$1);
var G__3259812 = cljs.core.chunk_rest.call(null,seq__3259775__$1);
var G__3259813 = c__50452__auto__;
var G__3259814 = cljs.core.count.call(null,c__50452__auto__);
var G__3259815 = (0);
seq__3259775 = G__3259812;
chunk__3259776 = G__3259813;
count__3259777 = G__3259814;
i__3259778 = G__3259815;
continue;
} else {
var prov = cljs.core.first.call(null,seq__3259775__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__3259783_3259816 = cljs.core.seq.call(null,requires);
var chunk__3259784_3259817 = null;
var count__3259785_3259818 = (0);
var i__3259786_3259819 = (0);
while(true){
if((i__3259786_3259819 < count__3259785_3259818)){
var req_3259820 = cljs.core._nth.call(null,chunk__3259784_3259817,i__3259786_3259819);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_3259820,prov);

var G__3259821 = seq__3259783_3259816;
var G__3259822 = chunk__3259784_3259817;
var G__3259823 = count__3259785_3259818;
var G__3259824 = (i__3259786_3259819 + (1));
seq__3259783_3259816 = G__3259821;
chunk__3259784_3259817 = G__3259822;
count__3259785_3259818 = G__3259823;
i__3259786_3259819 = G__3259824;
continue;
} else {
var temp__5278__auto___3259825__$1 = cljs.core.seq.call(null,seq__3259783_3259816);
if(temp__5278__auto___3259825__$1){
var seq__3259783_3259826__$1 = temp__5278__auto___3259825__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3259783_3259826__$1)){
var c__50452__auto___3259827 = cljs.core.chunk_first.call(null,seq__3259783_3259826__$1);
var G__3259828 = cljs.core.chunk_rest.call(null,seq__3259783_3259826__$1);
var G__3259829 = c__50452__auto___3259827;
var G__3259830 = cljs.core.count.call(null,c__50452__auto___3259827);
var G__3259831 = (0);
seq__3259783_3259816 = G__3259828;
chunk__3259784_3259817 = G__3259829;
count__3259785_3259818 = G__3259830;
i__3259786_3259819 = G__3259831;
continue;
} else {
var req_3259832 = cljs.core.first.call(null,seq__3259783_3259826__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_3259832,prov);

var G__3259833 = cljs.core.next.call(null,seq__3259783_3259826__$1);
var G__3259834 = null;
var G__3259835 = (0);
var G__3259836 = (0);
seq__3259783_3259816 = G__3259833;
chunk__3259784_3259817 = G__3259834;
count__3259785_3259818 = G__3259835;
i__3259786_3259819 = G__3259836;
continue;
}
} else {
}
}
break;
}

var G__3259837 = cljs.core.next.call(null,seq__3259775__$1);
var G__3259838 = null;
var G__3259839 = (0);
var G__3259840 = (0);
seq__3259775 = G__3259837;
chunk__3259776 = G__3259838;
count__3259777 = G__3259839;
i__3259778 = G__3259840;
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
var seq__3259841_3259845 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__3259842_3259846 = null;
var count__3259843_3259847 = (0);
var i__3259844_3259848 = (0);
while(true){
if((i__3259844_3259848 < count__3259843_3259847)){
var ns_3259849 = cljs.core._nth.call(null,chunk__3259842_3259846,i__3259844_3259848);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_3259849);

var G__3259850 = seq__3259841_3259845;
var G__3259851 = chunk__3259842_3259846;
var G__3259852 = count__3259843_3259847;
var G__3259853 = (i__3259844_3259848 + (1));
seq__3259841_3259845 = G__3259850;
chunk__3259842_3259846 = G__3259851;
count__3259843_3259847 = G__3259852;
i__3259844_3259848 = G__3259853;
continue;
} else {
var temp__5278__auto___3259854 = cljs.core.seq.call(null,seq__3259841_3259845);
if(temp__5278__auto___3259854){
var seq__3259841_3259855__$1 = temp__5278__auto___3259854;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3259841_3259855__$1)){
var c__50452__auto___3259856 = cljs.core.chunk_first.call(null,seq__3259841_3259855__$1);
var G__3259857 = cljs.core.chunk_rest.call(null,seq__3259841_3259855__$1);
var G__3259858 = c__50452__auto___3259856;
var G__3259859 = cljs.core.count.call(null,c__50452__auto___3259856);
var G__3259860 = (0);
seq__3259841_3259845 = G__3259857;
chunk__3259842_3259846 = G__3259858;
count__3259843_3259847 = G__3259859;
i__3259844_3259848 = G__3259860;
continue;
} else {
var ns_3259861 = cljs.core.first.call(null,seq__3259841_3259855__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_3259861);

var G__3259862 = cljs.core.next.call(null,seq__3259841_3259855__$1);
var G__3259863 = null;
var G__3259864 = (0);
var G__3259865 = (0);
seq__3259841_3259845 = G__3259862;
chunk__3259842_3259846 = G__3259863;
count__3259843_3259847 = G__3259864;
i__3259844_3259848 = G__3259865;
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
var G__3259866__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__3259866 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3259867__i = 0, G__3259867__a = new Array(arguments.length -  0);
while (G__3259867__i < G__3259867__a.length) {G__3259867__a[G__3259867__i] = arguments[G__3259867__i + 0]; ++G__3259867__i;}
  args = new cljs.core.IndexedSeq(G__3259867__a,0,null);
} 
return G__3259866__delegate.call(this,args);};
G__3259866.cljs$lang$maxFixedArity = 0;
G__3259866.cljs$lang$applyTo = (function (arglist__3259868){
var args = cljs.core.seq(arglist__3259868);
return G__3259866__delegate(args);
});
G__3259866.cljs$core$IFn$_invoke$arity$variadic = G__3259866__delegate;
return G__3259866;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__3259869_SHARP_,p2__3259870_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__3259869_SHARP_)].join('')),p2__3259870_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__3259871_SHARP_,p2__3259872_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__3259871_SHARP_)].join(''),p2__3259872_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__3259873 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__3259873.addCallback(((function (G__3259873){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__3259873))
);

G__3259873.addErrback(((function (G__3259873){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__3259873))
);

return G__3259873;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__3259874 = cljs.core._EQ_;
var expr__3259875 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__3259874.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__3259875))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__3259874,expr__3259875){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__3259874,expr__3259875))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__3259874,expr__3259875){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e3259877){if((e3259877 instanceof Error)){
var e = e3259877;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e3259877;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__3259874,expr__3259875))
} else {
if(cljs.core.truth_(pred__3259874.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__3259875))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__3259874.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__3259875))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__3259874.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__3259875))){
return ((function (pred__3259874,expr__3259875){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e3259878){if((e3259878 instanceof Error)){
var e = e3259878;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e3259878;

}
}})());
});
;})(pred__3259874,expr__3259875))
} else {
return ((function (pred__3259874,expr__3259875){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__3259874,expr__3259875))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__3259879,callback){
var map__3259880 = p__3259879;
var map__3259880__$1 = ((((!((map__3259880 == null)))?((((map__3259880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3259880.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3259880):map__3259880);
var file_msg = map__3259880__$1;
var request_url = cljs.core.get.call(null,map__3259880__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__3259880,map__3259880__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__3259880,map__3259880__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__53126__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53126__auto__){
return (function (){
var f__53127__auto__ = (function (){var switch__53103__auto__ = ((function (c__53126__auto__){
return (function (state_3259904){
var state_val_3259905 = (state_3259904[(1)]);
if((state_val_3259905 === (7))){
var inst_3259900 = (state_3259904[(2)]);
var state_3259904__$1 = state_3259904;
var statearr_3259906_3259923 = state_3259904__$1;
(statearr_3259906_3259923[(2)] = inst_3259900);

(statearr_3259906_3259923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3259905 === (1))){
var state_3259904__$1 = state_3259904;
var statearr_3259907_3259924 = state_3259904__$1;
(statearr_3259907_3259924[(2)] = null);

(statearr_3259907_3259924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3259905 === (4))){
var inst_3259884 = (state_3259904[(7)]);
var inst_3259884__$1 = (state_3259904[(2)]);
var state_3259904__$1 = (function (){var statearr_3259908 = state_3259904;
(statearr_3259908[(7)] = inst_3259884__$1);

return statearr_3259908;
})();
if(cljs.core.truth_(inst_3259884__$1)){
var statearr_3259909_3259925 = state_3259904__$1;
(statearr_3259909_3259925[(1)] = (5));

} else {
var statearr_3259910_3259926 = state_3259904__$1;
(statearr_3259910_3259926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3259905 === (6))){
var state_3259904__$1 = state_3259904;
var statearr_3259911_3259927 = state_3259904__$1;
(statearr_3259911_3259927[(2)] = null);

(statearr_3259911_3259927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3259905 === (3))){
var inst_3259902 = (state_3259904[(2)]);
var state_3259904__$1 = state_3259904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3259904__$1,inst_3259902);
} else {
if((state_val_3259905 === (2))){
var state_3259904__$1 = state_3259904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3259904__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_3259905 === (11))){
var inst_3259896 = (state_3259904[(2)]);
var state_3259904__$1 = (function (){var statearr_3259912 = state_3259904;
(statearr_3259912[(8)] = inst_3259896);

return statearr_3259912;
})();
var statearr_3259913_3259928 = state_3259904__$1;
(statearr_3259913_3259928[(2)] = null);

(statearr_3259913_3259928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3259905 === (9))){
var inst_3259890 = (state_3259904[(9)]);
var inst_3259888 = (state_3259904[(10)]);
var inst_3259892 = inst_3259890.call(null,inst_3259888);
var state_3259904__$1 = state_3259904;
var statearr_3259914_3259929 = state_3259904__$1;
(statearr_3259914_3259929[(2)] = inst_3259892);

(statearr_3259914_3259929[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3259905 === (5))){
var inst_3259884 = (state_3259904[(7)]);
var inst_3259886 = figwheel.client.file_reloading.blocking_load.call(null,inst_3259884);
var state_3259904__$1 = state_3259904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3259904__$1,(8),inst_3259886);
} else {
if((state_val_3259905 === (10))){
var inst_3259888 = (state_3259904[(10)]);
var inst_3259894 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_3259888);
var state_3259904__$1 = state_3259904;
var statearr_3259915_3259930 = state_3259904__$1;
(statearr_3259915_3259930[(2)] = inst_3259894);

(statearr_3259915_3259930[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3259905 === (8))){
var inst_3259890 = (state_3259904[(9)]);
var inst_3259884 = (state_3259904[(7)]);
var inst_3259888 = (state_3259904[(2)]);
var inst_3259889 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_3259890__$1 = cljs.core.get.call(null,inst_3259889,inst_3259884);
var state_3259904__$1 = (function (){var statearr_3259916 = state_3259904;
(statearr_3259916[(9)] = inst_3259890__$1);

(statearr_3259916[(10)] = inst_3259888);

return statearr_3259916;
})();
if(cljs.core.truth_(inst_3259890__$1)){
var statearr_3259917_3259931 = state_3259904__$1;
(statearr_3259917_3259931[(1)] = (9));

} else {
var statearr_3259918_3259932 = state_3259904__$1;
(statearr_3259918_3259932[(1)] = (10));

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
});})(c__53126__auto__))
;
return ((function (switch__53103__auto__,c__53126__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__53104__auto__ = null;
var figwheel$client$file_reloading$state_machine__53104__auto____0 = (function (){
var statearr_3259919 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_3259919[(0)] = figwheel$client$file_reloading$state_machine__53104__auto__);

(statearr_3259919[(1)] = (1));

return statearr_3259919;
});
var figwheel$client$file_reloading$state_machine__53104__auto____1 = (function (state_3259904){
while(true){
var ret_value__53105__auto__ = (function (){try{while(true){
var result__53106__auto__ = switch__53103__auto__.call(null,state_3259904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53106__auto__;
}
break;
}
}catch (e3259920){if((e3259920 instanceof Object)){
var ex__53107__auto__ = e3259920;
var statearr_3259921_3259933 = state_3259904;
(statearr_3259921_3259933[(5)] = ex__53107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3259904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3259920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3259934 = state_3259904;
state_3259904 = G__3259934;
continue;
} else {
return ret_value__53105__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__53104__auto__ = function(state_3259904){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__53104__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__53104__auto____1.call(this,state_3259904);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__53104__auto____0;
figwheel$client$file_reloading$state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__53104__auto____1;
return figwheel$client$file_reloading$state_machine__53104__auto__;
})()
;})(switch__53103__auto__,c__53126__auto__))
})();
var state__53128__auto__ = (function (){var statearr_3259922 = f__53127__auto__.call(null);
(statearr_3259922[(6)] = c__53126__auto__);

return statearr_3259922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53128__auto__);
});})(c__53126__auto__))
);

return c__53126__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__3259935,callback){
var map__3259936 = p__3259935;
var map__3259936__$1 = ((((!((map__3259936 == null)))?((((map__3259936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3259936.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3259936):map__3259936);
var file_msg = map__3259936__$1;
var namespace = cljs.core.get.call(null,map__3259936__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__3259936,map__3259936__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__3259936,map__3259936__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__3259938){
var map__3259939 = p__3259938;
var map__3259939__$1 = ((((!((map__3259939 == null)))?((((map__3259939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3259939.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3259939):map__3259939);
var file_msg = map__3259939__$1;
var namespace = cljs.core.get.call(null,map__3259939__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__3259941){
var map__3259942 = p__3259941;
var map__3259942__$1 = ((((!((map__3259942 == null)))?((((map__3259942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3259942.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3259942):map__3259942);
var file_msg = map__3259942__$1;
var namespace = cljs.core.get.call(null,map__3259942__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__3259944,callback){
var map__3259945 = p__3259944;
var map__3259945__$1 = ((((!((map__3259945 == null)))?((((map__3259945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3259945.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3259945):map__3259945);
var file_msg = map__3259945__$1;
var request_url = cljs.core.get.call(null,map__3259945__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__3259945__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__53126__auto___3259995 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53126__auto___3259995,out){
return (function (){
var f__53127__auto__ = (function (){var switch__53103__auto__ = ((function (c__53126__auto___3259995,out){
return (function (state_3259980){
var state_val_3259981 = (state_3259980[(1)]);
if((state_val_3259981 === (1))){
var inst_3259954 = cljs.core.seq.call(null,files);
var inst_3259955 = cljs.core.first.call(null,inst_3259954);
var inst_3259956 = cljs.core.next.call(null,inst_3259954);
var inst_3259957 = files;
var state_3259980__$1 = (function (){var statearr_3259982 = state_3259980;
(statearr_3259982[(7)] = inst_3259957);

(statearr_3259982[(8)] = inst_3259956);

(statearr_3259982[(9)] = inst_3259955);

return statearr_3259982;
})();
var statearr_3259983_3259996 = state_3259980__$1;
(statearr_3259983_3259996[(2)] = null);

(statearr_3259983_3259996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3259981 === (2))){
var inst_3259957 = (state_3259980[(7)]);
var inst_3259963 = (state_3259980[(10)]);
var inst_3259962 = cljs.core.seq.call(null,inst_3259957);
var inst_3259963__$1 = cljs.core.first.call(null,inst_3259962);
var inst_3259964 = cljs.core.next.call(null,inst_3259962);
var inst_3259965 = (inst_3259963__$1 == null);
var inst_3259966 = cljs.core.not.call(null,inst_3259965);
var state_3259980__$1 = (function (){var statearr_3259984 = state_3259980;
(statearr_3259984[(10)] = inst_3259963__$1);

(statearr_3259984[(11)] = inst_3259964);

return statearr_3259984;
})();
if(inst_3259966){
var statearr_3259985_3259997 = state_3259980__$1;
(statearr_3259985_3259997[(1)] = (4));

} else {
var statearr_3259986_3259998 = state_3259980__$1;
(statearr_3259986_3259998[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3259981 === (3))){
var inst_3259978 = (state_3259980[(2)]);
var state_3259980__$1 = state_3259980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3259980__$1,inst_3259978);
} else {
if((state_val_3259981 === (4))){
var inst_3259963 = (state_3259980[(10)]);
var inst_3259968 = figwheel.client.file_reloading.reload_js_file.call(null,inst_3259963);
var state_3259980__$1 = state_3259980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3259980__$1,(7),inst_3259968);
} else {
if((state_val_3259981 === (5))){
var inst_3259974 = cljs.core.async.close_BANG_.call(null,out);
var state_3259980__$1 = state_3259980;
var statearr_3259987_3259999 = state_3259980__$1;
(statearr_3259987_3259999[(2)] = inst_3259974);

(statearr_3259987_3259999[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3259981 === (6))){
var inst_3259976 = (state_3259980[(2)]);
var state_3259980__$1 = state_3259980;
var statearr_3259988_3260000 = state_3259980__$1;
(statearr_3259988_3260000[(2)] = inst_3259976);

(statearr_3259988_3260000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3259981 === (7))){
var inst_3259964 = (state_3259980[(11)]);
var inst_3259970 = (state_3259980[(2)]);
var inst_3259971 = cljs.core.async.put_BANG_.call(null,out,inst_3259970);
var inst_3259957 = inst_3259964;
var state_3259980__$1 = (function (){var statearr_3259989 = state_3259980;
(statearr_3259989[(7)] = inst_3259957);

(statearr_3259989[(12)] = inst_3259971);

return statearr_3259989;
})();
var statearr_3259990_3260001 = state_3259980__$1;
(statearr_3259990_3260001[(2)] = null);

(statearr_3259990_3260001[(1)] = (2));


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
});})(c__53126__auto___3259995,out))
;
return ((function (switch__53103__auto__,c__53126__auto___3259995,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__53104__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__53104__auto____0 = (function (){
var statearr_3259991 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3259991[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__53104__auto__);

(statearr_3259991[(1)] = (1));

return statearr_3259991;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__53104__auto____1 = (function (state_3259980){
while(true){
var ret_value__53105__auto__ = (function (){try{while(true){
var result__53106__auto__ = switch__53103__auto__.call(null,state_3259980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53106__auto__;
}
break;
}
}catch (e3259992){if((e3259992 instanceof Object)){
var ex__53107__auto__ = e3259992;
var statearr_3259993_3260002 = state_3259980;
(statearr_3259993_3260002[(5)] = ex__53107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3259980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3259992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3260003 = state_3259980;
state_3259980 = G__3260003;
continue;
} else {
return ret_value__53105__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__53104__auto__ = function(state_3259980){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__53104__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__53104__auto____1.call(this,state_3259980);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__53104__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__53104__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__53104__auto__;
})()
;})(switch__53103__auto__,c__53126__auto___3259995,out))
})();
var state__53128__auto__ = (function (){var statearr_3259994 = f__53127__auto__.call(null);
(statearr_3259994[(6)] = c__53126__auto___3259995);

return statearr_3259994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53128__auto__);
});})(c__53126__auto___3259995,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__3260004,opts){
var map__3260005 = p__3260004;
var map__3260005__$1 = ((((!((map__3260005 == null)))?((((map__3260005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3260005.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3260005):map__3260005);
var eval_body = cljs.core.get.call(null,map__3260005__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__3260005__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e3260007){var e = e3260007;
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
return (function (p1__3260008_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__3260008_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__3260009){
var vec__3260010 = p__3260009;
var k = cljs.core.nth.call(null,vec__3260010,(0),null);
var v = cljs.core.nth.call(null,vec__3260010,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__3260013){
var vec__3260014 = p__3260013;
var k = cljs.core.nth.call(null,vec__3260014,(0),null);
var v = cljs.core.nth.call(null,vec__3260014,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__3260020,p__3260021){
var map__3260022 = p__3260020;
var map__3260022__$1 = ((((!((map__3260022 == null)))?((((map__3260022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3260022.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3260022):map__3260022);
var opts = map__3260022__$1;
var before_jsload = cljs.core.get.call(null,map__3260022__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__3260022__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__3260022__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__3260023 = p__3260021;
var map__3260023__$1 = ((((!((map__3260023 == null)))?((((map__3260023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3260023.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3260023):map__3260023);
var msg = map__3260023__$1;
var files = cljs.core.get.call(null,map__3260023__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__3260023__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__3260023__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__53126__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53126__auto__,map__3260022,map__3260022__$1,opts,before_jsload,on_jsload,reload_dependents,map__3260023,map__3260023__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__53127__auto__ = (function (){var switch__53103__auto__ = ((function (c__53126__auto__,map__3260022,map__3260022__$1,opts,before_jsload,on_jsload,reload_dependents,map__3260023,map__3260023__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_3260177){
var state_val_3260178 = (state_3260177[(1)]);
if((state_val_3260178 === (7))){
var inst_3260039 = (state_3260177[(7)]);
var inst_3260037 = (state_3260177[(8)]);
var inst_3260040 = (state_3260177[(9)]);
var inst_3260038 = (state_3260177[(10)]);
var inst_3260045 = cljs.core._nth.call(null,inst_3260038,inst_3260040);
var inst_3260046 = figwheel.client.file_reloading.eval_body.call(null,inst_3260045,opts);
var inst_3260047 = (inst_3260040 + (1));
var tmp3260179 = inst_3260039;
var tmp3260180 = inst_3260037;
var tmp3260181 = inst_3260038;
var inst_3260037__$1 = tmp3260180;
var inst_3260038__$1 = tmp3260181;
var inst_3260039__$1 = tmp3260179;
var inst_3260040__$1 = inst_3260047;
var state_3260177__$1 = (function (){var statearr_3260182 = state_3260177;
(statearr_3260182[(7)] = inst_3260039__$1);

(statearr_3260182[(8)] = inst_3260037__$1);

(statearr_3260182[(11)] = inst_3260046);

(statearr_3260182[(9)] = inst_3260040__$1);

(statearr_3260182[(10)] = inst_3260038__$1);

return statearr_3260182;
})();
var statearr_3260183_3260266 = state_3260177__$1;
(statearr_3260183_3260266[(2)] = null);

(statearr_3260183_3260266[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (20))){
var inst_3260080 = (state_3260177[(12)]);
var inst_3260088 = figwheel.client.file_reloading.sort_files.call(null,inst_3260080);
var state_3260177__$1 = state_3260177;
var statearr_3260184_3260267 = state_3260177__$1;
(statearr_3260184_3260267[(2)] = inst_3260088);

(statearr_3260184_3260267[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (27))){
var state_3260177__$1 = state_3260177;
var statearr_3260185_3260268 = state_3260177__$1;
(statearr_3260185_3260268[(2)] = null);

(statearr_3260185_3260268[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (1))){
var inst_3260029 = (state_3260177[(13)]);
var inst_3260026 = before_jsload.call(null,files);
var inst_3260027 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_3260028 = (function (){return ((function (inst_3260029,inst_3260026,inst_3260027,state_val_3260178,c__53126__auto__,map__3260022,map__3260022__$1,opts,before_jsload,on_jsload,reload_dependents,map__3260023,map__3260023__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__3260017_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__3260017_SHARP_);
});
;})(inst_3260029,inst_3260026,inst_3260027,state_val_3260178,c__53126__auto__,map__3260022,map__3260022__$1,opts,before_jsload,on_jsload,reload_dependents,map__3260023,map__3260023__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_3260029__$1 = cljs.core.filter.call(null,inst_3260028,files);
var inst_3260030 = cljs.core.not_empty.call(null,inst_3260029__$1);
var state_3260177__$1 = (function (){var statearr_3260186 = state_3260177;
(statearr_3260186[(14)] = inst_3260026);

(statearr_3260186[(15)] = inst_3260027);

(statearr_3260186[(13)] = inst_3260029__$1);

return statearr_3260186;
})();
if(cljs.core.truth_(inst_3260030)){
var statearr_3260187_3260269 = state_3260177__$1;
(statearr_3260187_3260269[(1)] = (2));

} else {
var statearr_3260188_3260270 = state_3260177__$1;
(statearr_3260188_3260270[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (24))){
var state_3260177__$1 = state_3260177;
var statearr_3260189_3260271 = state_3260177__$1;
(statearr_3260189_3260271[(2)] = null);

(statearr_3260189_3260271[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (39))){
var inst_3260130 = (state_3260177[(16)]);
var state_3260177__$1 = state_3260177;
var statearr_3260190_3260272 = state_3260177__$1;
(statearr_3260190_3260272[(2)] = inst_3260130);

(statearr_3260190_3260272[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (46))){
var inst_3260172 = (state_3260177[(2)]);
var state_3260177__$1 = state_3260177;
var statearr_3260191_3260273 = state_3260177__$1;
(statearr_3260191_3260273[(2)] = inst_3260172);

(statearr_3260191_3260273[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (4))){
var inst_3260074 = (state_3260177[(2)]);
var inst_3260075 = cljs.core.List.EMPTY;
var inst_3260076 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_3260075);
var inst_3260077 = (function (){return ((function (inst_3260074,inst_3260075,inst_3260076,state_val_3260178,c__53126__auto__,map__3260022,map__3260022__$1,opts,before_jsload,on_jsload,reload_dependents,map__3260023,map__3260023__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__3260018_SHARP_){
var and__49509__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__3260018_SHARP_);
if(cljs.core.truth_(and__49509__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__3260018_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__3260018_SHARP_)));
} else {
return and__49509__auto__;
}
});
;})(inst_3260074,inst_3260075,inst_3260076,state_val_3260178,c__53126__auto__,map__3260022,map__3260022__$1,opts,before_jsload,on_jsload,reload_dependents,map__3260023,map__3260023__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_3260078 = cljs.core.filter.call(null,inst_3260077,files);
var inst_3260079 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_3260080 = cljs.core.concat.call(null,inst_3260078,inst_3260079);
var state_3260177__$1 = (function (){var statearr_3260192 = state_3260177;
(statearr_3260192[(17)] = inst_3260074);

(statearr_3260192[(12)] = inst_3260080);

(statearr_3260192[(18)] = inst_3260076);

return statearr_3260192;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_3260193_3260274 = state_3260177__$1;
(statearr_3260193_3260274[(1)] = (16));

} else {
var statearr_3260194_3260275 = state_3260177__$1;
(statearr_3260194_3260275[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (15))){
var inst_3260064 = (state_3260177[(2)]);
var state_3260177__$1 = state_3260177;
var statearr_3260195_3260276 = state_3260177__$1;
(statearr_3260195_3260276[(2)] = inst_3260064);

(statearr_3260195_3260276[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (21))){
var inst_3260090 = (state_3260177[(19)]);
var inst_3260090__$1 = (state_3260177[(2)]);
var inst_3260091 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_3260090__$1);
var state_3260177__$1 = (function (){var statearr_3260196 = state_3260177;
(statearr_3260196[(19)] = inst_3260090__$1);

return statearr_3260196;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3260177__$1,(22),inst_3260091);
} else {
if((state_val_3260178 === (31))){
var inst_3260175 = (state_3260177[(2)]);
var state_3260177__$1 = state_3260177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3260177__$1,inst_3260175);
} else {
if((state_val_3260178 === (32))){
var inst_3260130 = (state_3260177[(16)]);
var inst_3260135 = inst_3260130.cljs$lang$protocol_mask$partition0$;
var inst_3260136 = (inst_3260135 & (64));
var inst_3260137 = inst_3260130.cljs$core$ISeq$;
var inst_3260138 = (cljs.core.PROTOCOL_SENTINEL === inst_3260137);
var inst_3260139 = (inst_3260136) || (inst_3260138);
var state_3260177__$1 = state_3260177;
if(cljs.core.truth_(inst_3260139)){
var statearr_3260197_3260277 = state_3260177__$1;
(statearr_3260197_3260277[(1)] = (35));

} else {
var statearr_3260198_3260278 = state_3260177__$1;
(statearr_3260198_3260278[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (40))){
var inst_3260152 = (state_3260177[(20)]);
var inst_3260151 = (state_3260177[(2)]);
var inst_3260152__$1 = cljs.core.get.call(null,inst_3260151,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_3260153 = cljs.core.get.call(null,inst_3260151,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_3260154 = cljs.core.not_empty.call(null,inst_3260152__$1);
var state_3260177__$1 = (function (){var statearr_3260199 = state_3260177;
(statearr_3260199[(20)] = inst_3260152__$1);

(statearr_3260199[(21)] = inst_3260153);

return statearr_3260199;
})();
if(cljs.core.truth_(inst_3260154)){
var statearr_3260200_3260279 = state_3260177__$1;
(statearr_3260200_3260279[(1)] = (41));

} else {
var statearr_3260201_3260280 = state_3260177__$1;
(statearr_3260201_3260280[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (33))){
var state_3260177__$1 = state_3260177;
var statearr_3260202_3260281 = state_3260177__$1;
(statearr_3260202_3260281[(2)] = false);

(statearr_3260202_3260281[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (13))){
var inst_3260050 = (state_3260177[(22)]);
var inst_3260054 = cljs.core.chunk_first.call(null,inst_3260050);
var inst_3260055 = cljs.core.chunk_rest.call(null,inst_3260050);
var inst_3260056 = cljs.core.count.call(null,inst_3260054);
var inst_3260037 = inst_3260055;
var inst_3260038 = inst_3260054;
var inst_3260039 = inst_3260056;
var inst_3260040 = (0);
var state_3260177__$1 = (function (){var statearr_3260203 = state_3260177;
(statearr_3260203[(7)] = inst_3260039);

(statearr_3260203[(8)] = inst_3260037);

(statearr_3260203[(9)] = inst_3260040);

(statearr_3260203[(10)] = inst_3260038);

return statearr_3260203;
})();
var statearr_3260204_3260282 = state_3260177__$1;
(statearr_3260204_3260282[(2)] = null);

(statearr_3260204_3260282[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (22))){
var inst_3260093 = (state_3260177[(23)]);
var inst_3260098 = (state_3260177[(24)]);
var inst_3260094 = (state_3260177[(25)]);
var inst_3260090 = (state_3260177[(19)]);
var inst_3260093__$1 = (state_3260177[(2)]);
var inst_3260094__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_3260093__$1);
var inst_3260095 = (function (){var all_files = inst_3260090;
var res_SINGLEQUOTE_ = inst_3260093__$1;
var res = inst_3260094__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_3260093,inst_3260098,inst_3260094,inst_3260090,inst_3260093__$1,inst_3260094__$1,state_val_3260178,c__53126__auto__,map__3260022,map__3260022__$1,opts,before_jsload,on_jsload,reload_dependents,map__3260023,map__3260023__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__3260019_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__3260019_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_3260093,inst_3260098,inst_3260094,inst_3260090,inst_3260093__$1,inst_3260094__$1,state_val_3260178,c__53126__auto__,map__3260022,map__3260022__$1,opts,before_jsload,on_jsload,reload_dependents,map__3260023,map__3260023__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_3260096 = cljs.core.filter.call(null,inst_3260095,inst_3260093__$1);
var inst_3260097 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_3260098__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_3260097);
var inst_3260099 = cljs.core.not_empty.call(null,inst_3260098__$1);
var state_3260177__$1 = (function (){var statearr_3260205 = state_3260177;
(statearr_3260205[(23)] = inst_3260093__$1);

(statearr_3260205[(24)] = inst_3260098__$1);

(statearr_3260205[(25)] = inst_3260094__$1);

(statearr_3260205[(26)] = inst_3260096);

return statearr_3260205;
})();
if(cljs.core.truth_(inst_3260099)){
var statearr_3260206_3260283 = state_3260177__$1;
(statearr_3260206_3260283[(1)] = (23));

} else {
var statearr_3260207_3260284 = state_3260177__$1;
(statearr_3260207_3260284[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (36))){
var state_3260177__$1 = state_3260177;
var statearr_3260208_3260285 = state_3260177__$1;
(statearr_3260208_3260285[(2)] = false);

(statearr_3260208_3260285[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (41))){
var inst_3260152 = (state_3260177[(20)]);
var inst_3260156 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_3260157 = cljs.core.map.call(null,inst_3260156,inst_3260152);
var inst_3260158 = cljs.core.pr_str.call(null,inst_3260157);
var inst_3260159 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_3260158)].join('');
var inst_3260160 = figwheel.client.utils.log.call(null,inst_3260159);
var state_3260177__$1 = state_3260177;
var statearr_3260209_3260286 = state_3260177__$1;
(statearr_3260209_3260286[(2)] = inst_3260160);

(statearr_3260209_3260286[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (43))){
var inst_3260153 = (state_3260177[(21)]);
var inst_3260163 = (state_3260177[(2)]);
var inst_3260164 = cljs.core.not_empty.call(null,inst_3260153);
var state_3260177__$1 = (function (){var statearr_3260210 = state_3260177;
(statearr_3260210[(27)] = inst_3260163);

return statearr_3260210;
})();
if(cljs.core.truth_(inst_3260164)){
var statearr_3260211_3260287 = state_3260177__$1;
(statearr_3260211_3260287[(1)] = (44));

} else {
var statearr_3260212_3260288 = state_3260177__$1;
(statearr_3260212_3260288[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (29))){
var inst_3260130 = (state_3260177[(16)]);
var inst_3260093 = (state_3260177[(23)]);
var inst_3260098 = (state_3260177[(24)]);
var inst_3260094 = (state_3260177[(25)]);
var inst_3260096 = (state_3260177[(26)]);
var inst_3260090 = (state_3260177[(19)]);
var inst_3260126 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_3260129 = (function (){var all_files = inst_3260090;
var res_SINGLEQUOTE_ = inst_3260093;
var res = inst_3260094;
var files_not_loaded = inst_3260096;
var dependencies_that_loaded = inst_3260098;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_3260130,inst_3260093,inst_3260098,inst_3260094,inst_3260096,inst_3260090,inst_3260126,state_val_3260178,c__53126__auto__,map__3260022,map__3260022__$1,opts,before_jsload,on_jsload,reload_dependents,map__3260023,map__3260023__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__3260128){
var map__3260213 = p__3260128;
var map__3260213__$1 = ((((!((map__3260213 == null)))?((((map__3260213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3260213.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3260213):map__3260213);
var namespace = cljs.core.get.call(null,map__3260213__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_3260130,inst_3260093,inst_3260098,inst_3260094,inst_3260096,inst_3260090,inst_3260126,state_val_3260178,c__53126__auto__,map__3260022,map__3260022__$1,opts,before_jsload,on_jsload,reload_dependents,map__3260023,map__3260023__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_3260130__$1 = cljs.core.group_by.call(null,inst_3260129,inst_3260096);
var inst_3260132 = (inst_3260130__$1 == null);
var inst_3260133 = cljs.core.not.call(null,inst_3260132);
var state_3260177__$1 = (function (){var statearr_3260215 = state_3260177;
(statearr_3260215[(28)] = inst_3260126);

(statearr_3260215[(16)] = inst_3260130__$1);

return statearr_3260215;
})();
if(inst_3260133){
var statearr_3260216_3260289 = state_3260177__$1;
(statearr_3260216_3260289[(1)] = (32));

} else {
var statearr_3260217_3260290 = state_3260177__$1;
(statearr_3260217_3260290[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (44))){
var inst_3260153 = (state_3260177[(21)]);
var inst_3260166 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_3260153);
var inst_3260167 = cljs.core.pr_str.call(null,inst_3260166);
var inst_3260168 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_3260167)].join('');
var inst_3260169 = figwheel.client.utils.log.call(null,inst_3260168);
var state_3260177__$1 = state_3260177;
var statearr_3260218_3260291 = state_3260177__$1;
(statearr_3260218_3260291[(2)] = inst_3260169);

(statearr_3260218_3260291[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (6))){
var inst_3260071 = (state_3260177[(2)]);
var state_3260177__$1 = state_3260177;
var statearr_3260219_3260292 = state_3260177__$1;
(statearr_3260219_3260292[(2)] = inst_3260071);

(statearr_3260219_3260292[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (28))){
var inst_3260096 = (state_3260177[(26)]);
var inst_3260123 = (state_3260177[(2)]);
var inst_3260124 = cljs.core.not_empty.call(null,inst_3260096);
var state_3260177__$1 = (function (){var statearr_3260220 = state_3260177;
(statearr_3260220[(29)] = inst_3260123);

return statearr_3260220;
})();
if(cljs.core.truth_(inst_3260124)){
var statearr_3260221_3260293 = state_3260177__$1;
(statearr_3260221_3260293[(1)] = (29));

} else {
var statearr_3260222_3260294 = state_3260177__$1;
(statearr_3260222_3260294[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (25))){
var inst_3260094 = (state_3260177[(25)]);
var inst_3260110 = (state_3260177[(2)]);
var inst_3260111 = cljs.core.not_empty.call(null,inst_3260094);
var state_3260177__$1 = (function (){var statearr_3260223 = state_3260177;
(statearr_3260223[(30)] = inst_3260110);

return statearr_3260223;
})();
if(cljs.core.truth_(inst_3260111)){
var statearr_3260224_3260295 = state_3260177__$1;
(statearr_3260224_3260295[(1)] = (26));

} else {
var statearr_3260225_3260296 = state_3260177__$1;
(statearr_3260225_3260296[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (34))){
var inst_3260146 = (state_3260177[(2)]);
var state_3260177__$1 = state_3260177;
if(cljs.core.truth_(inst_3260146)){
var statearr_3260226_3260297 = state_3260177__$1;
(statearr_3260226_3260297[(1)] = (38));

} else {
var statearr_3260227_3260298 = state_3260177__$1;
(statearr_3260227_3260298[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (17))){
var state_3260177__$1 = state_3260177;
var statearr_3260228_3260299 = state_3260177__$1;
(statearr_3260228_3260299[(2)] = recompile_dependents);

(statearr_3260228_3260299[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (3))){
var state_3260177__$1 = state_3260177;
var statearr_3260229_3260300 = state_3260177__$1;
(statearr_3260229_3260300[(2)] = null);

(statearr_3260229_3260300[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (12))){
var inst_3260067 = (state_3260177[(2)]);
var state_3260177__$1 = state_3260177;
var statearr_3260230_3260301 = state_3260177__$1;
(statearr_3260230_3260301[(2)] = inst_3260067);

(statearr_3260230_3260301[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (2))){
var inst_3260029 = (state_3260177[(13)]);
var inst_3260036 = cljs.core.seq.call(null,inst_3260029);
var inst_3260037 = inst_3260036;
var inst_3260038 = null;
var inst_3260039 = (0);
var inst_3260040 = (0);
var state_3260177__$1 = (function (){var statearr_3260231 = state_3260177;
(statearr_3260231[(7)] = inst_3260039);

(statearr_3260231[(8)] = inst_3260037);

(statearr_3260231[(9)] = inst_3260040);

(statearr_3260231[(10)] = inst_3260038);

return statearr_3260231;
})();
var statearr_3260232_3260302 = state_3260177__$1;
(statearr_3260232_3260302[(2)] = null);

(statearr_3260232_3260302[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (23))){
var inst_3260093 = (state_3260177[(23)]);
var inst_3260098 = (state_3260177[(24)]);
var inst_3260094 = (state_3260177[(25)]);
var inst_3260096 = (state_3260177[(26)]);
var inst_3260090 = (state_3260177[(19)]);
var inst_3260101 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_3260103 = (function (){var all_files = inst_3260090;
var res_SINGLEQUOTE_ = inst_3260093;
var res = inst_3260094;
var files_not_loaded = inst_3260096;
var dependencies_that_loaded = inst_3260098;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_3260093,inst_3260098,inst_3260094,inst_3260096,inst_3260090,inst_3260101,state_val_3260178,c__53126__auto__,map__3260022,map__3260022__$1,opts,before_jsload,on_jsload,reload_dependents,map__3260023,map__3260023__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__3260102){
var map__3260233 = p__3260102;
var map__3260233__$1 = ((((!((map__3260233 == null)))?((((map__3260233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3260233.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3260233):map__3260233);
var request_url = cljs.core.get.call(null,map__3260233__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_3260093,inst_3260098,inst_3260094,inst_3260096,inst_3260090,inst_3260101,state_val_3260178,c__53126__auto__,map__3260022,map__3260022__$1,opts,before_jsload,on_jsload,reload_dependents,map__3260023,map__3260023__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_3260104 = cljs.core.reverse.call(null,inst_3260098);
var inst_3260105 = cljs.core.map.call(null,inst_3260103,inst_3260104);
var inst_3260106 = cljs.core.pr_str.call(null,inst_3260105);
var inst_3260107 = figwheel.client.utils.log.call(null,inst_3260106);
var state_3260177__$1 = (function (){var statearr_3260235 = state_3260177;
(statearr_3260235[(31)] = inst_3260101);

return statearr_3260235;
})();
var statearr_3260236_3260303 = state_3260177__$1;
(statearr_3260236_3260303[(2)] = inst_3260107);

(statearr_3260236_3260303[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (35))){
var state_3260177__$1 = state_3260177;
var statearr_3260237_3260304 = state_3260177__$1;
(statearr_3260237_3260304[(2)] = true);

(statearr_3260237_3260304[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (19))){
var inst_3260080 = (state_3260177[(12)]);
var inst_3260086 = figwheel.client.file_reloading.expand_files.call(null,inst_3260080);
var state_3260177__$1 = state_3260177;
var statearr_3260238_3260305 = state_3260177__$1;
(statearr_3260238_3260305[(2)] = inst_3260086);

(statearr_3260238_3260305[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (11))){
var state_3260177__$1 = state_3260177;
var statearr_3260239_3260306 = state_3260177__$1;
(statearr_3260239_3260306[(2)] = null);

(statearr_3260239_3260306[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (9))){
var inst_3260069 = (state_3260177[(2)]);
var state_3260177__$1 = state_3260177;
var statearr_3260240_3260307 = state_3260177__$1;
(statearr_3260240_3260307[(2)] = inst_3260069);

(statearr_3260240_3260307[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (5))){
var inst_3260039 = (state_3260177[(7)]);
var inst_3260040 = (state_3260177[(9)]);
var inst_3260042 = (inst_3260040 < inst_3260039);
var inst_3260043 = inst_3260042;
var state_3260177__$1 = state_3260177;
if(cljs.core.truth_(inst_3260043)){
var statearr_3260241_3260308 = state_3260177__$1;
(statearr_3260241_3260308[(1)] = (7));

} else {
var statearr_3260242_3260309 = state_3260177__$1;
(statearr_3260242_3260309[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (14))){
var inst_3260050 = (state_3260177[(22)]);
var inst_3260059 = cljs.core.first.call(null,inst_3260050);
var inst_3260060 = figwheel.client.file_reloading.eval_body.call(null,inst_3260059,opts);
var inst_3260061 = cljs.core.next.call(null,inst_3260050);
var inst_3260037 = inst_3260061;
var inst_3260038 = null;
var inst_3260039 = (0);
var inst_3260040 = (0);
var state_3260177__$1 = (function (){var statearr_3260243 = state_3260177;
(statearr_3260243[(32)] = inst_3260060);

(statearr_3260243[(7)] = inst_3260039);

(statearr_3260243[(8)] = inst_3260037);

(statearr_3260243[(9)] = inst_3260040);

(statearr_3260243[(10)] = inst_3260038);

return statearr_3260243;
})();
var statearr_3260244_3260310 = state_3260177__$1;
(statearr_3260244_3260310[(2)] = null);

(statearr_3260244_3260310[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (45))){
var state_3260177__$1 = state_3260177;
var statearr_3260245_3260311 = state_3260177__$1;
(statearr_3260245_3260311[(2)] = null);

(statearr_3260245_3260311[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (26))){
var inst_3260093 = (state_3260177[(23)]);
var inst_3260098 = (state_3260177[(24)]);
var inst_3260094 = (state_3260177[(25)]);
var inst_3260096 = (state_3260177[(26)]);
var inst_3260090 = (state_3260177[(19)]);
var inst_3260113 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_3260115 = (function (){var all_files = inst_3260090;
var res_SINGLEQUOTE_ = inst_3260093;
var res = inst_3260094;
var files_not_loaded = inst_3260096;
var dependencies_that_loaded = inst_3260098;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_3260093,inst_3260098,inst_3260094,inst_3260096,inst_3260090,inst_3260113,state_val_3260178,c__53126__auto__,map__3260022,map__3260022__$1,opts,before_jsload,on_jsload,reload_dependents,map__3260023,map__3260023__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__3260114){
var map__3260246 = p__3260114;
var map__3260246__$1 = ((((!((map__3260246 == null)))?((((map__3260246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3260246.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3260246):map__3260246);
var namespace = cljs.core.get.call(null,map__3260246__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__3260246__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_3260093,inst_3260098,inst_3260094,inst_3260096,inst_3260090,inst_3260113,state_val_3260178,c__53126__auto__,map__3260022,map__3260022__$1,opts,before_jsload,on_jsload,reload_dependents,map__3260023,map__3260023__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_3260116 = cljs.core.map.call(null,inst_3260115,inst_3260094);
var inst_3260117 = cljs.core.pr_str.call(null,inst_3260116);
var inst_3260118 = figwheel.client.utils.log.call(null,inst_3260117);
var inst_3260119 = (function (){var all_files = inst_3260090;
var res_SINGLEQUOTE_ = inst_3260093;
var res = inst_3260094;
var files_not_loaded = inst_3260096;
var dependencies_that_loaded = inst_3260098;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_3260093,inst_3260098,inst_3260094,inst_3260096,inst_3260090,inst_3260113,inst_3260115,inst_3260116,inst_3260117,inst_3260118,state_val_3260178,c__53126__auto__,map__3260022,map__3260022__$1,opts,before_jsload,on_jsload,reload_dependents,map__3260023,map__3260023__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_3260093,inst_3260098,inst_3260094,inst_3260096,inst_3260090,inst_3260113,inst_3260115,inst_3260116,inst_3260117,inst_3260118,state_val_3260178,c__53126__auto__,map__3260022,map__3260022__$1,opts,before_jsload,on_jsload,reload_dependents,map__3260023,map__3260023__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_3260120 = setTimeout(inst_3260119,(10));
var state_3260177__$1 = (function (){var statearr_3260248 = state_3260177;
(statearr_3260248[(33)] = inst_3260118);

(statearr_3260248[(34)] = inst_3260113);

return statearr_3260248;
})();
var statearr_3260249_3260312 = state_3260177__$1;
(statearr_3260249_3260312[(2)] = inst_3260120);

(statearr_3260249_3260312[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (16))){
var state_3260177__$1 = state_3260177;
var statearr_3260250_3260313 = state_3260177__$1;
(statearr_3260250_3260313[(2)] = reload_dependents);

(statearr_3260250_3260313[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (38))){
var inst_3260130 = (state_3260177[(16)]);
var inst_3260148 = cljs.core.apply.call(null,cljs.core.hash_map,inst_3260130);
var state_3260177__$1 = state_3260177;
var statearr_3260251_3260314 = state_3260177__$1;
(statearr_3260251_3260314[(2)] = inst_3260148);

(statearr_3260251_3260314[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (30))){
var state_3260177__$1 = state_3260177;
var statearr_3260252_3260315 = state_3260177__$1;
(statearr_3260252_3260315[(2)] = null);

(statearr_3260252_3260315[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (10))){
var inst_3260050 = (state_3260177[(22)]);
var inst_3260052 = cljs.core.chunked_seq_QMARK_.call(null,inst_3260050);
var state_3260177__$1 = state_3260177;
if(inst_3260052){
var statearr_3260253_3260316 = state_3260177__$1;
(statearr_3260253_3260316[(1)] = (13));

} else {
var statearr_3260254_3260317 = state_3260177__$1;
(statearr_3260254_3260317[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (18))){
var inst_3260084 = (state_3260177[(2)]);
var state_3260177__$1 = state_3260177;
if(cljs.core.truth_(inst_3260084)){
var statearr_3260255_3260318 = state_3260177__$1;
(statearr_3260255_3260318[(1)] = (19));

} else {
var statearr_3260256_3260319 = state_3260177__$1;
(statearr_3260256_3260319[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (42))){
var state_3260177__$1 = state_3260177;
var statearr_3260257_3260320 = state_3260177__$1;
(statearr_3260257_3260320[(2)] = null);

(statearr_3260257_3260320[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (37))){
var inst_3260143 = (state_3260177[(2)]);
var state_3260177__$1 = state_3260177;
var statearr_3260258_3260321 = state_3260177__$1;
(statearr_3260258_3260321[(2)] = inst_3260143);

(statearr_3260258_3260321[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3260178 === (8))){
var inst_3260050 = (state_3260177[(22)]);
var inst_3260037 = (state_3260177[(8)]);
var inst_3260050__$1 = cljs.core.seq.call(null,inst_3260037);
var state_3260177__$1 = (function (){var statearr_3260259 = state_3260177;
(statearr_3260259[(22)] = inst_3260050__$1);

return statearr_3260259;
})();
if(inst_3260050__$1){
var statearr_3260260_3260322 = state_3260177__$1;
(statearr_3260260_3260322[(1)] = (10));

} else {
var statearr_3260261_3260323 = state_3260177__$1;
(statearr_3260261_3260323[(1)] = (11));

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
});})(c__53126__auto__,map__3260022,map__3260022__$1,opts,before_jsload,on_jsload,reload_dependents,map__3260023,map__3260023__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__53103__auto__,c__53126__auto__,map__3260022,map__3260022__$1,opts,before_jsload,on_jsload,reload_dependents,map__3260023,map__3260023__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__53104__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__53104__auto____0 = (function (){
var statearr_3260262 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3260262[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__53104__auto__);

(statearr_3260262[(1)] = (1));

return statearr_3260262;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__53104__auto____1 = (function (state_3260177){
while(true){
var ret_value__53105__auto__ = (function (){try{while(true){
var result__53106__auto__ = switch__53103__auto__.call(null,state_3260177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53106__auto__;
}
break;
}
}catch (e3260263){if((e3260263 instanceof Object)){
var ex__53107__auto__ = e3260263;
var statearr_3260264_3260324 = state_3260177;
(statearr_3260264_3260324[(5)] = ex__53107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3260177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3260263;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3260325 = state_3260177;
state_3260177 = G__3260325;
continue;
} else {
return ret_value__53105__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__53104__auto__ = function(state_3260177){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__53104__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__53104__auto____1.call(this,state_3260177);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__53104__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__53104__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__53104__auto__;
})()
;})(switch__53103__auto__,c__53126__auto__,map__3260022,map__3260022__$1,opts,before_jsload,on_jsload,reload_dependents,map__3260023,map__3260023__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__53128__auto__ = (function (){var statearr_3260265 = f__53127__auto__.call(null);
(statearr_3260265[(6)] = c__53126__auto__);

return statearr_3260265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53128__auto__);
});})(c__53126__auto__,map__3260022,map__3260022__$1,opts,before_jsload,on_jsload,reload_dependents,map__3260023,map__3260023__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__53126__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__3260328,link){
var map__3260329 = p__3260328;
var map__3260329__$1 = ((((!((map__3260329 == null)))?((((map__3260329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3260329.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3260329):map__3260329);
var file = cljs.core.get.call(null,map__3260329__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5278__auto__ = link.href;
if(cljs.core.truth_(temp__5278__auto__)){
var link_href = temp__5278__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5278__auto__,map__3260329,map__3260329__$1,file){
return (function (p1__3260326_SHARP_,p2__3260327_SHARP_){
if(cljs.core._EQ_.call(null,p1__3260326_SHARP_,p2__3260327_SHARP_)){
return p1__3260326_SHARP_;
} else {
return false;
}
});})(link_href,temp__5278__auto__,map__3260329,map__3260329__$1,file))
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
var temp__5278__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__3260332){
var map__3260333 = p__3260332;
var map__3260333__$1 = ((((!((map__3260333 == null)))?((((map__3260333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3260333.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3260333):map__3260333);
var match_length = cljs.core.get.call(null,map__3260333__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__3260333__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__3260331_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__3260331_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__3260335_SHARP_,p2__3260336_SHARP_){
return cljs.core.assoc.call(null,p1__3260335_SHARP_,cljs.core.get.call(null,p2__3260336_SHARP_,key),p2__3260336_SHARP_);
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
var loaded_f_datas_3260337 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_3260337);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_3260337);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__3260338,p__3260339){
var map__3260340 = p__3260338;
var map__3260340__$1 = ((((!((map__3260340 == null)))?((((map__3260340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3260340.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3260340):map__3260340);
var on_cssload = cljs.core.get.call(null,map__3260340__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__3260341 = p__3260339;
var map__3260341__$1 = ((((!((map__3260341 == null)))?((((map__3260341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3260341.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3260341):map__3260341);
var files_msg = map__3260341__$1;
var files = cljs.core.get.call(null,map__3260341__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1509468959201
