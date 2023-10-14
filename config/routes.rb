Rails.application.routes.draw do
  root "images#index"
  get "up" => "rails/health#show", as: :rails_health_check
end
