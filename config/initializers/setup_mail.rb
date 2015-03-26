ActionMailer::Base.smtp_settings = {

  address:              'smtp.gmail.com',
  port:                 587,
  domain:               'gmail.com',
  user_name:            'ENV['GMAIL_ID']',
  password:             'ENV['GMAIL_PASSWORD']',
  authentication:       'plain',
  enable_starttls_auto: true 
}

#see more at http://guides.rubyonrails.org/action_mailer_basics.html