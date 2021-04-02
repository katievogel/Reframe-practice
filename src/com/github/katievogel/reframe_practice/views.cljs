(ns com.github.katievogel.reframe-practice.views
  (:require [com.github.katievogel.reframe-practice.hello :refer [hello-react-text]]
            [com.github.katievogel.reframe-practice.paragraph :refer [paragraphs]]
            [com.github.katievogel.reframe-practice.login :refer [login]]
            [com.github.katievogel.reframe-practice.funppl :refer [fun-people]]
            [com.github.katievogel.reframe-practice.state :refer [initial-state]]
            [re-frame.core :as rf]))

(defn TabRow []
  [:div
   [:ul.nav.nav-tabs
    [:li.nav-item
     [:a.nav-link.hello-react {:on-click #(rf/dispatch [:tab-focus :hello-react])}
      "Hello React"]]
    [:li.nav-item
     [:a.nav-link.paragraph {:on-click #(rf/dispatch [:tab-focus :paragraph])}
      "Lorem Ipsum"]]
    [:li.nav-item
     [:a.nav-link.login {:on-click #(rf/dispatch [:tab-focus :login])}
      "Login Form"]]
    [:li.nav-item
     [:a.nav-link.fun-ppl {:on-click #(rf/dispatch [:tab-focus :fun-ppl])}
      "Fun People"]]]])

(rf/reg-sub
  :get-active-tab
  (fn [db [_]]
    (:active-tab db)))

(rf/reg-sub
  :get-db
  (fn [db [_]]
    db))

(defn TabContent []
  (let [active-tab @(rf/subscribe [:get-active-tab])]
    (cond (= active-tab :hello-react) [hello-react-text]
          (= active-tab :paragraph) [paragraphs]
          (= active-tab :login) [login]
          (= active-tab :fun-ppl) [fun-people])))

(defn ReframePracticeApp []
  [:div
   [:h1 "my app"]
   [TabRow]
   [TabContent]
   [:pre (pr-str @(rf/subscribe [:get-db]))]])

(rf/reg-event-db
  :tab-focus
  (fn [db [_ tab]]
    (assoc db :active-tab tab)))