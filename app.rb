require 'sinatra'
require "base64"

get '/' do 
  "hello world"
end

post '/gif' do

  params[:data].each_with_index do |d, i|
    File.open("test#{i}.png", "wb") do |f|
      d = d['data:image/png;base64,'.length .. -1]
      f.write Base64.decode64(d)
    end
  end

  "YAY"

end