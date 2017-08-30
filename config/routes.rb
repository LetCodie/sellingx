Rails.application.routes.draw do
  devise_for :users
  root 'home#index'

  get 'accounts/login', to: 'accounts#login'
  get 'accounts/register', to: 'accounts#register'

  resources :listings, only: [:show]
  resources :products, only: [:show] do
    get 'search', on: :collection
  end
end
