class AddShoesizeToResponses < ActiveRecord::Migration
  def change
    add_column :responses, :shoesize, :string
  end
end
