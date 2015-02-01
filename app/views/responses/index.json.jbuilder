json.array!(@responses) do |response|
  json.extract! response, :id, :name, :phone, :email, :guests, :note
  json.url response_url(response, format: :json)
end
