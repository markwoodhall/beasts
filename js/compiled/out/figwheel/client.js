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
}catch (e60386){if((e60386 instanceof Error)){
var e = e60386;
return "Error: Unable to stringify";
} else {
throw e60386;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__60389 = arguments.length;
switch (G__60389) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__60387_SHARP_){
if(typeof p1__60387_SHARP_ === 'string'){
return p1__60387_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__60387_SHARP_);
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
var len__50798__auto___60392 = arguments.length;
var i__50799__auto___60393 = (0);
while(true){
if((i__50799__auto___60393 < len__50798__auto___60392)){
args__50805__auto__.push((arguments[i__50799__auto___60393]));

var G__60394 = (i__50799__auto___60393 + (1));
i__50799__auto___60393 = G__60394;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq60391){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60391));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__50805__auto__ = [];
var len__50798__auto___60396 = arguments.length;
var i__50799__auto___60397 = (0);
while(true){
if((i__50799__auto___60397 < len__50798__auto___60396)){
args__50805__auto__.push((arguments[i__50799__auto___60397]));

var G__60398 = (i__50799__auto___60397 + (1));
i__50799__auto___60397 = G__60398;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq60395){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60395));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__60399){
var map__60400 = p__60399;
var map__60400__$1 = ((((!((map__60400 == null)))?((((map__60400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60400.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60400):map__60400);
var message = cljs.core.get.call(null,map__60400__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__60400__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__55486__auto___60479 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55486__auto___60479,ch){
return (function (){
var f__55487__auto__ = (function (){var switch__55396__auto__ = ((function (c__55486__auto___60479,ch){
return (function (state_60451){
var state_val_60452 = (state_60451[(1)]);
if((state_val_60452 === (7))){
var inst_60447 = (state_60451[(2)]);
var state_60451__$1 = state_60451;
var statearr_60453_60480 = state_60451__$1;
(statearr_60453_60480[(2)] = inst_60447);

(statearr_60453_60480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60452 === (1))){
var state_60451__$1 = state_60451;
var statearr_60454_60481 = state_60451__$1;
(statearr_60454_60481[(2)] = null);

(statearr_60454_60481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60452 === (4))){
var inst_60404 = (state_60451[(7)]);
var inst_60404__$1 = (state_60451[(2)]);
var state_60451__$1 = (function (){var statearr_60455 = state_60451;
(statearr_60455[(7)] = inst_60404__$1);

return statearr_60455;
})();
if(cljs.core.truth_(inst_60404__$1)){
var statearr_60456_60482 = state_60451__$1;
(statearr_60456_60482[(1)] = (5));

} else {
var statearr_60457_60483 = state_60451__$1;
(statearr_60457_60483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60452 === (15))){
var inst_60411 = (state_60451[(8)]);
var inst_60426 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_60411);
var inst_60427 = cljs.core.first.call(null,inst_60426);
var inst_60428 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_60427);
var inst_60429 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_60428)].join('');
var inst_60430 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_60429);
var state_60451__$1 = state_60451;
var statearr_60458_60484 = state_60451__$1;
(statearr_60458_60484[(2)] = inst_60430);

(statearr_60458_60484[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60452 === (13))){
var inst_60435 = (state_60451[(2)]);
var state_60451__$1 = state_60451;
var statearr_60459_60485 = state_60451__$1;
(statearr_60459_60485[(2)] = inst_60435);

(statearr_60459_60485[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60452 === (6))){
var state_60451__$1 = state_60451;
var statearr_60460_60486 = state_60451__$1;
(statearr_60460_60486[(2)] = null);

(statearr_60460_60486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60452 === (17))){
var inst_60433 = (state_60451[(2)]);
var state_60451__$1 = state_60451;
var statearr_60461_60487 = state_60451__$1;
(statearr_60461_60487[(2)] = inst_60433);

(statearr_60461_60487[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60452 === (3))){
var inst_60449 = (state_60451[(2)]);
var state_60451__$1 = state_60451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60451__$1,inst_60449);
} else {
if((state_val_60452 === (12))){
var inst_60410 = (state_60451[(9)]);
var inst_60424 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_60410,opts);
var state_60451__$1 = state_60451;
if(cljs.core.truth_(inst_60424)){
var statearr_60462_60488 = state_60451__$1;
(statearr_60462_60488[(1)] = (15));

} else {
var statearr_60463_60489 = state_60451__$1;
(statearr_60463_60489[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60452 === (2))){
var state_60451__$1 = state_60451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60451__$1,(4),ch);
} else {
if((state_val_60452 === (11))){
var inst_60411 = (state_60451[(8)]);
var inst_60416 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_60417 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_60411);
var inst_60418 = cljs.core.async.timeout.call(null,(1000));
var inst_60419 = [inst_60417,inst_60418];
var inst_60420 = (new cljs.core.PersistentVector(null,2,(5),inst_60416,inst_60419,null));
var state_60451__$1 = state_60451;
return cljs.core.async.ioc_alts_BANG_.call(null,state_60451__$1,(14),inst_60420);
} else {
if((state_val_60452 === (9))){
var inst_60411 = (state_60451[(8)]);
var inst_60437 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_60438 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_60411);
var inst_60439 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_60438);
var inst_60440 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_60439)].join('');
var inst_60441 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_60440);
var state_60451__$1 = (function (){var statearr_60464 = state_60451;
(statearr_60464[(10)] = inst_60437);

return statearr_60464;
})();
var statearr_60465_60490 = state_60451__$1;
(statearr_60465_60490[(2)] = inst_60441);

(statearr_60465_60490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60452 === (5))){
var inst_60404 = (state_60451[(7)]);
var inst_60406 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_60407 = (new cljs.core.PersistentArrayMap(null,2,inst_60406,null));
var inst_60408 = (new cljs.core.PersistentHashSet(null,inst_60407,null));
var inst_60409 = figwheel.client.focus_msgs.call(null,inst_60408,inst_60404);
var inst_60410 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_60409);
var inst_60411 = cljs.core.first.call(null,inst_60409);
var inst_60412 = figwheel.client.autoload_QMARK_.call(null);
var state_60451__$1 = (function (){var statearr_60466 = state_60451;
(statearr_60466[(8)] = inst_60411);

(statearr_60466[(9)] = inst_60410);

return statearr_60466;
})();
if(cljs.core.truth_(inst_60412)){
var statearr_60467_60491 = state_60451__$1;
(statearr_60467_60491[(1)] = (8));

} else {
var statearr_60468_60492 = state_60451__$1;
(statearr_60468_60492[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60452 === (14))){
var inst_60422 = (state_60451[(2)]);
var state_60451__$1 = state_60451;
var statearr_60469_60493 = state_60451__$1;
(statearr_60469_60493[(2)] = inst_60422);

(statearr_60469_60493[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60452 === (16))){
var state_60451__$1 = state_60451;
var statearr_60470_60494 = state_60451__$1;
(statearr_60470_60494[(2)] = null);

(statearr_60470_60494[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60452 === (10))){
var inst_60443 = (state_60451[(2)]);
var state_60451__$1 = (function (){var statearr_60471 = state_60451;
(statearr_60471[(11)] = inst_60443);

return statearr_60471;
})();
var statearr_60472_60495 = state_60451__$1;
(statearr_60472_60495[(2)] = null);

(statearr_60472_60495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60452 === (8))){
var inst_60410 = (state_60451[(9)]);
var inst_60414 = figwheel.client.reload_file_state_QMARK_.call(null,inst_60410,opts);
var state_60451__$1 = state_60451;
if(cljs.core.truth_(inst_60414)){
var statearr_60473_60496 = state_60451__$1;
(statearr_60473_60496[(1)] = (11));

} else {
var statearr_60474_60497 = state_60451__$1;
(statearr_60474_60497[(1)] = (12));

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
});})(c__55486__auto___60479,ch))
;
return ((function (switch__55396__auto__,c__55486__auto___60479,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__55397__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__55397__auto____0 = (function (){
var statearr_60475 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60475[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__55397__auto__);

(statearr_60475[(1)] = (1));

return statearr_60475;
});
var figwheel$client$file_reloader_plugin_$_state_machine__55397__auto____1 = (function (state_60451){
while(true){
var ret_value__55398__auto__ = (function (){try{while(true){
var result__55399__auto__ = switch__55396__auto__.call(null,state_60451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__55399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55399__auto__;
}
break;
}
}catch (e60476){if((e60476 instanceof Object)){
var ex__55400__auto__ = e60476;
var statearr_60477_60498 = state_60451;
(statearr_60477_60498[(5)] = ex__55400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__55398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60499 = state_60451;
state_60451 = G__60499;
continue;
} else {
return ret_value__55398__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__55397__auto__ = function(state_60451){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__55397__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__55397__auto____1.call(this,state_60451);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__55397__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__55397__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__55397__auto__;
})()
;})(switch__55396__auto__,c__55486__auto___60479,ch))
})();
var state__55488__auto__ = (function (){var statearr_60478 = f__55487__auto__.call(null);
(statearr_60478[(6)] = c__55486__auto___60479);

return statearr_60478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55488__auto__);
});})(c__55486__auto___60479,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__60500_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__60500_SHARP_));
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
var base_path_60502 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_60502){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e60501){if((e60501 instanceof Error)){
var e = e60501;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_60502], null));
} else {
var e = e60501;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_60502))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__60503){
var map__60504 = p__60503;
var map__60504__$1 = ((((!((map__60504 == null)))?((((map__60504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60504.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60504):map__60504);
var opts = map__60504__$1;
var build_id = cljs.core.get.call(null,map__60504__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__60504,map__60504__$1,opts,build_id){
return (function (p__60506){
var vec__60507 = p__60506;
var seq__60508 = cljs.core.seq.call(null,vec__60507);
var first__60509 = cljs.core.first.call(null,seq__60508);
var seq__60508__$1 = cljs.core.next.call(null,seq__60508);
var map__60510 = first__60509;
var map__60510__$1 = ((((!((map__60510 == null)))?((((map__60510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60510.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60510):map__60510);
var msg = map__60510__$1;
var msg_name = cljs.core.get.call(null,map__60510__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__60508__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__60507,seq__60508,first__60509,seq__60508__$1,map__60510,map__60510__$1,msg,msg_name,_,map__60504,map__60504__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__60507,seq__60508,first__60509,seq__60508__$1,map__60510,map__60510__$1,msg,msg_name,_,map__60504,map__60504__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__60504,map__60504__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__60512){
var vec__60513 = p__60512;
var seq__60514 = cljs.core.seq.call(null,vec__60513);
var first__60515 = cljs.core.first.call(null,seq__60514);
var seq__60514__$1 = cljs.core.next.call(null,seq__60514);
var map__60516 = first__60515;
var map__60516__$1 = ((((!((map__60516 == null)))?((((map__60516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60516.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60516):map__60516);
var msg = map__60516__$1;
var msg_name = cljs.core.get.call(null,map__60516__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__60514__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__60518){
var map__60519 = p__60518;
var map__60519__$1 = ((((!((map__60519 == null)))?((((map__60519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60519.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60519):map__60519);
var on_compile_warning = cljs.core.get.call(null,map__60519__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__60519__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__60519,map__60519__$1,on_compile_warning,on_compile_fail){
return (function (p__60521){
var vec__60522 = p__60521;
var seq__60523 = cljs.core.seq.call(null,vec__60522);
var first__60524 = cljs.core.first.call(null,seq__60523);
var seq__60523__$1 = cljs.core.next.call(null,seq__60523);
var map__60525 = first__60524;
var map__60525__$1 = ((((!((map__60525 == null)))?((((map__60525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60525.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60525):map__60525);
var msg = map__60525__$1;
var msg_name = cljs.core.get.call(null,map__60525__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__60523__$1;
var pred__60527 = cljs.core._EQ_;
var expr__60528 = msg_name;
if(cljs.core.truth_(pred__60527.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__60528))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__60527.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__60528))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__60519,map__60519__$1,on_compile_warning,on_compile_fail))
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
var c__55486__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55486__auto__,msg_hist,msg_names,msg){
return (function (){
var f__55487__auto__ = (function (){var switch__55396__auto__ = ((function (c__55486__auto__,msg_hist,msg_names,msg){
return (function (state_60617){
var state_val_60618 = (state_60617[(1)]);
if((state_val_60618 === (7))){
var inst_60537 = (state_60617[(2)]);
var state_60617__$1 = state_60617;
if(cljs.core.truth_(inst_60537)){
var statearr_60619_60666 = state_60617__$1;
(statearr_60619_60666[(1)] = (8));

} else {
var statearr_60620_60667 = state_60617__$1;
(statearr_60620_60667[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (20))){
var inst_60611 = (state_60617[(2)]);
var state_60617__$1 = state_60617;
var statearr_60621_60668 = state_60617__$1;
(statearr_60621_60668[(2)] = inst_60611);

(statearr_60621_60668[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (27))){
var inst_60607 = (state_60617[(2)]);
var state_60617__$1 = state_60617;
var statearr_60622_60669 = state_60617__$1;
(statearr_60622_60669[(2)] = inst_60607);

(statearr_60622_60669[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (1))){
var inst_60530 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_60617__$1 = state_60617;
if(cljs.core.truth_(inst_60530)){
var statearr_60623_60670 = state_60617__$1;
(statearr_60623_60670[(1)] = (2));

} else {
var statearr_60624_60671 = state_60617__$1;
(statearr_60624_60671[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (24))){
var inst_60609 = (state_60617[(2)]);
var state_60617__$1 = state_60617;
var statearr_60625_60672 = state_60617__$1;
(statearr_60625_60672[(2)] = inst_60609);

(statearr_60625_60672[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (4))){
var inst_60615 = (state_60617[(2)]);
var state_60617__$1 = state_60617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60617__$1,inst_60615);
} else {
if((state_val_60618 === (15))){
var inst_60613 = (state_60617[(2)]);
var state_60617__$1 = state_60617;
var statearr_60626_60673 = state_60617__$1;
(statearr_60626_60673[(2)] = inst_60613);

(statearr_60626_60673[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (21))){
var inst_60566 = (state_60617[(2)]);
var inst_60567 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60568 = figwheel.client.auto_jump_to_error.call(null,opts,inst_60567);
var state_60617__$1 = (function (){var statearr_60627 = state_60617;
(statearr_60627[(7)] = inst_60566);

return statearr_60627;
})();
var statearr_60628_60674 = state_60617__$1;
(statearr_60628_60674[(2)] = inst_60568);

(statearr_60628_60674[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (31))){
var inst_60596 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_60617__$1 = state_60617;
if(cljs.core.truth_(inst_60596)){
var statearr_60629_60675 = state_60617__$1;
(statearr_60629_60675[(1)] = (34));

} else {
var statearr_60630_60676 = state_60617__$1;
(statearr_60630_60676[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (32))){
var inst_60605 = (state_60617[(2)]);
var state_60617__$1 = state_60617;
var statearr_60631_60677 = state_60617__$1;
(statearr_60631_60677[(2)] = inst_60605);

(statearr_60631_60677[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (33))){
var inst_60592 = (state_60617[(2)]);
var inst_60593 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60594 = figwheel.client.auto_jump_to_error.call(null,opts,inst_60593);
var state_60617__$1 = (function (){var statearr_60632 = state_60617;
(statearr_60632[(8)] = inst_60592);

return statearr_60632;
})();
var statearr_60633_60678 = state_60617__$1;
(statearr_60633_60678[(2)] = inst_60594);

(statearr_60633_60678[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (13))){
var inst_60551 = figwheel.client.heads_up.clear.call(null);
var state_60617__$1 = state_60617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60617__$1,(16),inst_60551);
} else {
if((state_val_60618 === (22))){
var inst_60572 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60573 = figwheel.client.heads_up.append_warning_message.call(null,inst_60572);
var state_60617__$1 = state_60617;
var statearr_60634_60679 = state_60617__$1;
(statearr_60634_60679[(2)] = inst_60573);

(statearr_60634_60679[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (36))){
var inst_60603 = (state_60617[(2)]);
var state_60617__$1 = state_60617;
var statearr_60635_60680 = state_60617__$1;
(statearr_60635_60680[(2)] = inst_60603);

(statearr_60635_60680[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (29))){
var inst_60583 = (state_60617[(2)]);
var inst_60584 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60585 = figwheel.client.auto_jump_to_error.call(null,opts,inst_60584);
var state_60617__$1 = (function (){var statearr_60636 = state_60617;
(statearr_60636[(9)] = inst_60583);

return statearr_60636;
})();
var statearr_60637_60681 = state_60617__$1;
(statearr_60637_60681[(2)] = inst_60585);

(statearr_60637_60681[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (6))){
var inst_60532 = (state_60617[(10)]);
var state_60617__$1 = state_60617;
var statearr_60638_60682 = state_60617__$1;
(statearr_60638_60682[(2)] = inst_60532);

(statearr_60638_60682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (28))){
var inst_60579 = (state_60617[(2)]);
var inst_60580 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60581 = figwheel.client.heads_up.display_warning.call(null,inst_60580);
var state_60617__$1 = (function (){var statearr_60639 = state_60617;
(statearr_60639[(11)] = inst_60579);

return statearr_60639;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60617__$1,(29),inst_60581);
} else {
if((state_val_60618 === (25))){
var inst_60577 = figwheel.client.heads_up.clear.call(null);
var state_60617__$1 = state_60617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60617__$1,(28),inst_60577);
} else {
if((state_val_60618 === (34))){
var inst_60598 = figwheel.client.heads_up.flash_loaded.call(null);
var state_60617__$1 = state_60617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60617__$1,(37),inst_60598);
} else {
if((state_val_60618 === (17))){
var inst_60557 = (state_60617[(2)]);
var inst_60558 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60559 = figwheel.client.auto_jump_to_error.call(null,opts,inst_60558);
var state_60617__$1 = (function (){var statearr_60640 = state_60617;
(statearr_60640[(12)] = inst_60557);

return statearr_60640;
})();
var statearr_60641_60683 = state_60617__$1;
(statearr_60641_60683[(2)] = inst_60559);

(statearr_60641_60683[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (3))){
var inst_60549 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_60617__$1 = state_60617;
if(cljs.core.truth_(inst_60549)){
var statearr_60642_60684 = state_60617__$1;
(statearr_60642_60684[(1)] = (13));

} else {
var statearr_60643_60685 = state_60617__$1;
(statearr_60643_60685[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (12))){
var inst_60545 = (state_60617[(2)]);
var state_60617__$1 = state_60617;
var statearr_60644_60686 = state_60617__$1;
(statearr_60644_60686[(2)] = inst_60545);

(statearr_60644_60686[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (2))){
var inst_60532 = (state_60617[(10)]);
var inst_60532__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_60617__$1 = (function (){var statearr_60645 = state_60617;
(statearr_60645[(10)] = inst_60532__$1);

return statearr_60645;
})();
if(cljs.core.truth_(inst_60532__$1)){
var statearr_60646_60687 = state_60617__$1;
(statearr_60646_60687[(1)] = (5));

} else {
var statearr_60647_60688 = state_60617__$1;
(statearr_60647_60688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (23))){
var inst_60575 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_60617__$1 = state_60617;
if(cljs.core.truth_(inst_60575)){
var statearr_60648_60689 = state_60617__$1;
(statearr_60648_60689[(1)] = (25));

} else {
var statearr_60649_60690 = state_60617__$1;
(statearr_60649_60690[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (35))){
var state_60617__$1 = state_60617;
var statearr_60650_60691 = state_60617__$1;
(statearr_60650_60691[(2)] = null);

(statearr_60650_60691[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (19))){
var inst_60570 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_60617__$1 = state_60617;
if(cljs.core.truth_(inst_60570)){
var statearr_60651_60692 = state_60617__$1;
(statearr_60651_60692[(1)] = (22));

} else {
var statearr_60652_60693 = state_60617__$1;
(statearr_60652_60693[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (11))){
var inst_60541 = (state_60617[(2)]);
var state_60617__$1 = state_60617;
var statearr_60653_60694 = state_60617__$1;
(statearr_60653_60694[(2)] = inst_60541);

(statearr_60653_60694[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (9))){
var inst_60543 = figwheel.client.heads_up.clear.call(null);
var state_60617__$1 = state_60617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60617__$1,(12),inst_60543);
} else {
if((state_val_60618 === (5))){
var inst_60534 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_60617__$1 = state_60617;
var statearr_60654_60695 = state_60617__$1;
(statearr_60654_60695[(2)] = inst_60534);

(statearr_60654_60695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (14))){
var inst_60561 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_60617__$1 = state_60617;
if(cljs.core.truth_(inst_60561)){
var statearr_60655_60696 = state_60617__$1;
(statearr_60655_60696[(1)] = (18));

} else {
var statearr_60656_60697 = state_60617__$1;
(statearr_60656_60697[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (26))){
var inst_60587 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_60617__$1 = state_60617;
if(cljs.core.truth_(inst_60587)){
var statearr_60657_60698 = state_60617__$1;
(statearr_60657_60698[(1)] = (30));

} else {
var statearr_60658_60699 = state_60617__$1;
(statearr_60658_60699[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (16))){
var inst_60553 = (state_60617[(2)]);
var inst_60554 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60555 = figwheel.client.heads_up.display_exception.call(null,inst_60554);
var state_60617__$1 = (function (){var statearr_60659 = state_60617;
(statearr_60659[(13)] = inst_60553);

return statearr_60659;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60617__$1,(17),inst_60555);
} else {
if((state_val_60618 === (30))){
var inst_60589 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60590 = figwheel.client.heads_up.display_warning.call(null,inst_60589);
var state_60617__$1 = state_60617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60617__$1,(33),inst_60590);
} else {
if((state_val_60618 === (10))){
var inst_60547 = (state_60617[(2)]);
var state_60617__$1 = state_60617;
var statearr_60660_60700 = state_60617__$1;
(statearr_60660_60700[(2)] = inst_60547);

(statearr_60660_60700[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (18))){
var inst_60563 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60564 = figwheel.client.heads_up.display_exception.call(null,inst_60563);
var state_60617__$1 = state_60617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60617__$1,(21),inst_60564);
} else {
if((state_val_60618 === (37))){
var inst_60600 = (state_60617[(2)]);
var state_60617__$1 = state_60617;
var statearr_60661_60701 = state_60617__$1;
(statearr_60661_60701[(2)] = inst_60600);

(statearr_60661_60701[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (8))){
var inst_60539 = figwheel.client.heads_up.flash_loaded.call(null);
var state_60617__$1 = state_60617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60617__$1,(11),inst_60539);
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
});})(c__55486__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__55396__auto__,c__55486__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__55397__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__55397__auto____0 = (function (){
var statearr_60662 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60662[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__55397__auto__);

(statearr_60662[(1)] = (1));

return statearr_60662;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__55397__auto____1 = (function (state_60617){
while(true){
var ret_value__55398__auto__ = (function (){try{while(true){
var result__55399__auto__ = switch__55396__auto__.call(null,state_60617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__55399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55399__auto__;
}
break;
}
}catch (e60663){if((e60663 instanceof Object)){
var ex__55400__auto__ = e60663;
var statearr_60664_60702 = state_60617;
(statearr_60664_60702[(5)] = ex__55400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__55398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60703 = state_60617;
state_60617 = G__60703;
continue;
} else {
return ret_value__55398__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__55397__auto__ = function(state_60617){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__55397__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__55397__auto____1.call(this,state_60617);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__55397__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__55397__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__55397__auto__;
})()
;})(switch__55396__auto__,c__55486__auto__,msg_hist,msg_names,msg))
})();
var state__55488__auto__ = (function (){var statearr_60665 = f__55487__auto__.call(null);
(statearr_60665[(6)] = c__55486__auto__);

return statearr_60665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55488__auto__);
});})(c__55486__auto__,msg_hist,msg_names,msg))
);

return c__55486__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__55486__auto___60732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55486__auto___60732,ch){
return (function (){
var f__55487__auto__ = (function (){var switch__55396__auto__ = ((function (c__55486__auto___60732,ch){
return (function (state_60718){
var state_val_60719 = (state_60718[(1)]);
if((state_val_60719 === (1))){
var state_60718__$1 = state_60718;
var statearr_60720_60733 = state_60718__$1;
(statearr_60720_60733[(2)] = null);

(statearr_60720_60733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60719 === (2))){
var state_60718__$1 = state_60718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60718__$1,(4),ch);
} else {
if((state_val_60719 === (3))){
var inst_60716 = (state_60718[(2)]);
var state_60718__$1 = state_60718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60718__$1,inst_60716);
} else {
if((state_val_60719 === (4))){
var inst_60706 = (state_60718[(7)]);
var inst_60706__$1 = (state_60718[(2)]);
var state_60718__$1 = (function (){var statearr_60721 = state_60718;
(statearr_60721[(7)] = inst_60706__$1);

return statearr_60721;
})();
if(cljs.core.truth_(inst_60706__$1)){
var statearr_60722_60734 = state_60718__$1;
(statearr_60722_60734[(1)] = (5));

} else {
var statearr_60723_60735 = state_60718__$1;
(statearr_60723_60735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60719 === (5))){
var inst_60706 = (state_60718[(7)]);
var inst_60708 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_60706);
var state_60718__$1 = state_60718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60718__$1,(8),inst_60708);
} else {
if((state_val_60719 === (6))){
var state_60718__$1 = state_60718;
var statearr_60724_60736 = state_60718__$1;
(statearr_60724_60736[(2)] = null);

(statearr_60724_60736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60719 === (7))){
var inst_60714 = (state_60718[(2)]);
var state_60718__$1 = state_60718;
var statearr_60725_60737 = state_60718__$1;
(statearr_60725_60737[(2)] = inst_60714);

(statearr_60725_60737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60719 === (8))){
var inst_60710 = (state_60718[(2)]);
var state_60718__$1 = (function (){var statearr_60726 = state_60718;
(statearr_60726[(8)] = inst_60710);

return statearr_60726;
})();
var statearr_60727_60738 = state_60718__$1;
(statearr_60727_60738[(2)] = null);

(statearr_60727_60738[(1)] = (2));


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
});})(c__55486__auto___60732,ch))
;
return ((function (switch__55396__auto__,c__55486__auto___60732,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__55397__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__55397__auto____0 = (function (){
var statearr_60728 = [null,null,null,null,null,null,null,null,null];
(statearr_60728[(0)] = figwheel$client$heads_up_plugin_$_state_machine__55397__auto__);

(statearr_60728[(1)] = (1));

return statearr_60728;
});
var figwheel$client$heads_up_plugin_$_state_machine__55397__auto____1 = (function (state_60718){
while(true){
var ret_value__55398__auto__ = (function (){try{while(true){
var result__55399__auto__ = switch__55396__auto__.call(null,state_60718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__55399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55399__auto__;
}
break;
}
}catch (e60729){if((e60729 instanceof Object)){
var ex__55400__auto__ = e60729;
var statearr_60730_60739 = state_60718;
(statearr_60730_60739[(5)] = ex__55400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__55398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60740 = state_60718;
state_60718 = G__60740;
continue;
} else {
return ret_value__55398__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__55397__auto__ = function(state_60718){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__55397__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__55397__auto____1.call(this,state_60718);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__55397__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__55397__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__55397__auto__;
})()
;})(switch__55396__auto__,c__55486__auto___60732,ch))
})();
var state__55488__auto__ = (function (){var statearr_60731 = f__55487__auto__.call(null);
(statearr_60731[(6)] = c__55486__auto___60732);

return statearr_60731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55488__auto__);
});})(c__55486__auto___60732,ch))
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
var c__55486__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55486__auto__){
return (function (){
var f__55487__auto__ = (function (){var switch__55396__auto__ = ((function (c__55486__auto__){
return (function (state_60746){
var state_val_60747 = (state_60746[(1)]);
if((state_val_60747 === (1))){
var inst_60741 = cljs.core.async.timeout.call(null,(3000));
var state_60746__$1 = state_60746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60746__$1,(2),inst_60741);
} else {
if((state_val_60747 === (2))){
var inst_60743 = (state_60746[(2)]);
var inst_60744 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_60746__$1 = (function (){var statearr_60748 = state_60746;
(statearr_60748[(7)] = inst_60743);

return statearr_60748;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60746__$1,inst_60744);
} else {
return null;
}
}
});})(c__55486__auto__))
;
return ((function (switch__55396__auto__,c__55486__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__55397__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__55397__auto____0 = (function (){
var statearr_60749 = [null,null,null,null,null,null,null,null];
(statearr_60749[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__55397__auto__);

(statearr_60749[(1)] = (1));

return statearr_60749;
});
var figwheel$client$enforce_project_plugin_$_state_machine__55397__auto____1 = (function (state_60746){
while(true){
var ret_value__55398__auto__ = (function (){try{while(true){
var result__55399__auto__ = switch__55396__auto__.call(null,state_60746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__55399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55399__auto__;
}
break;
}
}catch (e60750){if((e60750 instanceof Object)){
var ex__55400__auto__ = e60750;
var statearr_60751_60753 = state_60746;
(statearr_60751_60753[(5)] = ex__55400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__55398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60754 = state_60746;
state_60746 = G__60754;
continue;
} else {
return ret_value__55398__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__55397__auto__ = function(state_60746){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__55397__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__55397__auto____1.call(this,state_60746);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__55397__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__55397__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__55397__auto__;
})()
;})(switch__55396__auto__,c__55486__auto__))
})();
var state__55488__auto__ = (function (){var statearr_60752 = f__55487__auto__.call(null);
(statearr_60752[(6)] = c__55486__auto__);

return statearr_60752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55488__auto__);
});})(c__55486__auto__))
);

return c__55486__auto__;
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
var c__55486__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55486__auto__,figwheel_version,temp__5278__auto__){
return (function (){
var f__55487__auto__ = (function (){var switch__55396__auto__ = ((function (c__55486__auto__,figwheel_version,temp__5278__auto__){
return (function (state_60761){
var state_val_60762 = (state_60761[(1)]);
if((state_val_60762 === (1))){
var inst_60755 = cljs.core.async.timeout.call(null,(2000));
var state_60761__$1 = state_60761;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60761__$1,(2),inst_60755);
} else {
if((state_val_60762 === (2))){
var inst_60757 = (state_60761[(2)]);
var inst_60758 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_60759 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_60758);
var state_60761__$1 = (function (){var statearr_60763 = state_60761;
(statearr_60763[(7)] = inst_60757);

return statearr_60763;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60761__$1,inst_60759);
} else {
return null;
}
}
});})(c__55486__auto__,figwheel_version,temp__5278__auto__))
;
return ((function (switch__55396__auto__,c__55486__auto__,figwheel_version,temp__5278__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__55397__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__55397__auto____0 = (function (){
var statearr_60764 = [null,null,null,null,null,null,null,null];
(statearr_60764[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__55397__auto__);

(statearr_60764[(1)] = (1));

return statearr_60764;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__55397__auto____1 = (function (state_60761){
while(true){
var ret_value__55398__auto__ = (function (){try{while(true){
var result__55399__auto__ = switch__55396__auto__.call(null,state_60761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__55399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55399__auto__;
}
break;
}
}catch (e60765){if((e60765 instanceof Object)){
var ex__55400__auto__ = e60765;
var statearr_60766_60768 = state_60761;
(statearr_60766_60768[(5)] = ex__55400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__55398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60769 = state_60761;
state_60761 = G__60769;
continue;
} else {
return ret_value__55398__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__55397__auto__ = function(state_60761){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__55397__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__55397__auto____1.call(this,state_60761);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__55397__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__55397__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__55397__auto__;
})()
;})(switch__55396__auto__,c__55486__auto__,figwheel_version,temp__5278__auto__))
})();
var state__55488__auto__ = (function (){var statearr_60767 = f__55487__auto__.call(null);
(statearr_60767[(6)] = c__55486__auto__);

return statearr_60767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55488__auto__);
});})(c__55486__auto__,figwheel_version,temp__5278__auto__))
);

return c__55486__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__60770){
var map__60771 = p__60770;
var map__60771__$1 = ((((!((map__60771 == null)))?((((map__60771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60771.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60771):map__60771);
var file = cljs.core.get.call(null,map__60771__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__60771__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__60771__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__60773 = "";
var G__60773__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60773),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__60773);
var G__60773__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60773__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__60773__$1);
if(cljs.core.truth_((function (){var and__49509__auto__ = line;
if(cljs.core.truth_(and__49509__auto__)){
return column;
} else {
return and__49509__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60773__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__60773__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__60774){
var map__60775 = p__60774;
var map__60775__$1 = ((((!((map__60775 == null)))?((((map__60775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60775.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60775):map__60775);
var ed = map__60775__$1;
var formatted_exception = cljs.core.get.call(null,map__60775__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__60775__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__60775__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__60777_60781 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__60778_60782 = null;
var count__60779_60783 = (0);
var i__60780_60784 = (0);
while(true){
if((i__60780_60784 < count__60779_60783)){
var msg_60785 = cljs.core._nth.call(null,chunk__60778_60782,i__60780_60784);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_60785);

var G__60786 = seq__60777_60781;
var G__60787 = chunk__60778_60782;
var G__60788 = count__60779_60783;
var G__60789 = (i__60780_60784 + (1));
seq__60777_60781 = G__60786;
chunk__60778_60782 = G__60787;
count__60779_60783 = G__60788;
i__60780_60784 = G__60789;
continue;
} else {
var temp__5278__auto___60790 = cljs.core.seq.call(null,seq__60777_60781);
if(temp__5278__auto___60790){
var seq__60777_60791__$1 = temp__5278__auto___60790;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60777_60791__$1)){
var c__50452__auto___60792 = cljs.core.chunk_first.call(null,seq__60777_60791__$1);
var G__60793 = cljs.core.chunk_rest.call(null,seq__60777_60791__$1);
var G__60794 = c__50452__auto___60792;
var G__60795 = cljs.core.count.call(null,c__50452__auto___60792);
var G__60796 = (0);
seq__60777_60781 = G__60793;
chunk__60778_60782 = G__60794;
count__60779_60783 = G__60795;
i__60780_60784 = G__60796;
continue;
} else {
var msg_60797 = cljs.core.first.call(null,seq__60777_60791__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_60797);

var G__60798 = cljs.core.next.call(null,seq__60777_60791__$1);
var G__60799 = null;
var G__60800 = (0);
var G__60801 = (0);
seq__60777_60781 = G__60798;
chunk__60778_60782 = G__60799;
count__60779_60783 = G__60800;
i__60780_60784 = G__60801;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__60802){
var map__60803 = p__60802;
var map__60803__$1 = ((((!((map__60803 == null)))?((((map__60803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60803.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60803):map__60803);
var w = map__60803__$1;
var message = cljs.core.get.call(null,map__60803__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__60805 = cljs.core.seq.call(null,plugins);
var chunk__60806 = null;
var count__60807 = (0);
var i__60808 = (0);
while(true){
if((i__60808 < count__60807)){
var vec__60809 = cljs.core._nth.call(null,chunk__60806,i__60808);
var k = cljs.core.nth.call(null,vec__60809,(0),null);
var plugin = cljs.core.nth.call(null,vec__60809,(1),null);
if(cljs.core.truth_(plugin)){
var pl_60815 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__60805,chunk__60806,count__60807,i__60808,pl_60815,vec__60809,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_60815.call(null,msg_hist);
});})(seq__60805,chunk__60806,count__60807,i__60808,pl_60815,vec__60809,k,plugin))
);
} else {
}

var G__60816 = seq__60805;
var G__60817 = chunk__60806;
var G__60818 = count__60807;
var G__60819 = (i__60808 + (1));
seq__60805 = G__60816;
chunk__60806 = G__60817;
count__60807 = G__60818;
i__60808 = G__60819;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__60805);
if(temp__5278__auto__){
var seq__60805__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60805__$1)){
var c__50452__auto__ = cljs.core.chunk_first.call(null,seq__60805__$1);
var G__60820 = cljs.core.chunk_rest.call(null,seq__60805__$1);
var G__60821 = c__50452__auto__;
var G__60822 = cljs.core.count.call(null,c__50452__auto__);
var G__60823 = (0);
seq__60805 = G__60820;
chunk__60806 = G__60821;
count__60807 = G__60822;
i__60808 = G__60823;
continue;
} else {
var vec__60812 = cljs.core.first.call(null,seq__60805__$1);
var k = cljs.core.nth.call(null,vec__60812,(0),null);
var plugin = cljs.core.nth.call(null,vec__60812,(1),null);
if(cljs.core.truth_(plugin)){
var pl_60824 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__60805,chunk__60806,count__60807,i__60808,pl_60824,vec__60812,k,plugin,seq__60805__$1,temp__5278__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_60824.call(null,msg_hist);
});})(seq__60805,chunk__60806,count__60807,i__60808,pl_60824,vec__60812,k,plugin,seq__60805__$1,temp__5278__auto__))
);
} else {
}

var G__60825 = cljs.core.next.call(null,seq__60805__$1);
var G__60826 = null;
var G__60827 = (0);
var G__60828 = (0);
seq__60805 = G__60825;
chunk__60806 = G__60826;
count__60807 = G__60827;
i__60808 = G__60828;
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
var G__60830 = arguments.length;
switch (G__60830) {
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

var seq__60831_60836 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__60832_60837 = null;
var count__60833_60838 = (0);
var i__60834_60839 = (0);
while(true){
if((i__60834_60839 < count__60833_60838)){
var msg_60840 = cljs.core._nth.call(null,chunk__60832_60837,i__60834_60839);
figwheel.client.socket.handle_incoming_message.call(null,msg_60840);

var G__60841 = seq__60831_60836;
var G__60842 = chunk__60832_60837;
var G__60843 = count__60833_60838;
var G__60844 = (i__60834_60839 + (1));
seq__60831_60836 = G__60841;
chunk__60832_60837 = G__60842;
count__60833_60838 = G__60843;
i__60834_60839 = G__60844;
continue;
} else {
var temp__5278__auto___60845 = cljs.core.seq.call(null,seq__60831_60836);
if(temp__5278__auto___60845){
var seq__60831_60846__$1 = temp__5278__auto___60845;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60831_60846__$1)){
var c__50452__auto___60847 = cljs.core.chunk_first.call(null,seq__60831_60846__$1);
var G__60848 = cljs.core.chunk_rest.call(null,seq__60831_60846__$1);
var G__60849 = c__50452__auto___60847;
var G__60850 = cljs.core.count.call(null,c__50452__auto___60847);
var G__60851 = (0);
seq__60831_60836 = G__60848;
chunk__60832_60837 = G__60849;
count__60833_60838 = G__60850;
i__60834_60839 = G__60851;
continue;
} else {
var msg_60852 = cljs.core.first.call(null,seq__60831_60846__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_60852);

var G__60853 = cljs.core.next.call(null,seq__60831_60846__$1);
var G__60854 = null;
var G__60855 = (0);
var G__60856 = (0);
seq__60831_60836 = G__60853;
chunk__60832_60837 = G__60854;
count__60833_60838 = G__60855;
i__60834_60839 = G__60856;
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
var len__50798__auto___60861 = arguments.length;
var i__50799__auto___60862 = (0);
while(true){
if((i__50799__auto___60862 < len__50798__auto___60861)){
args__50805__auto__.push((arguments[i__50799__auto___60862]));

var G__60863 = (i__50799__auto___60862 + (1));
i__50799__auto___60862 = G__60863;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__60858){
var map__60859 = p__60858;
var map__60859__$1 = ((((!((map__60859 == null)))?((((map__60859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60859.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60859):map__60859);
var opts = map__60859__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq60857){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60857));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e60864){if((e60864 instanceof Error)){
var e = e60864;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e60864;

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
return (function (p__60865){
var map__60866 = p__60865;
var map__60866__$1 = ((((!((map__60866 == null)))?((((map__60866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60866.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60866):map__60866);
var msg_name = cljs.core.get.call(null,map__60866__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1509280898392
