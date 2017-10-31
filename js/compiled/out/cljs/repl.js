// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__3261142){
var map__3261143 = p__3261142;
var map__3261143__$1 = ((((!((map__3261143 == null)))?((((map__3261143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3261143.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3261143):map__3261143);
var m = map__3261143__$1;
var n = cljs.core.get.call(null,map__3261143__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__3261143__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__3261145_3261167 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__3261146_3261168 = null;
var count__3261147_3261169 = (0);
var i__3261148_3261170 = (0);
while(true){
if((i__3261148_3261170 < count__3261147_3261169)){
var f_3261171 = cljs.core._nth.call(null,chunk__3261146_3261168,i__3261148_3261170);
cljs.core.println.call(null,"  ",f_3261171);

var G__3261172 = seq__3261145_3261167;
var G__3261173 = chunk__3261146_3261168;
var G__3261174 = count__3261147_3261169;
var G__3261175 = (i__3261148_3261170 + (1));
seq__3261145_3261167 = G__3261172;
chunk__3261146_3261168 = G__3261173;
count__3261147_3261169 = G__3261174;
i__3261148_3261170 = G__3261175;
continue;
} else {
var temp__5278__auto___3261176 = cljs.core.seq.call(null,seq__3261145_3261167);
if(temp__5278__auto___3261176){
var seq__3261145_3261177__$1 = temp__5278__auto___3261176;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3261145_3261177__$1)){
var c__50452__auto___3261178 = cljs.core.chunk_first.call(null,seq__3261145_3261177__$1);
var G__3261179 = cljs.core.chunk_rest.call(null,seq__3261145_3261177__$1);
var G__3261180 = c__50452__auto___3261178;
var G__3261181 = cljs.core.count.call(null,c__50452__auto___3261178);
var G__3261182 = (0);
seq__3261145_3261167 = G__3261179;
chunk__3261146_3261168 = G__3261180;
count__3261147_3261169 = G__3261181;
i__3261148_3261170 = G__3261182;
continue;
} else {
var f_3261183 = cljs.core.first.call(null,seq__3261145_3261177__$1);
cljs.core.println.call(null,"  ",f_3261183);

var G__3261184 = cljs.core.next.call(null,seq__3261145_3261177__$1);
var G__3261185 = null;
var G__3261186 = (0);
var G__3261187 = (0);
seq__3261145_3261167 = G__3261184;
chunk__3261146_3261168 = G__3261185;
count__3261147_3261169 = G__3261186;
i__3261148_3261170 = G__3261187;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_3261188 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__49521__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__49521__auto__)){
return or__49521__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_3261188);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_3261188)))?cljs.core.second.call(null,arglists_3261188):arglists_3261188));
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
var seq__3261149_3261189 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__3261150_3261190 = null;
var count__3261151_3261191 = (0);
var i__3261152_3261192 = (0);
while(true){
if((i__3261152_3261192 < count__3261151_3261191)){
var vec__3261153_3261193 = cljs.core._nth.call(null,chunk__3261150_3261190,i__3261152_3261192);
var name_3261194 = cljs.core.nth.call(null,vec__3261153_3261193,(0),null);
var map__3261156_3261195 = cljs.core.nth.call(null,vec__3261153_3261193,(1),null);
var map__3261156_3261196__$1 = ((((!((map__3261156_3261195 == null)))?((((map__3261156_3261195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3261156_3261195.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3261156_3261195):map__3261156_3261195);
var doc_3261197 = cljs.core.get.call(null,map__3261156_3261196__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_3261198 = cljs.core.get.call(null,map__3261156_3261196__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_3261194);

cljs.core.println.call(null," ",arglists_3261198);

if(cljs.core.truth_(doc_3261197)){
cljs.core.println.call(null," ",doc_3261197);
} else {
}

var G__3261199 = seq__3261149_3261189;
var G__3261200 = chunk__3261150_3261190;
var G__3261201 = count__3261151_3261191;
var G__3261202 = (i__3261152_3261192 + (1));
seq__3261149_3261189 = G__3261199;
chunk__3261150_3261190 = G__3261200;
count__3261151_3261191 = G__3261201;
i__3261152_3261192 = G__3261202;
continue;
} else {
var temp__5278__auto___3261203 = cljs.core.seq.call(null,seq__3261149_3261189);
if(temp__5278__auto___3261203){
var seq__3261149_3261204__$1 = temp__5278__auto___3261203;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3261149_3261204__$1)){
var c__50452__auto___3261205 = cljs.core.chunk_first.call(null,seq__3261149_3261204__$1);
var G__3261206 = cljs.core.chunk_rest.call(null,seq__3261149_3261204__$1);
var G__3261207 = c__50452__auto___3261205;
var G__3261208 = cljs.core.count.call(null,c__50452__auto___3261205);
var G__3261209 = (0);
seq__3261149_3261189 = G__3261206;
chunk__3261150_3261190 = G__3261207;
count__3261151_3261191 = G__3261208;
i__3261152_3261192 = G__3261209;
continue;
} else {
var vec__3261158_3261210 = cljs.core.first.call(null,seq__3261149_3261204__$1);
var name_3261211 = cljs.core.nth.call(null,vec__3261158_3261210,(0),null);
var map__3261161_3261212 = cljs.core.nth.call(null,vec__3261158_3261210,(1),null);
var map__3261161_3261213__$1 = ((((!((map__3261161_3261212 == null)))?((((map__3261161_3261212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3261161_3261212.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3261161_3261212):map__3261161_3261212);
var doc_3261214 = cljs.core.get.call(null,map__3261161_3261213__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_3261215 = cljs.core.get.call(null,map__3261161_3261213__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_3261211);

cljs.core.println.call(null," ",arglists_3261215);

if(cljs.core.truth_(doc_3261214)){
cljs.core.println.call(null," ",doc_3261214);
} else {
}

var G__3261216 = cljs.core.next.call(null,seq__3261149_3261204__$1);
var G__3261217 = null;
var G__3261218 = (0);
var G__3261219 = (0);
seq__3261149_3261189 = G__3261216;
chunk__3261150_3261190 = G__3261217;
count__3261151_3261191 = G__3261218;
i__3261152_3261192 = G__3261219;
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

var seq__3261163 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__3261164 = null;
var count__3261165 = (0);
var i__3261166 = (0);
while(true){
if((i__3261166 < count__3261165)){
var role = cljs.core._nth.call(null,chunk__3261164,i__3261166);
var temp__5278__auto___3261220__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___3261220__$1)){
var spec_3261221 = temp__5278__auto___3261220__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_3261221));
} else {
}

var G__3261222 = seq__3261163;
var G__3261223 = chunk__3261164;
var G__3261224 = count__3261165;
var G__3261225 = (i__3261166 + (1));
seq__3261163 = G__3261222;
chunk__3261164 = G__3261223;
count__3261165 = G__3261224;
i__3261166 = G__3261225;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__3261163);
if(temp__5278__auto____$1){
var seq__3261163__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3261163__$1)){
var c__50452__auto__ = cljs.core.chunk_first.call(null,seq__3261163__$1);
var G__3261226 = cljs.core.chunk_rest.call(null,seq__3261163__$1);
var G__3261227 = c__50452__auto__;
var G__3261228 = cljs.core.count.call(null,c__50452__auto__);
var G__3261229 = (0);
seq__3261163 = G__3261226;
chunk__3261164 = G__3261227;
count__3261165 = G__3261228;
i__3261166 = G__3261229;
continue;
} else {
var role = cljs.core.first.call(null,seq__3261163__$1);
var temp__5278__auto___3261230__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___3261230__$2)){
var spec_3261231 = temp__5278__auto___3261230__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_3261231));
} else {
}

var G__3261232 = cljs.core.next.call(null,seq__3261163__$1);
var G__3261233 = null;
var G__3261234 = (0);
var G__3261235 = (0);
seq__3261163 = G__3261232;
chunk__3261164 = G__3261233;
count__3261165 = G__3261234;
i__3261166 = G__3261235;
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

//# sourceMappingURL=repl.js.map?rel=1509468960268
