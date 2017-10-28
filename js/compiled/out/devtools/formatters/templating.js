// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x35231_35232 = value;
x35231_35232.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x35234_35235 = value;
x35234_35235.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x35237_35238 = value;
x35237_35238.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__30589__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__30589__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__30589__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__31885__auto__ = [];
var len__31878__auto___35245 = arguments.length;
var i__31879__auto___35246 = (0);
while(true){
if((i__31879__auto___35246 < len__31878__auto___35245)){
args__31885__auto__.push((arguments[i__31879__auto___35246]));

var G__35247 = (i__31879__auto___35246 + (1));
i__31879__auto___35246 = G__35247;
continue;
} else {
}
break;
}

var argseq__31886__auto__ = ((((0) < args__31885__auto__.length))?(new cljs.core.IndexedSeq(args__31885__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__31886__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__35241_35248 = cljs.core.seq.call(null,items);
var chunk__35242_35249 = null;
var count__35243_35250 = (0);
var i__35244_35251 = (0);
while(true){
if((i__35244_35251 < count__35243_35250)){
var item_35252 = cljs.core._nth.call(null,chunk__35242_35249,i__35244_35251);
if(!((item_35252 == null))){
if(cljs.core.coll_QMARK_.call(null,item_35252)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_35252)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_35252));
}
} else {
}

var G__35253 = seq__35241_35248;
var G__35254 = chunk__35242_35249;
var G__35255 = count__35243_35250;
var G__35256 = (i__35244_35251 + (1));
seq__35241_35248 = G__35253;
chunk__35242_35249 = G__35254;
count__35243_35250 = G__35255;
i__35244_35251 = G__35256;
continue;
} else {
var temp__5278__auto___35257 = cljs.core.seq.call(null,seq__35241_35248);
if(temp__5278__auto___35257){
var seq__35241_35258__$1 = temp__5278__auto___35257;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35241_35258__$1)){
var c__31532__auto___35259 = cljs.core.chunk_first.call(null,seq__35241_35258__$1);
var G__35260 = cljs.core.chunk_rest.call(null,seq__35241_35258__$1);
var G__35261 = c__31532__auto___35259;
var G__35262 = cljs.core.count.call(null,c__31532__auto___35259);
var G__35263 = (0);
seq__35241_35248 = G__35260;
chunk__35242_35249 = G__35261;
count__35243_35250 = G__35262;
i__35244_35251 = G__35263;
continue;
} else {
var item_35264 = cljs.core.first.call(null,seq__35241_35258__$1);
if(!((item_35264 == null))){
if(cljs.core.coll_QMARK_.call(null,item_35264)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_35264)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_35264));
}
} else {
}

var G__35265 = cljs.core.next.call(null,seq__35241_35258__$1);
var G__35266 = null;
var G__35267 = (0);
var G__35268 = (0);
seq__35241_35248 = G__35265;
chunk__35242_35249 = G__35266;
count__35243_35250 = G__35267;
i__35244_35251 = G__35268;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq35240){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35240));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__31885__auto__ = [];
var len__31878__auto___35276 = arguments.length;
var i__31879__auto___35277 = (0);
while(true){
if((i__31879__auto___35277 < len__31878__auto___35276)){
args__31885__auto__.push((arguments[i__31879__auto___35277]));

var G__35278 = (i__31879__auto___35277 + (1));
i__31879__auto___35277 = G__35278;
continue;
} else {
}
break;
}

var argseq__31886__auto__ = ((((2) < args__31885__auto__.length))?(new cljs.core.IndexedSeq(args__31885__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31886__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__35272_35279 = cljs.core.seq.call(null,children);
var chunk__35273_35280 = null;
var count__35274_35281 = (0);
var i__35275_35282 = (0);
while(true){
if((i__35275_35282 < count__35274_35281)){
var child_35283 = cljs.core._nth.call(null,chunk__35273_35280,i__35275_35282);
if(!((child_35283 == null))){
if(cljs.core.coll_QMARK_.call(null,child_35283)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_35283))));
} else {
var temp__5276__auto___35284 = devtools.formatters.helpers.pref.call(null,child_35283);
if(cljs.core.truth_(temp__5276__auto___35284)){
var child_value_35285 = temp__5276__auto___35284;
template.push(child_value_35285);
} else {
}
}
} else {
}

var G__35286 = seq__35272_35279;
var G__35287 = chunk__35273_35280;
var G__35288 = count__35274_35281;
var G__35289 = (i__35275_35282 + (1));
seq__35272_35279 = G__35286;
chunk__35273_35280 = G__35287;
count__35274_35281 = G__35288;
i__35275_35282 = G__35289;
continue;
} else {
var temp__5278__auto___35290 = cljs.core.seq.call(null,seq__35272_35279);
if(temp__5278__auto___35290){
var seq__35272_35291__$1 = temp__5278__auto___35290;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35272_35291__$1)){
var c__31532__auto___35292 = cljs.core.chunk_first.call(null,seq__35272_35291__$1);
var G__35293 = cljs.core.chunk_rest.call(null,seq__35272_35291__$1);
var G__35294 = c__31532__auto___35292;
var G__35295 = cljs.core.count.call(null,c__31532__auto___35292);
var G__35296 = (0);
seq__35272_35279 = G__35293;
chunk__35273_35280 = G__35294;
count__35274_35281 = G__35295;
i__35275_35282 = G__35296;
continue;
} else {
var child_35297 = cljs.core.first.call(null,seq__35272_35291__$1);
if(!((child_35297 == null))){
if(cljs.core.coll_QMARK_.call(null,child_35297)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_35297))));
} else {
var temp__5276__auto___35298 = devtools.formatters.helpers.pref.call(null,child_35297);
if(cljs.core.truth_(temp__5276__auto___35298)){
var child_value_35299 = temp__5276__auto___35298;
template.push(child_value_35299);
} else {
}
}
} else {
}

