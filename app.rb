require 'rubygems'

require 'sinatra'
require 'haml'

get '/' do
    haml :form
end

get '/results' do
    haml :results
end
