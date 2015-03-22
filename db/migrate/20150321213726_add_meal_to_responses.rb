class AddMealToResponses < ActiveRecord::Migration
  def change
    add_column :responses, :meal, :string
  end
end
