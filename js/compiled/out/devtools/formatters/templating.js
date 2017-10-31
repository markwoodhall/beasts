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
var x3264208_3264209 = value;
x3264208_3264209.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


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
var x3264211_3264212 = value;
x3264211_3264212.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


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
var x3264214_3264215 = value;
x3264214_3264215.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


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
var and__49509__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__49509__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__49509__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__50805__auto__ = [];
var len__50798__auto___3264222 = arguments.length;
var i__50799__auto___3264223 = (0);
while(true){
if((i__50799__auto___3264223 < len__50798__auto___3264222)){
args__50805__auto__.push((arguments[i__50799__auto___3264223]));

var G__3264224 = (i__50799__auto___3264223 + (1));
i__50799__auto___3264223 = G__3264224;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__3264218_3264225 = cljs.core.seq.call(null,items);
var chunk__3264219_3264226 = null;
var count__3264220_3264227 = (0);
var i__3264221_3264228 = (0);
while(true){
if((i__3264221_3264228 < count__3264220_3264227)){
var item_3264229 = cljs.core._nth.call(null,chunk__3264219_3264226,i__3264221_3264228);
if(!((item_3264229 == null))){
if(cljs.core.coll_QMARK_.call(null,item_3264229)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_3264229)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_3264229));
}
} else {
}

var G__3264230 = seq__3264218_3264225;
var G__3264231 = chunk__3264219_3264226;
var G__3264232 = count__3264220_3264227;
var G__3264233 = (i__3264221_3264228 + (1));
seq__3264218_3264225 = G__3264230;
chunk__3264219_3264226 = G__3264231;
count__3264220_3264227 = G__3264232;
i__3264221_3264228 = G__3264233;
continue;
} else {
var temp__5278__auto___3264234 = cljs.core.seq.call(null,seq__3264218_3264225);
if(temp__5278__auto___3264234){
var seq__3264218_3264235__$1 = temp__5278__auto___3264234;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3264218_3264235__$1)){
var c__50452__auto___3264236 = cljs.core.chunk_first.call(null,seq__3264218_3264235__$1);
var G__3264237 = cljs.core.chunk_rest.call(null,seq__3264218_3264235__$1);
var G__3264238 = c__50452__auto___3264236;
var G__3264239 = cljs.core.count.call(null,c__50452__auto___3264236);
var G__3264240 = (0);
seq__3264218_3264225 = G__3264237;
chunk__3264219_3264226 = G__3264238;
count__3264220_3264227 = G__3264239;
i__3264221_3264228 = G__3264240;
continue;
} else {
var item_3264241 = cljs.core.first.call(null,seq__3264218_3264235__$1);
if(!((item_3264241 == null))){
if(cljs.core.coll_QMARK_.call(null,item_3264241)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_3264241)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_3264241));
}
} else {
}

var G__3264242 = cljs.core.next.call(null,seq__3264218_3264235__$1);
var G__3264243 = null;
var G__3264244 = (0);
var G__3264245 = (0);
seq__3264218_3264225 = G__3264242;
chunk__3264219_3264226 = G__3264243;
count__3264220_3264227 = G__3264244;
i__3264221_3264228 = G__3264245;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq3264217){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3264217));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__50805__auto__ = [];
var len__50798__auto___3264253 = arguments.length;
var i__50799__auto___3264254 = (0);
while(true){
if((i__50799__auto___3264254 < len__50798__auto___3264253)){
args__50805__auto__.push((arguments[i__50799__auto___3264254]));

var G__3264255 = (i__50799__auto___3264254 + (1));
i__50799__auto___3264254 = G__3264255;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((2) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__50806__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__3264249_3264256 = cljs.core.seq.call(null,children);
var chunk__3264250_3264257 = null;
var count__3264251_3264258 = (0);
var i__3264252_3264259 = (0);
while(true){
if((i__3264252_3264259 < count__3264251_3264258)){
var child_3264260 = cljs.core._nth.call(null,chunk__3264250_3264257,i__3264252_3264259);
if(!((child_3264260 == null))){
if(cljs.core.coll_QMARK_.call(null,child_3264260)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_3264260))));
} else {
var temp__5276__auto___3264261 = devtools.formatters.helpers.pref.call(null,child_3264260);
if(cljs.core.truth_(temp__5276__auto___3264261)){
var child_value_3264262 = temp__5276__auto___3264261;
template.push(child_value_3264262);
} else {
}
}
} else {
}

var G__3264263 = seq__3264249_3264256;
var G__3264264 = chunk__3264250_3264257;
var G__3264265 = count__3264251_3264258;
var G__3264266 = (i__3264252_3264259 + (1));
seq__3264249_3264256 = G__3264263;
chunk__3264250_3264257 = G__3264264;
count__3264251_3264258 = G__3264265;
i__3264252_3264259 = G__3264266;
continue;
} else {
var temp__5278__auto___3264267 = cljs.core.seq.call(null,seq__3264249_3264256);
if(temp__5278__auto___3264267){
var seq__3264249_3264268__$1 = temp__5278__auto___3264267;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3264249_3264268__$1)){
var c__50452__auto___3264269 = cljs.core.chunk_first.call(null,seq__3264249_3264268__$1);
var G__3264270 = cljs.core.chunk_rest.call(null,seq__3264249_3264268__$1);
var G__3264271 = c__50452__auto___3264269;
var G__3264272 = cljs.core.count.call(null,c__50452__auto___3264269);
var G__3264273 = (0);
seq__3264249_3264256 = G__3264270;
chunk__3264250_3264257 = G__3264271;
count__3264251_3264258 = G__3264272;
i__3264252_3264259 = G__3264273;
continue;
} else {
var child_3264274 = cljs.core.first.call(null,seq__3264249_3264268__$1);
if(!((child_3264274 == null))){
if(cljs.core.coll_QMARK_.call(null,child_3264274)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_3264274))));
} else {
var temp__5276__auto___3264275 = devtools.formatters.helpers.pref.call(null,child_3264274);
if(cljs.core.truth_(temp__5276__auto___3264275)){
var child_value_3264276 = temp__5276__auto___3264275;
template.push(child_value_3264276);
} else {
}
}
} else {
}

