class AddFieldnameToTablename < ActiveRecord::Migration
  def change
    add_column :responses, :activity, :string
  end
end
