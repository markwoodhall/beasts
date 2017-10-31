// Compiled by ClojureScript 1.9.908 {}
goog.provide('beasts.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('beasts.data');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof beasts.core.app_state !== 'undefined'){
} else {
beasts.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Beasts of Beast Quest",new cljs.core.Keyword(null,"filters","filters",974726919),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"sort-by","sort-by",-322599303),null,new cljs.core.Keyword(null,"beasts","beasts",-846459732),beasts.data.all_beasts], null));
}
beasts.core.toggle_card = (function beasts$core$toggle_card(beasts__$1,id){
return cljs.core.map.call(null,(function (p1__3115386_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"beast-name","beast-name",-1258991623).cljs$core$IFn$_invoke$arity$1(p1__3115386_SHARP_),id)){
return cljs.core.update.call(null,p1__3115386_SHARP_,new cljs.core.Keyword(null,"card-visible?","card-visible?",1523955713),cljs.core.not);
} else {
return p1__3115386_SHARP_;
}
}),beasts__$1);
});
beasts.core.search_beasts = (function beasts$core$search_beasts(search,beasts__$1){
var search_lower = clojure.string.lower_case.call(null,search);
return cljs.core.map.call(null,((function (search_lower){
return (function (p1__3115421_SHARP_){
return cljs.core.assoc.call(null,p1__3115421_SHARP_,new cljs.core.Keyword(null,"visible?","visible?",2129863715),clojure.string.includes_QMARK_.call(null,clojure.string.lower_case.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"beast-name","beast-name",-1258991623).cljs$core$IFn$_invoke$arity$1(p1__3115421_SHARP_))),search_lower));
});})(search_lower))
,beasts__$1);
});
beasts.core.filter_beasts = (function beasts$core$filter_beasts(filters,filter_key,beasts__$1){
return cljs.core.map.call(null,(function (p1__3115473_SHARP_){
return cljs.core.assoc.call(null,p1__3115473_SHARP_,new cljs.core.Keyword(null,"visible?","visible?",2129863715),cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([filter_key.call(null,p1__3115473_SHARP_)]),filters));
}),beasts__$1);
});
beasts.core.sort_beasts = (function beasts$core$sort_beasts(sort_key,beasts__$1){
if(cljs.core._EQ_.call(null,sort_key,new cljs.core.Keyword(null,"total","total",1916810418))){
return cljs.core.reverse.call(null,cljs.core.sort.call(null,(function (a,b){
var sum_keys = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"age","age",-604307804),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"magic-level","magic-level",1970728713),new cljs.core.Keyword(null,"fright-factor","fright-factor",-1727457491)], null);
return cljs.core.compare.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,cljs.core.select_keys.call(null,a,sum_keys))),cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,cljs.core.select_keys.call(null,b,sum_keys))));
}),beasts__$1));
} else {
return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,sort_key,beasts__$1));
}
});
beasts.core.beast_title = (function beasts$core$beast_title(p__3115656){
var map__3115658 = p__3115656;
var map__3115658__$1 = ((((!((map__3115658 == null)))?((((map__3115658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3115658.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3115658):map__3115658);
var beast_name = cljs.core.get.call(null,map__3115658__$1,new cljs.core.Keyword(null,"beast-name","beast-name",-1258991623));
var allegiance = cljs.core.get.call(null,map__3115658__$1,new cljs.core.Keyword(null,"allegiance","allegiance",918520231));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.beast-name","h1.beast-name",2035617088),clojure.string.upper_case.call(null,cljs.core.name.call(null,beast_name)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),["images/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,allegiance)),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),"18px"], null)], null)], null);
});
beasts.core.beast_attribute = (function beasts$core$beast_attribute(desc,value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.score","h2.score",1109481896),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(desc),": "].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),value], null)], null);
});
beasts.core.front_beast_view = (function beasts$core$front_beast_view(p__3115839){
var map__3115847 = p__3115839;
var map__3115847__$1 = ((((!((map__3115847 == null)))?((((map__3115847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3115847.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3115847):map__3115847);
var card_visible_QMARK_ = cljs.core.get.call(null,map__3115847__$1,new cljs.core.Keyword(null,"card-visible?","card-visible?",1523955713));
var image = cljs.core.get.call(null,map__3115847__$1,new cljs.core.Keyword(null,"image","image",-58725096));
var beast_name = cljs.core.get.call(null,map__3115847__$1,new cljs.core.Keyword(null,"beast-name","beast-name",-1258991623));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(card_visible_QMARK_)?"front flipped":"front"),new cljs.core.Keyword(null,"key","key",-1516042587),["default",cljs.core.str.cljs$core$IFn$_invoke$arity$1(beast_name)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),["url('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(image),"')"].join(''),new cljs.core.Keyword(null,"background-size","background-size",-1248630243),"cover"], null)], null)], null);
});
beasts.core.visible_beast_view = (function beasts$core$visible_beast_view(p__3115948){
var map__3115952 = p__3115948;
var map__3115952__$1 = ((((!((map__3115952 == null)))?((((map__3115952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3115952.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3115952):map__3115952);
var beast = map__3115952__$1;
var card_visible_QMARK_ = cljs.core.get.call(null,map__3115952__$1,new cljs.core.Keyword(null,"card-visible?","card-visible?",1523955713));
var beast_name = cljs.core.get.call(null,map__3115952__$1,new cljs.core.Keyword(null,"beast-name","beast-name",-1258991623));
var power = cljs.core.get.call(null,map__3115952__$1,new cljs.core.Keyword(null,"power","power",-937852079));
var age = cljs.core.get.call(null,map__3115952__$1,new cljs.core.Keyword(null,"age","age",-604307804));
var size = cljs.core.get.call(null,map__3115952__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var magic_level = cljs.core.get.call(null,map__3115952__$1,new cljs.core.Keyword(null,"magic-level","magic-level",1970728713));
var fright_factor = cljs.core.get.call(null,map__3115952__$1,new cljs.core.Keyword(null,"fright-factor","fright-factor",-1727457491));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(card_visible_QMARK_)?"back flipped":"back"),new cljs.core.Keyword(null,"key","key",-1516042587),["visible",cljs.core.str.cljs$core$IFn$_invoke$arity$1(beast_name)].join('')], null),beasts.core.beast_title.call(null,beast),beasts.core.beast_attribute.call(null,"Power",power),beasts.core.beast_attribute.call(null,"Age",age),beasts.core.beast_attribute.call(null,"Size",size),beasts.core.beast_attribute.call(null,"Magic Level",magic_level),beasts.core.beast_attribute.call(null,"Fright Factor",fright_factor)], null);
});
beasts.core.click_beast = (function beasts$core$click_beast(app,beast,e){
return cljs.core.swap_BANG_.call(null,app,cljs.core.update,new cljs.core.Keyword(null,"beasts","beasts",-846459732),beasts.core.toggle_card,beast);
});
beasts.core.toggle_series_filter = (function beasts$core$toggle_series_filter(app,series,e){
if(cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([series]),new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app))))){
cljs.core.swap_BANG_.call(null,app,cljs.core.update,new cljs.core.Keyword(null,"filters","filters",974726919),cljs.core.conj,series);

cljs.core.swap_BANG_.call(null,app,cljs.core.update,new cljs.core.Keyword(null,"beasts","beasts",-846459732),cljs.core.partial.call(null,beasts.core.filter_beasts,new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app)),new cljs.core.Keyword(null,"series","series",600710694)));
} else {
cljs.core.swap_BANG_.call(null,app,cljs.core.update,new cljs.core.Keyword(null,"filters","filters",974726919),cljs.core.partial.call(null,cljs.core.remove,cljs.core.PersistentHashSet.createAsIfByAssoc([series])));

cljs.core.swap_BANG_.call(null,app,cljs.core.update,new cljs.core.Keyword(null,"beasts","beasts",-846459732),cljs.core.partial.call(null,beasts.core.filter_beasts,new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app)),new cljs.core.Keyword(null,"series","series",600710694)));
}

