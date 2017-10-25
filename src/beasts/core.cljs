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
  (map #(assoc % :visible? (includes? (lower-case (name (:beast-name %))) (lower-case search))) beasts))

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
  [{:keys [beast-name]}]
  [:h1.beast-name
   (upper-case (name beast-name))])

(defn beast-attribute
  [desc value]
  [:h2.score
   (str desc ": ") 
   [:span 
    value]])

(defn front-beast-view
  [{:keys [card-visible? image beast-name]}]
  [:div
   {:class (if card-visible? "front flipped" "front")
    :key (str "default" beast-name)
    :style
    {:background-image (str "url('" image "')")}}])

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
    [:div.beast 
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
  [:div 
   {:style {:margin-left "auto" :margin-right "auto" :width "1020px" }}
   [:input 
    {:on-change (partial search app) 
     :key "search"
     :type "text" 
     :placeholder "Search for a beast!"
     :style 
     {:height "40px" :font-size "28px" :width "980px"
      :padding "4px 4px" :margin-bottom "30px"}}]])

(defn render-filters
  [app beasts]
  [:div 
   {:style {:margin-left "auto" :margin-right "auto" :width "1000px" }}
   (let [series (sort-by identity (distinct (map :series beasts)))
         state @app]
     (map (fn [s] [:input
                   (let [filters (:filters state)
                         background (if (some #{s} filters) "#EB9725" "")]
                     {:on-click (partial toggle-series-filter app s)
                      :key (str "filter" s)
                      :type "button" :value (str "Series "  s)
                      :style 
                      {:font-size "28px" :padding "2px" 
                       :margin "8px" :background-color background}})]) series))])

(defn render-sorts
  [app beasts]
  [:div 
   {:style {:margin-left "auto" :margin-right "auto" :width "1000px" }}
   (let [attributes [:age :size :power :magic-level :fright-factor :total]
         state @app]
     (map (fn [s] [:input
                   (let [srt-by (:sort-by state)
                         background (if (= srt-by s) "#EB9725" "")]
                     {:on-click (partial toggle-sort app s)
                      :key (str "sort" s)
                      :type "button" :value (str "Sort by "  (name s))
                      :style 
                      {:font-size "28px" :padding "2px" 
                       :margin "8px" :background-color background}})]) attributes))])

(defn beasts 
  [app]
  (let [{:keys [title beasts]} @app]
    [:div 
     {:key "main"
      :style 
      {:margin-left "auto" :margin-right "auto" :width "95%"}} 
     [:div 
      {:style 
       { :margin-left "auto" :margin-right "auto" :padding "20px" 
        :margin-bottom "20px" :width "250px"}} 
      [:img {:src "images/card.png" }]]
     (render-search app)
     [:div 
      {:key "filters"}
      (render-filters app beasts)]
     [:div 
      {:key "sorts"}
      (render-sorts app beasts)]
     [:div 
      {:key "beasts"
       :style 
       {:margin-left "auto" :margin-right "auto" :margin-top "50px" :width "1030px"}} 
      (map (partial render-beast app) beasts)]]))

(defonce element (. js/document (getElementById "app")))
(r/render-component [beasts app-state] element)
