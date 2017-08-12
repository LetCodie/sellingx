Rails.application.routes.draw do
  root 'home#index'

  resources :listings, only: [:show]
  resources :products, only: [:show] do
    get 'search', on: :collection
  end
end
