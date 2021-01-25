Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do 
      resource :currencies, param: :slug
      resource :reviews, only [:create, :destroy]
    end
  end

  get '*path', to: 'pages#index', via: :all
  # This will allow to use react router whitout interfering whit rails route
end
