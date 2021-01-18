class CreateCurrencies < ActiveRecord::Migration[6.1]
  def change
    create_table :currencies do |t|
      t.string :name
      t.string :img_url
      t.text :description
      t.integer :diagram
      t.string :slug
      
      t.timestamps
    end
  end
end
