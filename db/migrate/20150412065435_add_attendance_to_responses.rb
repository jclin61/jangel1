class AddAttendanceToResponses < ActiveRecord::Migration
  def change
    add_column :responses, :attendance, :string
  end
end
