// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.edn');
goog.require('goog.string.StringBuffer');
cljs.reader.zero_fill_right_and_truncate = (function cljs$reader$zero_fill_right_and_truncate(s,width){
if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s))){
return s;
} else {
if((width < cljs.core.count.call(null,s))){
return cljs.core.subs.call(null,s,(0),width);
} else {
var b = (new goog.string.StringBuffer(s));
while(true){
if((b.getLength() < width)){
var G__150120 = b.append("0");
b = G__150120;
continue;
} else {
return b.toString();
}
break;
}

}
}
});
cljs.reader.divisible_QMARK_ = (function cljs$reader$divisible_QMARK_(num,div){
return (cljs.core.mod.call(null,num,div) === (0));
});
cljs.reader.indivisible_QMARK_ = (function cljs$reader$indivisible_QMARK_(num,div){
return cljs.core.not.call(null,cljs.reader.divisible_QMARK_.call(null,num,div));
});
cljs.reader.leap_year_QMARK_ = (function cljs$reader$leap_year_QMARK_(year){
var and__49509__auto__ = cljs.reader.divisible_QMARK_.call(null,year,(4));
if(cljs.core.truth_(and__49509__auto__)){
var or__49521__auto__ = cljs.reader.indivisible_QMARK_.call(null,year,(100));
if(cljs.core.truth_(or__49521__auto__)){
return or__49521__auto__;
} else {
return cljs.reader.divisible_QMARK_.call(null,year,(400));
}
} else {
return and__49509__auto__;
}
});
cljs.reader.days_in_month = (function (){var dim_norm = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
var dim_leap = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(29),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
return ((function (dim_norm,dim_leap){
return (function (month,leap_year_QMARK_){
return cljs.core.get.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month);
});
;})(dim_norm,dim_leap))
})();
cljs.reader.timestamp_regex = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
cljs.reader.parse_int = (function cljs$reader$parse_int(s){
var n = parseInt(s,(10));
if(cljs.core.not.call(null,isNaN(n))){
return n;
} else {
return null;
}
});
cljs.reader.check = (function cljs$reader$check(low,n,high,msg){
if(((low <= n)) && ((n <= high))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)," Failed:  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(low),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(high)].join('')));
}

return n;
});
cljs.reader.parse_and_validate_timestamp = (function cljs$reader$parse_and_validate_timestamp(s){
var vec__150121 = cljs.core.re_matches.call(null,cljs.reader.timestamp_regex,s);
var _ = cljs.core.nth.call(null,vec__150121,(0),null);
var years = cljs.core.nth.call(null,vec__150121,(1),null);
var months = cljs.core.nth.call(null,vec__150121,(2),null);
var days = cljs.core.nth.call(null,vec__150121,(3),null);
var hours = cljs.core.nth.call(null,vec__150121,(4),null);
var minutes = cljs.core.nth.call(null,vec__150121,(5),null);
var seconds = cljs.core.nth.call(null,vec__150121,(6),null);
var fraction = cljs.core.nth.call(null,vec__150121,(7),null);
var offset_sign = cljs.core.nth.call(null,vec__150121,(8),null);
var offset_hours = cljs.core.nth.call(null,vec__150121,(9),null);
var offset_minutes = cljs.core.nth.call(null,vec__150121,(10),null);
var v = vec__150121;
if(cljs.core.not.call(null,v)){
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')));
} else {
var years__$1 = cljs.reader.parse_int.call(null,years);
var months__$1 = (function (){var or__49521__auto__ = cljs.reader.parse_int.call(null,months);
if(cljs.core.truth_(or__49521__auto__)){
return or__49521__auto__;
} else {
return (1);
}
})();
var days__$1 = (function (){var or__49521__auto__ = cljs.reader.parse_int.call(null,days);
if(cljs.core.truth_(or__49521__auto__)){
return or__49521__auto__;
} else {
return (1);
}
})();
var hours__$1 = (function (){var or__49521__auto__ = cljs.reader.parse_int.call(null,hours);
if(cljs.core.truth_(or__49521__auto__)){
return or__49521__auto__;
} else {
return (0);
}
})();
var minutes__$1 = (function (){var or__49521__auto__ = cljs.reader.parse_int.call(null,minutes);
if(cljs.core.truth_(or__49521__auto__)){
return or__49521__auto__;
} else {
return (0);
}
})();
var seconds__$1 = (function (){var or__49521__auto__ = cljs.reader.parse_int.call(null,seconds);
if(cljs.core.truth_(or__49521__auto__)){
return or__49521__auto__;
} else {
return (0);
}
})();
var fraction__$1 = (function (){var or__49521__auto__ = cljs.reader.parse_int.call(null,cljs.reader.zero_fill_right_and_truncate.call(null,fraction,(3)));
if(cljs.core.truth_(or__49521__auto__)){
return or__49521__auto__;
} else {
return (0);
}
})();
var offset_sign__$1 = ((cljs.core._EQ_.call(null,offset_sign,"-"))?(-1):(1));
var offset_hours__$1 = (function (){var or__49521__auto__ = cljs.reader.parse_int.call(null,offset_hours);
if(cljs.core.truth_(or__49521__auto__)){
return or__49521__auto__;
} else {
return (0);
}
})();
var offset_minutes__$1 = (function (){var or__49521__auto__ = cljs.reader.parse_int.call(null,offset_minutes);
if(cljs.core.truth_(or__49521__auto__)){
return or__49521__auto__;
} else {
return (0);
}
})();
var offset = (offset_sign__$1 * ((offset_hours__$1 * (60)) + offset_minutes__$1));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [years__$1,cljs.reader.check.call(null,(1),months__$1,(12),"timestamp month field must be in range 1..12"),cljs.reader.check.call(null,(1),days__$1,cljs.reader.days_in_month.call(null,months__$1,cljs.reader.leap_year_QMARK_.call(null,years__$1)),"timestamp day field must be in range 1..last day in month"),cljs.reader.check.call(null,(0),hours__$1,(23),"timestamp hour field must be in range 0..23"),cljs.reader.check.call(null,(0),minutes__$1,(59),"timestamp minute field must be in range 0..59"),cljs.reader.check.call(null,(0),seconds__$1,((cljs.core._EQ_.call(null,minutes__$1,(59)))?(60):(59)),"timestamp second field must be in range 0..60"),cljs.reader.check.call(null,(0),fraction__$1,(999),"timestamp millisecond field must be in range 0..999"),offset], null);
}
});
cljs.reader.parse_timestamp = (function cljs$reader$parse_timestamp(ts){
var temp__5276__auto__ = cljs.reader.parse_and_validate_timestamp.call(null,ts);
if(cljs.core.truth_(temp__5276__auto__)){
var vec__150124 = temp__5276__auto__;
var years = cljs.core.nth.call(null,vec__150124,(0),null);
var months = cljs.core.nth.call(null,vec__150124,(1),null);
var days = cljs.core.nth.call(null,vec__150124,(2),null);
var hours = cljs.core.nth.call(null,vec__150124,(3),null);
var minutes = cljs.core.nth.call(null,vec__150124,(4),null);
var seconds = cljs.core.nth.call(null,vec__150124,(5),null);
var ms = cljs.core.nth.call(null,vec__150124,(6),null);
var offset = cljs.core.nth.call(null,vec__150124,(7),null);
return (new Date((Date.UTC(years,(months - (1)),days,hours,minutes,seconds,ms) - ((offset * (60)) * (1000)))));
} else {
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join('')));
}
});
cljs.reader.read_date = (function cljs$reader$read_date(s){
if(typeof s === 'string'){
return cljs.reader.parse_timestamp.call(null,s);
} else {
throw (new Error("Instance literal expects a string for its timestamp."));
}
});
cljs.reader.read_queue = (function cljs$reader$read_queue(elems){
if(cljs.core.vector_QMARK_.call(null,elems)){
return cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,elems);
} else {
throw (new Error("Queue literal expects a vector for its elements."));
}
});
cljs.reader.read_js = (function cljs$reader$read_js(form){
if(cljs.core.vector_QMARK_.call(null,form)){
var arr = [];
var seq__150127_150143 = cljs.core.seq.call(null,form);
var chunk__150128_150144 = null;
var count__150129_150145 = (0);
var i__150130_150146 = (0);
while(true){
if((i__150130_150146 < count__150129_150145)){
var x_150147 = cljs.core._nth.call(null,chunk__150128_150144,i__150130_150146);
arr.push(x_150147);

var G__150148 = seq__150127_150143;
var G__150149 = chunk__150128_150144;
var G__150150 = count__150129_150145;
var G__150151 = (i__150130_150146 + (1));
seq__150127_150143 = G__150148;
chunk__150128_150144 = G__150149;
count__150129_150145 = G__150150;
i__150130_150146 = G__150151;
continue;
} else {
var temp__5278__auto___150152 = cljs.core.seq.call(null,seq__150127_150143);
if(temp__5278__auto___150152){
var seq__150127_150153__$1 = temp__5278__auto___150152;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__150127_150153__$1)){
var c__50452__auto___150154 = cljs.core.chunk_first.call(null,seq__150127_150153__$1);
var G__150155 = cljs.core.chunk_rest.call(null,seq__150127_150153__$1);
var G__150156 = c__50452__auto___150154;
var G__150157 = cljs.core.count.call(null,c__50452__auto___150154);
var G__150158 = (0);
seq__150127_150143 = G__150155;
chunk__150128_150144 = G__150156;
count__150129_150145 = G__150157;
i__150130_150146 = G__150158;
continue;
} else {
var x_150159 = cljs.core.first.call(null,seq__150127_150153__$1);
arr.push(x_150159);

var G__150160 = cljs.core.next.call(null,seq__150127_150153__$1);
var G__150161 = null;
var G__150162 = (0);
var G__150163 = (0);
seq__150127_150143 = G__150160;
chunk__150128_150144 = G__150161;
count__150129_150145 = G__150162;
i__150130_150146 = G__150163;
continue;
}
} else {
}
}
break;
}

return arr;
} else {
if(cljs.core.map_QMARK_.call(null,form)){
var obj = {};
var seq__150133_150164 = cljs.core.seq.call(null,form);
var chunk__150134_150165 = null;
var count__150135_150166 = (0);
var i__150136_150167 = (0);
while(true){
if((i__150136_150167 < count__150135_150166)){
var vec__150137_150168 = cljs.core._nth.call(null,chunk__150134_150165,i__150136_150167);
var k_150169 = cljs.core.nth.call(null,vec__150137_150168,(0),null);
var v_150170 = cljs.core.nth.call(null,vec__150137_150168,(1),null);
goog.object.set(obj,cljs.core.name.call(null,k_150169),v_150170);

var G__150171 = seq__150133_150164;
var G__150172 = chunk__150134_150165;
var G__150173 = count__150135_150166;
var G__150174 = (i__150136_150167 + (1));
seq__150133_150164 = G__150171;
chunk__150134_150165 = G__150172;
count__150135_150166 = G__150173;
i__150136_150167 = G__150174;
continue;
} else {
var temp__5278__auto___150175 = cljs.core.seq.call(null,seq__150133_150164);
if(temp__5278__auto___150175){
var seq__150133_150176__$1 = temp__5278__auto___150175;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__150133_150176__$1)){
var c__50452__auto___150177 = cljs.core.chunk_first.call(null,seq__150133_150176__$1);
var G__150178 = cljs.core.chunk_rest.call(null,seq__150133_150176__$1);
var G__150179 = c__50452__auto___150177;
var G__150180 = cljs.core.count.call(null,c__50452__auto___150177);
var G__150181 = (0);
seq__150133_150164 = G__150178;
chunk__150134_150165 = G__150179;
count__150135_150166 = G__150180;
i__150136_150167 = G__150181;
continue;
} else {
var vec__150140_150182 = cljs.core.first.call(null,seq__150133_150176__$1);
var k_150183 = cljs.core.nth.call(null,vec__150140_150182,(0),null);
var v_150184 = cljs.core.nth.call(null,vec__150140_150182,(1),null);
goog.object.set(obj,cljs.core.name.call(null,k_150183),v_150184);

var G__150185 = cljs.core.next.call(null,seq__150133_150176__$1);
var G__150186 = null;
var G__150187 = (0);
var G__150188 = (0);
seq__150133_150164 = G__150185;
chunk__150134_150165 = G__150186;
count__150135_150166 = G__150187;
i__150136_150167 = G__150188;
continue;
}
} else {
}
}
break;
}

