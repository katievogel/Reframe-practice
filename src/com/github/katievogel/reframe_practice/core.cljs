(ns com.github.katievogel.reframe-practice.core
  (:require
    [com.github.katievogel.reframe-practice.funppl :as funppl]
    [com.github.katievogel.reframe-practice.hello :as hello]
    [com.github.katievogel.reframe-practice.login :as login]
    [com.github.katievogel.reframe-practice.paragraph :as paragraph]
    [com.github.katievogel.reframe-practice.views :refer [ReframePracticeApp]]
    [goog.dom :as gdom]
    [goog.functions :as gfunctions]
    [oops.core :refer [ocall]]
    [re-frame.core :as rf]
    [reagent.dom :as reagent-dom]))

(def app-container-el (gdom/getElement "appContainer"))

;(defn on-refresh
;  (rf/clear-subscription-cache!)
;  (reagent-dom/force-update-all))

(def begin-render!
  (gfunctions/once
    (fn []
      (reagent-dom/render [(var ReframePracticeApp)] app-container-el))))

(defn init! []
  (println "it's running")
  (begin-render!))

(ocall js/window "addEventListener" "load" init!)