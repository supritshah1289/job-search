Rails.application.routes.draw do
  get 'skills/index'

  root 'welcome#index'
  get 'signup' => 'users#new'
  resources :users

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  delete '/logout' => 'sessions#destroy'

  get '/jobs' => 'jobs#new'
  get '/skills' => 'skills#index' #returns index page with form to add new skills
  post '/skills' => 'skills#create'
  # resources :skills
  # resources :jobs

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
