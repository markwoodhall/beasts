(ns beasts.core
    (:require [clojure.string :as s :refer [includes? upper-case lower-case]] 
              [reagent.core :as r :refer [atom]]
              [beasts.data :refer [all-beasts]]))

(enable-console-print!)

(defonce app-state (atom {:title "Beasts of Beast Quest"
                          :filters []
                          :sort-by nil
                          :beasts all-beasts}))

(defn toggle-card
  [beasts id]
  (map #(if (= (:beast-name %) id)
          (update % :card-visible? not)
          %) beasts))

(defn search-beasts
  [search beasts]
  (let [search-lower (lower-case search)]
    (map #(assoc % :visible? (includes? (lower-case (name (:beast-name %))) search-lower)) beasts)))

(defn filter-beasts
  [filters filter-key beasts]
  (map #(assoc % :visible? (some #{(filter-key %)} filters)) beasts))

(defn sort-beasts
  [sort-key beasts]
  (if (= sort-key :total)
    (reverse (sort (fn [a b] 
                     (let [sum-keys [:power :age :size :magic-level :fright-factor]] 
                       (compare (reduce + (vals (select-keys a sum-keys)))
                          (reduce + (vals (select-keys b sum-keys)))))) beasts))
    (reverse (sort-by sort-key beasts))))

(defn beast-title
  [{:keys [beast-name allegiance]}]
  [:h1.beast-name
   (upper-case (name beast-name))
   [:img 
    {:src (str "images/" (name allegiance) ".png") :width "18px" }]])

(defn beast-attribute
  [desc value]
  [:h2.score
   (str desc ": ") 
   [:span 
    value]])

(defn front-beast-view
  [{:keys [card-visible? image beast-name]}]
  [:div
   {:class 
    (if card-visible? "front flipped" "front")
    :key (str "default" beast-name)
    :style
    {:background-image (str "url('" image "')") :background-size "cover"}}])

(defn visible-beast-view
  [{:keys [card-visible? beast-name power age size magic-level fright-factor] :as beast}]
  [:div
   {:class (if card-visible? "back flipped" "back")
    :key (str "visible" beast-name)}
   (beast-title beast)
   (beast-attribute "Power" power)
   (beast-attribute "Age" age)
   (beast-attribute "Size" size)
   (beast-attribute "Magic Level" magic-level)
   (beast-attribute "Fright Factor" fright-factor)])

(defn click-beast
  [app beast e]
  (swap! app update :beasts toggle-card beast))

(defn toggle-series-filter
  [app series e]
    (if-not (some #{series} (:filters @app))
      (do (swap! app update :filters conj series)
          (swap! app update :beasts (partial filter-beasts (:filters @app) :series))) 
      (do (swap! app update :filters (partial remove #{series}))
          (swap! app update :beasts (partial filter-beasts (:filters @app) :series))))
    (if (empty? (:filters @app))
      (swap! app update :beasts (partial filter-beasts (map :series (:beasts @app)) :series))))

(defn toggle-sort
  [app sort-key e]
  (swap! app update :beasts (partial sort-beasts sort-key))
  (swap! app assoc :sort-by sort-key))

(defn render-beast
  [app {:keys [beast-name visible? card-visible?] :as beast}] 
  (when visible?
    [:div.col-xl-4.col-lg-6.col-md-6.col-sm-12.col-12.beast
     {:key (name beast-name)
      :on-click (partial click-beast app beast-name)}
     (front-beast-view beast)
     (visible-beast-view beast)]))

(defn search
  [app e]
  (let [search (.-value (.-target e))]
    (swap! app update :beasts (partial search-beasts search))))
     
(defn render-search
  [app]
  [:div.search.row
   [:div.col-12
    [:input 
     {:on-change (partial search app) 
      :key "search"
      :type "text" 
      :placeholder "Search for a beast!"}]]]) 

(defn render-filters
  [app beasts]
  [:div.filters.row 
   (let [series (sort-by identity (distinct (map :series beasts)))
         state @app]
     (map (fn [s] [:div.col-12.col-sm-12.col-md-2
                   [:input
                    (let [filters (:filters state)
                          css-class (if (some #{s} filters) "selected" "")]
                      {:on-click (partial toggle-series-filter app s)
                       :key (str "filter" s)
                       :type "button" :value (str "Series "  s)
                       :class css-class})]]) series))])

(defn render-sorts
  [app beasts]
  [:div.sorts.row
   (let [attributes [:age :size :power :magic-level :fright-factor :total :allegiance]
         state @app]
     (map (fn [s] [:div.col-12.col-sm-12.col-md-2
                   [:input
                    (let [srt-by (:sort-by state)
                          css-class (if (= srt-by s) "selected" "")]
                      {:on-click (partial toggle-sort app s)
                       :key (str "sort" s)
                       :type "button" :value (str "By "  (name s))
                       :class css-class})]]) attributes))])

(defn beasts 
  [app]
  (let [{:keys [title beasts]} @app]
    [:div.main
     {:key "main"}
     [:div
      [:div.logo
       [:img {:src "images/card.png" }]]]
       [:div.cp 
        (render-search app)
       [:div 
        {:key "filters"}
        (render-filters app beasts)]
       [:div 
        {:key "sorts"}
        (render-sorts app beasts)]]
       [:div.beasts.row
        {:key "beasts"} 
        (map (partial render-beast app) beasts)]]))

(defonce element (. js/document (getElementById "app")))
(r/render-component [beasts app-state] element)

(defn on-js-reload []
  (swap! app-state update-in [:beasts] all-beasts))
