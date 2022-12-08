Rails.application.routes.draw do
  
  resources :agency, expect: [:new]
  resources :user, except: [:new]
  resources :sellers, except: [:new]
  resources :agents, except: [:new]
  resources :contracts, except: [:new]
  
  post "/session", to: "users#session"
  

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
