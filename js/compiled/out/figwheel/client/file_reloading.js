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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__58676_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__58676_SHARP_));
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
var seq__58677 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__58678 = null;
var count__58679 = (0);
var i__58680 = (0);
while(true){
if((i__58680 < count__58679)){
var n = cljs.core._nth.call(null,chunk__58678,i__58680);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__58681 = seq__58677;
var G__58682 = chunk__58678;
var G__58683 = count__58679;
var G__58684 = (i__58680 + (1));
seq__58677 = G__58681;
chunk__58678 = G__58682;
count__58679 = G__58683;
i__58680 = G__58684;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__58677);
if(temp__5278__auto__){
var seq__58677__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58677__$1)){
var c__50452__auto__ = cljs.core.chunk_first.call(null,seq__58677__$1);
var G__58685 = cljs.core.chunk_rest.call(null,seq__58677__$1);
var G__58686 = c__50452__auto__;
var G__58687 = cljs.core.count.call(null,c__50452__auto__);
var G__58688 = (0);
seq__58677 = G__58685;
chunk__58678 = G__58686;
count__58679 = G__58687;
i__58680 = G__58688;
continue;
} else {
var n = cljs.core.first.call(null,seq__58677__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__58689 = cljs.core.next.call(null,seq__58677__$1);
var G__58690 = null;
var G__58691 = (0);
var G__58692 = (0);
seq__58677 = G__58689;
chunk__58678 = G__58690;
count__58679 = G__58691;
i__58680 = G__58692;
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

var seq__58702_58710 = cljs.core.seq.call(null,deps);
var chunk__58703_58711 = null;
var count__58704_58712 = (0);
var i__58705_58713 = (0);
while(true){
if((i__58705_58713 < count__58704_58712)){
var dep_58714 = cljs.core._nth.call(null,chunk__58703_58711,i__58705_58713);
topo_sort_helper_STAR_.call(null,dep_58714,(depth + (1)),state);

var G__58715 = seq__58702_58710;
var G__58716 = chunk__58703_58711;
var G__58717 = count__58704_58712;
var G__58718 = (i__58705_58713 + (1));
seq__58702_58710 = G__58715;
chunk__58703_58711 = G__58716;
count__58704_58712 = G__58717;
i__58705_58713 = G__58718;
continue;
} else {
var temp__5278__auto___58719 = cljs.core.seq.call(null,seq__58702_58710);
if(temp__5278__auto___58719){
var seq__58702_58720__$1 = temp__5278__auto___58719;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58702_58720__$1)){
var c__50452__auto___58721 = cljs.core.chunk_first.call(null,seq__58702_58720__$1);
var G__58722 = cljs.core.chunk_rest.call(null,seq__58702_58720__$1);
var G__58723 = c__50452__auto___58721;
var G__58724 = cljs.core.count.call(null,c__50452__auto___58721);
var G__58725 = (0);
seq__58702_58710 = G__58722;
chunk__58703_58711 = G__58723;
count__58704_58712 = G__58724;
i__58705_58713 = G__58725;
continue;
} else {
var dep_58726 = cljs.core.first.call(null,seq__58702_58720__$1);
topo_sort_helper_STAR_.call(null,dep_58726,(depth + (1)),state);

var G__58727 = cljs.core.next.call(null,seq__58702_58720__$1);
var G__58728 = null;
var G__58729 = (0);
var G__58730 = (0);
seq__58702_58710 = G__58727;
chunk__58703_58711 = G__58728;
count__58704_58712 = G__58729;
i__58705_58713 = G__58730;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__58706){
var vec__58707 = p__58706;
var seq__58708 = cljs.core.seq.call(null,vec__58707);
var first__58709 = cljs.core.first.call(null,seq__58708);
var seq__58708__$1 = cljs.core.next.call(null,seq__58708);
var x = first__58709;
var xs = seq__58708__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__58707,seq__58708,first__58709,seq__58708__$1,x,xs,get_deps__$1){
return (function (p1__58693_SHARP_){
return clojure.set.difference.call(null,p1__58693_SHARP_,x);
});})(vec__58707,seq__58708,first__58709,seq__58708__$1,x,xs,get_deps__$1))
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
var seq__58731 = cljs.core.seq.call(null,provides);
var chunk__58732 = null;
var count__58733 = (0);
var i__58734 = (0);
while(true){
if((i__58734 < count__58733)){
var prov = cljs.core._nth.call(null,chunk__58732,i__58734);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__58735_58743 = cljs.core.seq.call(null,requires);
var chunk__58736_58744 = null;
var count__58737_58745 = (0);
var i__58738_58746 = (0);
while(true){
if((i__58738_58746 < count__58737_58745)){
var req_58747 = cljs.core._nth.call(null,chunk__58736_58744,i__58738_58746);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_58747,prov);

var G__58748 = seq__58735_58743;
var G__58749 = chunk__58736_58744;
var G__58750 = count__58737_58745;
var G__58751 = (i__58738_58746 + (1));
seq__58735_58743 = G__58748;
chunk__58736_58744 = G__58749;
count__58737_58745 = G__58750;
i__58738_58746 = G__58751;
continue;
} else {
var temp__5278__auto___58752 = cljs.core.seq.call(null,seq__58735_58743);
if(temp__5278__auto___58752){
var seq__58735_58753__$1 = temp__5278__auto___58752;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58735_58753__$1)){
var c__50452__auto___58754 = cljs.core.chunk_first.call(null,seq__58735_58753__$1);
var G__58755 = cljs.core.chunk_rest.call(null,seq__58735_58753__$1);
var G__58756 = c__50452__auto___58754;
var G__58757 = cljs.core.count.call(null,c__50452__auto___58754);
var G__58758 = (0);
seq__58735_58743 = G__58755;
chunk__58736_58744 = G__58756;
count__58737_58745 = G__58757;
i__58738_58746 = G__58758;
continue;
} else {
var req_58759 = cljs.core.first.call(null,seq__58735_58753__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_58759,prov);

var G__58760 = cljs.core.next.call(null,seq__58735_58753__$1);
var G__58761 = null;
var G__58762 = (0);
var G__58763 = (0);
seq__58735_58743 = G__58760;
chunk__58736_58744 = G__58761;
count__58737_58745 = G__58762;
i__58738_58746 = G__58763;
continue;
}
} else {
}
}
break;
}

