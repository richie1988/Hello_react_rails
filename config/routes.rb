Rails.application.routes.draw do
  get 'generator/index'
  get 'greetingmessages/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  root 'generator#index'

  get '*path', to: 'generator#index', constraints: ->(req) { !req.xhr? && req.format.html? }

  namespace :api do
    namespace :v1 do
      resources :messages, only: [:index]
    end
  end
  
end
