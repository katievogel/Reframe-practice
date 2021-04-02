(ns com.github.katievogel.reframe-practice.paragraph
  (:require [com.github.katievogel.reframe-practice.state :refer [initial-state]]
            [re-frame.core :as rf]))

;paragraphs tab add and remove paragraph -- info goes to app-db

(def lorem-ipsum "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Vivamus faucibus at magna sit amet tristique.
Suspendisse ut varius dui, tincidunt semper sapien.
Nullam bibendum eros lectus, eu posuere velit ultrices sed.
Proin consectetur lacus nec metus ullamcorper, ac tempus felis eleifend.
Donec eu euismod nisl. Morbi fringilla justo sit amet blandit dictum.
Fusce sollicitudin ipsum ut mauris posuere pharetra.
Praesent vitae elit nec ex placerat faucibus a in diam.
Sed bibendum sit amet dui at facilisis.
Vivamus vitae felis lacinia, gravida lectus id, placerat ipsum.
Interdum et malesuada fames ac ante ipsum primis in faucibus.
Integer feugiat, sem in interdum tempor, nisi enim mollis nibh, luctus laoreet massa ligula nec ex.")

(defn ParagraphText []
  [:p.paragraph-text lorem-ipsum])

(rf/reg-event-db
  :para-state
  (fn [_db _event]
    initial-state))

(rf/reg-sub
  :get-paragraph-count
  (fn [db [_]]
    (:para-count db)))

(rf/reg-event-db
  :p-counter-inc
  (fn [db [_]]
    (update db :para-count inc)))

(rf/reg-event-db
  :p-counter-dec
  (fn [db [_]]
    (update db :para-count dec)))

(defn paragraphs []
  [:div
   [:h1 "Number of Lorem Ipsum paragraphs: "
    @(rf/subscribe :get-paragraph-count)]
   [:button.btn.btn-primary.add-para {:on-click #(rf/dispatch [:p-counter-inc])}
    "Add Paragraph"]
   [:button.btn.btn-primary.rem-para {:on-click #(rf/dispatch [:p-counter-dec])}
    "Remove Paragraph"]
   [ParagraphText]])