var G__58764 = seq__58731;
var G__58765 = chunk__58732;
var G__58766 = count__58733;
var G__58767 = (i__58734 + (1));
seq__58731 = G__58764;
chunk__58732 = G__58765;
count__58733 = G__58766;
i__58734 = G__58767;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__58731);
if(temp__5278__auto__){
var seq__58731__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58731__$1)){
var c__50452__auto__ = cljs.core.chunk_first.call(null,seq__58731__$1);
var G__58768 = cljs.core.chunk_rest.call(null,seq__58731__$1);
var G__58769 = c__50452__auto__;
var G__58770 = cljs.core.count.call(null,c__50452__auto__);
var G__58771 = (0);
seq__58731 = G__58768;
chunk__58732 = G__58769;
count__58733 = G__58770;
i__58734 = G__58771;
continue;
} else {
var prov = cljs.core.first.call(null,seq__58731__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__58739_58772 = cljs.core.seq.call(null,requires);
var chunk__58740_58773 = null;
var count__58741_58774 = (0);
var i__58742_58775 = (0);
while(true){
if((i__58742_58775 < count__58741_58774)){
var req_58776 = cljs.core._nth.call(null,chunk__58740_58773,i__58742_58775);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_58776,prov);

var G__58777 = seq__58739_58772;
var G__58778 = chunk__58740_58773;
var G__58779 = count__58741_58774;
var G__58780 = (i__58742_58775 + (1));
seq__58739_58772 = G__58777;
chunk__58740_58773 = G__58778;
count__58741_58774 = G__58779;
i__58742_58775 = G__58780;
continue;
} else {
var temp__5278__auto___58781__$1 = cljs.core.seq.call(null,seq__58739_58772);
if(temp__5278__auto___58781__$1){
var seq__58739_58782__$1 = temp__5278__auto___58781__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58739_58782__$1)){
var c__50452__auto___58783 = cljs.core.chunk_first.call(null,seq__58739_58782__$1);
var G__58784 = cljs.core.chunk_rest.call(null,seq__58739_58782__$1);
var G__58785 = c__50452__auto___58783;
var G__58786 = cljs.core.count.call(null,c__50452__auto___58783);
var G__58787 = (0);
seq__58739_58772 = G__58784;
chunk__58740_58773 = G__58785;
count__58741_58774 = G__58786;
i__58742_58775 = G__58787;
continue;
} else {
var req_58788 = cljs.core.first.call(null,seq__58739_58782__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_58788,prov);

var G__58789 = cljs.core.next.call(null,seq__58739_58782__$1);
var G__58790 = null;
var G__58791 = (0);
var G__58792 = (0);
seq__58739_58772 = G__58789;
chunk__58740_58773 = G__58790;
count__58741_58774 = G__58791;
i__58742_58775 = G__58792;
continue;
}
} else {
}
}
break;
}

