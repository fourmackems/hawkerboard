require 'sinatra/base'
require 'mongoid'

class Hawkerboard < Sinatra::Base

  #this class is a controller
  #this is the app too! - because it is inheriting from Sinatra::Base

  set :views, File.join(File.dirname(__FILE__), '../views')
  set :public_folder, File.join(File.dirname(__FILE__), '../public')
  # enable :sessions
  #Mongoid.load!(File.join(File.dirname(__FILE__),'mongoid.yml'))

  get '/' do
    erb :index
  end


  # for allowing a user to sign up
  post 'sign_up' do
    user = User.create!(:username =>params['username'], :password => params['password'])
    #so how do we redirect to the add a new item but within the backbone app...!? (Matt)
  end


  # for adding a new item
  post '/add_item' do
    Item.create(:item_name => params['item_name'], :item_price => params['item_price'], :item_description => params['item_description'], :item_tags => params['item_tags'])
    #so how do we redirect to a confirmation page but within the backbone app...!? (Matt)
  end




  # start the server if ruby file executed directly
  run! if app_file == $0
  # really not sure what this is for (Matt)

end