require 'sinatra'

get '/' do 
  "hello world"
end

post '/gif' do

  params.inspect

end