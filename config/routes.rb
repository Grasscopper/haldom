Rails.application.routes.draw do
  devise_for :users
  root to: "homes#index"
  get '/communities', to: 'homes#index'
  get '/communities/:id', to: 'homes#index'
  namespace :api do
    resources :communities, only: [:index, :show, :create, :destroy, :update]
    resources :topics, only: [:create, :destroy]
  end
end
