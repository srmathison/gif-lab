require 'sinatra'
require "base64"

get '/' do 
  "hello world"
end

post '/gif' do

  params[:data].each_with_index do |d, i|
    File.open("images/test#{i}.png", "wb") do |f|
      d = d['data:image/png;base64,'.length .. -1]
      f.write Base64.decode64(d)
    end
  end


  `convert -delay 25 -loop 0 -gravity north images/test?.png images/test??.png  public/animation.gif`
  `rm images/*`

  "http://localhost:9292/animation.gif"

end