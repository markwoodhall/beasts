// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__151776){
var map__151777 = p__151776;
var map__151777__$1 = ((((!((map__151777 == null)))?((((map__151777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__151777.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151777):map__151777);
var m = map__151777__$1;
var n = cljs.core.get.call(null,map__151777__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__151777__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__151779_151801 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__151780_151802 = null;
var count__151781_151803 = (0);
var i__151782_151804 = (0);
while(true){
if((i__151782_151804 < count__151781_151803)){
var f_151805 = cljs.core._nth.call(null,chunk__151780_151802,i__151782_151804);
cljs.core.println.call(null,"  ",f_151805);

var G__151806 = seq__151779_151801;
var G__151807 = chunk__151780_151802;
var G__151808 = count__151781_151803;
var G__151809 = (i__151782_151804 + (1));
seq__151779_151801 = G__151806;
chunk__151780_151802 = G__151807;
count__151781_151803 = G__151808;
i__151782_151804 = G__151809;
continue;
} else {
var temp__5278__auto___151810 = cljs.core.seq.call(null,seq__151779_151801);
if(temp__5278__auto___151810){
var seq__151779_151811__$1 = temp__5278__auto___151810;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__151779_151811__$1)){
var c__50452__auto___151812 = cljs.core.chunk_first.call(null,seq__151779_151811__$1);
var G__151813 = cljs.core.chunk_rest.call(null,seq__151779_151811__$1);
var G__151814 = c__50452__auto___151812;
var G__151815 = cljs.core.count.call(null,c__50452__auto___151812);
var G__151816 = (0);
seq__151779_151801 = G__151813;
chunk__151780_151802 = G__151814;
count__151781_151803 = G__151815;
i__151782_151804 = G__151816;
continue;
} else {
var f_151817 = cljs.core.first.call(null,seq__151779_151811__$1);
cljs.core.println.call(null,"  ",f_151817);

var G__151818 = cljs.core.next.call(null,seq__151779_151811__$1);
var G__151819 = null;
var G__151820 = (0);
var G__151821 = (0);
seq__151779_151801 = G__151818;
chunk__151780_151802 = G__151819;
count__151781_151803 = G__151820;
i__151782_151804 = G__151821;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_151822 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__49521__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__49521__auto__)){
return or__49521__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_151822);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_151822)))?cljs.core.second.call(null,arglists_151822):arglists_151822));
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
var seq__151783_151823 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__151784_151824 = null;
var count__151785_151825 = (0);
var i__151786_151826 = (0);
while(true){
if((i__151786_151826 < count__151785_151825)){
var vec__151787_151827 = cljs.core._nth.call(null,chunk__151784_151824,i__151786_151826);
var name_151828 = cljs.core.nth.call(null,vec__151787_151827,(0),null);
var map__151790_151829 = cljs.core.nth.call(null,vec__151787_151827,(1),null);
var map__151790_151830__$1 = ((((!((map__151790_151829 == null)))?((((map__151790_151829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__151790_151829.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151790_151829):map__151790_151829);
var doc_151831 = cljs.core.get.call(null,map__151790_151830__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_151832 = cljs.core.get.call(null,map__151790_151830__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_151828);

cljs.core.println.call(null," ",arglists_151832);

if(cljs.core.truth_(doc_151831)){
cljs.core.println.call(null," ",doc_151831);
} else {
}

var G__151833 = seq__151783_151823;
var G__151834 = chunk__151784_151824;
var G__151835 = count__151785_151825;
var G__151836 = (i__151786_151826 + (1));
seq__151783_151823 = G__151833;
chunk__151784_151824 = G__151834;
count__151785_151825 = G__151835;
i__151786_151826 = G__151836;
continue;
} else {
var temp__5278__auto___151837 = cljs.core.seq.call(null,seq__151783_151823);
if(temp__5278__auto___151837){
var seq__151783_151838__$1 = temp__5278__auto___151837;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__151783_151838__$1)){
var c__50452__auto___151839 = cljs.core.chunk_first.call(null,seq__151783_151838__$1);
var G__151840 = cljs.core.chunk_rest.call(null,seq__151783_151838__$1);
var G__151841 = c__50452__auto___151839;
var G__151842 = cljs.core.count.call(null,c__50452__auto___151839);
var G__151843 = (0);
seq__151783_151823 = G__151840;
chunk__151784_151824 = G__151841;
count__151785_151825 = G__151842;
i__151786_151826 = G__151843;
continue;
} else {
var vec__151792_151844 = cljs.core.first.call(null,seq__151783_151838__$1);
var name_151845 = cljs.core.nth.call(null,vec__151792_151844,(0),null);
var map__151795_151846 = cljs.core.nth.call(null,vec__151792_151844,(1),null);
var map__151795_151847__$1 = ((((!((map__151795_151846 == null)))?((((map__151795_151846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__151795_151846.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151795_151846):map__151795_151846);
var doc_151848 = cljs.core.get.call(null,map__151795_151847__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_151849 = cljs.core.get.call(null,map__151795_151847__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_151845);

cljs.core.println.call(null," ",arglists_151849);

if(cljs.core.truth_(doc_151848)){
cljs.core.println.call(null," ",doc_151848);
} else {
}

var G__151850 = cljs.core.next.call(null,seq__151783_151838__$1);
var G__151851 = null;
var G__151852 = (0);
var G__151853 = (0);
seq__151783_151823 = G__151850;
chunk__151784_151824 = G__151851;
count__151785_151825 = G__151852;
i__151786_151826 = G__151853;
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

var seq__151797 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__151798 = null;
var count__151799 = (0);
var i__151800 = (0);
while(true){
if((i__151800 < count__151799)){
var role = cljs.core._nth.call(null,chunk__151798,i__151800);
var temp__5278__auto___151854__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___151854__$1)){
var spec_151855 = temp__5278__auto___151854__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_151855));
} else {
}

var G__151856 = seq__151797;
var G__151857 = chunk__151798;
var G__151858 = count__151799;
var G__151859 = (i__151800 + (1));
seq__151797 = G__151856;
chunk__151798 = G__151857;
count__151799 = G__151858;
i__151800 = G__151859;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__151797);
if(temp__5278__auto____$1){
var seq__151797__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__151797__$1)){
var c__50452__auto__ = cljs.core.chunk_first.call(null,seq__151797__$1);
var G__151860 = cljs.core.chunk_rest.call(null,seq__151797__$1);
var G__151861 = c__50452__auto__;
var G__151862 = cljs.core.count.call(null,c__50452__auto__);
var G__151863 = (0);
seq__151797 = G__151860;
chunk__151798 = G__151861;
count__151799 = G__151862;
i__151800 = G__151863;
continue;
} else {
var role = cljs.core.first.call(null,seq__151797__$1);
var temp__5278__auto___151864__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___151864__$2)){
var spec_151865 = temp__5278__auto___151864__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_151865));
} else {
}

var G__151866 = cljs.core.next.call(null,seq__151797__$1);
var G__151867 = null;
var G__151868 = (0);
var G__151869 = (0);
seq__151797 = G__151866;
chunk__151798 = G__151867;
count__151799 = G__151868;
i__151800 = G__151869;
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

//# sourceMappingURL=repl.js.map?rel=1509265456627
