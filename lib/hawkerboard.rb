require 'sinatra/base'
require 'mongoid'
require_relative 'item'
require_relative 'user'

class Hawkerboard < Sinatra::Base

  #this class is a controller
  #this is the app too! - because it is inheriting from Sinatra::Base

  set :views, File.join(File.dirname(__FILE__), '../views')
  set :public_folder, File.join(File.dirname(__FILE__), '../public')
  use Rack::Session::Cookie, {:http_only => false}

  Mongoid.load!(File.join(File.dirname(__FILE__),'mongoid.yml'))

  get '/' do
    erb :index
  end

  get '/items' do
    content_type :json
    Item.all.to_json
  end

  # for allowing a user to sign up
  post '/users' do
    User.create(JSON.parse(request.body.read.to_s))
  end

  post '/login' do #why json?
    content_type :json

    user = User.first({:conditions=>{:username=>params['username']}})

    if user.nil?
      {logged_in: false}.to_json

    elsif user.password == params['password']
      session[:user] = user._id
      {logged_in: true}.to_json

    else
      {logged_in: false}.to_json
    end
  end

  get '/logout' do
    session[:user] = nil
  end

  # for adding a new item
  post '/items' do
    data = JSON.parse(request.body.read.to_s)
    data['tags'] = data['tags'].split(',')
    Item.create(data)
    #so how do we redirect to a confirmation page but within the backbone app...!? (Matt)
  end


  # start the server if ruby file executed directly
  run! if app_file == $0
  # really not sure what this is for (Matt)

end