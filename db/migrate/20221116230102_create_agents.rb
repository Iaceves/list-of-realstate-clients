class CreateAgents < ActiveRecord::Migration[6.1]
  def change
    create_table :agents do |t|
      t.string :name
      t.string :company
      t.string :license_number

      t.timestamps
    end
  end
end
