(ns com.github.katievogel.reframe-practice.hello
  (:require [reagent.core :as r]))

;hello tab just static text

(defn hello-react-text []
  [:div
   [:h1 "Hello React!"]
   [:p "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."]
   [:p "Declarative views make your code more predictable and easier to debug."]])

