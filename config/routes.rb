Rails.application.routes.draw do
  root 'welcome#index'
  get 'signup' => 'users#new'
  resources :users

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  delete '/logout' => 'sessions#destroy'

  get '/jobs' => 'jobs#new'
  resources :jobs

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
