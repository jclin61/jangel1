class Response < ActiveRecord::Base

	EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i

	# to validate form input
	validates  :attendance, presence: true
	validates  :name, presence: true, length: {in:2..30}
	validates  :phone, presence: true, length: {in:2..30}
	validates  :email, presence: true, format: { with: EMAIL_REGEX }
					  
end