var G__35300 = cljs.core.next.call(null,seq__35272_35291__$1);
var G__35301 = null;
var G__35302 = (0);
var G__35303 = (0);
seq__35272_35279 = G__35300;
chunk__35273_35280 = G__35301;
count__35274_35281 = G__35302;
i__35275_35282 = G__35303;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq35269){
var G__35270 = cljs.core.first.call(null,seq35269);
var seq35269__$1 = cljs.core.next.call(null,seq35269);
var G__35271 = cljs.core.first.call(null,seq35269__$1);
var seq35269__$2 = cljs.core.next.call(null,seq35269__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__35270,G__35271,seq35269__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__31885__auto__ = [];
var len__31878__auto___35306 = arguments.length;
var i__31879__auto___35307 = (0);
while(true){
if((i__31879__auto___35307 < len__31878__auto___35306)){
args__31885__auto__.push((arguments[i__31879__auto___35307]));

var G__35308 = (i__31879__auto___35307 + (1));
i__31879__auto___35307 = G__35308;
continue;
} else {
}
break;
}

var argseq__31886__auto__ = ((((1) < args__31885__auto__.length))?(new cljs.core.IndexedSeq(args__31885__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31886__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq35304){
var G__35305 = cljs.core.first.call(null,seq35304);
var seq35304__$1 = cljs.core.next.call(null,seq35304);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35305,seq35304__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__31885__auto__ = [];
var len__31878__auto___35311 = arguments.length;
var i__31879__auto___35312 = (0);
while(true){
if((i__31879__auto___35312 < len__31878__auto___35311)){
args__31885__auto__.push((arguments[i__31879__auto___35312]));

var G__35313 = (i__31879__auto___35312 + (1));
i__31879__auto___35312 = G__35313;
continue;
} else {
}
break;
}

var argseq__31886__auto__ = ((((1) < args__31885__auto__.length))?(new cljs.core.IndexedSeq(args__31885__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31886__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq35309){
var G__35310 = cljs.core.first.call(null,seq35309);
var seq35309__$1 = cljs.core.next.call(null,seq35309);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35310,seq35309__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__35315 = arguments.length;
switch (G__35315) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj35317 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__30601__auto__ = start_index;
if(cljs.core.truth_(or__30601__auto__)){
return or__30601__auto__;
} else {
return (0);
}
})()};
return obj35317;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__31885__auto__ = [];
var len__31878__auto___35325 = arguments.length;
var i__31879__auto___35326 = (0);
while(true){
if((i__31879__auto___35326 < len__31878__auto___35325)){
args__31885__auto__.push((arguments[i__31879__auto___35326]));

var G__35327 = (i__31879__auto___35326 + (1));
i__31879__auto___35326 = G__35327;
continue;
} else {
}
break;
}

var argseq__31886__auto__ = ((((1) < args__31885__auto__.length))?(new cljs.core.IndexedSeq(args__31885__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31886__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__35321){
var vec__35322 = p__35321;
var state_override_fn = cljs.core.nth.call(null,vec__35322,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq35319){
var G__35320 = cljs.core.first.call(null,seq35319);
var seq35319__$1 = cljs.core.next.call(null,seq35319);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__35320,seq35319__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_35328 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_35328;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),"\n","Render stack:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__35329 = name;
switch (G__35329) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__35331 = tag;
var html_tag = cljs.core.nth.call(null,vec__35331,(0),null);
var style = cljs.core.nth.call(null,vec__35331,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_35334 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_35334;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_35335 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_35336 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_35336;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_35335;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__35337 = initial_value;
var G__35338 = value.call(null);
initial_value = G__35337;
value = G__35338;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__35339 = initial_value;
var G__35340 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__35339;
value = G__35340;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__35341 = initial_value;
var G__35342 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__35341;
value = G__35342;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1509220582630
