(ns com.github.katievogel.reframe-practice.login)

;log needs username and password entry and login button function -- info goes to app-db


(defn login []
  [:div.box
   [:h1.title "Login"]
   [:form
    [:div.field
     [:label.label "Username"]
     [:div.control
      [:input.input.is-medium]]]
    [:div.field
     [:label.label "Password"]
     [:div.control
      [:input.input.is-medium]]]
    [:div.field
     [:div.control
      [:button.btn.btn-primary.is-medium "Submit"]]]]])