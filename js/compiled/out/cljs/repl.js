// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__60098){
var map__60099 = p__60098;
var map__60099__$1 = ((((!((map__60099 == null)))?((((map__60099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60099.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60099):map__60099);
var m = map__60099__$1;
var n = cljs.core.get.call(null,map__60099__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__60099__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5278__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5278__auto__)){
var ns = temp__5278__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__60101_60123 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__60102_60124 = null;
var count__60103_60125 = (0);
var i__60104_60126 = (0);
while(true){
if((i__60104_60126 < count__60103_60125)){
var f_60127 = cljs.core._nth.call(null,chunk__60102_60124,i__60104_60126);
cljs.core.println.call(null,"  ",f_60127);

var G__60128 = seq__60101_60123;
var G__60129 = chunk__60102_60124;
var G__60130 = count__60103_60125;
var G__60131 = (i__60104_60126 + (1));
seq__60101_60123 = G__60128;
chunk__60102_60124 = G__60129;
count__60103_60125 = G__60130;
i__60104_60126 = G__60131;
continue;
} else {
var temp__5278__auto___60132 = cljs.core.seq.call(null,seq__60101_60123);
if(temp__5278__auto___60132){
var seq__60101_60133__$1 = temp__5278__auto___60132;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60101_60133__$1)){
var c__50452__auto___60134 = cljs.core.chunk_first.call(null,seq__60101_60133__$1);
var G__60135 = cljs.core.chunk_rest.call(null,seq__60101_60133__$1);
var G__60136 = c__50452__auto___60134;
var G__60137 = cljs.core.count.call(null,c__50452__auto___60134);
var G__60138 = (0);
seq__60101_60123 = G__60135;
chunk__60102_60124 = G__60136;
count__60103_60125 = G__60137;
i__60104_60126 = G__60138;
continue;
} else {
var f_60139 = cljs.core.first.call(null,seq__60101_60133__$1);
cljs.core.println.call(null,"  ",f_60139);

var G__60140 = cljs.core.next.call(null,seq__60101_60133__$1);
var G__60141 = null;
var G__60142 = (0);
var G__60143 = (0);
seq__60101_60123 = G__60140;
chunk__60102_60124 = G__60141;
count__60103_60125 = G__60142;
i__60104_60126 = G__60143;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_60144 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__49521__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__49521__auto__)){
return or__49521__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_60144);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_60144)))?cljs.core.second.call(null,arglists_60144):arglists_60144));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__60105_60145 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__60106_60146 = null;
var count__60107_60147 = (0);
var i__60108_60148 = (0);
while(true){
if((i__60108_60148 < count__60107_60147)){
var vec__60109_60149 = cljs.core._nth.call(null,chunk__60106_60146,i__60108_60148);
var name_60150 = cljs.core.nth.call(null,vec__60109_60149,(0),null);
var map__60112_60151 = cljs.core.nth.call(null,vec__60109_60149,(1),null);
var map__60112_60152__$1 = ((((!((map__60112_60151 == null)))?((((map__60112_60151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60112_60151.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60112_60151):map__60112_60151);
var doc_60153 = cljs.core.get.call(null,map__60112_60152__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_60154 = cljs.core.get.call(null,map__60112_60152__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_60150);

cljs.core.println.call(null," ",arglists_60154);

if(cljs.core.truth_(doc_60153)){
cljs.core.println.call(null," ",doc_60153);
} else {
}

var G__60155 = seq__60105_60145;
var G__60156 = chunk__60106_60146;
var G__60157 = count__60107_60147;
var G__60158 = (i__60108_60148 + (1));
seq__60105_60145 = G__60155;
chunk__60106_60146 = G__60156;
count__60107_60147 = G__60157;
i__60108_60148 = G__60158;
continue;
} else {
var temp__5278__auto___60159 = cljs.core.seq.call(null,seq__60105_60145);
if(temp__5278__auto___60159){
var seq__60105_60160__$1 = temp__5278__auto___60159;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60105_60160__$1)){
var c__50452__auto___60161 = cljs.core.chunk_first.call(null,seq__60105_60160__$1);
var G__60162 = cljs.core.chunk_rest.call(null,seq__60105_60160__$1);
var G__60163 = c__50452__auto___60161;
var G__60164 = cljs.core.count.call(null,c__50452__auto___60161);
var G__60165 = (0);
seq__60105_60145 = G__60162;
chunk__60106_60146 = G__60163;
count__60107_60147 = G__60164;
i__60108_60148 = G__60165;
continue;
} else {
var vec__60114_60166 = cljs.core.first.call(null,seq__60105_60160__$1);
var name_60167 = cljs.core.nth.call(null,vec__60114_60166,(0),null);
var map__60117_60168 = cljs.core.nth.call(null,vec__60114_60166,(1),null);
var map__60117_60169__$1 = ((((!((map__60117_60168 == null)))?((((map__60117_60168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60117_60168.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60117_60168):map__60117_60168);
var doc_60170 = cljs.core.get.call(null,map__60117_60169__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_60171 = cljs.core.get.call(null,map__60117_60169__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_60167);

cljs.core.println.call(null," ",arglists_60171);

if(cljs.core.truth_(doc_60170)){
cljs.core.println.call(null," ",doc_60170);
} else {
}

var G__60172 = cljs.core.next.call(null,seq__60105_60160__$1);
var G__60173 = null;
var G__60174 = (0);
var G__60175 = (0);
seq__60105_60145 = G__60172;
chunk__60106_60146 = G__60173;
count__60107_60147 = G__60174;
i__60108_60148 = G__60175;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5278__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5278__auto__)){
var fnspec = temp__5278__auto__;
cljs.core.print.call(null,"Spec");

var seq__60119 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__60120 = null;
var count__60121 = (0);
var i__60122 = (0);
while(true){
if((i__60122 < count__60121)){
var role = cljs.core._nth.call(null,chunk__60120,i__60122);
var temp__5278__auto___60176__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___60176__$1)){
var spec_60177 = temp__5278__auto___60176__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_60177));
} else {
}

var G__60178 = seq__60119;
var G__60179 = chunk__60120;
var G__60180 = count__60121;
var G__60181 = (i__60122 + (1));
seq__60119 = G__60178;
chunk__60120 = G__60179;
count__60121 = G__60180;
i__60122 = G__60181;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__60119);
if(temp__5278__auto____$1){
var seq__60119__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60119__$1)){
var c__50452__auto__ = cljs.core.chunk_first.call(null,seq__60119__$1);
var G__60182 = cljs.core.chunk_rest.call(null,seq__60119__$1);
var G__60183 = c__50452__auto__;
var G__60184 = cljs.core.count.call(null,c__50452__auto__);
var G__60185 = (0);
seq__60119 = G__60182;
chunk__60120 = G__60183;
count__60121 = G__60184;
i__60122 = G__60185;
continue;
} else {
var role = cljs.core.first.call(null,seq__60119__$1);
var temp__5278__auto___60186__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___60186__$2)){
var spec_60187 = temp__5278__auto___60186__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_60187));
} else {
}

var G__60188 = cljs.core.next.call(null,seq__60119__$1);
var G__60189 = null;
var G__60190 = (0);
var G__60191 = (0);
seq__60119 = G__60188;
chunk__60120 = G__60189;
count__60121 = G__60190;
i__60122 = G__60191;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1509280898034