var G__58793 = cljs.core.next.call(null,seq__58731__$1);
var G__58794 = null;
var G__58795 = (0);
var G__58796 = (0);
seq__58731 = G__58793;
chunk__58732 = G__58794;
count__58733 = G__58795;
i__58734 = G__58796;
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
var seq__58797_58801 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__58798_58802 = null;
var count__58799_58803 = (0);
var i__58800_58804 = (0);
while(true){
if((i__58800_58804 < count__58799_58803)){
var ns_58805 = cljs.core._nth.call(null,chunk__58798_58802,i__58800_58804);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_58805);

var G__58806 = seq__58797_58801;
var G__58807 = chunk__58798_58802;
var G__58808 = count__58799_58803;
var G__58809 = (i__58800_58804 + (1));
seq__58797_58801 = G__58806;
chunk__58798_58802 = G__58807;
count__58799_58803 = G__58808;
i__58800_58804 = G__58809;
continue;
} else {
var temp__5278__auto___58810 = cljs.core.seq.call(null,seq__58797_58801);
if(temp__5278__auto___58810){
var seq__58797_58811__$1 = temp__5278__auto___58810;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58797_58811__$1)){
var c__50452__auto___58812 = cljs.core.chunk_first.call(null,seq__58797_58811__$1);
var G__58813 = cljs.core.chunk_rest.call(null,seq__58797_58811__$1);
var G__58814 = c__50452__auto___58812;
var G__58815 = cljs.core.count.call(null,c__50452__auto___58812);
var G__58816 = (0);
seq__58797_58801 = G__58813;
chunk__58798_58802 = G__58814;
count__58799_58803 = G__58815;
i__58800_58804 = G__58816;
continue;
} else {
var ns_58817 = cljs.core.first.call(null,seq__58797_58811__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_58817);

var G__58818 = cljs.core.next.call(null,seq__58797_58811__$1);
var G__58819 = null;
var G__58820 = (0);
var G__58821 = (0);
seq__58797_58801 = G__58818;
chunk__58798_58802 = G__58819;
count__58799_58803 = G__58820;
i__58800_58804 = G__58821;
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
var G__58822__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__58822 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58823__i = 0, G__58823__a = new Array(arguments.length -  0);
while (G__58823__i < G__58823__a.length) {G__58823__a[G__58823__i] = arguments[G__58823__i + 0]; ++G__58823__i;}
  args = new cljs.core.IndexedSeq(G__58823__a,0,null);
} 
return G__58822__delegate.call(this,args);};
G__58822.cljs$lang$maxFixedArity = 0;
G__58822.cljs$lang$applyTo = (function (arglist__58824){
var args = cljs.core.seq(arglist__58824);
return G__58822__delegate(args);
});
G__58822.cljs$core$IFn$_invoke$arity$variadic = G__58822__delegate;
return G__58822;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__58825_SHARP_,p2__58826_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__58825_SHARP_)].join('')),p2__58826_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__58827_SHARP_,p2__58828_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__58827_SHARP_)].join(''),p2__58828_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__58829 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__58829.addCallback(((function (G__58829){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__58829))
);

G__58829.addErrback(((function (G__58829){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__58829))
);

return G__58829;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__58830 = cljs.core._EQ_;
var expr__58831 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__58830.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__58831))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__58830,expr__58831){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__58830,expr__58831))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__58830,expr__58831){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e58833){if((e58833 instanceof Error)){
var e = e58833;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e58833;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__58830,expr__58831))
} else {
if(cljs.core.truth_(pred__58830.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__58831))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__58830.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__58831))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__58830.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__58831))){
return ((function (pred__58830,expr__58831){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e58834){if((e58834 instanceof Error)){
var e = e58834;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e58834;

}
}})());
});
;})(pred__58830,expr__58831))
} else {
return ((function (pred__58830,expr__58831){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__58830,expr__58831))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__58835,callback){
var map__58836 = p__58835;
var map__58836__$1 = ((((!((map__58836 == null)))?((((map__58836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58836.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58836):map__58836);
var file_msg = map__58836__$1;
var request_url = cljs.core.get.call(null,map__58836__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__58836,map__58836__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__58836,map__58836__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__55486__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55486__auto__){
return (function (){
var f__55487__auto__ = (function (){var switch__55396__auto__ = ((function (c__55486__auto__){
return (function (state_58860){
var state_val_58861 = (state_58860[(1)]);
if((state_val_58861 === (7))){
var inst_58856 = (state_58860[(2)]);
var state_58860__$1 = state_58860;
var statearr_58862_58879 = state_58860__$1;
(statearr_58862_58879[(2)] = inst_58856);

(statearr_58862_58879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58861 === (1))){
var state_58860__$1 = state_58860;
var statearr_58863_58880 = state_58860__$1;
(statearr_58863_58880[(2)] = null);

(statearr_58863_58880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58861 === (4))){
var inst_58840 = (state_58860[(7)]);
var inst_58840__$1 = (state_58860[(2)]);
var state_58860__$1 = (function (){var statearr_58864 = state_58860;
(statearr_58864[(7)] = inst_58840__$1);

return statearr_58864;
})();
if(cljs.core.truth_(inst_58840__$1)){
var statearr_58865_58881 = state_58860__$1;
(statearr_58865_58881[(1)] = (5));

} else {
var statearr_58866_58882 = state_58860__$1;
(statearr_58866_58882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58861 === (6))){
var state_58860__$1 = state_58860;
var statearr_58867_58883 = state_58860__$1;
(statearr_58867_58883[(2)] = null);

(statearr_58867_58883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58861 === (3))){
var inst_58858 = (state_58860[(2)]);
var state_58860__$1 = state_58860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58860__$1,inst_58858);
} else {
if((state_val_58861 === (2))){
var state_58860__$1 = state_58860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58860__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_58861 === (11))){
var inst_58852 = (state_58860[(2)]);
var state_58860__$1 = (function (){var statearr_58868 = state_58860;
(statearr_58868[(8)] = inst_58852);

return statearr_58868;
})();
var statearr_58869_58884 = state_58860__$1;
(statearr_58869_58884[(2)] = null);

(statearr_58869_58884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58861 === (9))){
var inst_58844 = (state_58860[(9)]);
var inst_58846 = (state_58860[(10)]);
var inst_58848 = inst_58846.call(null,inst_58844);
var state_58860__$1 = state_58860;
var statearr_58870_58885 = state_58860__$1;
(statearr_58870_58885[(2)] = inst_58848);

(statearr_58870_58885[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58861 === (5))){
var inst_58840 = (state_58860[(7)]);
var inst_58842 = figwheel.client.file_reloading.blocking_load.call(null,inst_58840);
var state_58860__$1 = state_58860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58860__$1,(8),inst_58842);
} else {
if((state_val_58861 === (10))){
var inst_58844 = (state_58860[(9)]);
var inst_58850 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_58844);
var state_58860__$1 = state_58860;
var statearr_58871_58886 = state_58860__$1;
(statearr_58871_58886[(2)] = inst_58850);

(statearr_58871_58886[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58861 === (8))){
var inst_58840 = (state_58860[(7)]);
var inst_58846 = (state_58860[(10)]);
var inst_58844 = (state_58860[(2)]);
var inst_58845 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_58846__$1 = cljs.core.get.call(null,inst_58845,inst_58840);
var state_58860__$1 = (function (){var statearr_58872 = state_58860;
(statearr_58872[(9)] = inst_58844);

(statearr_58872[(10)] = inst_58846__$1);

return statearr_58872;
})();
if(cljs.core.truth_(inst_58846__$1)){
var statearr_58873_58887 = state_58860__$1;
(statearr_58873_58887[(1)] = (9));

} else {
var statearr_58874_58888 = state_58860__$1;
(statearr_58874_58888[(1)] = (10));

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
});})(c__55486__auto__))
;
return ((function (switch__55396__auto__,c__55486__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__55397__auto__ = null;
var figwheel$client$file_reloading$state_machine__55397__auto____0 = (function (){
var statearr_58875 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58875[(0)] = figwheel$client$file_reloading$state_machine__55397__auto__);

(statearr_58875[(1)] = (1));

return statearr_58875;
});
var figwheel$client$file_reloading$state_machine__55397__auto____1 = (function (state_58860){
while(true){
var ret_value__55398__auto__ = (function (){try{while(true){
var result__55399__auto__ = switch__55396__auto__.call(null,state_58860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__55399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55399__auto__;
}
break;
}
}catch (e58876){if((e58876 instanceof Object)){
var ex__55400__auto__ = e58876;
var statearr_58877_58889 = state_58860;
(statearr_58877_58889[(5)] = ex__55400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__55398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58890 = state_58860;
state_58860 = G__58890;
continue;
} else {
return ret_value__55398__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__55397__auto__ = function(state_58860){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__55397__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__55397__auto____1.call(this,state_58860);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__55397__auto____0;
figwheel$client$file_reloading$state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__55397__auto____1;
return figwheel$client$file_reloading$state_machine__55397__auto__;
})()
;})(switch__55396__auto__,c__55486__auto__))
})();
var state__55488__auto__ = (function (){var statearr_58878 = f__55487__auto__.call(null);
(statearr_58878[(6)] = c__55486__auto__);

return statearr_58878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55488__auto__);
});})(c__55486__auto__))
);

return c__55486__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__58891,callback){
var map__58892 = p__58891;
var map__58892__$1 = ((((!((map__58892 == null)))?((((map__58892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58892.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58892):map__58892);
var file_msg = map__58892__$1;
var namespace = cljs.core.get.call(null,map__58892__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__58892,map__58892__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__58892,map__58892__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__58894){
var map__58895 = p__58894;
var map__58895__$1 = ((((!((map__58895 == null)))?((((map__58895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58895.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58895):map__58895);
var file_msg = map__58895__$1;
var namespace = cljs.core.get.call(null,map__58895__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__58897){
var map__58898 = p__58897;
var map__58898__$1 = ((((!((map__58898 == null)))?((((map__58898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58898.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58898):map__58898);
var file_msg = map__58898__$1;
var namespace = cljs.core.get.call(null,map__58898__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__58900,callback){
var map__58901 = p__58900;
var map__58901__$1 = ((((!((map__58901 == null)))?((((map__58901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58901.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58901):map__58901);
var file_msg = map__58901__$1;
var request_url = cljs.core.get.call(null,map__58901__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__58901__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__55486__auto___58951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55486__auto___58951,out){
return (function (){
var f__55487__auto__ = (function (){var switch__55396__auto__ = ((function (c__55486__auto___58951,out){
return (function (state_58936){
var state_val_58937 = (state_58936[(1)]);
if((state_val_58937 === (1))){
var inst_58910 = cljs.core.seq.call(null,files);
var inst_58911 = cljs.core.first.call(null,inst_58910);
var inst_58912 = cljs.core.next.call(null,inst_58910);
var inst_58913 = files;
var state_58936__$1 = (function (){var statearr_58938 = state_58936;
(statearr_58938[(7)] = inst_58912);

(statearr_58938[(8)] = inst_58913);

(statearr_58938[(9)] = inst_58911);

return statearr_58938;
})();
var statearr_58939_58952 = state_58936__$1;
(statearr_58939_58952[(2)] = null);

(statearr_58939_58952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58937 === (2))){
var inst_58919 = (state_58936[(10)]);
var inst_58913 = (state_58936[(8)]);
var inst_58918 = cljs.core.seq.call(null,inst_58913);
var inst_58919__$1 = cljs.core.first.call(null,inst_58918);
var inst_58920 = cljs.core.next.call(null,inst_58918);
var inst_58921 = (inst_58919__$1 == null);
var inst_58922 = cljs.core.not.call(null,inst_58921);
var state_58936__$1 = (function (){var statearr_58940 = state_58936;
(statearr_58940[(11)] = inst_58920);

(statearr_58940[(10)] = inst_58919__$1);

return statearr_58940;
})();
if(inst_58922){
var statearr_58941_58953 = state_58936__$1;
(statearr_58941_58953[(1)] = (4));

} else {
var statearr_58942_58954 = state_58936__$1;
(statearr_58942_58954[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58937 === (3))){
var inst_58934 = (state_58936[(2)]);
var state_58936__$1 = state_58936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58936__$1,inst_58934);
} else {
if((state_val_58937 === (4))){
var inst_58919 = (state_58936[(10)]);
var inst_58924 = figwheel.client.file_reloading.reload_js_file.call(null,inst_58919);
var state_58936__$1 = state_58936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58936__$1,(7),inst_58924);
} else {
if((state_val_58937 === (5))){
var inst_58930 = cljs.core.async.close_BANG_.call(null,out);
var state_58936__$1 = state_58936;
var statearr_58943_58955 = state_58936__$1;
(statearr_58943_58955[(2)] = inst_58930);

(statearr_58943_58955[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58937 === (6))){
var inst_58932 = (state_58936[(2)]);
var state_58936__$1 = state_58936;
var statearr_58944_58956 = state_58936__$1;
(statearr_58944_58956[(2)] = inst_58932);

(statearr_58944_58956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58937 === (7))){
var inst_58920 = (state_58936[(11)]);
var inst_58926 = (state_58936[(2)]);
var inst_58927 = cljs.core.async.put_BANG_.call(null,out,inst_58926);
var inst_58913 = inst_58920;
var state_58936__$1 = (function (){var statearr_58945 = state_58936;
(statearr_58945[(12)] = inst_58927);

(statearr_58945[(8)] = inst_58913);

return statearr_58945;
})();
var statearr_58946_58957 = state_58936__$1;
(statearr_58946_58957[(2)] = null);

(statearr_58946_58957[(1)] = (2));


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
});})(c__55486__auto___58951,out))
;
return ((function (switch__55396__auto__,c__55486__auto___58951,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__55397__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__55397__auto____0 = (function (){
var statearr_58947 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58947[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__55397__auto__);

(statearr_58947[(1)] = (1));

return statearr_58947;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__55397__auto____1 = (function (state_58936){
while(true){
var ret_value__55398__auto__ = (function (){try{while(true){
var result__55399__auto__ = switch__55396__auto__.call(null,state_58936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__55399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55399__auto__;
}
break;
}
}catch (e58948){if((e58948 instanceof Object)){
var ex__55400__auto__ = e58948;
var statearr_58949_58958 = state_58936;
(statearr_58949_58958[(5)] = ex__55400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__55398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58959 = state_58936;
state_58936 = G__58959;
continue;
} else {
return ret_value__55398__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__55397__auto__ = function(state_58936){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__55397__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__55397__auto____1.call(this,state_58936);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__55397__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__55397__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__55397__auto__;
})()
;})(switch__55396__auto__,c__55486__auto___58951,out))
})();
var state__55488__auto__ = (function (){var statearr_58950 = f__55487__auto__.call(null);
(statearr_58950[(6)] = c__55486__auto___58951);

return statearr_58950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55488__auto__);
});})(c__55486__auto___58951,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__58960,opts){
var map__58961 = p__58960;
var map__58961__$1 = ((((!((map__58961 == null)))?((((map__58961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58961.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58961):map__58961);
var eval_body = cljs.core.get.call(null,map__58961__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__58961__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e58963){var e = e58963;
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
return (function (p1__58964_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__58964_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__58965){
var vec__58966 = p__58965;
var k = cljs.core.nth.call(null,vec__58966,(0),null);
var v = cljs.core.nth.call(null,vec__58966,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__58969){
var vec__58970 = p__58969;
var k = cljs.core.nth.call(null,vec__58970,(0),null);
var v = cljs.core.nth.call(null,vec__58970,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__58976,p__58977){
var map__58978 = p__58976;
var map__58978__$1 = ((((!((map__58978 == null)))?((((map__58978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58978.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58978):map__58978);
var opts = map__58978__$1;
var before_jsload = cljs.core.get.call(null,map__58978__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__58978__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__58978__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__58979 = p__58977;
var map__58979__$1 = ((((!((map__58979 == null)))?((((map__58979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58979.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58979):map__58979);
var msg = map__58979__$1;
var files = cljs.core.get.call(null,map__58979__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__58979__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__58979__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__55486__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55486__auto__,map__58978,map__58978__$1,opts,before_jsload,on_jsload,reload_dependents,map__58979,map__58979__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__55487__auto__ = (function (){var switch__55396__auto__ = ((function (c__55486__auto__,map__58978,map__58978__$1,opts,before_jsload,on_jsload,reload_dependents,map__58979,map__58979__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_59133){
var state_val_59134 = (state_59133[(1)]);
if((state_val_59134 === (7))){
var inst_58993 = (state_59133[(7)]);
var inst_58995 = (state_59133[(8)]);
var inst_58994 = (state_59133[(9)]);
var inst_58996 = (state_59133[(10)]);
var inst_59001 = cljs.core._nth.call(null,inst_58994,inst_58996);
var inst_59002 = figwheel.client.file_reloading.eval_body.call(null,inst_59001,opts);
var inst_59003 = (inst_58996 + (1));
var tmp59135 = inst_58993;
var tmp59136 = inst_58995;
var tmp59137 = inst_58994;
var inst_58993__$1 = tmp59135;
var inst_58994__$1 = tmp59137;
var inst_58995__$1 = tmp59136;
var inst_58996__$1 = inst_59003;
var state_59133__$1 = (function (){var statearr_59138 = state_59133;
(statearr_59138[(11)] = inst_59002);

(statearr_59138[(7)] = inst_58993__$1);

(statearr_59138[(8)] = inst_58995__$1);

(statearr_59138[(9)] = inst_58994__$1);

(statearr_59138[(10)] = inst_58996__$1);

return statearr_59138;
})();
var statearr_59139_59222 = state_59133__$1;
(statearr_59139_59222[(2)] = null);

(statearr_59139_59222[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (20))){
var inst_59036 = (state_59133[(12)]);
var inst_59044 = figwheel.client.file_reloading.sort_files.call(null,inst_59036);
var state_59133__$1 = state_59133;
var statearr_59140_59223 = state_59133__$1;
(statearr_59140_59223[(2)] = inst_59044);

(statearr_59140_59223[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (27))){
var state_59133__$1 = state_59133;
var statearr_59141_59224 = state_59133__$1;
(statearr_59141_59224[(2)] = null);

(statearr_59141_59224[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (1))){
var inst_58985 = (state_59133[(13)]);
var inst_58982 = before_jsload.call(null,files);
var inst_58983 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_58984 = (function (){return ((function (inst_58985,inst_58982,inst_58983,state_val_59134,c__55486__auto__,map__58978,map__58978__$1,opts,before_jsload,on_jsload,reload_dependents,map__58979,map__58979__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__58973_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__58973_SHARP_);
});
;})(inst_58985,inst_58982,inst_58983,state_val_59134,c__55486__auto__,map__58978,map__58978__$1,opts,before_jsload,on_jsload,reload_dependents,map__58979,map__58979__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58985__$1 = cljs.core.filter.call(null,inst_58984,files);
var inst_58986 = cljs.core.not_empty.call(null,inst_58985__$1);
var state_59133__$1 = (function (){var statearr_59142 = state_59133;
(statearr_59142[(14)] = inst_58983);

(statearr_59142[(15)] = inst_58982);

(statearr_59142[(13)] = inst_58985__$1);

return statearr_59142;
})();
if(cljs.core.truth_(inst_58986)){
var statearr_59143_59225 = state_59133__$1;
(statearr_59143_59225[(1)] = (2));

} else {
var statearr_59144_59226 = state_59133__$1;
(statearr_59144_59226[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (24))){
var state_59133__$1 = state_59133;
var statearr_59145_59227 = state_59133__$1;
(statearr_59145_59227[(2)] = null);

(statearr_59145_59227[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (39))){
var inst_59086 = (state_59133[(16)]);
var state_59133__$1 = state_59133;
var statearr_59146_59228 = state_59133__$1;
(statearr_59146_59228[(2)] = inst_59086);

(statearr_59146_59228[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (46))){
var inst_59128 = (state_59133[(2)]);
var state_59133__$1 = state_59133;
var statearr_59147_59229 = state_59133__$1;
(statearr_59147_59229[(2)] = inst_59128);

(statearr_59147_59229[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (4))){
var inst_59030 = (state_59133[(2)]);
var inst_59031 = cljs.core.List.EMPTY;
var inst_59032 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_59031);
var inst_59033 = (function (){return ((function (inst_59030,inst_59031,inst_59032,state_val_59134,c__55486__auto__,map__58978,map__58978__$1,opts,before_jsload,on_jsload,reload_dependents,map__58979,map__58979__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__58974_SHARP_){
var and__49509__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__58974_SHARP_);
if(cljs.core.truth_(and__49509__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__58974_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__58974_SHARP_)));
} else {
return and__49509__auto__;
}
});
;})(inst_59030,inst_59031,inst_59032,state_val_59134,c__55486__auto__,map__58978,map__58978__$1,opts,before_jsload,on_jsload,reload_dependents,map__58979,map__58979__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_59034 = cljs.core.filter.call(null,inst_59033,files);
var inst_59035 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_59036 = cljs.core.concat.call(null,inst_59034,inst_59035);
var state_59133__$1 = (function (){var statearr_59148 = state_59133;
(statearr_59148[(12)] = inst_59036);

(statearr_59148[(17)] = inst_59032);

(statearr_59148[(18)] = inst_59030);

return statearr_59148;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_59149_59230 = state_59133__$1;
(statearr_59149_59230[(1)] = (16));

} else {
var statearr_59150_59231 = state_59133__$1;
(statearr_59150_59231[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (15))){
var inst_59020 = (state_59133[(2)]);
var state_59133__$1 = state_59133;
var statearr_59151_59232 = state_59133__$1;
(statearr_59151_59232[(2)] = inst_59020);

(statearr_59151_59232[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (21))){
var inst_59046 = (state_59133[(19)]);
var inst_59046__$1 = (state_59133[(2)]);
var inst_59047 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_59046__$1);
var state_59133__$1 = (function (){var statearr_59152 = state_59133;
(statearr_59152[(19)] = inst_59046__$1);

return statearr_59152;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59133__$1,(22),inst_59047);
} else {
if((state_val_59134 === (31))){
var inst_59131 = (state_59133[(2)]);
var state_59133__$1 = state_59133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59133__$1,inst_59131);
} else {
if((state_val_59134 === (32))){
var inst_59086 = (state_59133[(16)]);
var inst_59091 = inst_59086.cljs$lang$protocol_mask$partition0$;
var inst_59092 = (inst_59091 & (64));
var inst_59093 = inst_59086.cljs$core$ISeq$;
var inst_59094 = (cljs.core.PROTOCOL_SENTINEL === inst_59093);
var inst_59095 = (inst_59092) || (inst_59094);
var state_59133__$1 = state_59133;
if(cljs.core.truth_(inst_59095)){
var statearr_59153_59233 = state_59133__$1;
(statearr_59153_59233[(1)] = (35));

} else {
var statearr_59154_59234 = state_59133__$1;
(statearr_59154_59234[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (40))){
var inst_59108 = (state_59133[(20)]);
var inst_59107 = (state_59133[(2)]);
var inst_59108__$1 = cljs.core.get.call(null,inst_59107,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_59109 = cljs.core.get.call(null,inst_59107,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_59110 = cljs.core.not_empty.call(null,inst_59108__$1);
var state_59133__$1 = (function (){var statearr_59155 = state_59133;
(statearr_59155[(21)] = inst_59109);

(statearr_59155[(20)] = inst_59108__$1);

return statearr_59155;
})();
if(cljs.core.truth_(inst_59110)){
var statearr_59156_59235 = state_59133__$1;
(statearr_59156_59235[(1)] = (41));

} else {
var statearr_59157_59236 = state_59133__$1;
(statearr_59157_59236[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (33))){
var state_59133__$1 = state_59133;
var statearr_59158_59237 = state_59133__$1;
(statearr_59158_59237[(2)] = false);

(statearr_59158_59237[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (13))){
var inst_59006 = (state_59133[(22)]);
var inst_59010 = cljs.core.chunk_first.call(null,inst_59006);
var inst_59011 = cljs.core.chunk_rest.call(null,inst_59006);
var inst_59012 = cljs.core.count.call(null,inst_59010);
var inst_58993 = inst_59011;
var inst_58994 = inst_59010;
var inst_58995 = inst_59012;
var inst_58996 = (0);
var state_59133__$1 = (function (){var statearr_59159 = state_59133;
(statearr_59159[(7)] = inst_58993);

(statearr_59159[(8)] = inst_58995);

(statearr_59159[(9)] = inst_58994);

(statearr_59159[(10)] = inst_58996);

return statearr_59159;
})();
var statearr_59160_59238 = state_59133__$1;
(statearr_59160_59238[(2)] = null);

(statearr_59160_59238[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (22))){
var inst_59049 = (state_59133[(23)]);
var inst_59046 = (state_59133[(19)]);
var inst_59050 = (state_59133[(24)]);
var inst_59054 = (state_59133[(25)]);
var inst_59049__$1 = (state_59133[(2)]);
var inst_59050__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_59049__$1);
var inst_59051 = (function (){var all_files = inst_59046;
var res_SINGLEQUOTE_ = inst_59049__$1;
var res = inst_59050__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_59049,inst_59046,inst_59050,inst_59054,inst_59049__$1,inst_59050__$1,state_val_59134,c__55486__auto__,map__58978,map__58978__$1,opts,before_jsload,on_jsload,reload_dependents,map__58979,map__58979__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__58975_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__58975_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_59049,inst_59046,inst_59050,inst_59054,inst_59049__$1,inst_59050__$1,state_val_59134,c__55486__auto__,map__58978,map__58978__$1,opts,before_jsload,on_jsload,reload_dependents,map__58979,map__58979__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_59052 = cljs.core.filter.call(null,inst_59051,inst_59049__$1);
var inst_59053 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_59054__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_59053);
var inst_59055 = cljs.core.not_empty.call(null,inst_59054__$1);
var state_59133__$1 = (function (){var statearr_59161 = state_59133;
(statearr_59161[(23)] = inst_59049__$1);

(statearr_59161[(24)] = inst_59050__$1);

(statearr_59161[(26)] = inst_59052);

(statearr_59161[(25)] = inst_59054__$1);

return statearr_59161;
})();
if(cljs.core.truth_(inst_59055)){
var statearr_59162_59239 = state_59133__$1;
(statearr_59162_59239[(1)] = (23));

} else {
var statearr_59163_59240 = state_59133__$1;
(statearr_59163_59240[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (36))){
var state_59133__$1 = state_59133;
var statearr_59164_59241 = state_59133__$1;
(statearr_59164_59241[(2)] = false);

(statearr_59164_59241[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (41))){
var inst_59108 = (state_59133[(20)]);
var inst_59112 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_59113 = cljs.core.map.call(null,inst_59112,inst_59108);
var inst_59114 = cljs.core.pr_str.call(null,inst_59113);
var inst_59115 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_59114)].join('');
var inst_59116 = figwheel.client.utils.log.call(null,inst_59115);
var state_59133__$1 = state_59133;
var statearr_59165_59242 = state_59133__$1;
(statearr_59165_59242[(2)] = inst_59116);

(statearr_59165_59242[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (43))){
var inst_59109 = (state_59133[(21)]);
var inst_59119 = (state_59133[(2)]);
var inst_59120 = cljs.core.not_empty.call(null,inst_59109);
var state_59133__$1 = (function (){var statearr_59166 = state_59133;
(statearr_59166[(27)] = inst_59119);

return statearr_59166;
})();
if(cljs.core.truth_(inst_59120)){
var statearr_59167_59243 = state_59133__$1;
(statearr_59167_59243[(1)] = (44));

} else {
var statearr_59168_59244 = state_59133__$1;
(statearr_59168_59244[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (29))){
var inst_59049 = (state_59133[(23)]);
var inst_59046 = (state_59133[(19)]);
var inst_59086 = (state_59133[(16)]);
var inst_59050 = (state_59133[(24)]);
var inst_59052 = (state_59133[(26)]);
var inst_59054 = (state_59133[(25)]);
var inst_59082 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_59085 = (function (){var all_files = inst_59046;
var res_SINGLEQUOTE_ = inst_59049;
var res = inst_59050;
var files_not_loaded = inst_59052;
var dependencies_that_loaded = inst_59054;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_59049,inst_59046,inst_59086,inst_59050,inst_59052,inst_59054,inst_59082,state_val_59134,c__55486__auto__,map__58978,map__58978__$1,opts,before_jsload,on_jsload,reload_dependents,map__58979,map__58979__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__59084){
var map__59169 = p__59084;
var map__59169__$1 = ((((!((map__59169 == null)))?((((map__59169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59169.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59169):map__59169);
var namespace = cljs.core.get.call(null,map__59169__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_59049,inst_59046,inst_59086,inst_59050,inst_59052,inst_59054,inst_59082,state_val_59134,c__55486__auto__,map__58978,map__58978__$1,opts,before_jsload,on_jsload,reload_dependents,map__58979,map__58979__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_59086__$1 = cljs.core.group_by.call(null,inst_59085,inst_59052);
var inst_59088 = (inst_59086__$1 == null);
var inst_59089 = cljs.core.not.call(null,inst_59088);
var state_59133__$1 = (function (){var statearr_59171 = state_59133;
(statearr_59171[(16)] = inst_59086__$1);

(statearr_59171[(28)] = inst_59082);

return statearr_59171;
})();
if(inst_59089){
var statearr_59172_59245 = state_59133__$1;
(statearr_59172_59245[(1)] = (32));

} else {
var statearr_59173_59246 = state_59133__$1;
(statearr_59173_59246[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (44))){
var inst_59109 = (state_59133[(21)]);
var inst_59122 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_59109);
var inst_59123 = cljs.core.pr_str.call(null,inst_59122);
var inst_59124 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_59123)].join('');
var inst_59125 = figwheel.client.utils.log.call(null,inst_59124);
var state_59133__$1 = state_59133;
var statearr_59174_59247 = state_59133__$1;
(statearr_59174_59247[(2)] = inst_59125);

(statearr_59174_59247[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (6))){
var inst_59027 = (state_59133[(2)]);
var state_59133__$1 = state_59133;
var statearr_59175_59248 = state_59133__$1;
(statearr_59175_59248[(2)] = inst_59027);

(statearr_59175_59248[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (28))){
var inst_59052 = (state_59133[(26)]);
var inst_59079 = (state_59133[(2)]);
var inst_59080 = cljs.core.not_empty.call(null,inst_59052);
var state_59133__$1 = (function (){var statearr_59176 = state_59133;
(statearr_59176[(29)] = inst_59079);

return statearr_59176;
})();
if(cljs.core.truth_(inst_59080)){
var statearr_59177_59249 = state_59133__$1;
(statearr_59177_59249[(1)] = (29));

} else {
var statearr_59178_59250 = state_59133__$1;
(statearr_59178_59250[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (25))){
var inst_59050 = (state_59133[(24)]);
var inst_59066 = (state_59133[(2)]);
var inst_59067 = cljs.core.not_empty.call(null,inst_59050);
var state_59133__$1 = (function (){var statearr_59179 = state_59133;
(statearr_59179[(30)] = inst_59066);

return statearr_59179;
})();
if(cljs.core.truth_(inst_59067)){
var statearr_59180_59251 = state_59133__$1;
(statearr_59180_59251[(1)] = (26));

} else {
var statearr_59181_59252 = state_59133__$1;
(statearr_59181_59252[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (34))){
var inst_59102 = (state_59133[(2)]);
var state_59133__$1 = state_59133;
if(cljs.core.truth_(inst_59102)){
var statearr_59182_59253 = state_59133__$1;
(statearr_59182_59253[(1)] = (38));

} else {
var statearr_59183_59254 = state_59133__$1;
(statearr_59183_59254[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (17))){
var state_59133__$1 = state_59133;
var statearr_59184_59255 = state_59133__$1;
(statearr_59184_59255[(2)] = recompile_dependents);

(statearr_59184_59255[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (3))){
var state_59133__$1 = state_59133;
var statearr_59185_59256 = state_59133__$1;
(statearr_59185_59256[(2)] = null);

(statearr_59185_59256[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (12))){
var inst_59023 = (state_59133[(2)]);
var state_59133__$1 = state_59133;
var statearr_59186_59257 = state_59133__$1;
(statearr_59186_59257[(2)] = inst_59023);

(statearr_59186_59257[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (2))){
var inst_58985 = (state_59133[(13)]);
var inst_58992 = cljs.core.seq.call(null,inst_58985);
var inst_58993 = inst_58992;
var inst_58994 = null;
var inst_58995 = (0);
var inst_58996 = (0);
var state_59133__$1 = (function (){var statearr_59187 = state_59133;
(statearr_59187[(7)] = inst_58993);

(statearr_59187[(8)] = inst_58995);

(statearr_59187[(9)] = inst_58994);

(statearr_59187[(10)] = inst_58996);

return statearr_59187;
})();
var statearr_59188_59258 = state_59133__$1;
(statearr_59188_59258[(2)] = null);

(statearr_59188_59258[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (23))){
var inst_59049 = (state_59133[(23)]);
var inst_59046 = (state_59133[(19)]);
var inst_59050 = (state_59133[(24)]);
var inst_59052 = (state_59133[(26)]);
var inst_59054 = (state_59133[(25)]);
var inst_59057 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_59059 = (function (){var all_files = inst_59046;
var res_SINGLEQUOTE_ = inst_59049;
var res = inst_59050;
var files_not_loaded = inst_59052;
var dependencies_that_loaded = inst_59054;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_59049,inst_59046,inst_59050,inst_59052,inst_59054,inst_59057,state_val_59134,c__55486__auto__,map__58978,map__58978__$1,opts,before_jsload,on_jsload,reload_dependents,map__58979,map__58979__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__59058){
var map__59189 = p__59058;
var map__59189__$1 = ((((!((map__59189 == null)))?((((map__59189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59189.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59189):map__59189);
var request_url = cljs.core.get.call(null,map__59189__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_59049,inst_59046,inst_59050,inst_59052,inst_59054,inst_59057,state_val_59134,c__55486__auto__,map__58978,map__58978__$1,opts,before_jsload,on_jsload,reload_dependents,map__58979,map__58979__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_59060 = cljs.core.reverse.call(null,inst_59054);
var inst_59061 = cljs.core.map.call(null,inst_59059,inst_59060);
var inst_59062 = cljs.core.pr_str.call(null,inst_59061);
var inst_59063 = figwheel.client.utils.log.call(null,inst_59062);
var state_59133__$1 = (function (){var statearr_59191 = state_59133;
(statearr_59191[(31)] = inst_59057);

return statearr_59191;
})();
var statearr_59192_59259 = state_59133__$1;
(statearr_59192_59259[(2)] = inst_59063);

(statearr_59192_59259[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (35))){
var state_59133__$1 = state_59133;
var statearr_59193_59260 = state_59133__$1;
(statearr_59193_59260[(2)] = true);

(statearr_59193_59260[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (19))){
var inst_59036 = (state_59133[(12)]);
var inst_59042 = figwheel.client.file_reloading.expand_files.call(null,inst_59036);
var state_59133__$1 = state_59133;
var statearr_59194_59261 = state_59133__$1;
(statearr_59194_59261[(2)] = inst_59042);

(statearr_59194_59261[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (11))){
var state_59133__$1 = state_59133;
var statearr_59195_59262 = state_59133__$1;
(statearr_59195_59262[(2)] = null);

(statearr_59195_59262[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (9))){
var inst_59025 = (state_59133[(2)]);
var state_59133__$1 = state_59133;
var statearr_59196_59263 = state_59133__$1;
(statearr_59196_59263[(2)] = inst_59025);

(statearr_59196_59263[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (5))){
var inst_58995 = (state_59133[(8)]);
var inst_58996 = (state_59133[(10)]);
var inst_58998 = (inst_58996 < inst_58995);
var inst_58999 = inst_58998;
var state_59133__$1 = state_59133;
if(cljs.core.truth_(inst_58999)){
var statearr_59197_59264 = state_59133__$1;
(statearr_59197_59264[(1)] = (7));

} else {
var statearr_59198_59265 = state_59133__$1;
(statearr_59198_59265[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (14))){
var inst_59006 = (state_59133[(22)]);
var inst_59015 = cljs.core.first.call(null,inst_59006);
var inst_59016 = figwheel.client.file_reloading.eval_body.call(null,inst_59015,opts);
var inst_59017 = cljs.core.next.call(null,inst_59006);
var inst_58993 = inst_59017;
var inst_58994 = null;
var inst_58995 = (0);
var inst_58996 = (0);
var state_59133__$1 = (function (){var statearr_59199 = state_59133;
(statearr_59199[(32)] = inst_59016);

(statearr_59199[(7)] = inst_58993);

(statearr_59199[(8)] = inst_58995);

(statearr_59199[(9)] = inst_58994);

(statearr_59199[(10)] = inst_58996);

return statearr_59199;
})();
var statearr_59200_59266 = state_59133__$1;
(statearr_59200_59266[(2)] = null);

(statearr_59200_59266[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (45))){
var state_59133__$1 = state_59133;
var statearr_59201_59267 = state_59133__$1;
(statearr_59201_59267[(2)] = null);

(statearr_59201_59267[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (26))){
var inst_59049 = (state_59133[(23)]);
var inst_59046 = (state_59133[(19)]);
var inst_59050 = (state_59133[(24)]);
var inst_59052 = (state_59133[(26)]);
var inst_59054 = (state_59133[(25)]);
var inst_59069 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_59071 = (function (){var all_files = inst_59046;
var res_SINGLEQUOTE_ = inst_59049;
var res = inst_59050;
var files_not_loaded = inst_59052;
var dependencies_that_loaded = inst_59054;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_59049,inst_59046,inst_59050,inst_59052,inst_59054,inst_59069,state_val_59134,c__55486__auto__,map__58978,map__58978__$1,opts,before_jsload,on_jsload,reload_dependents,map__58979,map__58979__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__59070){
var map__59202 = p__59070;
var map__59202__$1 = ((((!((map__59202 == null)))?((((map__59202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59202.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59202):map__59202);
var namespace = cljs.core.get.call(null,map__59202__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__59202__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_59049,inst_59046,inst_59050,inst_59052,inst_59054,inst_59069,state_val_59134,c__55486__auto__,map__58978,map__58978__$1,opts,before_jsload,on_jsload,reload_dependents,map__58979,map__58979__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_59072 = cljs.core.map.call(null,inst_59071,inst_59050);
var inst_59073 = cljs.core.pr_str.call(null,inst_59072);
var inst_59074 = figwheel.client.utils.log.call(null,inst_59073);
var inst_59075 = (function (){var all_files = inst_59046;
var res_SINGLEQUOTE_ = inst_59049;
var res = inst_59050;
var files_not_loaded = inst_59052;
var dependencies_that_loaded = inst_59054;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_59049,inst_59046,inst_59050,inst_59052,inst_59054,inst_59069,inst_59071,inst_59072,inst_59073,inst_59074,state_val_59134,c__55486__auto__,map__58978,map__58978__$1,opts,before_jsload,on_jsload,reload_dependents,map__58979,map__58979__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_59049,inst_59046,inst_59050,inst_59052,inst_59054,inst_59069,inst_59071,inst_59072,inst_59073,inst_59074,state_val_59134,c__55486__auto__,map__58978,map__58978__$1,opts,before_jsload,on_jsload,reload_dependents,map__58979,map__58979__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_59076 = setTimeout(inst_59075,(10));
var state_59133__$1 = (function (){var statearr_59204 = state_59133;
(statearr_59204[(33)] = inst_59074);

(statearr_59204[(34)] = inst_59069);

return statearr_59204;
})();
var statearr_59205_59268 = state_59133__$1;
(statearr_59205_59268[(2)] = inst_59076);

(statearr_59205_59268[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (16))){
var state_59133__$1 = state_59133;
var statearr_59206_59269 = state_59133__$1;
(statearr_59206_59269[(2)] = reload_dependents);

(statearr_59206_59269[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (38))){
var inst_59086 = (state_59133[(16)]);
var inst_59104 = cljs.core.apply.call(null,cljs.core.hash_map,inst_59086);
var state_59133__$1 = state_59133;
var statearr_59207_59270 = state_59133__$1;
(statearr_59207_59270[(2)] = inst_59104);

(statearr_59207_59270[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (30))){
var state_59133__$1 = state_59133;
var statearr_59208_59271 = state_59133__$1;
(statearr_59208_59271[(2)] = null);

(statearr_59208_59271[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (10))){
var inst_59006 = (state_59133[(22)]);
var inst_59008 = cljs.core.chunked_seq_QMARK_.call(null,inst_59006);
var state_59133__$1 = state_59133;
if(inst_59008){
var statearr_59209_59272 = state_59133__$1;
(statearr_59209_59272[(1)] = (13));

} else {
var statearr_59210_59273 = state_59133__$1;
(statearr_59210_59273[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (18))){
var inst_59040 = (state_59133[(2)]);
var state_59133__$1 = state_59133;
if(cljs.core.truth_(inst_59040)){
var statearr_59211_59274 = state_59133__$1;
(statearr_59211_59274[(1)] = (19));

} else {
var statearr_59212_59275 = state_59133__$1;
(statearr_59212_59275[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (42))){
var state_59133__$1 = state_59133;
var statearr_59213_59276 = state_59133__$1;
(statearr_59213_59276[(2)] = null);

(statearr_59213_59276[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (37))){
var inst_59099 = (state_59133[(2)]);
var state_59133__$1 = state_59133;
var statearr_59214_59277 = state_59133__$1;
(statearr_59214_59277[(2)] = inst_59099);

(statearr_59214_59277[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59134 === (8))){
var inst_58993 = (state_59133[(7)]);
var inst_59006 = (state_59133[(22)]);
var inst_59006__$1 = cljs.core.seq.call(null,inst_58993);
var state_59133__$1 = (function (){var statearr_59215 = state_59133;
(statearr_59215[(22)] = inst_59006__$1);

return statearr_59215;
})();
if(inst_59006__$1){
var statearr_59216_59278 = state_59133__$1;
(statearr_59216_59278[(1)] = (10));

} else {
var statearr_59217_59279 = state_59133__$1;
(statearr_59217_59279[(1)] = (11));

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
});})(c__55486__auto__,map__58978,map__58978__$1,opts,before_jsload,on_jsload,reload_dependents,map__58979,map__58979__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__55396__auto__,c__55486__auto__,map__58978,map__58978__$1,opts,before_jsload,on_jsload,reload_dependents,map__58979,map__58979__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__55397__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__55397__auto____0 = (function (){
var statearr_59218 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59218[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__55397__auto__);

(statearr_59218[(1)] = (1));

return statearr_59218;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__55397__auto____1 = (function (state_59133){
while(true){
var ret_value__55398__auto__ = (function (){try{while(true){
var result__55399__auto__ = switch__55396__auto__.call(null,state_59133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__55399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55399__auto__;
}
break;
}
}catch (e59219){if((e59219 instanceof Object)){
var ex__55400__auto__ = e59219;
var statearr_59220_59280 = state_59133;
(statearr_59220_59280[(5)] = ex__55400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__55398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59281 = state_59133;
state_59133 = G__59281;
continue;
} else {
return ret_value__55398__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__55397__auto__ = function(state_59133){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__55397__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__55397__auto____1.call(this,state_59133);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__55397__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__55397__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__55397__auto__;
})()
;})(switch__55396__auto__,c__55486__auto__,map__58978,map__58978__$1,opts,before_jsload,on_jsload,reload_dependents,map__58979,map__58979__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__55488__auto__ = (function (){var statearr_59221 = f__55487__auto__.call(null);
(statearr_59221[(6)] = c__55486__auto__);

return statearr_59221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55488__auto__);
});})(c__55486__auto__,map__58978,map__58978__$1,opts,before_jsload,on_jsload,reload_dependents,map__58979,map__58979__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__55486__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__59284,link){
var map__59285 = p__59284;
var map__59285__$1 = ((((!((map__59285 == null)))?((((map__59285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59285.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59285):map__59285);
var file = cljs.core.get.call(null,map__59285__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5278__auto__ = link.href;
if(cljs.core.truth_(temp__5278__auto__)){
var link_href = temp__5278__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5278__auto__,map__59285,map__59285__$1,file){
return (function (p1__59282_SHARP_,p2__59283_SHARP_){
if(cljs.core._EQ_.call(null,p1__59282_SHARP_,p2__59283_SHARP_)){
return p1__59282_SHARP_;
} else {
return false;
}
});})(link_href,temp__5278__auto__,map__59285,map__59285__$1,file))
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
var temp__5278__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__59288){
var map__59289 = p__59288;
var map__59289__$1 = ((((!((map__59289 == null)))?((((map__59289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59289.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59289):map__59289);
var match_length = cljs.core.get.call(null,map__59289__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__59289__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__59287_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__59287_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__59291_SHARP_,p2__59292_SHARP_){
return cljs.core.assoc.call(null,p1__59291_SHARP_,cljs.core.get.call(null,p2__59292_SHARP_,key),p2__59292_SHARP_);
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
var loaded_f_datas_59293 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_59293);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_59293);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__59294,p__59295){
var map__59296 = p__59294;
var map__59296__$1 = ((((!((map__59296 == null)))?((((map__59296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59296.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59296):map__59296);
var on_cssload = cljs.core.get.call(null,map__59296__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__59297 = p__59295;
var map__59297__$1 = ((((!((map__59297 == null)))?((((map__59297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59297.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59297):map__59297);
var files_msg = map__59297__$1;
var files = cljs.core.get.call(null,map__59297__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1509280897074