return obj;
} else {
throw (new Error(["JS literal expects a vector or map containing ","only string or unqualified keyword keys"].join('')));

}
}
});
cljs.reader.read_uuid = (function cljs$reader$read_uuid(uuid){
if(typeof uuid === 'string'){
return cljs.core.uuid.call(null,uuid);
} else {
throw (new Error("UUID literal expects a string as its representation."));
}
});
cljs.reader._STAR_default_data_reader_fn_STAR_ = cljs.core.atom.call(null,null);
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"inst","inst",-2008473268,null),cljs.reader.read_date,new cljs.core.Symbol(null,"uuid","uuid",-504564192,null),cljs.reader.read_uuid,new cljs.core.Symbol(null,"queue","queue",-1198599890,null),cljs.reader.read_queue,new cljs.core.Symbol(null,"js","js",-886355190,null),cljs.reader.read_js], null),cljs.core.PersistentArrayMap.EMPTY));
/**
 * Reads the first object from an cljs.tools.reader.reader-types/IPushbackReader.
 * Returns the object read. If EOF, throws if eof-error? is true otherwise returns eof.
 * If no reader is provided, *in* will be used.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * cljs.tools.reader.edn/read doesn't depend on dynamic Vars, all configuration
 * is done by passing an opt map.
 * 
 * opts is a map that can include the following keys:
 * :eof - value to return on end-of-file. When not supplied, eof throws an exception.
 * :readers  - a map of tag symbols to data-reader functions to be considered before default-data-readers.
 *            When not supplied, only the default-data-readers will be used.
 * :default - A function of two args, that will, if present and no reader is found for a tag,
 *            be called with the tag and the value.
 */
