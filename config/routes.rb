Rails.application.routes.draw do
  devise_for :users
  root to: "homes#index"
  get '/games', to: 'communities#index'
  namespace :api do
    resources :communities, only: [:index, :create, :destroy]
  end
end
