class GalleriesController < ApplicationController
  def showcase

  	begin
	  client = Picasa::Client.new(:user_id => "someemail", :password => "whatever11")
  	
	  albums = client.album.list.entries
	  album = albums.find { |album| album.title == "jangel_photo_test" }

	  @photos = client.album.show(album.id).entries

	  @albums = client.album.list.entries

	  @photolinks = client.album.show(album.id).entries

	rescue Picasa::ForbiddenError
	  puts "You have the wrong user_id or password."
	end



  end
end
