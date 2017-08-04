Rails.application.routes.draw do
  root 'home#index'

  resources :listings, only: [:show]
end