cljs.reader.read = (function cljs$reader$read(var_args){
var G__150190 = arguments.length;
switch (G__150190) {
case 1:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.reader.read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return cljs.tools.reader.edn.read.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_),new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),reader);
});

cljs.reader.read.cljs$core$IFn$_invoke$arity$2 = (function (p__150191,reader){
var map__150192 = p__150191;
var map__150192__$1 = ((((!((map__150192 == null)))?((((map__150192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__150192.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__150192):map__150192);
var opts = map__150192__$1;
var eof = cljs.core.get.call(null,map__150192__$1,new cljs.core.Keyword(null,"eof","eof",-489063237));
return cljs.tools.reader.edn.read.call(null,cljs.core.update.call(null,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_)], null)),new cljs.core.Keyword(null,"readers","readers",-2118263030),((function (map__150192,map__150192__$1,opts,eof){
return (function (m){
return cljs.core.merge.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),m);
});})(map__150192,map__150192__$1,opts,eof))
),reader);
});

cljs.reader.read.cljs$core$IFn$_invoke$arity$4 = (function (reader,eof_error_QMARK_,eof,opts){
return cljs.tools.reader.edn.read.call(null,reader,eof_error_QMARK_,eof,cljs.core.update.call(null,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_)], null)),new cljs.core.Keyword(null,"readers","readers",-2118263030),(function (m){
return cljs.core.merge.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),m);
})));
});

