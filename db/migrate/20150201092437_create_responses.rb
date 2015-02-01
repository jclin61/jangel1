class CreateResponses < ActiveRecord::Migration
  def change
    create_table :responses do |t|
      t.string :name
      t.string :phone
      t.string :email
      t.integer :guests
      t.text :note

      t.timestamps
    end
  end
end
