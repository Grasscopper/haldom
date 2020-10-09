Rails.application.routes.draw do
  devise_for :users
  root to: "homes#index"
  namespace :api do
    resources :communities, only: [:index, :create, :destroy]
  end
end
