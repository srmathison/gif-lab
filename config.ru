require 'rack/cors'
require './app'

run Sinatra::Application

use Rack::Cors do

  allow do
    origins '*'
    resource '/*', :headers => :any, :methods => [:get, :post]
  end
end