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
var x63165_63166 = value;
x63165_63166.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


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
var x63168_63169 = value;
x63168_63169.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


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
var x63171_63172 = value;
x63171_63172.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


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
var len__50798__auto___63179 = arguments.length;
var i__50799__auto___63180 = (0);
while(true){
if((i__50799__auto___63180 < len__50798__auto___63179)){
args__50805__auto__.push((arguments[i__50799__auto___63180]));

var G__63181 = (i__50799__auto___63180 + (1));
i__50799__auto___63180 = G__63181;
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
var seq__63175_63182 = cljs.core.seq.call(null,items);
var chunk__63176_63183 = null;
var count__63177_63184 = (0);
var i__63178_63185 = (0);
while(true){
if((i__63178_63185 < count__63177_63184)){
var item_63186 = cljs.core._nth.call(null,chunk__63176_63183,i__63178_63185);
if(!((item_63186 == null))){
if(cljs.core.coll_QMARK_.call(null,item_63186)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_63186)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_63186));
}
} else {
}

var G__63187 = seq__63175_63182;
var G__63188 = chunk__63176_63183;
var G__63189 = count__63177_63184;
var G__63190 = (i__63178_63185 + (1));
seq__63175_63182 = G__63187;
chunk__63176_63183 = G__63188;
count__63177_63184 = G__63189;
i__63178_63185 = G__63190;
continue;
} else {
var temp__5278__auto___63191 = cljs.core.seq.call(null,seq__63175_63182);
if(temp__5278__auto___63191){
var seq__63175_63192__$1 = temp__5278__auto___63191;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63175_63192__$1)){
var c__50452__auto___63193 = cljs.core.chunk_first.call(null,seq__63175_63192__$1);
var G__63194 = cljs.core.chunk_rest.call(null,seq__63175_63192__$1);
var G__63195 = c__50452__auto___63193;
var G__63196 = cljs.core.count.call(null,c__50452__auto___63193);
var G__63197 = (0);
seq__63175_63182 = G__63194;
chunk__63176_63183 = G__63195;
count__63177_63184 = G__63196;
i__63178_63185 = G__63197;
continue;
} else {
var item_63198 = cljs.core.first.call(null,seq__63175_63192__$1);
if(!((item_63198 == null))){
if(cljs.core.coll_QMARK_.call(null,item_63198)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_63198)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_63198));
}
} else {
}

var G__63199 = cljs.core.next.call(null,seq__63175_63192__$1);
var G__63200 = null;
var G__63201 = (0);
var G__63202 = (0);
seq__63175_63182 = G__63199;
chunk__63176_63183 = G__63200;
count__63177_63184 = G__63201;
i__63178_63185 = G__63202;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq63174){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq63174));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__50805__auto__ = [];
var len__50798__auto___63210 = arguments.length;
var i__50799__auto___63211 = (0);
while(true){
if((i__50799__auto___63211 < len__50798__auto___63210)){
args__50805__auto__.push((arguments[i__50799__auto___63211]));

var G__63212 = (i__50799__auto___63211 + (1));
i__50799__auto___63211 = G__63212;
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
var seq__63206_63213 = cljs.core.seq.call(null,children);
var chunk__63207_63214 = null;
var count__63208_63215 = (0);
var i__63209_63216 = (0);
while(true){
if((i__63209_63216 < count__63208_63215)){
var child_63217 = cljs.core._nth.call(null,chunk__63207_63214,i__63209_63216);
if(!((child_63217 == null))){
if(cljs.core.coll_QMARK_.call(null,child_63217)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_63217))));
} else {
var temp__5276__auto___63218 = devtools.formatters.helpers.pref.call(null,child_63217);
if(cljs.core.truth_(temp__5276__auto___63218)){
var child_value_63219 = temp__5276__auto___63218;
template.push(child_value_63219);
} else {
}
}
} else {
}

