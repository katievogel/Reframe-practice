(ns com.github.katievogel.reframe-practice.state
  (:require [reagent.core :as r]))

(def initial-state
  {:active-tab :hello-react
   :para-count 2})
;:para-tab "Lorem Ipsum"
;:para-num 2
;:login-tab "Login Form"
;:login-un nil
;:login-pw nil
;:fun-tab "Fun People"
;:fun-name nil
;:fun-reason nil

(defonce app-db (r/atom initial-state))