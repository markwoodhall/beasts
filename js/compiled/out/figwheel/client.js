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
}catch (e152064){if((e152064 instanceof Error)){
var e = e152064;
return "Error: Unable to stringify";
} else {
throw e152064;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__152067 = arguments.length;
switch (G__152067) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__152065_SHARP_){
if(typeof p1__152065_SHARP_ === 'string'){
return p1__152065_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__152065_SHARP_);
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
var len__50798__auto___152070 = arguments.length;
var i__50799__auto___152071 = (0);
while(true){
if((i__50799__auto___152071 < len__50798__auto___152070)){
args__50805__auto__.push((arguments[i__50799__auto___152071]));

var G__152072 = (i__50799__auto___152071 + (1));
i__50799__auto___152071 = G__152072;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq152069){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq152069));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__50805__auto__ = [];
var len__50798__auto___152074 = arguments.length;
var i__50799__auto___152075 = (0);
while(true){
if((i__50799__auto___152075 < len__50798__auto___152074)){
args__50805__auto__.push((arguments[i__50799__auto___152075]));

var G__152076 = (i__50799__auto___152075 + (1));
i__50799__auto___152075 = G__152076;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq152073){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq152073));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__152077){
var map__152078 = p__152077;
var map__152078__$1 = ((((!((map__152078 == null)))?((((map__152078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__152078.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152078):map__152078);
var message = cljs.core.get.call(null,map__152078__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__152078__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__148175__auto___152157 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__148175__auto___152157,ch){
return (function (){
var f__148176__auto__ = (function (){var switch__148085__auto__ = ((function (c__148175__auto___152157,ch){
return (function (state_152129){
var state_val_152130 = (state_152129[(1)]);
if((state_val_152130 === (7))){
var inst_152125 = (state_152129[(2)]);
var state_152129__$1 = state_152129;
var statearr_152131_152158 = state_152129__$1;
(statearr_152131_152158[(2)] = inst_152125);

(statearr_152131_152158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152130 === (1))){
var state_152129__$1 = state_152129;
var statearr_152132_152159 = state_152129__$1;
(statearr_152132_152159[(2)] = null);

(statearr_152132_152159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152130 === (4))){
var inst_152082 = (state_152129[(7)]);
var inst_152082__$1 = (state_152129[(2)]);
var state_152129__$1 = (function (){var statearr_152133 = state_152129;
(statearr_152133[(7)] = inst_152082__$1);

return statearr_152133;
})();
if(cljs.core.truth_(inst_152082__$1)){
var statearr_152134_152160 = state_152129__$1;
(statearr_152134_152160[(1)] = (5));

} else {
var statearr_152135_152161 = state_152129__$1;
(statearr_152135_152161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152130 === (15))){
var inst_152089 = (state_152129[(8)]);
var inst_152104 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_152089);
var inst_152105 = cljs.core.first.call(null,inst_152104);
var inst_152106 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_152105);
var inst_152107 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_152106)].join('');
var inst_152108 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_152107);
var state_152129__$1 = state_152129;
var statearr_152136_152162 = state_152129__$1;
(statearr_152136_152162[(2)] = inst_152108);

(statearr_152136_152162[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152130 === (13))){
var inst_152113 = (state_152129[(2)]);
var state_152129__$1 = state_152129;
var statearr_152137_152163 = state_152129__$1;
(statearr_152137_152163[(2)] = inst_152113);

(statearr_152137_152163[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152130 === (6))){
var state_152129__$1 = state_152129;
var statearr_152138_152164 = state_152129__$1;
(statearr_152138_152164[(2)] = null);

(statearr_152138_152164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152130 === (17))){
var inst_152111 = (state_152129[(2)]);
var state_152129__$1 = state_152129;
var statearr_152139_152165 = state_152129__$1;
(statearr_152139_152165[(2)] = inst_152111);

(statearr_152139_152165[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152130 === (3))){
var inst_152127 = (state_152129[(2)]);
var state_152129__$1 = state_152129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_152129__$1,inst_152127);
} else {
if((state_val_152130 === (12))){
var inst_152088 = (state_152129[(9)]);
var inst_152102 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_152088,opts);
var state_152129__$1 = state_152129;
if(cljs.core.truth_(inst_152102)){
var statearr_152140_152166 = state_152129__$1;
(statearr_152140_152166[(1)] = (15));

} else {
var statearr_152141_152167 = state_152129__$1;
(statearr_152141_152167[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152130 === (2))){
var state_152129__$1 = state_152129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152129__$1,(4),ch);
} else {
if((state_val_152130 === (11))){
var inst_152089 = (state_152129[(8)]);
var inst_152094 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_152095 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_152089);
var inst_152096 = cljs.core.async.timeout.call(null,(1000));
var inst_152097 = [inst_152095,inst_152096];
var inst_152098 = (new cljs.core.PersistentVector(null,2,(5),inst_152094,inst_152097,null));
var state_152129__$1 = state_152129;
return cljs.core.async.ioc_alts_BANG_.call(null,state_152129__$1,(14),inst_152098);
} else {
if((state_val_152130 === (9))){
var inst_152089 = (state_152129[(8)]);
var inst_152115 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_152116 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_152089);
var inst_152117 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_152116);
var inst_152118 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_152117)].join('');
var inst_152119 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_152118);
var state_152129__$1 = (function (){var statearr_152142 = state_152129;
(statearr_152142[(10)] = inst_152115);

return statearr_152142;
})();
var statearr_152143_152168 = state_152129__$1;
(statearr_152143_152168[(2)] = inst_152119);

(statearr_152143_152168[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152130 === (5))){
var inst_152082 = (state_152129[(7)]);
var inst_152084 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_152085 = (new cljs.core.PersistentArrayMap(null,2,inst_152084,null));
var inst_152086 = (new cljs.core.PersistentHashSet(null,inst_152085,null));
var inst_152087 = figwheel.client.focus_msgs.call(null,inst_152086,inst_152082);
var inst_152088 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_152087);
var inst_152089 = cljs.core.first.call(null,inst_152087);
var inst_152090 = figwheel.client.autoload_QMARK_.call(null);
var state_152129__$1 = (function (){var statearr_152144 = state_152129;
(statearr_152144[(9)] = inst_152088);

(statearr_152144[(8)] = inst_152089);

return statearr_152144;
})();
if(cljs.core.truth_(inst_152090)){
var statearr_152145_152169 = state_152129__$1;
(statearr_152145_152169[(1)] = (8));

} else {
var statearr_152146_152170 = state_152129__$1;
(statearr_152146_152170[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152130 === (14))){
var inst_152100 = (state_152129[(2)]);
var state_152129__$1 = state_152129;
var statearr_152147_152171 = state_152129__$1;
(statearr_152147_152171[(2)] = inst_152100);

(statearr_152147_152171[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152130 === (16))){
var state_152129__$1 = state_152129;
var statearr_152148_152172 = state_152129__$1;
(statearr_152148_152172[(2)] = null);

(statearr_152148_152172[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152130 === (10))){
var inst_152121 = (state_152129[(2)]);
var state_152129__$1 = (function (){var statearr_152149 = state_152129;
(statearr_152149[(11)] = inst_152121);

return statearr_152149;
})();
var statearr_152150_152173 = state_152129__$1;
(statearr_152150_152173[(2)] = null);

(statearr_152150_152173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152130 === (8))){
var inst_152088 = (state_152129[(9)]);
var inst_152092 = figwheel.client.reload_file_state_QMARK_.call(null,inst_152088,opts);
var state_152129__$1 = state_152129;
if(cljs.core.truth_(inst_152092)){
var statearr_152151_152174 = state_152129__$1;
(statearr_152151_152174[(1)] = (11));

} else {
var statearr_152152_152175 = state_152129__$1;
(statearr_152152_152175[(1)] = (12));

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
});})(c__148175__auto___152157,ch))
;
return ((function (switch__148085__auto__,c__148175__auto___152157,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__148086__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__148086__auto____0 = (function (){
var statearr_152153 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_152153[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__148086__auto__);

(statearr_152153[(1)] = (1));

return statearr_152153;
});
var figwheel$client$file_reloader_plugin_$_state_machine__148086__auto____1 = (function (state_152129){
while(true){
var ret_value__148087__auto__ = (function (){try{while(true){
var result__148088__auto__ = switch__148085__auto__.call(null,state_152129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__148088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__148088__auto__;
}
break;
}
}catch (e152154){if((e152154 instanceof Object)){
var ex__148089__auto__ = e152154;
var statearr_152155_152176 = state_152129;
(statearr_152155_152176[(5)] = ex__148089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e152154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__148087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__152177 = state_152129;
state_152129 = G__152177;
continue;
} else {
return ret_value__148087__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__148086__auto__ = function(state_152129){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__148086__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__148086__auto____1.call(this,state_152129);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__148086__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__148086__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__148086__auto__;
})()
;})(switch__148085__auto__,c__148175__auto___152157,ch))
})();
var state__148177__auto__ = (function (){var statearr_152156 = f__148176__auto__.call(null);
(statearr_152156[(6)] = c__148175__auto___152157);

return statearr_152156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__148177__auto__);
});})(c__148175__auto___152157,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__152178_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__152178_SHARP_));
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
var base_path_152180 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_152180){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e152179){if((e152179 instanceof Error)){
var e = e152179;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_152180], null));
} else {
var e = e152179;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_152180))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__152181){
var map__152182 = p__152181;
var map__152182__$1 = ((((!((map__152182 == null)))?((((map__152182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__152182.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152182):map__152182);
var opts = map__152182__$1;
var build_id = cljs.core.get.call(null,map__152182__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__152182,map__152182__$1,opts,build_id){
return (function (p__152184){
var vec__152185 = p__152184;
var seq__152186 = cljs.core.seq.call(null,vec__152185);
var first__152187 = cljs.core.first.call(null,seq__152186);
var seq__152186__$1 = cljs.core.next.call(null,seq__152186);
var map__152188 = first__152187;
var map__152188__$1 = ((((!((map__152188 == null)))?((((map__152188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__152188.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152188):map__152188);
var msg = map__152188__$1;
var msg_name = cljs.core.get.call(null,map__152188__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__152186__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__152185,seq__152186,first__152187,seq__152186__$1,map__152188,map__152188__$1,msg,msg_name,_,map__152182,map__152182__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__152185,seq__152186,first__152187,seq__152186__$1,map__152188,map__152188__$1,msg,msg_name,_,map__152182,map__152182__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__152182,map__152182__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__152190){
var vec__152191 = p__152190;
var seq__152192 = cljs.core.seq.call(null,vec__152191);
var first__152193 = cljs.core.first.call(null,seq__152192);
var seq__152192__$1 = cljs.core.next.call(null,seq__152192);
var map__152194 = first__152193;
var map__152194__$1 = ((((!((map__152194 == null)))?((((map__152194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__152194.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152194):map__152194);
var msg = map__152194__$1;
var msg_name = cljs.core.get.call(null,map__152194__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__152192__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__152196){
var map__152197 = p__152196;
var map__152197__$1 = ((((!((map__152197 == null)))?((((map__152197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__152197.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152197):map__152197);
var on_compile_warning = cljs.core.get.call(null,map__152197__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__152197__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__152197,map__152197__$1,on_compile_warning,on_compile_fail){
return (function (p__152199){
var vec__152200 = p__152199;
var seq__152201 = cljs.core.seq.call(null,vec__152200);
var first__152202 = cljs.core.first.call(null,seq__152201);
var seq__152201__$1 = cljs.core.next.call(null,seq__152201);
var map__152203 = first__152202;
var map__152203__$1 = ((((!((map__152203 == null)))?((((map__152203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__152203.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152203):map__152203);
var msg = map__152203__$1;
var msg_name = cljs.core.get.call(null,map__152203__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__152201__$1;
var pred__152205 = cljs.core._EQ_;
var expr__152206 = msg_name;
if(cljs.core.truth_(pred__152205.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__152206))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__152205.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__152206))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__152197,map__152197__$1,on_compile_warning,on_compile_fail))
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
var c__148175__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__148175__auto__,msg_hist,msg_names,msg){
return (function (){
var f__148176__auto__ = (function (){var switch__148085__auto__ = ((function (c__148175__auto__,msg_hist,msg_names,msg){
return (function (state_152295){
var state_val_152296 = (state_152295[(1)]);
if((state_val_152296 === (7))){
var inst_152215 = (state_152295[(2)]);
var state_152295__$1 = state_152295;
if(cljs.core.truth_(inst_152215)){
var statearr_152297_152344 = state_152295__$1;
(statearr_152297_152344[(1)] = (8));

} else {
var statearr_152298_152345 = state_152295__$1;
(statearr_152298_152345[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152296 === (20))){
var inst_152289 = (state_152295[(2)]);
var state_152295__$1 = state_152295;
var statearr_152299_152346 = state_152295__$1;
(statearr_152299_152346[(2)] = inst_152289);

(statearr_152299_152346[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152296 === (27))){
var inst_152285 = (state_152295[(2)]);
var state_152295__$1 = state_152295;
var statearr_152300_152347 = state_152295__$1;
(statearr_152300_152347[(2)] = inst_152285);

(statearr_152300_152347[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152296 === (1))){
var inst_152208 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_152295__$1 = state_152295;
if(cljs.core.truth_(inst_152208)){
var statearr_152301_152348 = state_152295__$1;
(statearr_152301_152348[(1)] = (2));

} else {
var statearr_152302_152349 = state_152295__$1;
(statearr_152302_152349[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152296 === (24))){
var inst_152287 = (state_152295[(2)]);
var state_152295__$1 = state_152295;
var statearr_152303_152350 = state_152295__$1;
(statearr_152303_152350[(2)] = inst_152287);

(statearr_152303_152350[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152296 === (4))){
var inst_152293 = (state_152295[(2)]);
var state_152295__$1 = state_152295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_152295__$1,inst_152293);
} else {
if((state_val_152296 === (15))){
var inst_152291 = (state_152295[(2)]);
var state_152295__$1 = state_152295;
var statearr_152304_152351 = state_152295__$1;
(statearr_152304_152351[(2)] = inst_152291);

(statearr_152304_152351[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152296 === (21))){
var inst_152244 = (state_152295[(2)]);
var inst_152245 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_152246 = figwheel.client.auto_jump_to_error.call(null,opts,inst_152245);
var state_152295__$1 = (function (){var statearr_152305 = state_152295;
(statearr_152305[(7)] = inst_152244);

return statearr_152305;
})();
var statearr_152306_152352 = state_152295__$1;
(statearr_152306_152352[(2)] = inst_152246);

(statearr_152306_152352[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152296 === (31))){
var inst_152274 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_152295__$1 = state_152295;
if(cljs.core.truth_(inst_152274)){
var statearr_152307_152353 = state_152295__$1;
(statearr_152307_152353[(1)] = (34));

} else {
var statearr_152308_152354 = state_152295__$1;
(statearr_152308_152354[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152296 === (32))){
var inst_152283 = (state_152295[(2)]);
var state_152295__$1 = state_152295;
var statearr_152309_152355 = state_152295__$1;
(statearr_152309_152355[(2)] = inst_152283);

(statearr_152309_152355[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152296 === (33))){
var inst_152270 = (state_152295[(2)]);
var inst_152271 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_152272 = figwheel.client.auto_jump_to_error.call(null,opts,inst_152271);
var state_152295__$1 = (function (){var statearr_152310 = state_152295;
(statearr_152310[(8)] = inst_152270);

return statearr_152310;
})();
var statearr_152311_152356 = state_152295__$1;
(statearr_152311_152356[(2)] = inst_152272);

(statearr_152311_152356[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152296 === (13))){
var inst_152229 = figwheel.client.heads_up.clear.call(null);
var state_152295__$1 = state_152295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152295__$1,(16),inst_152229);
} else {
if((state_val_152296 === (22))){
var inst_152250 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_152251 = figwheel.client.heads_up.append_warning_message.call(null,inst_152250);
var state_152295__$1 = state_152295;
var statearr_152312_152357 = state_152295__$1;
(statearr_152312_152357[(2)] = inst_152251);

(statearr_152312_152357[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152296 === (36))){
var inst_152281 = (state_152295[(2)]);
var state_152295__$1 = state_152295;
var statearr_152313_152358 = state_152295__$1;
(statearr_152313_152358[(2)] = inst_152281);

(statearr_152313_152358[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152296 === (29))){
var inst_152261 = (state_152295[(2)]);
var inst_152262 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_152263 = figwheel.client.auto_jump_to_error.call(null,opts,inst_152262);
var state_152295__$1 = (function (){var statearr_152314 = state_152295;
(statearr_152314[(9)] = inst_152261);

return statearr_152314;
})();
var statearr_152315_152359 = state_152295__$1;
(statearr_152315_152359[(2)] = inst_152263);

(statearr_152315_152359[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152296 === (6))){
var inst_152210 = (state_152295[(10)]);
var state_152295__$1 = state_152295;
var statearr_152316_152360 = state_152295__$1;
(statearr_152316_152360[(2)] = inst_152210);

(statearr_152316_152360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152296 === (28))){
var inst_152257 = (state_152295[(2)]);
var inst_152258 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_152259 = figwheel.client.heads_up.display_warning.call(null,inst_152258);
var state_152295__$1 = (function (){var statearr_152317 = state_152295;
(statearr_152317[(11)] = inst_152257);

return statearr_152317;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152295__$1,(29),inst_152259);
} else {
if((state_val_152296 === (25))){
var inst_152255 = figwheel.client.heads_up.clear.call(null);
var state_152295__$1 = state_152295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152295__$1,(28),inst_152255);
} else {
if((state_val_152296 === (34))){
var inst_152276 = figwheel.client.heads_up.flash_loaded.call(null);
var state_152295__$1 = state_152295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152295__$1,(37),inst_152276);
} else {
if((state_val_152296 === (17))){
var inst_152235 = (state_152295[(2)]);
var inst_152236 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_152237 = figwheel.client.auto_jump_to_error.call(null,opts,inst_152236);
var state_152295__$1 = (function (){var statearr_152318 = state_152295;
(statearr_152318[(12)] = inst_152235);

return statearr_152318;
})();
var statearr_152319_152361 = state_152295__$1;
(statearr_152319_152361[(2)] = inst_152237);

(statearr_152319_152361[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152296 === (3))){
var inst_152227 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_152295__$1 = state_152295;
if(cljs.core.truth_(inst_152227)){
var statearr_152320_152362 = state_152295__$1;
(statearr_152320_152362[(1)] = (13));

} else {
var statearr_152321_152363 = state_152295__$1;
(statearr_152321_152363[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152296 === (12))){
var inst_152223 = (state_152295[(2)]);
var state_152295__$1 = state_152295;
var statearr_152322_152364 = state_152295__$1;
(statearr_152322_152364[(2)] = inst_152223);

(statearr_152322_152364[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152296 === (2))){
var inst_152210 = (state_152295[(10)]);
var inst_152210__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_152295__$1 = (function (){var statearr_152323 = state_152295;
(statearr_152323[(10)] = inst_152210__$1);

return statearr_152323;
})();
if(cljs.core.truth_(inst_152210__$1)){
var statearr_152324_152365 = state_152295__$1;
(statearr_152324_152365[(1)] = (5));

} else {
var statearr_152325_152366 = state_152295__$1;
(statearr_152325_152366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152296 === (23))){
var inst_152253 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_152295__$1 = state_152295;
if(cljs.core.truth_(inst_152253)){
var statearr_152326_152367 = state_152295__$1;
(statearr_152326_152367[(1)] = (25));

} else {
var statearr_152327_152368 = state_152295__$1;
(statearr_152327_152368[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152296 === (35))){
var state_152295__$1 = state_152295;
var statearr_152328_152369 = state_152295__$1;
(statearr_152328_152369[(2)] = null);

(statearr_152328_152369[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152296 === (19))){
var inst_152248 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_152295__$1 = state_152295;
if(cljs.core.truth_(inst_152248)){
var statearr_152329_152370 = state_152295__$1;
(statearr_152329_152370[(1)] = (22));

} else {
var statearr_152330_152371 = state_152295__$1;
(statearr_152330_152371[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152296 === (11))){
var inst_152219 = (state_152295[(2)]);
var state_152295__$1 = state_152295;
var statearr_152331_152372 = state_152295__$1;
(statearr_152331_152372[(2)] = inst_152219);

(statearr_152331_152372[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152296 === (9))){
var inst_152221 = figwheel.client.heads_up.clear.call(null);
var state_152295__$1 = state_152295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152295__$1,(12),inst_152221);
} else {
if((state_val_152296 === (5))){
var inst_152212 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_152295__$1 = state_152295;
var statearr_152332_152373 = state_152295__$1;
(statearr_152332_152373[(2)] = inst_152212);

(statearr_152332_152373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152296 === (14))){
var inst_152239 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_152295__$1 = state_152295;
if(cljs.core.truth_(inst_152239)){
var statearr_152333_152374 = state_152295__$1;
(statearr_152333_152374[(1)] = (18));

} else {
var statearr_152334_152375 = state_152295__$1;
(statearr_152334_152375[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152296 === (26))){
var inst_152265 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_152295__$1 = state_152295;
if(cljs.core.truth_(inst_152265)){
var statearr_152335_152376 = state_152295__$1;
(statearr_152335_152376[(1)] = (30));

} else {
var statearr_152336_152377 = state_152295__$1;
(statearr_152336_152377[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152296 === (16))){
var inst_152231 = (state_152295[(2)]);
var inst_152232 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_152233 = figwheel.client.heads_up.display_exception.call(null,inst_152232);
var state_152295__$1 = (function (){var statearr_152337 = state_152295;
(statearr_152337[(13)] = inst_152231);

return statearr_152337;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152295__$1,(17),inst_152233);
} else {
if((state_val_152296 === (30))){
var inst_152267 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_152268 = figwheel.client.heads_up.display_warning.call(null,inst_152267);
var state_152295__$1 = state_152295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152295__$1,(33),inst_152268);
} else {
if((state_val_152296 === (10))){
var inst_152225 = (state_152295[(2)]);
var state_152295__$1 = state_152295;
var statearr_152338_152378 = state_152295__$1;
(statearr_152338_152378[(2)] = inst_152225);

(statearr_152338_152378[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152296 === (18))){
var inst_152241 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_152242 = figwheel.client.heads_up.display_exception.call(null,inst_152241);
var state_152295__$1 = state_152295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152295__$1,(21),inst_152242);
} else {
if((state_val_152296 === (37))){
var inst_152278 = (state_152295[(2)]);
var state_152295__$1 = state_152295;
var statearr_152339_152379 = state_152295__$1;
(statearr_152339_152379[(2)] = inst_152278);

(statearr_152339_152379[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152296 === (8))){
var inst_152217 = figwheel.client.heads_up.flash_loaded.call(null);
var state_152295__$1 = state_152295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152295__$1,(11),inst_152217);
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
});})(c__148175__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__148085__auto__,c__148175__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__148086__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__148086__auto____0 = (function (){
var statearr_152340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_152340[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__148086__auto__);

(statearr_152340[(1)] = (1));

return statearr_152340;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__148086__auto____1 = (function (state_152295){
while(true){
var ret_value__148087__auto__ = (function (){try{while(true){
var result__148088__auto__ = switch__148085__auto__.call(null,state_152295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__148088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__148088__auto__;
}
break;
}
}catch (e152341){if((e152341 instanceof Object)){
var ex__148089__auto__ = e152341;
var statearr_152342_152380 = state_152295;
(statearr_152342_152380[(5)] = ex__148089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e152341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__148087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__152381 = state_152295;
state_152295 = G__152381;
continue;
} else {
return ret_value__148087__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__148086__auto__ = function(state_152295){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__148086__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__148086__auto____1.call(this,state_152295);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__148086__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__148086__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__148086__auto__;
})()
;})(switch__148085__auto__,c__148175__auto__,msg_hist,msg_names,msg))
})();
var state__148177__auto__ = (function (){var statearr_152343 = f__148176__auto__.call(null);
(statearr_152343[(6)] = c__148175__auto__);

return statearr_152343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__148177__auto__);
});})(c__148175__auto__,msg_hist,msg_names,msg))
);

return c__148175__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__148175__auto___152410 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__148175__auto___152410,ch){
return (function (){
var f__148176__auto__ = (function (){var switch__148085__auto__ = ((function (c__148175__auto___152410,ch){
return (function (state_152396){
var state_val_152397 = (state_152396[(1)]);
if((state_val_152397 === (1))){
var state_152396__$1 = state_152396;
var statearr_152398_152411 = state_152396__$1;
(statearr_152398_152411[(2)] = null);

(statearr_152398_152411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152397 === (2))){
var state_152396__$1 = state_152396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152396__$1,(4),ch);
} else {
if((state_val_152397 === (3))){
var inst_152394 = (state_152396[(2)]);
var state_152396__$1 = state_152396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_152396__$1,inst_152394);
} else {
if((state_val_152397 === (4))){
var inst_152384 = (state_152396[(7)]);
var inst_152384__$1 = (state_152396[(2)]);
var state_152396__$1 = (function (){var statearr_152399 = state_152396;
(statearr_152399[(7)] = inst_152384__$1);

return statearr_152399;
})();
if(cljs.core.truth_(inst_152384__$1)){
var statearr_152400_152412 = state_152396__$1;
(statearr_152400_152412[(1)] = (5));

} else {
var statearr_152401_152413 = state_152396__$1;
(statearr_152401_152413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152397 === (5))){
var inst_152384 = (state_152396[(7)]);
var inst_152386 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_152384);
var state_152396__$1 = state_152396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152396__$1,(8),inst_152386);
} else {
if((state_val_152397 === (6))){
var state_152396__$1 = state_152396;
var statearr_152402_152414 = state_152396__$1;
(statearr_152402_152414[(2)] = null);

(statearr_152402_152414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152397 === (7))){
var inst_152392 = (state_152396[(2)]);
var state_152396__$1 = state_152396;
var statearr_152403_152415 = state_152396__$1;
(statearr_152403_152415[(2)] = inst_152392);

(statearr_152403_152415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152397 === (8))){
var inst_152388 = (state_152396[(2)]);
var state_152396__$1 = (function (){var statearr_152404 = state_152396;
(statearr_152404[(8)] = inst_152388);

return statearr_152404;
})();
var statearr_152405_152416 = state_152396__$1;
(statearr_152405_152416[(2)] = null);

(statearr_152405_152416[(1)] = (2));


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
});})(c__148175__auto___152410,ch))
;
return ((function (switch__148085__auto__,c__148175__auto___152410,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__148086__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__148086__auto____0 = (function (){
var statearr_152406 = [null,null,null,null,null,null,null,null,null];
(statearr_152406[(0)] = figwheel$client$heads_up_plugin_$_state_machine__148086__auto__);

(statearr_152406[(1)] = (1));

return statearr_152406;
});
var figwheel$client$heads_up_plugin_$_state_machine__148086__auto____1 = (function (state_152396){
while(true){
var ret_value__148087__auto__ = (function (){try{while(true){
var result__148088__auto__ = switch__148085__auto__.call(null,state_152396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__148088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__148088__auto__;
}
break;
}
}catch (e152407){if((e152407 instanceof Object)){
var ex__148089__auto__ = e152407;
var statearr_152408_152417 = state_152396;
(statearr_152408_152417[(5)] = ex__148089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e152407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__148087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__152418 = state_152396;
state_152396 = G__152418;
continue;
} else {
return ret_value__148087__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__148086__auto__ = function(state_152396){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__148086__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__148086__auto____1.call(this,state_152396);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__148086__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__148086__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__148086__auto__;
})()
;})(switch__148085__auto__,c__148175__auto___152410,ch))
})();
var state__148177__auto__ = (function (){var statearr_152409 = f__148176__auto__.call(null);
(statearr_152409[(6)] = c__148175__auto___152410);

return statearr_152409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__148177__auto__);
});})(c__148175__auto___152410,ch))
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
var c__148175__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__148175__auto__){
return (function (){
var f__148176__auto__ = (function (){var switch__148085__auto__ = ((function (c__148175__auto__){
return (function (state_152424){
var state_val_152425 = (state_152424[(1)]);
if((state_val_152425 === (1))){
var inst_152419 = cljs.core.async.timeout.call(null,(3000));
var state_152424__$1 = state_152424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152424__$1,(2),inst_152419);
} else {
if((state_val_152425 === (2))){
var inst_152421 = (state_152424[(2)]);
var inst_152422 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_152424__$1 = (function (){var statearr_152426 = state_152424;
(statearr_152426[(7)] = inst_152421);

return statearr_152426;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_152424__$1,inst_152422);
} else {
return null;
}
}
});})(c__148175__auto__))
;
return ((function (switch__148085__auto__,c__148175__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__148086__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__148086__auto____0 = (function (){
var statearr_152427 = [null,null,null,null,null,null,null,null];
(statearr_152427[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__148086__auto__);

(statearr_152427[(1)] = (1));

return statearr_152427;
});
var figwheel$client$enforce_project_plugin_$_state_machine__148086__auto____1 = (function (state_152424){
while(true){
var ret_value__148087__auto__ = (function (){try{while(true){
var result__148088__auto__ = switch__148085__auto__.call(null,state_152424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__148088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__148088__auto__;
}
break;
}
}catch (e152428){if((e152428 instanceof Object)){
var ex__148089__auto__ = e152428;
var statearr_152429_152431 = state_152424;
(statearr_152429_152431[(5)] = ex__148089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e152428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__148087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__152432 = state_152424;
state_152424 = G__152432;
continue;
} else {
return ret_value__148087__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__148086__auto__ = function(state_152424){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__148086__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__148086__auto____1.call(this,state_152424);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__148086__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__148086__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__148086__auto__;
})()
;})(switch__148085__auto__,c__148175__auto__))
})();
var state__148177__auto__ = (function (){var statearr_152430 = f__148176__auto__.call(null);
(statearr_152430[(6)] = c__148175__auto__);

return statearr_152430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__148177__auto__);
});})(c__148175__auto__))
);

return c__148175__auto__;
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
var c__148175__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__148175__auto__,figwheel_version,temp__5278__auto__){
return (function (){
var f__148176__auto__ = (function (){var switch__148085__auto__ = ((function (c__148175__auto__,figwheel_version,temp__5278__auto__){
return (function (state_152439){
var state_val_152440 = (state_152439[(1)]);
if((state_val_152440 === (1))){
var inst_152433 = cljs.core.async.timeout.call(null,(2000));
var state_152439__$1 = state_152439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152439__$1,(2),inst_152433);
} else {
if((state_val_152440 === (2))){
var inst_152435 = (state_152439[(2)]);
var inst_152436 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_152437 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_152436);
var state_152439__$1 = (function (){var statearr_152441 = state_152439;
(statearr_152441[(7)] = inst_152435);

return statearr_152441;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_152439__$1,inst_152437);
} else {
return null;
}
}
});})(c__148175__auto__,figwheel_version,temp__5278__auto__))
;
return ((function (switch__148085__auto__,c__148175__auto__,figwheel_version,temp__5278__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__148086__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__148086__auto____0 = (function (){
var statearr_152442 = [null,null,null,null,null,null,null,null];
(statearr_152442[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__148086__auto__);

(statearr_152442[(1)] = (1));

return statearr_152442;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__148086__auto____1 = (function (state_152439){
while(true){
var ret_value__148087__auto__ = (function (){try{while(true){
var result__148088__auto__ = switch__148085__auto__.call(null,state_152439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__148088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__148088__auto__;
}
break;
}
}catch (e152443){if((e152443 instanceof Object)){
var ex__148089__auto__ = e152443;
var statearr_152444_152446 = state_152439;
(statearr_152444_152446[(5)] = ex__148089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e152443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__148087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__152447 = state_152439;
state_152439 = G__152447;
continue;
} else {
return ret_value__148087__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__148086__auto__ = function(state_152439){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__148086__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__148086__auto____1.call(this,state_152439);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__148086__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__148086__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__148086__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__148086__auto__;
})()
;})(switch__148085__auto__,c__148175__auto__,figwheel_version,temp__5278__auto__))
})();
var state__148177__auto__ = (function (){var statearr_152445 = f__148176__auto__.call(null);
(statearr_152445[(6)] = c__148175__auto__);

return statearr_152445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__148177__auto__);
});})(c__148175__auto__,figwheel_version,temp__5278__auto__))
);

return c__148175__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__152448){
var map__152449 = p__152448;
var map__152449__$1 = ((((!((map__152449 == null)))?((((map__152449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__152449.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152449):map__152449);
var file = cljs.core.get.call(null,map__152449__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__152449__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__152449__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__152451 = "";
var G__152451__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__152451),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__152451);
var G__152451__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__152451__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__152451__$1);
if(cljs.core.truth_((function (){var and__49509__auto__ = line;
if(cljs.core.truth_(and__49509__auto__)){
return column;
} else {
return and__49509__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__152451__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__152451__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__152452){
var map__152453 = p__152452;
var map__152453__$1 = ((((!((map__152453 == null)))?((((map__152453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__152453.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152453):map__152453);
var ed = map__152453__$1;
var formatted_exception = cljs.core.get.call(null,map__152453__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__152453__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__152453__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__152455_152459 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__152456_152460 = null;
var count__152457_152461 = (0);
var i__152458_152462 = (0);
while(true){
if((i__152458_152462 < count__152457_152461)){
var msg_152463 = cljs.core._nth.call(null,chunk__152456_152460,i__152458_152462);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_152463);

var G__152464 = seq__152455_152459;
var G__152465 = chunk__152456_152460;
var G__152466 = count__152457_152461;
var G__152467 = (i__152458_152462 + (1));
seq__152455_152459 = G__152464;
chunk__152456_152460 = G__152465;
count__152457_152461 = G__152466;
i__152458_152462 = G__152467;
continue;
} else {
var temp__5278__auto___152468 = cljs.core.seq.call(null,seq__152455_152459);
if(temp__5278__auto___152468){
var seq__152455_152469__$1 = temp__5278__auto___152468;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__152455_152469__$1)){
var c__50452__auto___152470 = cljs.core.chunk_first.call(null,seq__152455_152469__$1);
var G__152471 = cljs.core.chunk_rest.call(null,seq__152455_152469__$1);
var G__152472 = c__50452__auto___152470;
var G__152473 = cljs.core.count.call(null,c__50452__auto___152470);
var G__152474 = (0);
seq__152455_152459 = G__152471;
chunk__152456_152460 = G__152472;
count__152457_152461 = G__152473;
i__152458_152462 = G__152474;
continue;
} else {
var msg_152475 = cljs.core.first.call(null,seq__152455_152469__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_152475);

var G__152476 = cljs.core.next.call(null,seq__152455_152469__$1);
var G__152477 = null;
var G__152478 = (0);
var G__152479 = (0);
seq__152455_152459 = G__152476;
chunk__152456_152460 = G__152477;
count__152457_152461 = G__152478;
i__152458_152462 = G__152479;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__152480){
var map__152481 = p__152480;
var map__152481__$1 = ((((!((map__152481 == null)))?((((map__152481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__152481.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152481):map__152481);
var w = map__152481__$1;
var message = cljs.core.get.call(null,map__152481__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__152483 = cljs.core.seq.call(null,plugins);
var chunk__152484 = null;
var count__152485 = (0);
var i__152486 = (0);
while(true){
if((i__152486 < count__152485)){
var vec__152487 = cljs.core._nth.call(null,chunk__152484,i__152486);
var k = cljs.core.nth.call(null,vec__152487,(0),null);
var plugin = cljs.core.nth.call(null,vec__152487,(1),null);
if(cljs.core.truth_(plugin)){
var pl_152493 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__152483,chunk__152484,count__152485,i__152486,pl_152493,vec__152487,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_152493.call(null,msg_hist);
});})(seq__152483,chunk__152484,count__152485,i__152486,pl_152493,vec__152487,k,plugin))
);
} else {
}

var G__152494 = seq__152483;
var G__152495 = chunk__152484;
var G__152496 = count__152485;
var G__152497 = (i__152486 + (1));
seq__152483 = G__152494;
chunk__152484 = G__152495;
count__152485 = G__152496;
i__152486 = G__152497;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__152483);
if(temp__5278__auto__){
var seq__152483__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__152483__$1)){
var c__50452__auto__ = cljs.core.chunk_first.call(null,seq__152483__$1);
var G__152498 = cljs.core.chunk_rest.call(null,seq__152483__$1);
var G__152499 = c__50452__auto__;
var G__152500 = cljs.core.count.call(null,c__50452__auto__);
var G__152501 = (0);
seq__152483 = G__152498;
chunk__152484 = G__152499;
count__152485 = G__152500;
i__152486 = G__152501;
continue;
} else {
var vec__152490 = cljs.core.first.call(null,seq__152483__$1);
var k = cljs.core.nth.call(null,vec__152490,(0),null);
var plugin = cljs.core.nth.call(null,vec__152490,(1),null);
if(cljs.core.truth_(plugin)){
var pl_152502 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__152483,chunk__152484,count__152485,i__152486,pl_152502,vec__152490,k,plugin,seq__152483__$1,temp__5278__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_152502.call(null,msg_hist);
});})(seq__152483,chunk__152484,count__152485,i__152486,pl_152502,vec__152490,k,plugin,seq__152483__$1,temp__5278__auto__))
);
} else {
}

var G__152503 = cljs.core.next.call(null,seq__152483__$1);
var G__152504 = null;
var G__152505 = (0);
var G__152506 = (0);
seq__152483 = G__152503;
chunk__152484 = G__152504;
count__152485 = G__152505;
i__152486 = G__152506;
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
var G__152508 = arguments.length;
switch (G__152508) {
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

var seq__152509_152514 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__152510_152515 = null;
var count__152511_152516 = (0);
var i__152512_152517 = (0);
while(true){
if((i__152512_152517 < count__152511_152516)){
var msg_152518 = cljs.core._nth.call(null,chunk__152510_152515,i__152512_152517);
figwheel.client.socket.handle_incoming_message.call(null,msg_152518);

var G__152519 = seq__152509_152514;
var G__152520 = chunk__152510_152515;
var G__152521 = count__152511_152516;
var G__152522 = (i__152512_152517 + (1));
seq__152509_152514 = G__152519;
chunk__152510_152515 = G__152520;
count__152511_152516 = G__152521;
i__152512_152517 = G__152522;
continue;
} else {
var temp__5278__auto___152523 = cljs.core.seq.call(null,seq__152509_152514);
if(temp__5278__auto___152523){
var seq__152509_152524__$1 = temp__5278__auto___152523;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__152509_152524__$1)){
var c__50452__auto___152525 = cljs.core.chunk_first.call(null,seq__152509_152524__$1);
var G__152526 = cljs.core.chunk_rest.call(null,seq__152509_152524__$1);
var G__152527 = c__50452__auto___152525;
var G__152528 = cljs.core.count.call(null,c__50452__auto___152525);
var G__152529 = (0);
seq__152509_152514 = G__152526;
chunk__152510_152515 = G__152527;
count__152511_152516 = G__152528;
i__152512_152517 = G__152529;
continue;
} else {
var msg_152530 = cljs.core.first.call(null,seq__152509_152524__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_152530);

var G__152531 = cljs.core.next.call(null,seq__152509_152524__$1);
var G__152532 = null;
var G__152533 = (0);
var G__152534 = (0);
seq__152509_152514 = G__152531;
chunk__152510_152515 = G__152532;
count__152511_152516 = G__152533;
i__152512_152517 = G__152534;
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
var len__50798__auto___152539 = arguments.length;
var i__50799__auto___152540 = (0);
while(true){
if((i__50799__auto___152540 < len__50798__auto___152539)){
args__50805__auto__.push((arguments[i__50799__auto___152540]));

var G__152541 = (i__50799__auto___152540 + (1));
i__50799__auto___152540 = G__152541;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((0) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__50806__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__152536){
var map__152537 = p__152536;
var map__152537__$1 = ((((!((map__152537 == null)))?((((map__152537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__152537.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152537):map__152537);
var opts = map__152537__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq152535){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq152535));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e152542){if((e152542 instanceof Error)){
var e = e152542;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e152542;

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
return (function (p__152543){
var map__152544 = p__152543;
var map__152544__$1 = ((((!((map__152544 == null)))?((((map__152544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__152544.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152544):map__152544);
var msg_name = cljs.core.get.call(null,map__152544__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1509265456984
