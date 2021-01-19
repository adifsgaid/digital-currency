Rails.application.routes.draw do
  resources :currencies
  devise_for :users
  root to: 'application#index'
end
