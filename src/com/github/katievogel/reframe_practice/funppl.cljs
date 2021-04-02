(ns com.github.katievogel.reframe-practice.funppl)

;fun people needs name, reason, add person button, populates card on dom, default value for no people
;cards on fun people need some template text and removal button

(defn fun-people []
  [:div.container
   [:h1 "List of Fun People"]
   [:div.box
    [:form
     [:div.field
      [:label.label "Name"]
      [:div.control
       [:input.input.is-medium]]]
     [:div.field
      [:label.label "Reason they are fun"]
      [:div.control
       [:input.input.is-medium]]]
     [:div.field
      [:button.btn.btn-primary.is-medium "Add Fun Person"]]]]])