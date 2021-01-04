Rails.application.routes.draw do
  resources :songs
  resources :users
  resources :songylibs 
  
  # get 'saved_songs/index'
  # get 'saved_songs/show'
  # get 'saved_songs/create'
  # get 'saved_songs/new'
  # get 'songy_libs/index'
  # get 'songy_libs/show'
  # get 'songs/index'
  # get 'songs/show'
  # get 'user/index'
  # get 'user/show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
