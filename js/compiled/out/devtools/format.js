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
var x__50254__auto__ = (((value == null))?null:value);
var m__50255__auto__ = (devtools.format._header[goog.typeOf(x__50254__auto__)]);
if(!((m__50255__auto__ == null))){
return m__50255__auto__.call(null,value);
} else {
var m__50255__auto____$1 = (devtools.format._header["_"]);
if(!((m__50255__auto____$1 == null))){
return m__50255__auto____$1.call(null,value);
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
var x__50254__auto__ = (((value == null))?null:value);
var m__50255__auto__ = (devtools.format._has_body[goog.typeOf(x__50254__auto__)]);
if(!((m__50255__auto__ == null))){
return m__50255__auto__.call(null,value);
} else {
var m__50255__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__50255__auto____$1 == null))){
return m__50255__auto____$1.call(null,value);
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
var x__50254__auto__ = (((value == null))?null:value);
var m__50255__auto__ = (devtools.format._body[goog.typeOf(x__50254__auto__)]);
if(!((m__50255__auto__ == null))){
return m__50255__auto__.call(null,value);
} else {
var m__50255__auto____$1 = (devtools.format._body["_"]);
if(!((m__50255__auto____$1 == null))){
return m__50255__auto____$1.call(null,value);
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
var o3262442 = temp__5276__auto__;
var temp__5276__auto____$1 = (o3262442["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o3262443 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o3262443["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o3262444 = temp__5276__auto____$2;
return (o3262444["make_template"]);
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
var o3262445 = temp__5276__auto__;
var temp__5276__auto____$1 = (o3262445["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o3262446 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o3262446["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o3262447 = temp__5276__auto____$2;
return (o3262447["make_group"]);
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
var o3262448 = temp__5276__auto__;
var temp__5276__auto____$1 = (o3262448["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o3262449 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o3262449["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o3262450 = temp__5276__auto____$2;
return (o3262450["make_reference"]);
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
var o3262451 = temp__5276__auto__;
var temp__5276__auto____$1 = (o3262451["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o3262452 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o3262452["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o3262453 = temp__5276__auto____$2;
return (o3262453["make_surrogate"]);
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
var o3262454 = temp__5276__auto__;
var temp__5276__auto____$1 = (o3262454["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o3262455 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o3262455["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o3262456 = temp__5276__auto____$2;
return (o3262456["render_markup"]);
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
var o3262457 = temp__5276__auto__;
var temp__5276__auto____$1 = (o3262457["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o3262458 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o3262458["markup"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o3262459 = temp__5276__auto____$2;
return (o3262459["_LT_header_GT_"]);
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
var o3262460 = temp__5276__auto__;
var temp__5276__auto____$1 = (o3262460["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o3262461 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o3262461["markup"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o3262462 = temp__5276__auto____$2;
return (o3262462["_LT_standard_body_GT_"]);
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
var args__50805__auto__ = [];
var len__50798__auto___3262464 = arguments.length;
var i__50799__auto___3262465 = (0);
while(true){
if((i__50799__auto___3262465 < len__50798__auto___3262464)){
args__50805__auto__.push((arguments[i__50799__auto___3262465]));

var G__3262466 = (i__50799__auto___3262465 + (1));
i__50799__auto___3262465 = G__3262466;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq3262463){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3262463));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__50805__auto__ = [];
var len__50798__auto___3262468 = arguments.length;
var i__50799__auto___3262469 = (0);
while(true){
if((i__50799__auto___3262469 < len__50798__auto___3262468)){
args__50805__auto__.push((arguments[i__50799__auto___3262469]));

var G__3262470 = (i__50799__auto___3262469 + (1));
i__50799__auto___3262469 = G__3262470;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq3262467){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3262467));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__50805__auto__ = [];
var len__50798__auto___3262472 = arguments.length;
var i__50799__auto___3262473 = (0);
while(true){
if((i__50799__auto___3262473 < len__50798__auto___3262472)){
args__50805__auto__.push((arguments[i__50799__auto___3262473]));

var G__3262474 = (i__50799__auto___3262473 + (1));
i__50799__auto___3262473 = G__3262474;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq3262471){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3262471));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__50805__auto__ = [];
var len__50798__auto___3262476 = arguments.length;
var i__50799__auto___3262477 = (0);
while(true){
if((i__50799__auto___3262477 < len__50798__auto___3262476)){
args__50805__auto__.push((arguments[i__50799__auto___3262477]));

var G__3262478 = (i__50799__auto___3262477 + (1));
i__50799__auto___3262477 = G__3262478;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq3262475){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3262475));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__50805__auto__ = [];
var len__50798__auto___3262480 = arguments.length;
var i__50799__auto___3262481 = (0);
while(true){
if((i__50799__auto___3262481 < len__50798__auto___3262480)){
args__50805__auto__.push((arguments[i__50799__auto___3262481]));

var G__3262482 = (i__50799__auto___3262481 + (1));
i__50799__auto___3262481 = G__3262482;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq3262479){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3262479));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__50805__auto__ = [];
var len__50798__auto___3262484 = arguments.length;
var i__50799__auto___3262485 = (0);
while(true){
if((i__50799__auto___3262485 < len__50798__auto___3262484)){
args__50805__auto__.push((arguments[i__50799__auto___3262485]));

var G__3262486 = (i__50799__auto___3262485 + (1));
i__50799__auto___3262485 = G__3262486;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq3262483){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3262483));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__50805__auto__ = [];
var len__50798__auto___3262488 = arguments.length;
var i__50799__auto___3262489 = (0);
while(true){
if((i__50799__auto___3262489 < len__50798__auto___3262488)){
args__50805__auto__.push((arguments[i__50799__auto___3262489]));

var G__3262490 = (i__50799__auto___3262489 + (1));
i__50799__auto___3262489 = G__3262490;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq3262487){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3262487));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__50805__auto__ = [];
var len__50798__auto___3262498 = arguments.length;
var i__50799__auto___3262499 = (0);
while(true){
if((i__50799__auto___3262499 < len__50798__auto___3262498)){
args__50805__auto__.push((arguments[i__50799__auto___3262499]));

var G__3262500 = (i__50799__auto___3262499 + (1));
i__50799__auto___3262499 = G__3262500;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((1) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__50806__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__3262494){
var vec__3262495 = p__3262494;
var state_override = cljs.core.nth.call(null,vec__3262495,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__3262495,state_override){
return (function (p1__3262491_SHARP_){
return cljs.core.merge.call(null,p1__3262491_SHARP_,state_override);
});})(vec__3262495,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq3262492){
var G__3262493 = cljs.core.first.call(null,seq3262492);
var seq3262492__$1 = cljs.core.next.call(null,seq3262492);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__3262493,seq3262492__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__50805__auto__ = [];
var len__50798__auto___3262502 = arguments.length;
var i__50799__auto___3262503 = (0);
while(true){
if((i__50799__auto___3262503 < len__50798__auto___3262502)){
args__50805__auto__.push((arguments[i__50799__auto___3262503]));

var G__3262504 = (i__50799__auto___3262503 + (1));
i__50799__auto___3262503 = G__3262504;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq3262501){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3262501));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__50805__auto__ = [];
var len__50798__auto___3262507 = arguments.length;
var i__50799__auto___3262508 = (0);
while(true){
if((i__50799__auto___3262508 < len__50798__auto___3262507)){
args__50805__auto__.push((arguments[i__50799__auto___3262508]));

var G__3262509 = (i__50799__auto___3262508 + (1));
i__50799__auto___3262508 = G__3262509;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((1) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__50806__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq3262505){
var G__3262506 = cljs.core.first.call(null,seq3262505);
var seq3262505__$1 = cljs.core.next.call(null,seq3262505);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__3262506,seq3262505__$1);
});


//# sourceMappingURL=format.js.map?rel=1509468961162
