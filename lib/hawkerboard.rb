require 'sinatra/base'
require 'mongoid'
require 'stripe'
require_relative 'item'

class Hawkerboard < Sinatra::Base

  #this class is a controller
  #this is the app too! - because it is inheriting from Sinatra::Base

  #from the Strip Tutorial (part1)
  set :publishable_key, 'pk_test_VXWpWC81B0aNirU54T9XzUEH'
  set :secret_key, "sk_test_FfmJ08mn4ciYHkwNKYOz0J2z"
  Stripe.api_key = settings.secret_key


  set :views, File.join(File.dirname(__FILE__), '../views')
  set :public_folder, File.join(File.dirname(__FILE__), '../public')
  # enable :sessions
  Mongoid.load!(File.join(File.dirname(__FILE__),'mongoid.yml'))


  #RUBY STUFF BELOW HERE

  get '/' do
    erb :index
  end

  #from the Stripe Tutorial (part2)



  post '/charge' do
  @amount = 500

  customer = Stripe::Customer.create(
    :email => 'customer@example.com',
    :card  => params[:stripeToken]
  )

  charge = Stripe::Charge.create(
    :amount      => @amount,
    :description => 'Sinatra Charge',
    :currency    => 'gbp',
    :customer    => customer
  )

  erb :charge
end


error Stripe::CardError do
    env['sinatra.error'].message
end


  get '/items' do
    content_type :json
    Item.all.to_json
  end

  # for allowing a user to sign up
  post 'sign_up' do
    user = User.create!(:username =>params['username'], :password => params['password'])
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