var G__63220 = seq__63206_63213;
var G__63221 = chunk__63207_63214;
var G__63222 = count__63208_63215;
var G__63223 = (i__63209_63216 + (1));
seq__63206_63213 = G__63220;
chunk__63207_63214 = G__63221;
count__63208_63215 = G__63222;
i__63209_63216 = G__63223;
continue;
} else {
var temp__5278__auto___63224 = cljs.core.seq.call(null,seq__63206_63213);
if(temp__5278__auto___63224){
var seq__63206_63225__$1 = temp__5278__auto___63224;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63206_63225__$1)){
var c__50452__auto___63226 = cljs.core.chunk_first.call(null,seq__63206_63225__$1);
var G__63227 = cljs.core.chunk_rest.call(null,seq__63206_63225__$1);
var G__63228 = c__50452__auto___63226;
var G__63229 = cljs.core.count.call(null,c__50452__auto___63226);
var G__63230 = (0);
seq__63206_63213 = G__63227;
chunk__63207_63214 = G__63228;
count__63208_63215 = G__63229;
i__63209_63216 = G__63230;
continue;
} else {
var child_63231 = cljs.core.first.call(null,seq__63206_63225__$1);
if(!((child_63231 == null))){
if(cljs.core.coll_QMARK_.call(null,child_63231)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_63231))));
} else {
var temp__5276__auto___63232 = devtools.formatters.helpers.pref.call(null,child_63231);
if(cljs.core.truth_(temp__5276__auto___63232)){
var child_value_63233 = temp__5276__auto___63232;
template.push(child_value_63233);
} else {
}
}
} else {
}

var G__63234 = cljs.core.next.call(null,seq__63206_63225__$1);
var G__63235 = null;
var G__63236 = (0);
var G__63237 = (0);
seq__63206_63213 = G__63234;
chunk__63207_63214 = G__63235;
count__63208_63215 = G__63236;
i__63209_63216 = G__63237;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq63203){
var G__63204 = cljs.core.first.call(null,seq63203);
var seq63203__$1 = cljs.core.next.call(null,seq63203);
var G__63205 = cljs.core.first.call(null,seq63203__$1);
var seq63203__$2 = cljs.core.next.call(null,seq63203__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__63204,G__63205,seq63203__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__50805__auto__ = [];
var len__50798__auto___63240 = arguments.length;
var i__50799__auto___63241 = (0);
while(true){
if((i__50799__auto___63241 < len__50798__auto___63240)){
args__50805__auto__.push((arguments[i__50799__auto___63241]));

var G__63242 = (i__50799__auto___63241 + (1));
i__50799__auto___63241 = G__63242;
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

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq63238){
var G__63239 = cljs.core.first.call(null,seq63238);
var seq63238__$1 = cljs.core.next.call(null,seq63238);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__63239,seq63238__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__50805__auto__ = [];
var len__50798__auto___63245 = arguments.length;
var i__50799__auto___63246 = (0);
while(true){
if((i__50799__auto___63246 < len__50798__auto___63245)){
args__50805__auto__.push((arguments[i__50799__auto___63246]));

var G__63247 = (i__50799__auto___63246 + (1));
i__50799__auto___63246 = G__63247;
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

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq63243){
var G__63244 = cljs.core.first.call(null,seq63243);
var seq63243__$1 = cljs.core.next.call(null,seq63243);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__63244,seq63243__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__63249 = arguments.length;
switch (G__63249) {
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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj63251 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__49521__auto__ = start_index;
if(cljs.core.truth_(or__49521__auto__)){
return or__49521__auto__;
} else {
return (0);
}
})()};
return obj63251;
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
var len__50798__auto___63259 = arguments.length;
var i__50799__auto___63260 = (0);
while(true){
if((i__50799__auto___63260 < len__50798__auto___63259)){
args__50805__auto__.push((arguments[i__50799__auto___63260]));

var G__63261 = (i__50799__auto___63260 + (1));
i__50799__auto___63260 = G__63261;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((1) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__50806__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__63255){
var vec__63256 = p__63255;
var state_override_fn = cljs.core.nth.call(null,vec__63256,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq63253){
var G__63254 = cljs.core.first.call(null,seq63253);
var seq63253__$1 = cljs.core.next.call(null,seq63253);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__63254,seq63253__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_63262 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_63262;
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
var G__63263 = name;
switch (G__63263) {
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
var vec__63265 = tag;
var html_tag = cljs.core.nth.call(null,vec__63265,(0),null);
var style = cljs.core.nth.call(null,vec__63265,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_63268 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_63268;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_63269 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_63270 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_63270;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_63269;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__63271 = initial_value;
var G__63272 = value.call(null);
initial_value = G__63271;
value = G__63272;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__63273 = initial_value;
var G__63274 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__63273;
value = G__63274;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__63275 = initial_value;
var G__63276 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__63275;
value = G__63276;
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

//# sourceMappingURL=templating.js.map?rel=1509280900780