var G__3264277 = cljs.core.next.call(null,seq__3264249_3264268__$1);
var G__3264278 = null;
var G__3264279 = (0);
var G__3264280 = (0);
seq__3264249_3264256 = G__3264277;
chunk__3264250_3264257 = G__3264278;
count__3264251_3264258 = G__3264279;
i__3264252_3264259 = G__3264280;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq3264246){
var G__3264247 = cljs.core.first.call(null,seq3264246);
var seq3264246__$1 = cljs.core.next.call(null,seq3264246);
var G__3264248 = cljs.core.first.call(null,seq3264246__$1);
var seq3264246__$2 = cljs.core.next.call(null,seq3264246__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__3264247,G__3264248,seq3264246__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__50805__auto__ = [];
var len__50798__auto___3264283 = arguments.length;
var i__50799__auto___3264284 = (0);
while(true){
if((i__50799__auto___3264284 < len__50798__auto___3264283)){
args__50805__auto__.push((arguments[i__50799__auto___3264284]));

var G__3264285 = (i__50799__auto___3264284 + (1));
i__50799__auto___3264284 = G__3264285;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((1) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__50806__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq3264281){
var G__3264282 = cljs.core.first.call(null,seq3264281);
var seq3264281__$1 = cljs.core.next.call(null,seq3264281);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__3264282,seq3264281__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__50805__auto__ = [];
var len__50798__auto___3264288 = arguments.length;
var i__50799__auto___3264289 = (0);
while(true){
if((i__50799__auto___3264289 < len__50798__auto___3264288)){
args__50805__auto__.push((arguments[i__50799__auto___3264289]));

var G__3264290 = (i__50799__auto___3264289 + (1));
i__50799__auto___3264289 = G__3264290;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((1) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__50806__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq3264286){
var G__3264287 = cljs.core.first.call(null,seq3264286);
var seq3264286__$1 = cljs.core.next.call(null,seq3264286);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__3264287,seq3264286__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__3264292 = arguments.length;
switch (G__3264292) {
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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj3264294 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__49521__auto__ = start_index;
if(cljs.core.truth_(or__49521__auto__)){
return or__49521__auto__;
} else {
return (0);
}
})()};
return obj3264294;
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
var args__50805__auto__ = [];
var len__50798__auto___3264302 = arguments.length;
var i__50799__auto___3264303 = (0);
while(true){
if((i__50799__auto___3264303 < len__50798__auto___3264302)){
args__50805__auto__.push((arguments[i__50799__auto___3264303]));

var G__3264304 = (i__50799__auto___3264303 + (1));
i__50799__auto___3264303 = G__3264304;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((1) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__50806__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__3264298){
var vec__3264299 = p__3264298;
var state_override_fn = cljs.core.nth.call(null,vec__3264299,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq3264296){
var G__3264297 = cljs.core.first.call(null,seq3264296);
var seq3264296__$1 = cljs.core.next.call(null,seq3264296);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__3264297,seq3264296__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_3264305 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_3264305;
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
var G__3264306 = name;
switch (G__3264306) {
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
var vec__3264308 = tag;
var html_tag = cljs.core.nth.call(null,vec__3264308,(0),null);
var style = cljs.core.nth.call(null,vec__3264308,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_3264311 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_3264311;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_3264312 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_3264313 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_3264313;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_3264312;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__3264314 = initial_value;
var G__3264315 = value.call(null);
initial_value = G__3264314;
value = G__3264315;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__3264316 = initial_value;
var G__3264317 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__3264316;
value = G__3264317;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__3264318 = initial_value;
var G__3264319 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__3264318;
value = G__3264319;
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

//# sourceMappingURL=templating.js.map?rel=1509468963447
