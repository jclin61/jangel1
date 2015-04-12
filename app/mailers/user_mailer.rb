class UserMailer < ActionMailer::Base
  default from: "Jerry & Angel <info@thejangel.com>"

  def rsvp_email(response)
  	@response = response
  	@url = "http://www.thejangel.com/rsvp_us"
  	# delivery_options = { user_name: info@jangel.com,
  	# 					 password: Fuckyou0623,
  	# 					 address: server136.web-hosting.com }

  	# email_with_name = %("#{response.name}" <#{@response.email}>)
  	# mail(to: email_with_name, subject: "You are confirmed for Jerry & Angel's Wedding")
  	mail(to: @response.email, subject: "You are confirmed for Jerry & Angel's Wedding")
  end
end
