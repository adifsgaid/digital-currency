Rails.application.routes.draw do
  root 'pages#index'

  resources :currencies, only: %i[index show]
  # devise_for :users
end
