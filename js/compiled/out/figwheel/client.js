// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e3261430){if((e3261430 instanceof Error)){
var e = e3261430;
return "Error: Unable to stringify";
} else {
throw e3261430;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__3261433 = arguments.length;
switch (G__3261433) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__3261431_SHARP_){
if(typeof p1__3261431_SHARP_ === 'string'){
return p1__3261431_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__3261431_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__50805__auto__ = [];
var len__50798__auto___3261436 = arguments.length;
var i__50799__auto___3261437 = (0);
while(true){
if((i__50799__auto___3261437 < len__50798__auto___3261436)){
args__50805__auto__.push((arguments[i__50799__auto___3261437]));

var G__3261438 = (i__50799__auto___3261437 + (1));
i__50799__auto___3261437 = G__3261438;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq3261435){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3261435));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__50805__auto__ = [];
var len__50798__auto___3261440 = arguments.length;
var i__50799__auto___3261441 = (0);
while(true){
if((i__50799__auto___3261441 < len__50798__auto___3261440)){
args__50805__auto__.push((arguments[i__50799__auto___3261441]));

var G__3261442 = (i__50799__auto___3261441 + (1));
i__50799__auto___3261441 = G__3261442;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq3261439){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3261439));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__3261443){
var map__3261444 = p__3261443;
var map__3261444__$1 = ((((!((map__3261444 == null)))?((((map__3261444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3261444.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3261444):map__3261444);
var message = cljs.core.get.call(null,map__3261444__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__3261444__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__49521__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__49521__auto__)){
return or__49521__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__49509__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__49509__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__49509__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__53126__auto___3261523 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53126__auto___3261523,ch){
return (function (){
var f__53127__auto__ = (function (){var switch__53103__auto__ = ((function (c__53126__auto___3261523,ch){
return (function (state_3261495){
var state_val_3261496 = (state_3261495[(1)]);
if((state_val_3261496 === (7))){
var inst_3261491 = (state_3261495[(2)]);
var state_3261495__$1 = state_3261495;
var statearr_3261497_3261524 = state_3261495__$1;
(statearr_3261497_3261524[(2)] = inst_3261491);

(statearr_3261497_3261524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261496 === (1))){
var state_3261495__$1 = state_3261495;
var statearr_3261498_3261525 = state_3261495__$1;
(statearr_3261498_3261525[(2)] = null);

(statearr_3261498_3261525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261496 === (4))){
var inst_3261448 = (state_3261495[(7)]);
var inst_3261448__$1 = (state_3261495[(2)]);
var state_3261495__$1 = (function (){var statearr_3261499 = state_3261495;
(statearr_3261499[(7)] = inst_3261448__$1);

return statearr_3261499;
})();
if(cljs.core.truth_(inst_3261448__$1)){
var statearr_3261500_3261526 = state_3261495__$1;
(statearr_3261500_3261526[(1)] = (5));

} else {
var statearr_3261501_3261527 = state_3261495__$1;
(statearr_3261501_3261527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261496 === (15))){
var inst_3261455 = (state_3261495[(8)]);
var inst_3261470 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_3261455);
var inst_3261471 = cljs.core.first.call(null,inst_3261470);
var inst_3261472 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_3261471);
var inst_3261473 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_3261472)].join('');
var inst_3261474 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_3261473);
var state_3261495__$1 = state_3261495;
var statearr_3261502_3261528 = state_3261495__$1;
(statearr_3261502_3261528[(2)] = inst_3261474);

(statearr_3261502_3261528[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261496 === (13))){
var inst_3261479 = (state_3261495[(2)]);
var state_3261495__$1 = state_3261495;
var statearr_3261503_3261529 = state_3261495__$1;
(statearr_3261503_3261529[(2)] = inst_3261479);

(statearr_3261503_3261529[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261496 === (6))){
var state_3261495__$1 = state_3261495;
var statearr_3261504_3261530 = state_3261495__$1;
(statearr_3261504_3261530[(2)] = null);

(statearr_3261504_3261530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261496 === (17))){
var inst_3261477 = (state_3261495[(2)]);
var state_3261495__$1 = state_3261495;
var statearr_3261505_3261531 = state_3261495__$1;
(statearr_3261505_3261531[(2)] = inst_3261477);

(statearr_3261505_3261531[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261496 === (3))){
var inst_3261493 = (state_3261495[(2)]);
var state_3261495__$1 = state_3261495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3261495__$1,inst_3261493);
} else {
if((state_val_3261496 === (12))){
var inst_3261454 = (state_3261495[(9)]);
var inst_3261468 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_3261454,opts);
var state_3261495__$1 = state_3261495;
if(cljs.core.truth_(inst_3261468)){
var statearr_3261506_3261532 = state_3261495__$1;
(statearr_3261506_3261532[(1)] = (15));

} else {
var statearr_3261507_3261533 = state_3261495__$1;
(statearr_3261507_3261533[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261496 === (2))){
var state_3261495__$1 = state_3261495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3261495__$1,(4),ch);
} else {
if((state_val_3261496 === (11))){
var inst_3261455 = (state_3261495[(8)]);
var inst_3261460 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_3261461 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_3261455);
var inst_3261462 = cljs.core.async.timeout.call(null,(1000));
var inst_3261463 = [inst_3261461,inst_3261462];
var inst_3261464 = (new cljs.core.PersistentVector(null,2,(5),inst_3261460,inst_3261463,null));
var state_3261495__$1 = state_3261495;
return cljs.core.async.ioc_alts_BANG_.call(null,state_3261495__$1,(14),inst_3261464);
} else {
if((state_val_3261496 === (9))){
var inst_3261455 = (state_3261495[(8)]);
var inst_3261481 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_3261482 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_3261455);
var inst_3261483 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_3261482);
var inst_3261484 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_3261483)].join('');
var inst_3261485 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_3261484);
var state_3261495__$1 = (function (){var statearr_3261508 = state_3261495;
(statearr_3261508[(10)] = inst_3261481);

return statearr_3261508;
})();
var statearr_3261509_3261534 = state_3261495__$1;
(statearr_3261509_3261534[(2)] = inst_3261485);

(statearr_3261509_3261534[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261496 === (5))){
var inst_3261448 = (state_3261495[(7)]);
var inst_3261450 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_3261451 = (new cljs.core.PersistentArrayMap(null,2,inst_3261450,null));
var inst_3261452 = (new cljs.core.PersistentHashSet(null,inst_3261451,null));
var inst_3261453 = figwheel.client.focus_msgs.call(null,inst_3261452,inst_3261448);
var inst_3261454 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_3261453);
var inst_3261455 = cljs.core.first.call(null,inst_3261453);
var inst_3261456 = figwheel.client.autoload_QMARK_.call(null);
var state_3261495__$1 = (function (){var statearr_3261510 = state_3261495;
(statearr_3261510[(8)] = inst_3261455);

(statearr_3261510[(9)] = inst_3261454);

return statearr_3261510;
})();
if(cljs.core.truth_(inst_3261456)){
var statearr_3261511_3261535 = state_3261495__$1;
(statearr_3261511_3261535[(1)] = (8));

} else {
var statearr_3261512_3261536 = state_3261495__$1;
(statearr_3261512_3261536[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261496 === (14))){
var inst_3261466 = (state_3261495[(2)]);
var state_3261495__$1 = state_3261495;
var statearr_3261513_3261537 = state_3261495__$1;
(statearr_3261513_3261537[(2)] = inst_3261466);

(statearr_3261513_3261537[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261496 === (16))){
var state_3261495__$1 = state_3261495;
var statearr_3261514_3261538 = state_3261495__$1;
(statearr_3261514_3261538[(2)] = null);

(statearr_3261514_3261538[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261496 === (10))){
var inst_3261487 = (state_3261495[(2)]);
var state_3261495__$1 = (function (){var statearr_3261515 = state_3261495;
(statearr_3261515[(11)] = inst_3261487);

return statearr_3261515;
})();
var statearr_3261516_3261539 = state_3261495__$1;
(statearr_3261516_3261539[(2)] = null);

(statearr_3261516_3261539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261496 === (8))){
var inst_3261454 = (state_3261495[(9)]);
var inst_3261458 = figwheel.client.reload_file_state_QMARK_.call(null,inst_3261454,opts);
var state_3261495__$1 = state_3261495;
if(cljs.core.truth_(inst_3261458)){
var statearr_3261517_3261540 = state_3261495__$1;
(statearr_3261517_3261540[(1)] = (11));

} else {
var statearr_3261518_3261541 = state_3261495__$1;
(statearr_3261518_3261541[(1)] = (12));

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
});})(c__53126__auto___3261523,ch))
;
return ((function (switch__53103__auto__,c__53126__auto___3261523,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__53104__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__53104__auto____0 = (function (){
var statearr_3261519 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3261519[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__53104__auto__);

(statearr_3261519[(1)] = (1));

return statearr_3261519;
});
var figwheel$client$file_reloader_plugin_$_state_machine__53104__auto____1 = (function (state_3261495){
while(true){
var ret_value__53105__auto__ = (function (){try{while(true){
var result__53106__auto__ = switch__53103__auto__.call(null,state_3261495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53106__auto__;
}
break;
}
}catch (e3261520){if((e3261520 instanceof Object)){
var ex__53107__auto__ = e3261520;
var statearr_3261521_3261542 = state_3261495;
(statearr_3261521_3261542[(5)] = ex__53107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3261495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3261520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3261543 = state_3261495;
state_3261495 = G__3261543;
continue;
} else {
return ret_value__53105__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__53104__auto__ = function(state_3261495){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__53104__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__53104__auto____1.call(this,state_3261495);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__53104__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__53104__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__53104__auto__;
})()
;})(switch__53103__auto__,c__53126__auto___3261523,ch))
})();
var state__53128__auto__ = (function (){var statearr_3261522 = f__53127__auto__.call(null);
(statearr_3261522[(6)] = c__53126__auto___3261523);

return statearr_3261522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53128__auto__);
});})(c__53126__auto___3261523,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__3261544_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__3261544_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_3261546 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_3261546){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e3261545){if((e3261545 instanceof Error)){
var e = e3261545;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_3261546], null));
} else {
var e = e3261545;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_3261546))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__3261547){
var map__3261548 = p__3261547;
var map__3261548__$1 = ((((!((map__3261548 == null)))?((((map__3261548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3261548.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3261548):map__3261548);
var opts = map__3261548__$1;
var build_id = cljs.core.get.call(null,map__3261548__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__3261548,map__3261548__$1,opts,build_id){
return (function (p__3261550){
var vec__3261551 = p__3261550;
var seq__3261552 = cljs.core.seq.call(null,vec__3261551);
var first__3261553 = cljs.core.first.call(null,seq__3261552);
var seq__3261552__$1 = cljs.core.next.call(null,seq__3261552);
var map__3261554 = first__3261553;
var map__3261554__$1 = ((((!((map__3261554 == null)))?((((map__3261554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3261554.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3261554):map__3261554);
var msg = map__3261554__$1;
var msg_name = cljs.core.get.call(null,map__3261554__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__3261552__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__3261551,seq__3261552,first__3261553,seq__3261552__$1,map__3261554,map__3261554__$1,msg,msg_name,_,map__3261548,map__3261548__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__3261551,seq__3261552,first__3261553,seq__3261552__$1,map__3261554,map__3261554__$1,msg,msg_name,_,map__3261548,map__3261548__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__3261548,map__3261548__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__3261556){
var vec__3261557 = p__3261556;
var seq__3261558 = cljs.core.seq.call(null,vec__3261557);
var first__3261559 = cljs.core.first.call(null,seq__3261558);
var seq__3261558__$1 = cljs.core.next.call(null,seq__3261558);
var map__3261560 = first__3261559;
var map__3261560__$1 = ((((!((map__3261560 == null)))?((((map__3261560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3261560.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3261560):map__3261560);
var msg = map__3261560__$1;
var msg_name = cljs.core.get.call(null,map__3261560__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__3261558__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__3261562){
var map__3261563 = p__3261562;
var map__3261563__$1 = ((((!((map__3261563 == null)))?((((map__3261563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3261563.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3261563):map__3261563);
var on_compile_warning = cljs.core.get.call(null,map__3261563__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__3261563__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__3261563,map__3261563__$1,on_compile_warning,on_compile_fail){
return (function (p__3261565){
var vec__3261566 = p__3261565;
var seq__3261567 = cljs.core.seq.call(null,vec__3261566);
var first__3261568 = cljs.core.first.call(null,seq__3261567);
var seq__3261567__$1 = cljs.core.next.call(null,seq__3261567);
var map__3261569 = first__3261568;
var map__3261569__$1 = ((((!((map__3261569 == null)))?((((map__3261569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3261569.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3261569):map__3261569);
var msg = map__3261569__$1;
var msg_name = cljs.core.get.call(null,map__3261569__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__3261567__$1;
var pred__3261571 = cljs.core._EQ_;
var expr__3261572 = msg_name;
if(cljs.core.truth_(pred__3261571.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__3261572))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__3261571.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__3261572))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__3261563,map__3261563__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__53126__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53126__auto__,msg_hist,msg_names,msg){
return (function (){
var f__53127__auto__ = (function (){var switch__53103__auto__ = ((function (c__53126__auto__,msg_hist,msg_names,msg){
return (function (state_3261661){
var state_val_3261662 = (state_3261661[(1)]);
if((state_val_3261662 === (7))){
var inst_3261581 = (state_3261661[(2)]);
var state_3261661__$1 = state_3261661;
if(cljs.core.truth_(inst_3261581)){
var statearr_3261663_3261710 = state_3261661__$1;
(statearr_3261663_3261710[(1)] = (8));

} else {
var statearr_3261664_3261711 = state_3261661__$1;
(statearr_3261664_3261711[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261662 === (20))){
var inst_3261655 = (state_3261661[(2)]);
var state_3261661__$1 = state_3261661;
var statearr_3261665_3261712 = state_3261661__$1;
(statearr_3261665_3261712[(2)] = inst_3261655);

(statearr_3261665_3261712[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261662 === (27))){
var inst_3261651 = (state_3261661[(2)]);
var state_3261661__$1 = state_3261661;
var statearr_3261666_3261713 = state_3261661__$1;
(statearr_3261666_3261713[(2)] = inst_3261651);

(statearr_3261666_3261713[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261662 === (1))){
var inst_3261574 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_3261661__$1 = state_3261661;
if(cljs.core.truth_(inst_3261574)){
var statearr_3261667_3261714 = state_3261661__$1;
(statearr_3261667_3261714[(1)] = (2));

} else {
var statearr_3261668_3261715 = state_3261661__$1;
(statearr_3261668_3261715[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261662 === (24))){
var inst_3261653 = (state_3261661[(2)]);
var state_3261661__$1 = state_3261661;
var statearr_3261669_3261716 = state_3261661__$1;
(statearr_3261669_3261716[(2)] = inst_3261653);

(statearr_3261669_3261716[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261662 === (4))){
var inst_3261659 = (state_3261661[(2)]);
var state_3261661__$1 = state_3261661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3261661__$1,inst_3261659);
} else {
if((state_val_3261662 === (15))){
var inst_3261657 = (state_3261661[(2)]);
var state_3261661__$1 = state_3261661;
var statearr_3261670_3261717 = state_3261661__$1;
(statearr_3261670_3261717[(2)] = inst_3261657);

(statearr_3261670_3261717[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261662 === (21))){
var inst_3261610 = (state_3261661[(2)]);
var inst_3261611 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_3261612 = figwheel.client.auto_jump_to_error.call(null,opts,inst_3261611);
var state_3261661__$1 = (function (){var statearr_3261671 = state_3261661;
(statearr_3261671[(7)] = inst_3261610);

return statearr_3261671;
})();
var statearr_3261672_3261718 = state_3261661__$1;
(statearr_3261672_3261718[(2)] = inst_3261612);

(statearr_3261672_3261718[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261662 === (31))){
var inst_3261640 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_3261661__$1 = state_3261661;
if(cljs.core.truth_(inst_3261640)){
var statearr_3261673_3261719 = state_3261661__$1;
(statearr_3261673_3261719[(1)] = (34));

} else {
var statearr_3261674_3261720 = state_3261661__$1;
(statearr_3261674_3261720[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261662 === (32))){
var inst_3261649 = (state_3261661[(2)]);
var state_3261661__$1 = state_3261661;
var statearr_3261675_3261721 = state_3261661__$1;
(statearr_3261675_3261721[(2)] = inst_3261649);

(statearr_3261675_3261721[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261662 === (33))){
var inst_3261636 = (state_3261661[(2)]);
var inst_3261637 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_3261638 = figwheel.client.auto_jump_to_error.call(null,opts,inst_3261637);
var state_3261661__$1 = (function (){var statearr_3261676 = state_3261661;
(statearr_3261676[(8)] = inst_3261636);

return statearr_3261676;
})();
var statearr_3261677_3261722 = state_3261661__$1;
(statearr_3261677_3261722[(2)] = inst_3261638);

(statearr_3261677_3261722[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261662 === (13))){
var inst_3261595 = figwheel.client.heads_up.clear.call(null);
var state_3261661__$1 = state_3261661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3261661__$1,(16),inst_3261595);
} else {
if((state_val_3261662 === (22))){
var inst_3261616 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_3261617 = figwheel.client.heads_up.append_warning_message.call(null,inst_3261616);
var state_3261661__$1 = state_3261661;
var statearr_3261678_3261723 = state_3261661__$1;
(statearr_3261678_3261723[(2)] = inst_3261617);

(statearr_3261678_3261723[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261662 === (36))){
var inst_3261647 = (state_3261661[(2)]);
var state_3261661__$1 = state_3261661;
var statearr_3261679_3261724 = state_3261661__$1;
(statearr_3261679_3261724[(2)] = inst_3261647);

(statearr_3261679_3261724[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261662 === (29))){
var inst_3261627 = (state_3261661[(2)]);
var inst_3261628 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_3261629 = figwheel.client.auto_jump_to_error.call(null,opts,inst_3261628);
var state_3261661__$1 = (function (){var statearr_3261680 = state_3261661;
(statearr_3261680[(9)] = inst_3261627);

return statearr_3261680;
})();
var statearr_3261681_3261725 = state_3261661__$1;
(statearr_3261681_3261725[(2)] = inst_3261629);

(statearr_3261681_3261725[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261662 === (6))){
var inst_3261576 = (state_3261661[(10)]);
var state_3261661__$1 = state_3261661;
var statearr_3261682_3261726 = state_3261661__$1;
(statearr_3261682_3261726[(2)] = inst_3261576);

(statearr_3261682_3261726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261662 === (28))){
var inst_3261623 = (state_3261661[(2)]);
var inst_3261624 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_3261625 = figwheel.client.heads_up.display_warning.call(null,inst_3261624);
var state_3261661__$1 = (function (){var statearr_3261683 = state_3261661;
(statearr_3261683[(11)] = inst_3261623);

return statearr_3261683;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3261661__$1,(29),inst_3261625);
} else {
if((state_val_3261662 === (25))){
var inst_3261621 = figwheel.client.heads_up.clear.call(null);
var state_3261661__$1 = state_3261661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3261661__$1,(28),inst_3261621);
} else {
if((state_val_3261662 === (34))){
var inst_3261642 = figwheel.client.heads_up.flash_loaded.call(null);
var state_3261661__$1 = state_3261661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3261661__$1,(37),inst_3261642);
} else {
if((state_val_3261662 === (17))){
var inst_3261601 = (state_3261661[(2)]);
var inst_3261602 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_3261603 = figwheel.client.auto_jump_to_error.call(null,opts,inst_3261602);
var state_3261661__$1 = (function (){var statearr_3261684 = state_3261661;
(statearr_3261684[(12)] = inst_3261601);

return statearr_3261684;
})();
var statearr_3261685_3261727 = state_3261661__$1;
(statearr_3261685_3261727[(2)] = inst_3261603);

(statearr_3261685_3261727[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261662 === (3))){
var inst_3261593 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_3261661__$1 = state_3261661;
if(cljs.core.truth_(inst_3261593)){
var statearr_3261686_3261728 = state_3261661__$1;
(statearr_3261686_3261728[(1)] = (13));

} else {
var statearr_3261687_3261729 = state_3261661__$1;
(statearr_3261687_3261729[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261662 === (12))){
var inst_3261589 = (state_3261661[(2)]);
var state_3261661__$1 = state_3261661;
var statearr_3261688_3261730 = state_3261661__$1;
(statearr_3261688_3261730[(2)] = inst_3261589);

(statearr_3261688_3261730[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261662 === (2))){
var inst_3261576 = (state_3261661[(10)]);
var inst_3261576__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_3261661__$1 = (function (){var statearr_3261689 = state_3261661;
(statearr_3261689[(10)] = inst_3261576__$1);

return statearr_3261689;
})();
if(cljs.core.truth_(inst_3261576__$1)){
var statearr_3261690_3261731 = state_3261661__$1;
(statearr_3261690_3261731[(1)] = (5));

} else {
var statearr_3261691_3261732 = state_3261661__$1;
(statearr_3261691_3261732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261662 === (23))){
var inst_3261619 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_3261661__$1 = state_3261661;
if(cljs.core.truth_(inst_3261619)){
var statearr_3261692_3261733 = state_3261661__$1;
(statearr_3261692_3261733[(1)] = (25));

} else {
var statearr_3261693_3261734 = state_3261661__$1;
(statearr_3261693_3261734[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261662 === (35))){
var state_3261661__$1 = state_3261661;
var statearr_3261694_3261735 = state_3261661__$1;
(statearr_3261694_3261735[(2)] = null);

(statearr_3261694_3261735[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261662 === (19))){
var inst_3261614 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_3261661__$1 = state_3261661;
if(cljs.core.truth_(inst_3261614)){
var statearr_3261695_3261736 = state_3261661__$1;
(statearr_3261695_3261736[(1)] = (22));

} else {
var statearr_3261696_3261737 = state_3261661__$1;
(statearr_3261696_3261737[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261662 === (11))){
var inst_3261585 = (state_3261661[(2)]);
var state_3261661__$1 = state_3261661;
var statearr_3261697_3261738 = state_3261661__$1;
(statearr_3261697_3261738[(2)] = inst_3261585);

(statearr_3261697_3261738[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261662 === (9))){
var inst_3261587 = figwheel.client.heads_up.clear.call(null);
var state_3261661__$1 = state_3261661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3261661__$1,(12),inst_3261587);
} else {
if((state_val_3261662 === (5))){
var inst_3261578 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_3261661__$1 = state_3261661;
var statearr_3261698_3261739 = state_3261661__$1;
(statearr_3261698_3261739[(2)] = inst_3261578);

(statearr_3261698_3261739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261662 === (14))){
var inst_3261605 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_3261661__$1 = state_3261661;
if(cljs.core.truth_(inst_3261605)){
var statearr_3261699_3261740 = state_3261661__$1;
(statearr_3261699_3261740[(1)] = (18));

} else {
var statearr_3261700_3261741 = state_3261661__$1;
(statearr_3261700_3261741[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261662 === (26))){
var inst_3261631 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_3261661__$1 = state_3261661;
if(cljs.core.truth_(inst_3261631)){
var statearr_3261701_3261742 = state_3261661__$1;
(statearr_3261701_3261742[(1)] = (30));

} else {
var statearr_3261702_3261743 = state_3261661__$1;
(statearr_3261702_3261743[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261662 === (16))){
var inst_3261597 = (state_3261661[(2)]);
var inst_3261598 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_3261599 = figwheel.client.heads_up.display_exception.call(null,inst_3261598);
var state_3261661__$1 = (function (){var statearr_3261703 = state_3261661;
(statearr_3261703[(13)] = inst_3261597);

return statearr_3261703;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3261661__$1,(17),inst_3261599);
} else {
if((state_val_3261662 === (30))){
var inst_3261633 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_3261634 = figwheel.client.heads_up.display_warning.call(null,inst_3261633);
var state_3261661__$1 = state_3261661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3261661__$1,(33),inst_3261634);
} else {
if((state_val_3261662 === (10))){
var inst_3261591 = (state_3261661[(2)]);
var state_3261661__$1 = state_3261661;
var statearr_3261704_3261744 = state_3261661__$1;
(statearr_3261704_3261744[(2)] = inst_3261591);

(statearr_3261704_3261744[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261662 === (18))){
var inst_3261607 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_3261608 = figwheel.client.heads_up.display_exception.call(null,inst_3261607);
var state_3261661__$1 = state_3261661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3261661__$1,(21),inst_3261608);
} else {
if((state_val_3261662 === (37))){
var inst_3261644 = (state_3261661[(2)]);
var state_3261661__$1 = state_3261661;
var statearr_3261705_3261745 = state_3261661__$1;
(statearr_3261705_3261745[(2)] = inst_3261644);

(statearr_3261705_3261745[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261662 === (8))){
var inst_3261583 = figwheel.client.heads_up.flash_loaded.call(null);
var state_3261661__$1 = state_3261661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3261661__$1,(11),inst_3261583);
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
});})(c__53126__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__53103__auto__,c__53126__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__53104__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__53104__auto____0 = (function (){
var statearr_3261706 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3261706[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__53104__auto__);

(statearr_3261706[(1)] = (1));

return statearr_3261706;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__53104__auto____1 = (function (state_3261661){
while(true){
var ret_value__53105__auto__ = (function (){try{while(true){
var result__53106__auto__ = switch__53103__auto__.call(null,state_3261661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53106__auto__;
}
break;
}
}catch (e3261707){if((e3261707 instanceof Object)){
var ex__53107__auto__ = e3261707;
var statearr_3261708_3261746 = state_3261661;
(statearr_3261708_3261746[(5)] = ex__53107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3261661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3261707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3261747 = state_3261661;
state_3261661 = G__3261747;
continue;
} else {
return ret_value__53105__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__53104__auto__ = function(state_3261661){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__53104__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__53104__auto____1.call(this,state_3261661);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__53104__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__53104__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__53104__auto__;
})()
;})(switch__53103__auto__,c__53126__auto__,msg_hist,msg_names,msg))
})();
var state__53128__auto__ = (function (){var statearr_3261709 = f__53127__auto__.call(null);
(statearr_3261709[(6)] = c__53126__auto__);

return statearr_3261709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53128__auto__);
});})(c__53126__auto__,msg_hist,msg_names,msg))
);

return c__53126__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__53126__auto___3261776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53126__auto___3261776,ch){
return (function (){
var f__53127__auto__ = (function (){var switch__53103__auto__ = ((function (c__53126__auto___3261776,ch){
return (function (state_3261762){
var state_val_3261763 = (state_3261762[(1)]);
if((state_val_3261763 === (1))){
var state_3261762__$1 = state_3261762;
var statearr_3261764_3261777 = state_3261762__$1;
(statearr_3261764_3261777[(2)] = null);

(statearr_3261764_3261777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261763 === (2))){
var state_3261762__$1 = state_3261762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3261762__$1,(4),ch);
} else {
if((state_val_3261763 === (3))){
var inst_3261760 = (state_3261762[(2)]);
var state_3261762__$1 = state_3261762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3261762__$1,inst_3261760);
} else {
if((state_val_3261763 === (4))){
var inst_3261750 = (state_3261762[(7)]);
var inst_3261750__$1 = (state_3261762[(2)]);
var state_3261762__$1 = (function (){var statearr_3261765 = state_3261762;
(statearr_3261765[(7)] = inst_3261750__$1);

return statearr_3261765;
})();
if(cljs.core.truth_(inst_3261750__$1)){
var statearr_3261766_3261778 = state_3261762__$1;
(statearr_3261766_3261778[(1)] = (5));

} else {
var statearr_3261767_3261779 = state_3261762__$1;
(statearr_3261767_3261779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261763 === (5))){
var inst_3261750 = (state_3261762[(7)]);
var inst_3261752 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_3261750);
var state_3261762__$1 = state_3261762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3261762__$1,(8),inst_3261752);
} else {
if((state_val_3261763 === (6))){
var state_3261762__$1 = state_3261762;
var statearr_3261768_3261780 = state_3261762__$1;
(statearr_3261768_3261780[(2)] = null);

(statearr_3261768_3261780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261763 === (7))){
var inst_3261758 = (state_3261762[(2)]);
var state_3261762__$1 = state_3261762;
var statearr_3261769_3261781 = state_3261762__$1;
(statearr_3261769_3261781[(2)] = inst_3261758);

(statearr_3261769_3261781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3261763 === (8))){
var inst_3261754 = (state_3261762[(2)]);
var state_3261762__$1 = (function (){var statearr_3261770 = state_3261762;
(statearr_3261770[(8)] = inst_3261754);

return statearr_3261770;
})();
var statearr_3261771_3261782 = state_3261762__$1;
(statearr_3261771_3261782[(2)] = null);

(statearr_3261771_3261782[(1)] = (2));


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
});})(c__53126__auto___3261776,ch))
;
return ((function (switch__53103__auto__,c__53126__auto___3261776,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__53104__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__53104__auto____0 = (function (){
var statearr_3261772 = [null,null,null,null,null,null,null,null,null];
(statearr_3261772[(0)] = figwheel$client$heads_up_plugin_$_state_machine__53104__auto__);

(statearr_3261772[(1)] = (1));

return statearr_3261772;
});
var figwheel$client$heads_up_plugin_$_state_machine__53104__auto____1 = (function (state_3261762){
while(true){
var ret_value__53105__auto__ = (function (){try{while(true){
var result__53106__auto__ = switch__53103__auto__.call(null,state_3261762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53106__auto__;
}
break;
}
}catch (e3261773){if((e3261773 instanceof Object)){
var ex__53107__auto__ = e3261773;
var statearr_3261774_3261783 = state_3261762;
(statearr_3261774_3261783[(5)] = ex__53107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3261762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3261773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3261784 = state_3261762;
state_3261762 = G__3261784;
continue;
} else {
return ret_value__53105__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__53104__auto__ = function(state_3261762){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__53104__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__53104__auto____1.call(this,state_3261762);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__53104__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__53104__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__53104__auto__;
})()
;})(switch__53103__auto__,c__53126__auto___3261776,ch))
})();
var state__53128__auto__ = (function (){var statearr_3261775 = f__53127__auto__.call(null);
(statearr_3261775[(6)] = c__53126__auto___3261776);

return statearr_3261775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53128__auto__);
});})(c__53126__auto___3261776,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__53126__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53126__auto__){
return (function (){
var f__53127__auto__ = (function (){var switch__53103__auto__ = ((function (c__53126__auto__){
return (function (state_3261790){
var state_val_3261791 = (state_3261790[(1)]);
if((state_val_3261791 === (1))){
var inst_3261785 = cljs.core.async.timeout.call(null,(3000));
var state_3261790__$1 = state_3261790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3261790__$1,(2),inst_3261785);
} else {
if((state_val_3261791 === (2))){
var inst_3261787 = (state_3261790[(2)]);
var inst_3261788 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_3261790__$1 = (function (){var statearr_3261792 = state_3261790;
(statearr_3261792[(7)] = inst_3261787);

return statearr_3261792;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3261790__$1,inst_3261788);
} else {
return null;
}
}
});})(c__53126__auto__))
;
return ((function (switch__53103__auto__,c__53126__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__53104__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__53104__auto____0 = (function (){
var statearr_3261793 = [null,null,null,null,null,null,null,null];
(statearr_3261793[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__53104__auto__);

(statearr_3261793[(1)] = (1));

return statearr_3261793;
});
var figwheel$client$enforce_project_plugin_$_state_machine__53104__auto____1 = (function (state_3261790){
while(true){
var ret_value__53105__auto__ = (function (){try{while(true){
var result__53106__auto__ = switch__53103__auto__.call(null,state_3261790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53106__auto__;
}
break;
}
}catch (e3261794){if((e3261794 instanceof Object)){
var ex__53107__auto__ = e3261794;
var statearr_3261795_3261797 = state_3261790;
(statearr_3261795_3261797[(5)] = ex__53107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3261790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3261794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3261798 = state_3261790;
state_3261790 = G__3261798;
continue;
} else {
return ret_value__53105__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__53104__auto__ = function(state_3261790){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__53104__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__53104__auto____1.call(this,state_3261790);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__53104__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__53104__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__53104__auto__;
})()
;})(switch__53103__auto__,c__53126__auto__))
})();
var state__53128__auto__ = (function (){var statearr_3261796 = f__53127__auto__.call(null);
(statearr_3261796[(6)] = c__53126__auto__);

return statearr_3261796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53128__auto__);
});})(c__53126__auto__))
);

return c__53126__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5278__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5278__auto__)){
var figwheel_version = temp__5278__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__53126__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53126__auto__,figwheel_version,temp__5278__auto__){
return (function (){
var f__53127__auto__ = (function (){var switch__53103__auto__ = ((function (c__53126__auto__,figwheel_version,temp__5278__auto__){
return (function (state_3261805){
var state_val_3261806 = (state_3261805[(1)]);
if((state_val_3261806 === (1))){
var inst_3261799 = cljs.core.async.timeout.call(null,(2000));
var state_3261805__$1 = state_3261805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3261805__$1,(2),inst_3261799);
} else {
if((state_val_3261806 === (2))){
var inst_3261801 = (state_3261805[(2)]);
var inst_3261802 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_3261803 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_3261802);
var state_3261805__$1 = (function (){var statearr_3261807 = state_3261805;
(statearr_3261807[(7)] = inst_3261801);

return statearr_3261807;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3261805__$1,inst_3261803);
} else {
return null;
}
}
});})(c__53126__auto__,figwheel_version,temp__5278__auto__))
;
return ((function (switch__53103__auto__,c__53126__auto__,figwheel_version,temp__5278__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__53104__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__53104__auto____0 = (function (){
var statearr_3261808 = [null,null,null,null,null,null,null,null];
(statearr_3261808[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__53104__auto__);

(statearr_3261808[(1)] = (1));

return statearr_3261808;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__53104__auto____1 = (function (state_3261805){
while(true){
var ret_value__53105__auto__ = (function (){try{while(true){
var result__53106__auto__ = switch__53103__auto__.call(null,state_3261805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53106__auto__;
}
break;
}
}catch (e3261809){if((e3261809 instanceof Object)){
var ex__53107__auto__ = e3261809;
var statearr_3261810_3261812 = state_3261805;
(statearr_3261810_3261812[(5)] = ex__53107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3261805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3261809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3261813 = state_3261805;
state_3261805 = G__3261813;
continue;
} else {
return ret_value__53105__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__53104__auto__ = function(state_3261805){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__53104__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__53104__auto____1.call(this,state_3261805);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__53104__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__53104__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__53104__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__53104__auto__;
})()
;})(switch__53103__auto__,c__53126__auto__,figwheel_version,temp__5278__auto__))
})();
var state__53128__auto__ = (function (){var statearr_3261811 = f__53127__auto__.call(null);
(statearr_3261811[(6)] = c__53126__auto__);

return statearr_3261811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53128__auto__);
});})(c__53126__auto__,figwheel_version,temp__5278__auto__))
);

return c__53126__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__3261814){
var map__3261815 = p__3261814;
var map__3261815__$1 = ((((!((map__3261815 == null)))?((((map__3261815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3261815.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3261815):map__3261815);
var file = cljs.core.get.call(null,map__3261815__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__3261815__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__3261815__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__3261817 = "";
var G__3261817__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3261817),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__3261817);
var G__3261817__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3261817__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__3261817__$1);
if(cljs.core.truth_((function (){var and__49509__auto__ = line;
if(cljs.core.truth_(and__49509__auto__)){
return column;
} else {
return and__49509__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3261817__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__3261817__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__3261818){
var map__3261819 = p__3261818;
var map__3261819__$1 = ((((!((map__3261819 == null)))?((((map__3261819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3261819.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3261819):map__3261819);
var ed = map__3261819__$1;
var formatted_exception = cljs.core.get.call(null,map__3261819__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__3261819__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__3261819__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__3261821_3261825 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__3261822_3261826 = null;
var count__3261823_3261827 = (0);
var i__3261824_3261828 = (0);
while(true){
if((i__3261824_3261828 < count__3261823_3261827)){
var msg_3261829 = cljs.core._nth.call(null,chunk__3261822_3261826,i__3261824_3261828);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_3261829);

var G__3261830 = seq__3261821_3261825;
var G__3261831 = chunk__3261822_3261826;
var G__3261832 = count__3261823_3261827;
var G__3261833 = (i__3261824_3261828 + (1));
seq__3261821_3261825 = G__3261830;
chunk__3261822_3261826 = G__3261831;
count__3261823_3261827 = G__3261832;
i__3261824_3261828 = G__3261833;
continue;
} else {
var temp__5278__auto___3261834 = cljs.core.seq.call(null,seq__3261821_3261825);
if(temp__5278__auto___3261834){
var seq__3261821_3261835__$1 = temp__5278__auto___3261834;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3261821_3261835__$1)){
var c__50452__auto___3261836 = cljs.core.chunk_first.call(null,seq__3261821_3261835__$1);
var G__3261837 = cljs.core.chunk_rest.call(null,seq__3261821_3261835__$1);
var G__3261838 = c__50452__auto___3261836;
var G__3261839 = cljs.core.count.call(null,c__50452__auto___3261836);
var G__3261840 = (0);
seq__3261821_3261825 = G__3261837;
chunk__3261822_3261826 = G__3261838;
count__3261823_3261827 = G__3261839;
i__3261824_3261828 = G__3261840;
continue;
} else {
var msg_3261841 = cljs.core.first.call(null,seq__3261821_3261835__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_3261841);

var G__3261842 = cljs.core.next.call(null,seq__3261821_3261835__$1);
var G__3261843 = null;
var G__3261844 = (0);
var G__3261845 = (0);
seq__3261821_3261825 = G__3261842;
chunk__3261822_3261826 = G__3261843;
count__3261823_3261827 = G__3261844;
i__3261824_3261828 = G__3261845;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__3261846){
var map__3261847 = p__3261846;
var map__3261847__$1 = ((((!((map__3261847 == null)))?((((map__3261847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3261847.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3261847):map__3261847);
var w = map__3261847__$1;
var message = cljs.core.get.call(null,map__3261847__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__49509__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__49509__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__49509__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__3261849 = cljs.core.seq.call(null,plugins);
var chunk__3261850 = null;
var count__3261851 = (0);
var i__3261852 = (0);
while(true){
if((i__3261852 < count__3261851)){
var vec__3261853 = cljs.core._nth.call(null,chunk__3261850,i__3261852);
var k = cljs.core.nth.call(null,vec__3261853,(0),null);
var plugin = cljs.core.nth.call(null,vec__3261853,(1),null);
if(cljs.core.truth_(plugin)){
var pl_3261859 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__3261849,chunk__3261850,count__3261851,i__3261852,pl_3261859,vec__3261853,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_3261859.call(null,msg_hist);
});})(seq__3261849,chunk__3261850,count__3261851,i__3261852,pl_3261859,vec__3261853,k,plugin))
);
} else {
}

var G__3261860 = seq__3261849;
var G__3261861 = chunk__3261850;
var G__3261862 = count__3261851;
var G__3261863 = (i__3261852 + (1));
seq__3261849 = G__3261860;
chunk__3261850 = G__3261861;
count__3261851 = G__3261862;
i__3261852 = G__3261863;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__3261849);
if(temp__5278__auto__){
var seq__3261849__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3261849__$1)){
var c__50452__auto__ = cljs.core.chunk_first.call(null,seq__3261849__$1);
var G__3261864 = cljs.core.chunk_rest.call(null,seq__3261849__$1);
var G__3261865 = c__50452__auto__;
var G__3261866 = cljs.core.count.call(null,c__50452__auto__);
var G__3261867 = (0);
seq__3261849 = G__3261864;
chunk__3261850 = G__3261865;
count__3261851 = G__3261866;
i__3261852 = G__3261867;
continue;
} else {
var vec__3261856 = cljs.core.first.call(null,seq__3261849__$1);
var k = cljs.core.nth.call(null,vec__3261856,(0),null);
var plugin = cljs.core.nth.call(null,vec__3261856,(1),null);
if(cljs.core.truth_(plugin)){
var pl_3261868 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__3261849,chunk__3261850,count__3261851,i__3261852,pl_3261868,vec__3261856,k,plugin,seq__3261849__$1,temp__5278__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_3261868.call(null,msg_hist);
});})(seq__3261849,chunk__3261850,count__3261851,i__3261852,pl_3261868,vec__3261856,k,plugin,seq__3261849__$1,temp__5278__auto__))
);
} else {
}

var G__3261869 = cljs.core.next.call(null,seq__3261849__$1);
var G__3261870 = null;
var G__3261871 = (0);
var G__3261872 = (0);
seq__3261849 = G__3261869;
chunk__3261850 = G__3261870;
count__3261851 = G__3261871;
i__3261852 = G__3261872;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__3261874 = arguments.length;
switch (G__3261874) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__3261875_3261880 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__3261876_3261881 = null;
var count__3261877_3261882 = (0);
var i__3261878_3261883 = (0);
while(true){
if((i__3261878_3261883 < count__3261877_3261882)){
var msg_3261884 = cljs.core._nth.call(null,chunk__3261876_3261881,i__3261878_3261883);
figwheel.client.socket.handle_incoming_message.call(null,msg_3261884);

var G__3261885 = seq__3261875_3261880;
var G__3261886 = chunk__3261876_3261881;
var G__3261887 = count__3261877_3261882;
var G__3261888 = (i__3261878_3261883 + (1));
seq__3261875_3261880 = G__3261885;
chunk__3261876_3261881 = G__3261886;
count__3261877_3261882 = G__3261887;
i__3261878_3261883 = G__3261888;
continue;
} else {
var temp__5278__auto___3261889 = cljs.core.seq.call(null,seq__3261875_3261880);
if(temp__5278__auto___3261889){
var seq__3261875_3261890__$1 = temp__5278__auto___3261889;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3261875_3261890__$1)){
var c__50452__auto___3261891 = cljs.core.chunk_first.call(null,seq__3261875_3261890__$1);
var G__3261892 = cljs.core.chunk_rest.call(null,seq__3261875_3261890__$1);
var G__3261893 = c__50452__auto___3261891;
var G__3261894 = cljs.core.count.call(null,c__50452__auto___3261891);
var G__3261895 = (0);
seq__3261875_3261880 = G__3261892;
chunk__3261876_3261881 = G__3261893;
count__3261877_3261882 = G__3261894;
i__3261878_3261883 = G__3261895;
continue;
} else {
var msg_3261896 = cljs.core.first.call(null,seq__3261875_3261890__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_3261896);

var G__3261897 = cljs.core.next.call(null,seq__3261875_3261890__$1);
var G__3261898 = null;
var G__3261899 = (0);
var G__3261900 = (0);
seq__3261875_3261880 = G__3261897;
chunk__3261876_3261881 = G__3261898;
count__3261877_3261882 = G__3261899;
i__3261878_3261883 = G__3261900;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__50805__auto__ = [];
var len__50798__auto___3261905 = arguments.length;
var i__50799__auto___3261906 = (0);
while(true){
if((i__50799__auto___3261906 < len__50798__auto___3261905)){
args__50805__auto__.push((arguments[i__50799__auto___3261906]));

var G__3261907 = (i__50799__auto___3261906 + (1));
i__50799__auto___3261906 = G__3261907;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__3261902){
var map__3261903 = p__3261902;
var map__3261903__$1 = ((((!((map__3261903 == null)))?((((map__3261903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3261903.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3261903):map__3261903);
var opts = map__3261903__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq3261901){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3261901));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e3261908){if((e3261908 instanceof Error)){
var e = e3261908;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e3261908;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__3261909){
var map__3261910 = p__3261909;
var map__3261910__$1 = ((((!((map__3261910 == null)))?((((map__3261910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3261910.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3261910):map__3261910);
var msg_name = cljs.core.get.call(null,map__3261910__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1509468960658
