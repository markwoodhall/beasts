// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.pprint');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__50805__auto__ = [];
var len__50798__auto___60211 = arguments.length;
var i__50799__auto___60212 = (0);
while(true){
if((i__50799__auto___60212 < len__50798__auto___60211)){
args__50805__auto__.push((arguments[i__50799__auto___60212]));

var G__60213 = (i__50799__auto___60212 + (1));
i__50799__auto___60212 = G__60213;
continue;
} else {
}
break;
}

var argseq__50806__auto__ = ((((2) < args__50805__auto__.length))?(new cljs.core.IndexedSeq(args__50805__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__50806__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__60203_60214 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__60204_60215 = null;
var count__60205_60216 = (0);
var i__60206_60217 = (0);
while(true){
if((i__60206_60217 < count__60205_60216)){
var k_60218 = cljs.core._nth.call(null,chunk__60204_60215,i__60206_60217);
e.setAttribute(cljs.core.name.call(null,k_60218),cljs.core.get.call(null,attrs,k_60218));

var G__60219 = seq__60203_60214;
var G__60220 = chunk__60204_60215;
var G__60221 = count__60205_60216;
var G__60222 = (i__60206_60217 + (1));
seq__60203_60214 = G__60219;
chunk__60204_60215 = G__60220;
count__60205_60216 = G__60221;
i__60206_60217 = G__60222;
continue;
} else {
var temp__5278__auto___60223 = cljs.core.seq.call(null,seq__60203_60214);
if(temp__5278__auto___60223){
var seq__60203_60224__$1 = temp__5278__auto___60223;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60203_60224__$1)){
var c__50452__auto___60225 = cljs.core.chunk_first.call(null,seq__60203_60224__$1);
var G__60226 = cljs.core.chunk_rest.call(null,seq__60203_60224__$1);
var G__60227 = c__50452__auto___60225;
var G__60228 = cljs.core.count.call(null,c__50452__auto___60225);
var G__60229 = (0);
seq__60203_60214 = G__60226;
chunk__60204_60215 = G__60227;
count__60205_60216 = G__60228;
i__60206_60217 = G__60229;
continue;
} else {
var k_60230 = cljs.core.first.call(null,seq__60203_60224__$1);
e.setAttribute(cljs.core.name.call(null,k_60230),cljs.core.get.call(null,attrs,k_60230));

var G__60231 = cljs.core.next.call(null,seq__60203_60224__$1);
var G__60232 = null;
var G__60233 = (0);
var G__60234 = (0);
seq__60203_60214 = G__60231;
chunk__60204_60215 = G__60232;
count__60205_60216 = G__60233;
i__60206_60217 = G__60234;
continue;
}
} else {
}
}
break;
}

var seq__60207_60235 = cljs.core.seq.call(null,children);
var chunk__60208_60236 = null;
var count__60209_60237 = (0);
var i__60210_60238 = (0);
while(true){
if((i__60210_60238 < count__60209_60237)){
var ch_60239 = cljs.core._nth.call(null,chunk__60208_60236,i__60210_60238);
e.appendChild(ch_60239);

var G__60240 = seq__60207_60235;
var G__60241 = chunk__60208_60236;
var G__60242 = count__60209_60237;
var G__60243 = (i__60210_60238 + (1));
seq__60207_60235 = G__60240;
chunk__60208_60236 = G__60241;
count__60209_60237 = G__60242;
i__60210_60238 = G__60243;
continue;
} else {
var temp__5278__auto___60244 = cljs.core.seq.call(null,seq__60207_60235);
if(temp__5278__auto___60244){
var seq__60207_60245__$1 = temp__5278__auto___60244;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60207_60245__$1)){
var c__50452__auto___60246 = cljs.core.chunk_first.call(null,seq__60207_60245__$1);
var G__60247 = cljs.core.chunk_rest.call(null,seq__60207_60245__$1);
var G__60248 = c__50452__auto___60246;
var G__60249 = cljs.core.count.call(null,c__50452__auto___60246);
var G__60250 = (0);
seq__60207_60235 = G__60247;
chunk__60208_60236 = G__60248;
count__60209_60237 = G__60249;
i__60210_60238 = G__60250;
continue;
} else {
var ch_60251 = cljs.core.first.call(null,seq__60207_60245__$1);
e.appendChild(ch_60251);

var G__60252 = cljs.core.next.call(null,seq__60207_60245__$1);
var G__60253 = null;
var G__60254 = (0);
var G__60255 = (0);
seq__60207_60235 = G__60252;
chunk__60208_60236 = G__60253;
count__60209_60237 = G__60254;
i__60210_60238 = G__60255;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq60200){
var G__60201 = cljs.core.first.call(null,seq60200);
var seq60200__$1 = cljs.core.next.call(null,seq60200);
var G__60202 = cljs.core.first.call(null,seq60200__$1);
var seq60200__$2 = cljs.core.next.call(null,seq60200__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__60201,G__60202,seq60200__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__50574__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__50575__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__50576__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__50577__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__50578__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__50574__auto__,prefer_table__50575__auto__,method_cache__50576__auto__,cached_hierarchy__50577__auto__,hierarchy__50578__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__50574__auto__,prefer_table__50575__auto__,method_cache__50576__auto__,cached_hierarchy__50577__auto__,hierarchy__50578__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__50578__auto__,method_table__50574__auto__,prefer_table__50575__auto__,method_cache__50576__auto__,cached_hierarchy__50577__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cont_id)].join('')))){
var el_60256 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),["-webkit-transition: all 0.2s ease-in-out;","-moz-transition: all 0.2s ease-in-out;","-o-transition: all 0.2s ease-in-out;","transition: all 0.2s ease-in-out;","font-size: 13px;","border-top: 1px solid #f5f5f5;","box-shadow: 0px 0px 1px #aaaaaa;","line-height: 18px;","color: #333;","font-family: monospace;","padding: 0px 10px 0px 70px;","position: fixed;","bottom: 0px;","left: 0px;","height: 0px;","opacity: 0.0;","box-sizing: border-box;","z-index: 10000;","text-align: left;"].join('')], null));
el_60256.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_60256.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_60256.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_60256);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__60257,st_map){
var map__60258 = p__60257;
var map__60258__$1 = ((((!((map__60258 == null)))?((((map__60258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60258.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60258):map__60258);
var container_el = cljs.core.get.call(null,map__60258__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__60258,map__60258__$1,container_el){
return (function (p__60260){
var vec__60261 = p__60260;
var k = cljs.core.nth.call(null,vec__60261,(0),null);
var v = cljs.core.nth.call(null,vec__60261,(1),null);
return goog.object.set(container_el.style,cljs.core.name.call(null,k),v);
});})(map__60258,map__60258__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__60264,dom_str){
var map__60265 = p__60264;
var map__60265__$1 = ((((!((map__60265 == null)))?((((map__60265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60265.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60265):map__60265);
var c = map__60265__$1;
var content_area_el = cljs.core.get.call(null,map__60265__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__60267){
var map__60268 = p__60267;
var map__60268__$1 = ((((!((map__60268 == null)))?((((map__60268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60268.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60268):map__60268);
var content_area_el = cljs.core.get.call(null,map__60268__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return ["<a style=\"","float: right;","font-size: 18px;","text-decoration: none;","text-align: right;","width: 30px;","height: 30px;","color: rgba(84,84,84, 0.5);","\" href=\"#\"  data-figwheel-event=\"close-heads-up\">","x","</a>"].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__55486__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55486__auto__){
return (function (){
var f__55487__auto__ = (function (){var switch__55396__auto__ = ((function (c__55486__auto__){
return (function (state_60285){
var state_val_60286 = (state_60285[(1)]);
if((state_val_60286 === (1))){
var inst_60270 = (state_60285[(7)]);
var inst_60270__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_60271 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_60272 = ["10px","10px","100%","68px","1.0"];
var inst_60273 = cljs.core.PersistentHashMap.fromArrays(inst_60271,inst_60272);
var inst_60274 = cljs.core.merge.call(null,inst_60273,style);
var inst_60275 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_60270__$1,inst_60274);
var inst_60276 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_60270__$1,msg);
var inst_60277 = cljs.core.async.timeout.call(null,(300));
var state_60285__$1 = (function (){var statearr_60287 = state_60285;
(statearr_60287[(8)] = inst_60276);

(statearr_60287[(7)] = inst_60270__$1);

(statearr_60287[(9)] = inst_60275);

return statearr_60287;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60285__$1,(2),inst_60277);
} else {
if((state_val_60286 === (2))){
var inst_60270 = (state_60285[(7)]);
var inst_60279 = (state_60285[(2)]);
var inst_60280 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_60281 = ["auto"];
var inst_60282 = cljs.core.PersistentHashMap.fromArrays(inst_60280,inst_60281);
var inst_60283 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_60270,inst_60282);
var state_60285__$1 = (function (){var statearr_60288 = state_60285;
(statearr_60288[(10)] = inst_60279);

return statearr_60288;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60285__$1,inst_60283);
} else {
return null;
}
}
});})(c__55486__auto__))
;
return ((function (switch__55396__auto__,c__55486__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__55397__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__55397__auto____0 = (function (){
var statearr_60289 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_60289[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__55397__auto__);

(statearr_60289[(1)] = (1));

return statearr_60289;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__55397__auto____1 = (function (state_60285){
while(true){
var ret_value__55398__auto__ = (function (){try{while(true){
var result__55399__auto__ = switch__55396__auto__.call(null,state_60285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__55399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55399__auto__;
}
break;
}
}catch (e60290){if((e60290 instanceof Object)){
var ex__55400__auto__ = e60290;
var statearr_60291_60293 = state_60285;
(statearr_60291_60293[(5)] = ex__55400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__55398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60294 = state_60285;
state_60285 = G__60294;
continue;
} else {
return ret_value__55398__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__55397__auto__ = function(state_60285){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__55397__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__55397__auto____1.call(this,state_60285);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__55397__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__55397__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__55397__auto__;
})()
;})(switch__55396__auto__,c__55486__auto__))
})();
var state__55488__auto__ = (function (){var statearr_60292 = f__55487__auto__.call(null);
(statearr_60292[(6)] = c__55486__auto__);

return statearr_60292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55488__auto__);
});})(c__55486__auto__))
);

return c__55486__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var G__60296 = arguments.length;
switch (G__60296) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return ["<div style=\"","font-size: 26px;","line-height: 26px;","margin-bottom: 2px;","padding-top: 1px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," <span style=\"","display: inline-block;","font-size: 13px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),"</span></div>"].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return ["<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),"\" data-file-line=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"\" data-file-column=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),"\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__60298){
var map__60299 = p__60298;
var map__60299__$1 = ((((!((map__60299 == null)))?((((map__60299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60299.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60299):map__60299);
var file = cljs.core.get.call(null,map__60299__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__60299__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__60299__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__49521__auto__ = file;
if(cljs.core.truth_(or__49521__auto__)){
return or__49521__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),"</div>"].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return ["<span style='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),"'>","<span style='color: #757575;'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"  </span>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,line)),"</span>"].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__60301){
var vec__60302 = p__60301;
var typ = cljs.core.nth.call(null,vec__60302,(0),null);
var line_number = cljs.core.nth.call(null,vec__60302,(1),null);
var line = cljs.core.nth.call(null,vec__60302,(2),null);
var pred__60305 = cljs.core._EQ_;
var expr__60306 = typ;
if(cljs.core.truth_(pred__60305.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__60306))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__60305.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__60306))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__60305.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__60306))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))].join(''));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__60308_SHARP_){
return cljs.core.update_in.call(null,p1__60308_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return ["<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"," line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),"</pre>"].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__60309_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__60309_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__60312){
var map__60313 = p__60312;
var map__60313__$1 = ((((!((map__60313 == null)))?((((map__60313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60313.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60313):map__60313);
var exception = map__60313__$1;
var message = cljs.core.get.call(null,map__60313__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__60313__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__60313__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__60313__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__60313__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__60313__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__60313__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__60313__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__60313__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__60313__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__60313__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__49509__auto__ = file;
if(cljs.core.truth_(and__49509__auto__)){
return line;
} else {
return and__49509__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__60313,map__60313__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__60310_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__60310_SHARP_),"</div>"].join('');
});})(last_message,map__60313,map__60313__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),": "].join(''):"")),"<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),"</span>"].join(''),(cljs.core.truth_(display_ex_data)?["<pre>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.pprint_to_string.call(null,display_ex_data)),"</pre>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__60313,map__60313__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__60311_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__60311_SHARP_))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__60311_SHARP_)))].join('');
});})(last_message,map__60313,map__60313__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__60315){
var map__60316 = p__60315;
var map__60316__$1 = ((((!((map__60316 == null)))?((((map__60316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60316.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60316):map__60316);
var file = cljs.core.get.call(null,map__60316__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__60316__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__60316__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),new cljs.core.Keyword(null,"file-column","file-column",1543934780),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__60319 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__60319__$1 = ((((!((map__60319 == null)))?((((map__60319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60319.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60319):map__60319);
var head = cljs.core.get.call(null,map__60319__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__60319__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__60319__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__60319__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__60319__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__60319__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__60319__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__60322){
var map__60323 = p__60322;
var map__60323__$1 = ((((!((map__60323 == null)))?((((map__60323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60323.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60323):map__60323);
var warning_data = map__60323__$1;
var file = cljs.core.get.call(null,map__60323__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__60323__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__60323__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__60323__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__60323__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__49509__auto__ = file;
if(cljs.core.truth_(and__49509__auto__)){
return line;
} else {
return and__49509__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__60323,map__60323__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__60321_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__60321_SHARP_),"</div>"].join('');
});})(last_message,map__60323,map__60323__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?["<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),"</span>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),"<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__60325 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__60325__$1 = ((((!((map__60325 == null)))?((((map__60325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60325.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60325):map__60325);
var head = cljs.core.get.call(null,map__60325__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__60325__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__60325__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__60325__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__60325__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__60325__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__60325__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__60327){
var map__60328 = p__60327;
var map__60328__$1 = ((((!((map__60328 == null)))?((((map__60328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60328.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60328):map__60328);
var warning_data = map__60328__$1;
var message = cljs.core.get.call(null,map__60328__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__60328__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__60328__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__60328__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__60330 = message;
var G__60330__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60330)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__60330);
var G__60330__$2 = (cljs.core.truth_((function (){var and__49509__auto__ = line;
if(cljs.core.truth_(and__49509__auto__)){
return column;
} else {
return and__49509__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60330__$1),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__60330__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60330__$2)," in file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__60330__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__60331){
var map__60332 = p__60331;
var map__60332__$1 = ((((!((map__60332 == null)))?((((map__60332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60332.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60332):map__60332);
var warning_data = map__60332__$1;
var message = cljs.core.get.call(null,map__60332__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__60332__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__60332__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__60332__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__60334 = figwheel.client.heads_up.ensure_container.call(null);
var map__60334__$1 = ((((!((map__60334 == null)))?((((map__60334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60334.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60334):map__60334);
var content_area_el = cljs.core.get.call(null,map__60334__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__5278__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__5278__auto__)){
var last_child = temp__5278__auto__;
var temp__5276__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__5276__auto__)){
var message_count = temp__5276__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1)," more warnings have not been displayed ..."].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__55486__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55486__auto__){
return (function (){
var f__55487__auto__ = (function (){var switch__55396__auto__ = ((function (c__55486__auto__){
return (function (state_60353){
var state_val_60354 = (state_60353[(1)]);
if((state_val_60354 === (1))){
var inst_60336 = (state_60353[(7)]);
var inst_60336__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_60337 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_60338 = ["0.0"];
var inst_60339 = cljs.core.PersistentHashMap.fromArrays(inst_60337,inst_60338);
var inst_60340 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_60336__$1,inst_60339);
var inst_60341 = cljs.core.async.timeout.call(null,(300));
var state_60353__$1 = (function (){var statearr_60355 = state_60353;
(statearr_60355[(7)] = inst_60336__$1);

(statearr_60355[(8)] = inst_60340);

return statearr_60355;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60353__$1,(2),inst_60341);
} else {
if((state_val_60354 === (2))){
var inst_60336 = (state_60353[(7)]);
var inst_60343 = (state_60353[(2)]);
var inst_60344 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_60345 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_60346 = cljs.core.PersistentHashMap.fromArrays(inst_60344,inst_60345);
var inst_60347 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_60336,inst_60346);
var inst_60348 = cljs.core.async.timeout.call(null,(200));
var state_60353__$1 = (function (){var statearr_60356 = state_60353;
(statearr_60356[(9)] = inst_60347);

(statearr_60356[(10)] = inst_60343);

return statearr_60356;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60353__$1,(3),inst_60348);
} else {
if((state_val_60354 === (3))){
var inst_60336 = (state_60353[(7)]);
var inst_60350 = (state_60353[(2)]);
var inst_60351 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_60336,"");
var state_60353__$1 = (function (){var statearr_60357 = state_60353;
(statearr_60357[(11)] = inst_60350);

return statearr_60357;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60353__$1,inst_60351);
} else {
return null;
}
}
}
});})(c__55486__auto__))
;
return ((function (switch__55396__auto__,c__55486__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__55397__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__55397__auto____0 = (function (){
var statearr_60358 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60358[(0)] = figwheel$client$heads_up$clear_$_state_machine__55397__auto__);

(statearr_60358[(1)] = (1));

return statearr_60358;
});
var figwheel$client$heads_up$clear_$_state_machine__55397__auto____1 = (function (state_60353){
while(true){
var ret_value__55398__auto__ = (function (){try{while(true){
var result__55399__auto__ = switch__55396__auto__.call(null,state_60353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__55399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55399__auto__;
}
break;
}
}catch (e60359){if((e60359 instanceof Object)){
var ex__55400__auto__ = e60359;
var statearr_60360_60362 = state_60353;
(statearr_60360_60362[(5)] = ex__55400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__55398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60363 = state_60353;
state_60353 = G__60363;
continue;
} else {
return ret_value__55398__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__55397__auto__ = function(state_60353){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__55397__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__55397__auto____1.call(this,state_60353);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$clear_$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__55397__auto____0;
figwheel$client$heads_up$clear_$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__55397__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__55397__auto__;
})()
;})(switch__55396__auto__,c__55486__auto__))
})();
var state__55488__auto__ = (function (){var statearr_60361 = f__55487__auto__.call(null);
(statearr_60361[(6)] = c__55486__auto__);

return statearr_60361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55488__auto__);
});})(c__55486__auto__))
);

return c__55486__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__55486__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55486__auto__){
return (function (){
var f__55487__auto__ = (function (){var switch__55396__auto__ = ((function (c__55486__auto__){
return (function (state_60374){
var state_val_60375 = (state_60374[(1)]);
if((state_val_60375 === (1))){
var inst_60364 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_60374__$1 = state_60374;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60374__$1,(2),inst_60364);
} else {
if((state_val_60375 === (2))){
var inst_60366 = (state_60374[(2)]);
var inst_60367 = cljs.core.async.timeout.call(null,(400));
var state_60374__$1 = (function (){var statearr_60376 = state_60374;
(statearr_60376[(7)] = inst_60366);

return statearr_60376;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60374__$1,(3),inst_60367);
} else {
if((state_val_60375 === (3))){
var inst_60369 = (state_60374[(2)]);
var inst_60370 = figwheel.client.heads_up.clear.call(null);
var state_60374__$1 = (function (){var statearr_60377 = state_60374;
(statearr_60377[(8)] = inst_60369);

return statearr_60377;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60374__$1,(4),inst_60370);
} else {
if((state_val_60375 === (4))){
var inst_60372 = (state_60374[(2)]);
var state_60374__$1 = state_60374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60374__$1,inst_60372);
} else {
return null;
}
}
}
}
});})(c__55486__auto__))
;
return ((function (switch__55396__auto__,c__55486__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__55397__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__55397__auto____0 = (function (){
var statearr_60378 = [null,null,null,null,null,null,null,null,null];
(statearr_60378[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__55397__auto__);

(statearr_60378[(1)] = (1));

return statearr_60378;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__55397__auto____1 = (function (state_60374){
while(true){
var ret_value__55398__auto__ = (function (){try{while(true){
var result__55399__auto__ = switch__55396__auto__.call(null,state_60374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__55399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55399__auto__;
}
break;
}
}catch (e60379){if((e60379 instanceof Object)){
var ex__55400__auto__ = e60379;
var statearr_60380_60382 = state_60374;
(statearr_60380_60382[(5)] = ex__55400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__55398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60383 = state_60374;
state_60374 = G__60383;
continue;
} else {
return ret_value__55398__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__55397__auto__ = function(state_60374){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__55397__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__55397__auto____1.call(this,state_60374);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__55397__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__55397__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__55397__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__55397__auto__;
})()
;})(switch__55396__auto__,c__55486__auto__))
})();
var state__55488__auto__ = (function (){var statearr_60381 = f__55487__auto__.call(null);
(statearr_60381[(6)] = c__55486__auto__);

return statearr_60381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55488__auto__);
});})(c__55486__auto__))
);

return c__55486__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__5278__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__5278__auto__)){
var el = temp__5278__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": ["background-color: rgba(24, 26, 38, 0.95);","position: absolute;","z-index: 9000;","width: 100vw;","height: 100vh;","top: 0px; left: 0px;","font-family: monospace"].join('')}),goog.dom.createDom("div",({"class": "message", "style": ["color: #FFF5DB;","width: 100vw;","margin: auto;","margin-top: 10px;","text-align: center; ","padding: 2px 0px;","font-size: 13px;","position: relative"].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1509280898177
