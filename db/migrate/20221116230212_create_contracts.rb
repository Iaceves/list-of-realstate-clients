class CreateContracts < ActiveRecord::Migration[6.1]
  def change
    create_table :contracts do |t|
      t.integer :seller_id
      t.integer :agent_id
      t.integer :price

      t.timestamps
    end
  end
end