cljs.reader.read.cljs$lang$maxFixedArity = 4;

/**
 * Reads one object from the string s.
 * Returns nil when s is nil or empty.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * opts is a map as per cljs.tools.reader.edn/read
 */
cljs.reader.read_string = (function cljs$reader$read_string(var_args){
var G__150196 = arguments.length;
switch (G__150196) {
case 1:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.tools.reader.edn.read_string.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_),new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),s);
});

cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
return cljs.tools.reader.edn.read_string.call(null,cljs.core.update.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_)], null),opts),new cljs.core.Keyword(null,"readers","readers",-2118263030),(function (m){
return cljs.core.merge.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),m);
})),s);
});

cljs.reader.read_string.cljs$lang$maxFixedArity = 2;

cljs.reader.register_tag_parser_BANG_ = (function cljs$reader$register_tag_parser_BANG_(tag,f){
var old_parser = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag,f);

return old_parser;
});
cljs.reader.deregister_tag_parser_BANG_ = (function cljs$reader$deregister_tag_parser_BANG_(tag){
var old_parser = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag);

return old_parser;
});
cljs.reader.register_default_tag_parser_BANG_ = (function cljs$reader$register_default_tag_parser_BANG_(f){
var old_parser = cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return f;
});})(old_parser))
);

return old_parser;
});
cljs.reader.deregister_default_tag_parser_BANG_ = (function cljs$reader$deregister_default_tag_parser_BANG_(){
var old_parser = cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return null;
});})(old_parser))
);

return old_parser;
});

//# sourceMappingURL=reader.js.map?rel=1509265455298
