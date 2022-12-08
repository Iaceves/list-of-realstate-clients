class CreateAgencies < ActiveRecord::Migration[6.1]
  def change
    create_table :agencies do |t|
      t.string :company_name
      t.string :address

      t.timestamps
    end
  end
end
