Jangel1::Application.routes.draw do
  get "galleries/showcase"
  resources :responses

  resources :rsvps

  #====
  # Enable the following on public release
  #====

  # get "blog/index"
  # get "home/index"
  # get "home/story"
  # get "home/blog"
  # get "home/savethedate"

  # The following is to direct short menu name to actual web address such as "home/index"
  match "home0702",
  :to => "home#index",
  :via => :get

  match "savethedate",
  :to => "home#savethedate",
  :via => :get

  match "story0702",
  :to => "home#story",
  :via => :get
  
  match "blog0702",
  :to => "home#blog",
  :via => :get

  match "rsvp_us",
  :to => "responses#new",
  :via => :get

  match "gallery0702",
  :to => "galleries#showcase",
  :via => :get

  # ==== 
  # Following to prevent user to expose pages in construction
  # ====

  match "index",
  :to => "home#comingsoon",
  :via => :get

  match "home",
  :to => "home#comingsoon",
  :via => :get

  resources :home

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'home#comingsoon'


  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
