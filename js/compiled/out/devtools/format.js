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
var o61398 = temp__5276__auto__;
var temp__5276__auto____$1 = (o61398["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o61399 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o61399["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o61400 = temp__5276__auto____$2;
return (o61400["make_template"]);
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
var o61401 = temp__5276__auto__;
var temp__5276__auto____$1 = (o61401["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o61402 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o61402["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o61403 = temp__5276__auto____$2;
return (o61403["make_group"]);
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
var o61404 = temp__5276__auto__;
var temp__5276__auto____$1 = (o61404["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o61405 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o61405["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o61406 = temp__5276__auto____$2;
return (o61406["make_reference"]);
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
var o61407 = temp__5276__auto__;
var temp__5276__auto____$1 = (o61407["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o61408 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o61408["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o61409 = temp__5276__auto____$2;
return (o61409["make_surrogate"]);
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
var o61410 = temp__5276__auto__;
var temp__5276__auto____$1 = (o61410["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o61411 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o61411["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o61412 = temp__5276__auto____$2;
return (o61412["render_markup"]);
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
var o61413 = temp__5276__auto__;
var temp__5276__auto____$1 = (o61413["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o61414 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o61414["markup"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o61415 = temp__5276__auto____$2;
return (o61415["_LT_header_GT_"]);
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
var o61416 = temp__5276__auto__;
var temp__5276__auto____$1 = (o61416["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o61417 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o61417["markup"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o61418 = temp__5276__auto____$2;
return (o61418["_LT_standard_body_GT_"]);
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
var len__50798__auto___61420 = arguments.length;
var i__50799__auto___61421 = (0);
while(true){
if((i__50799__auto___61421 < len__50798__auto___61420)){
args__50805__auto__.push((arguments[i__50799__auto___61421]));

var G__61422 = (i__50799__auto___61421 + (1));
i__50799__auto___61421 = G__61422;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq61419){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61419));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__50805__auto__ = [];
var len__50798__auto___61424 = arguments.length;
var i__50799__auto___61425 = (0);
while(true){
if((i__50799__auto___61425 < len__50798__auto___61424)){
args__50805__auto__.push((arguments[i__50799__auto___61425]));

var G__61426 = (i__50799__auto___61425 + (1));
i__50799__auto___61425 = G__61426;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq61423){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61423));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__50805__auto__ = [];
var len__50798__auto___61428 = arguments.length;
var i__50799__auto___61429 = (0);
while(true){
if((i__50799__auto___61429 < len__50798__auto___61428)){
args__50805__auto__.push((arguments[i__50799__auto___61429]));

var G__61430 = (i__50799__auto___61429 + (1));
i__50799__auto___61429 = G__61430;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq61427){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61427));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__50805__auto__ = [];
var len__50798__auto___61432 = arguments.length;
var i__50799__auto___61433 = (0);
while(true){
if((i__50799__auto___61433 < len__50798__auto___61432)){
args__50805__auto__.push((arguments[i__50799__auto___61433]));

var G__61434 = (i__50799__auto___61433 + (1));
i__50799__auto___61433 = G__61434;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq61431){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61431));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__50805__auto__ = [];
var len__50798__auto___61436 = arguments.length;
var i__50799__auto___61437 = (0);
while(true){
if((i__50799__auto___61437 < len__50798__auto___61436)){
args__50805__auto__.push((arguments[i__50799__auto___61437]));

var G__61438 = (i__50799__auto___61437 + (1));
i__50799__auto___61437 = G__61438;
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

devtools.format.template.cljs$lang$applyTo = (function (seq61435){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61435));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__50805__auto__ = [];
var len__50798__auto___61440 = arguments.length;
var i__50799__auto___61441 = (0);
while(true){
if((i__50799__auto___61441 < len__50798__auto___61440)){
args__50805__auto__.push((arguments[i__50799__auto___61441]));

var G__61442 = (i__50799__auto___61441 + (1));
i__50799__auto___61441 = G__61442;
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

devtools.format.group.cljs$lang$applyTo = (function (seq61439){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61439));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__50805__auto__ = [];
var len__50798__auto___61444 = arguments.length;
var i__50799__auto___61445 = (0);
while(true){
if((i__50799__auto___61445 < len__50798__auto___61444)){
args__50805__auto__.push((arguments[i__50799__auto___61445]));

var G__61446 = (i__50799__auto___61445 + (1));
i__50799__auto___61445 = G__61446;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq61443){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61443));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__50805__auto__ = [];
var len__50798__auto___61454 = arguments.length;
var i__50799__auto___61455 = (0);
while(true){
if((i__50799__auto___61455 < len__50798__auto___61454)){
args__50805__auto__.push((arguments[i__50799__auto___61455]));

var G__61456 = (i__50799__auto___61455 + (1));
i__50799__auto___61455 = G__61456;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((1) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__50806__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__61450){
var vec__61451 = p__61450;
var state_override = cljs.core.nth.call(null,vec__61451,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__61451,state_override){
return (function (p1__61447_SHARP_){
return cljs.core.merge.call(null,p1__61447_SHARP_,state_override);
});})(vec__61451,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq61448){
var G__61449 = cljs.core.first.call(null,seq61448);
var seq61448__$1 = cljs.core.next.call(null,seq61448);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__61449,seq61448__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__50805__auto__ = [];
var len__50798__auto___61458 = arguments.length;
var i__50799__auto___61459 = (0);
while(true){
if((i__50799__auto___61459 < len__50798__auto___61458)){
args__50805__auto__.push((arguments[i__50799__auto___61459]));

var G__61460 = (i__50799__auto___61459 + (1));
i__50799__auto___61459 = G__61460;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq61457){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61457));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__50805__auto__ = [];
var len__50798__auto___61463 = arguments.length;
var i__50799__auto___61464 = (0);
while(true){
if((i__50799__auto___61464 < len__50798__auto___61463)){
args__50805__auto__.push((arguments[i__50799__auto___61464]));

var G__61465 = (i__50799__auto___61464 + (1));
i__50799__auto___61464 = G__61465;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq61461){
var G__61462 = cljs.core.first.call(null,seq61461);
var seq61461__$1 = cljs.core.next.call(null,seq61461);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__61462,seq61461__$1);
});


//# sourceMappingURL=format.js.map?rel=1509280898786
