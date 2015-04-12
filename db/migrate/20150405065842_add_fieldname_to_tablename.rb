class AddFieldnameToTablename < ActiveRecord::Migration
  def change
    add_column :responses, :field, :string
  end
end
