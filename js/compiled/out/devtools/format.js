// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__31334__auto__ = (((value == null))?null:value);
var m__31335__auto__ = (devtools.format._header[goog.typeOf(x__31334__auto__)]);
if(!((m__31335__auto__ == null))){
return m__31335__auto__.call(null,value);
} else {
var m__31335__auto____$1 = (devtools.format._header["_"]);
if(!((m__31335__auto____$1 == null))){
return m__31335__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__31334__auto__ = (((value == null))?null:value);
var m__31335__auto__ = (devtools.format._has_body[goog.typeOf(x__31334__auto__)]);
if(!((m__31335__auto__ == null))){
return m__31335__auto__.call(null,value);
} else {
var m__31335__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__31335__auto____$1 == null))){
return m__31335__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__31334__auto__ = (((value == null))?null:value);
var m__31335__auto__ = (devtools.format._body[goog.typeOf(x__31334__auto__)]);
if(!((m__31335__auto__ == null))){
return m__31335__auto__.call(null,value);
} else {
var m__31335__auto____$1 = (devtools.format._body["_"]);
if(!((m__31335__auto____$1 == null))){
return m__31335__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o33371 = temp__5276__auto__;
var temp__5276__auto____$1 = (o33371["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o33372 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o33372["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o33373 = temp__5276__auto____$2;
return (o33373["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o33374 = temp__5276__auto__;
var temp__5276__auto____$1 = (o33374["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o33375 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o33375["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o33376 = temp__5276__auto____$2;
return (o33376["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o33377 = temp__5276__auto__;
var temp__5276__auto____$1 = (o33377["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o33378 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o33378["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o33379 = temp__5276__auto____$2;
return (o33379["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o33380 = temp__5276__auto__;
var temp__5276__auto____$1 = (o33380["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o33381 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o33381["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o33382 = temp__5276__auto____$2;
return (o33382["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o33383 = temp__5276__auto__;
var temp__5276__auto____$1 = (o33383["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o33384 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o33384["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o33385 = temp__5276__auto____$2;
return (o33385["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o33386 = temp__5276__auto__;
var temp__5276__auto____$1 = (o33386["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o33387 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o33387["markup"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o33388 = temp__5276__auto____$2;
return (o33388["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o33389 = temp__5276__auto__;
var temp__5276__auto____$1 = (o33389["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o33390 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o33390["markup"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o33391 = temp__5276__auto____$2;
return (o33391["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__31885__auto__ = [];
var len__31878__auto___33393 = arguments.length;
var i__31879__auto___33394 = (0);
while(true){
if((i__31879__auto___33394 < len__31878__auto___33393)){
args__31885__auto__.push((arguments[i__31879__auto___33394]));

var G__33395 = (i__31879__auto___33394 + (1));
i__31879__auto___33394 = G__33395;
continue;
} else {
}
break;
}

var argseq__31886__auto__ = ((((0) < args__31885__auto__.length))?(new cljs.core.IndexedSeq(args__31885__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__31886__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq33392){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33392));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__31885__auto__ = [];
var len__31878__auto___33397 = arguments.length;
var i__31879__auto___33398 = (0);
while(true){
if((i__31879__auto___33398 < len__31878__auto___33397)){
args__31885__auto__.push((arguments[i__31879__auto___33398]));

var G__33399 = (i__31879__auto___33398 + (1));
i__31879__auto___33398 = G__33399;
continue;
} else {
}
break;
}

var argseq__31886__auto__ = ((((0) < args__31885__auto__.length))?(new cljs.core.IndexedSeq(args__31885__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__31886__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq33396){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33396));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__31885__auto__ = [];
var len__31878__auto___33401 = arguments.length;
var i__31879__auto___33402 = (0);
while(true){
if((i__31879__auto___33402 < len__31878__auto___33401)){
args__31885__auto__.push((arguments[i__31879__auto___33402]));

var G__33403 = (i__31879__auto___33402 + (1));
i__31879__auto___33402 = G__33403;
continue;
} else {
}
break;
}

var argseq__31886__auto__ = ((((0) < args__31885__auto__.length))?(new cljs.core.IndexedSeq(args__31885__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__31886__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq33400){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33400));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__31885__auto__ = [];
var len__31878__auto___33405 = arguments.length;
var i__31879__auto___33406 = (0);
while(true){
if((i__31879__auto___33406 < len__31878__auto___33405)){
args__31885__auto__.push((arguments[i__31879__auto___33406]));

var G__33407 = (i__31879__auto___33406 + (1));
i__31879__auto___33406 = G__33407;
continue;
} else {
}
break;
}

var argseq__31886__auto__ = ((((0) < args__31885__auto__.length))?(new cljs.core.IndexedSeq(args__31885__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31886__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq33404){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33404));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__31885__auto__ = [];
var len__31878__auto___33409 = arguments.length;
var i__31879__auto___33410 = (0);
while(true){
if((i__31879__auto___33410 < len__31878__auto___33409)){
args__31885__auto__.push((arguments[i__31879__auto___33410]));

var G__33411 = (i__31879__auto___33410 + (1));
i__31879__auto___33410 = G__33411;
continue;
} else {
}
break;
}

var argseq__31886__auto__ = ((((0) < args__31885__auto__.length))?(new cljs.core.IndexedSeq(args__31885__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__31886__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq33408){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33408));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__31885__auto__ = [];
var len__31878__auto___33413 = arguments.length;
var i__31879__auto___33414 = (0);
while(true){
if((i__31879__auto___33414 < len__31878__auto___33413)){
args__31885__auto__.push((arguments[i__31879__auto___33414]));

var G__33415 = (i__31879__auto___33414 + (1));
i__31879__auto___33414 = G__33415;
continue;
} else {
}
break;
}

var argseq__31886__auto__ = ((((0) < args__31885__auto__.length))?(new cljs.core.IndexedSeq(args__31885__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__31886__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq33412){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33412));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__31885__auto__ = [];
var len__31878__auto___33417 = arguments.length;
var i__31879__auto___33418 = (0);
while(true){
if((i__31879__auto___33418 < len__31878__auto___33417)){
args__31885__auto__.push((arguments[i__31879__auto___33418]));

var G__33419 = (i__31879__auto___33418 + (1));
i__31879__auto___33418 = G__33419;
continue;
} else {
}
break;
}

var argseq__31886__auto__ = ((((0) < args__31885__auto__.length))?(new cljs.core.IndexedSeq(args__31885__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31886__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq33416){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33416));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__31885__auto__ = [];
var len__31878__auto___33427 = arguments.length;
var i__31879__auto___33428 = (0);
while(true){
if((i__31879__auto___33428 < len__31878__auto___33427)){
args__31885__auto__.push((arguments[i__31879__auto___33428]));

var G__33429 = (i__31879__auto___33428 + (1));
i__31879__auto___33428 = G__33429;
continue;
} else {
}
break;
}

var argseq__31886__auto__ = ((((1) < args__31885__auto__.length))?(new cljs.core.IndexedSeq(args__31885__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31886__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__33423){
var vec__33424 = p__33423;
var state_override = cljs.core.nth.call(null,vec__33424,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__33424,state_override){
return (function (p1__33420_SHARP_){
return cljs.core.merge.call(null,p1__33420_SHARP_,state_override);
});})(vec__33424,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq33421){
var G__33422 = cljs.core.first.call(null,seq33421);
var seq33421__$1 = cljs.core.next.call(null,seq33421);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__33422,seq33421__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__31885__auto__ = [];
var len__31878__auto___33431 = arguments.length;
var i__31879__auto___33432 = (0);
while(true){
if((i__31879__auto___33432 < len__31878__auto___33431)){
args__31885__auto__.push((arguments[i__31879__auto___33432]));

var G__33433 = (i__31879__auto___33432 + (1));
i__31879__auto___33432 = G__33433;
continue;
} else {
}
break;
}

var argseq__31886__auto__ = ((((0) < args__31885__auto__.length))?(new cljs.core.IndexedSeq(args__31885__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__31886__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq33430){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33430));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__31885__auto__ = [];
var len__31878__auto___33436 = arguments.length;
var i__31879__auto___33437 = (0);
while(true){
if((i__31879__auto___33437 < len__31878__auto___33436)){
args__31885__auto__.push((arguments[i__31879__auto___33437]));

var G__33438 = (i__31879__auto___33437 + (1));
i__31879__auto___33437 = G__33438;
continue;
} else {
}
break;
}

var argseq__31886__auto__ = ((((1) < args__31885__auto__.length))?(new cljs.core.IndexedSeq(args__31885__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31886__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq33434){
var G__33435 = cljs.core.first.call(null,seq33434);
var seq33434__$1 = cljs.core.next.call(null,seq33434);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__33435,seq33434__$1);
});


//# sourceMappingURL=format.js.map?rel=1509220037533