if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app)))){
return cljs.core.swap_BANG_.call(null,app,cljs.core.update,new cljs.core.Keyword(null,"beasts","beasts",-846459732),cljs.core.partial.call(null,beasts.core.filter_beasts,cljs.core.map.call(null,new cljs.core.Keyword(null,"series","series",600710694),new cljs.core.Keyword(null,"beasts","beasts",-846459732).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app))),new cljs.core.Keyword(null,"series","series",600710694)));
} else {
return null;
}
});
beasts.core.toggle_sort = (function beasts$core$toggle_sort(app,sort_key,e){
cljs.core.swap_BANG_.call(null,app,cljs.core.update,new cljs.core.Keyword(null,"beasts","beasts",-846459732),cljs.core.partial.call(null,beasts.core.sort_beasts,sort_key));

return cljs.core.swap_BANG_.call(null,app,cljs.core.assoc,new cljs.core.Keyword(null,"sort-by","sort-by",-322599303),sort_key);
});
beasts.core.render_beast = (function beasts$core$render_beast(app,p__3116418){
var map__3116420 = p__3116418;
var map__3116420__$1 = ((((!((map__3116420 == null)))?((((map__3116420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3116420.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3116420):map__3116420);
var beast = map__3116420__$1;
var beast_name = cljs.core.get.call(null,map__3116420__$1,new cljs.core.Keyword(null,"beast-name","beast-name",-1258991623));
var visible_QMARK_ = cljs.core.get.call(null,map__3116420__$1,new cljs.core.Keyword(null,"visible?","visible?",2129863715));
var card_visible_QMARK_ = cljs.core.get.call(null,map__3116420__$1,new cljs.core.Keyword(null,"card-visible?","card-visible?",1523955713));
if(cljs.core.truth_(visible_QMARK_)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xl-4.col-lg-6.col-md-6.col-sm-12.col-12.beast","div.col-xl-4.col-lg-6.col-md-6.col-sm-12.col-12.beast",-752785927),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name.call(null,beast_name),new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.call(null,beasts.core.click_beast,app,beast_name)], null),beasts.core.front_beast_view.call(null,beast),beasts.core.visible_beast_view.call(null,beast)], null);
} else {
return null;
}
});
beasts.core.search = (function beasts$core$search(app,e){
var search = e.target.value;
return cljs.core.swap_BANG_.call(null,app,cljs.core.update,new cljs.core.Keyword(null,"beasts","beasts",-846459732),cljs.core.partial.call(null,beasts.core.search_beasts,search));
});
beasts.core.render_search = (function beasts$core$render_search(app){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search.row","div.search.row",1099510170),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12","div.col-12",361685154),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,beasts.core.search,app),new cljs.core.Keyword(null,"key","key",-1516042587),"search",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search for a beast!"], null)], null)], null)], null);
});
beasts.core.render_filters = (function beasts$core$render_filters(app,beasts__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filters.row","div.filters.row",-1884316255),(function (){var series = cljs.core.sort_by.call(null,cljs.core.identity,cljs.core.distinct.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"series","series",600710694),beasts__$1)));
var state = cljs.core.deref.call(null,app);
return cljs.core.map.call(null,((function (series,state){
return (function (s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12.col-sm-12.col-md-2","div.col-12.col-sm-12.col-md-2",1536790213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),(function (){var filters = new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(state);
var css_class = (cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([s]),filters))?"selected":"");
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.call(null,beasts.core.toggle_series_filter,app,s),new cljs.core.Keyword(null,"key","key",-1516042587),["filter",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),["Series ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),css_class], null);
})()], null)], null);
});})(series,state))
,series);
})()], null);
});
beasts.core.render_sorts = (function beasts$core$render_sorts(app,beasts__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sorts.row","div.sorts.row",-1681435983),(function (){var attributes = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"age","age",-604307804),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"magic-level","magic-level",1970728713),new cljs.core.Keyword(null,"fright-factor","fright-factor",-1727457491),new cljs.core.Keyword(null,"total","total",1916810418),new cljs.core.Keyword(null,"allegiance","allegiance",918520231)], null);
var state = cljs.core.deref.call(null,app);
return cljs.core.map.call(null,((function (attributes,state){
return (function (s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12.col-sm-12.col-md-2","div.col-12.col-sm-12.col-md-2",1536790213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),(function (){var srt_by = new cljs.core.Keyword(null,"sort-by","sort-by",-322599303).cljs$core$IFn$_invoke$arity$1(state);
var css_class = ((cljs.core._EQ_.call(null,srt_by,s))?"selected":"");
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.call(null,beasts.core.toggle_sort,app,s),new cljs.core.Keyword(null,"key","key",-1516042587),["sort",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),["By ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,s))].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),css_class], null);
})()], null)], null);
});})(attributes,state))
,attributes);
})()], null);
});
beasts.core.beasts = (function beasts$core$beasts(app){
var map__3116976 = cljs.core.deref.call(null,app);
var map__3116976__$1 = ((((!((map__3116976 == null)))?((((map__3116976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3116976.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3116976):map__3116976);
var title = cljs.core.get.call(null,map__3116976__$1,new cljs.core.Keyword(null,"title","title",636505583));
var beasts__$1 = cljs.core.get.call(null,map__3116976__$1,new cljs.core.Keyword(null,"beasts","beasts",-846459732));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main","div.main",-117780813),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"main"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.logo","div.logo",281122689),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"images/card.png"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp","div.cp",2022650432),beasts.core.render_search.call(null,app),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"filters"], null),beasts.core.render_filters.call(null,app,beasts__$1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"sorts"], null),beasts.core.render_sorts.call(null,app,beasts__$1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.beasts.row","div.beasts.row",419703465),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"beasts"], null),cljs.core.map.call(null,cljs.core.partial.call(null,beasts.core.render_beast,app),beasts__$1)], null)], null);
});
if(typeof beasts.core.element !== 'undefined'){
} else {
beasts.core.element = document.getElementById("app");
}
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [beasts.core.beasts,beasts.core.app_state], null),beasts.core.element);
beasts.core.on_js_reload = (function beasts$core$on_js_reload(){
return cljs.core.swap_BANG_.call(null,beasts.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beasts","beasts",-846459732)], null),beasts.data.all_beasts);
});

//# sourceMappingURL=core.js.map?rel=1509461194849
